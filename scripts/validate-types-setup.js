#!/usr/bin/env node

const fs = require('fs');
const path = require('path');

console.log('🔍 Validating TypeScript Declaration Files Generation Setup...\n');

// Check if dts-loader is installed
try {
  require.resolve('dts-loader');
  console.log('✅ dts-loader is installed');
} catch (error) {
  console.log('❌ dts-loader is not installed');
  process.exit(1);
}

// Check shared package configuration
const sharedPath = path.join(__dirname, '..', 'packages', 'shared');
const sharedPackageJson = path.join(sharedPath, 'package.json');

if (fs.existsSync(sharedPackageJson)) {
  const sharedPkg = JSON.parse(fs.readFileSync(sharedPackageJson, 'utf8'));

  if (sharedPkg.scripts && sharedPkg.scripts['types:generate']) {
    console.log('✅ Shared package has types:generate script');
  } else {
    console.log('❌ Shared package missing types:generate script');
  }

  if (sharedPkg.devDependencies && sharedPkg.devDependencies['dts-loader']) {
    console.log('✅ Shared package has dts-loader dependency');
  } else {
    console.log('❌ Shared package missing dts-loader dependency');
  }
}

// Check if .wp_federation directory exists
const wpFederationDir = path.join(sharedPath, '.wp_federation');
if (fs.existsSync(wpFederationDir)) {
  console.log('✅ .wp_federation directory exists');

  const sharedTypesDir = path.join(wpFederationDir, 'shared');
  if (fs.existsSync(sharedTypesDir)) {
    console.log('✅ Shared types directory exists');

    const componentsFile = path.join(sharedTypesDir, 'components.d.ts');
    if (fs.existsSync(componentsFile)) {
      console.log('✅ Components declaration file exists');
    } else {
      console.log('⚠️  Components declaration file not found - run types:generate');
    }
  } else {
    console.log('⚠️  Shared types directory not found - run types:generate');
  }
} else {
  console.log('⚠️  .wp_federation directory not found - run types:generate');
}

// Check main app configuration
const mainTsConfig = path.join(__dirname, '..', 'apps', 'main', 'tsconfig.json');
if (fs.existsSync(mainTsConfig)) {
  try {
    const tsconfig = JSON.parse(fs.readFileSync(mainTsConfig, 'utf8'));
    if (
      tsconfig.compilerOptions &&
      tsconfig.compilerOptions.paths &&
      tsconfig.compilerOptions.paths['shared/*']
    ) {
      console.log('✅ Main app has correct path mappings for shared types');
    } else {
      console.log('❌ Main app missing path mappings for shared types');
    }
  } catch (error) {
    console.log('❌ Error reading main app tsconfig.json');
  }
}

// Check webpack config
const webpackConfigPath = path.join(
  __dirname,
  '..',
  'packages',
  '@config',
  'webpack-config',
  'module-federation.ts'
);
if (fs.existsSync(webpackConfigPath)) {
  const webpackConfig = fs.readFileSync(webpackConfigPath, 'utf8');
  if (webpackConfig.includes('getDtsModuleConfig')) {
    console.log('✅ Webpack configuration includes dts-loader setup');
  } else {
    console.log('❌ Webpack configuration missing dts-loader setup');
  }
}

// Check turbo.json
const turboConfig = path.join(__dirname, '..', 'turbo.json');
if (fs.existsSync(turboConfig)) {
  try {
    const turbo = JSON.parse(fs.readFileSync(turboConfig, 'utf8'));
    if (turbo.tasks && turbo.tasks['types:generate']) {
      console.log('✅ Turbo configuration includes types:generate task');
    } else {
      console.log('⚠️  Turbo configuration missing types:generate task');
    }

    if (turbo.tasks && turbo.tasks.build && turbo.tasks.build.outputs) {
      const hasTypeOutputs = turbo.tasks.build.outputs.some(
        (output) => output.includes('.wp_federation') || output.includes('types')
      );
      if (hasTypeOutputs) {
        console.log('✅ Turbo build task includes type outputs');
      } else {
        console.log('⚠️  Turbo build task missing type outputs');
      }
    }
  } catch (error) {
    console.log('❌ Error reading turbo.json');
  }
}

console.log('\n🎯 Setup Summary:');
console.log('- TypeScript declaration files are generated using dts-loader');
console.log('- Types are output to .wp_federation directories');
console.log('- Path mappings in tsconfig.json enable imports');
console.log('- Build process includes type generation');

console.log('\n💡 Usage:');
console.log('  bun run types:generate    # Generate types for all packages');
console.log('  bun run types:build       # Clean and regenerate all types');
console.log('  bun run build             # Build with automatic type generation');

console.log('\n📚 For more information, see: TYPESCRIPT_TYPES_GENERATION.md');
