#!/usr/bin/env node
/* eslint-disable no-console */

/**
 * ESLint runner for all packages that continues even when individual packages fail
 */

const { execSync } = require('child_process');
const fs = require('fs');
const path = require('path');

// Get all workspace directories
const workspaces = [
  'apps/main',
  'apps/header',
  'apps/footer',
  'apps/assetsProducts',
  'apps/channelsAndServices',
  'apps/personalData',
  'apps/vision360',
  'packages/shared',
  'packages/@config/eslint-config',
  'e2e',
];

const results = [];
let hasErrors = false;

console.log('🔍 Running ESLint on all packages...\n');

for (const workspace of workspaces) {
  const workspacePath = path.join(process.cwd(), workspace);

  // Check if package.json exists
  const packageJsonPath = path.join(workspacePath, 'package.json');
  if (!fs.existsSync(packageJsonPath)) {
    console.log(`⏭️  Skipping ${workspace} (no package.json)`);
    continue;
  }

  // Check if lint script exists
  const packageJson = JSON.parse(fs.readFileSync(packageJsonPath, 'utf8'));
  if (!packageJson.scripts?.lint) {
    console.log(`⏭️  Skipping ${workspace} (no lint script)`);
    continue;
  }

  console.log(`🔍 Linting ${workspace}...`);

  try {
    const output = execSync('pnpm lint', {
      cwd: workspacePath,
      encoding: 'utf8',
      stdio: 'pipe',
    });

    console.log(`✅ ${workspace}: No issues found`);
    results.push({ workspace, status: 'success', output });
  } catch (error) {
    hasErrors = true;
    console.log(`❌ ${workspace}: Found issues`);
    console.log(error.stdout || error.message);
    results.push({ workspace, status: 'error', output: error.stdout || error.message });
  }

  console.log(''); // Empty line for readability
}

// Summary
console.log('\n📊 ESLint Summary:');
console.log('=================');

const successful = results.filter((r) => r.status === 'success');
const failed = results.filter((r) => r.status === 'error');

console.log(`✅ Successful: ${successful.length}`);
console.log(`❌ Failed: ${failed.length}`);

if (failed.length > 0) {
  console.log('\nFailed packages:');
  failed.forEach((result) => {
    console.log(`  - ${result.workspace}`);
  });
}

// Exit with error code if any package failed, but only after checking all
if (hasErrors) {
  console.log(
    '\n⚠️  Some packages have ESLint issues. Run individual lint:fix scripts to resolve them.'
  );
  process.exit(1);
} else {
  console.log('\n🎉 All packages passed ESLint checks!');
  process.exit(0);
}
