// scripts/generateStructure.js
// Gera a estrutura de pastas/ficheiros a partir de folderStructure.json

const fs = require('fs');
const path = require('path');

const BASE_PATH = path.join(__dirname, '../src/pages'); // src/pages/
const STRUCTURE_FILE = path.join(__dirname, 'folderStructure.json');

function toComponentName(filename) {
  return filename.replace(/\.tsx$/, '');
}

function getDomainName(parts) {
  // Ex: ["pages", "DigitalChannels", "MobileBanking"] => "MobileBanking"
  return parts[parts.length - 1] || '';
}

function createBoilerplate(filename, domain) {
  const name = toComponentName(filename);
  return `import * as React from "react";
export const ${name}: React.FC = () => {
  return (
    <React.Suspense fallback={<div>Loading ${name}...</div>}>
      <h1>${name} from ${domain}</h1>
    </React.Suspense>
  );
};
export default ${name};
`;
}

function walk(obj, currentPath = [], parentDomain = '') {
  Object.entries(obj).forEach(([key, value]) => {
    const newPath = [...currentPath, key];
    const fsPath = path.join(BASE_PATH, ...newPath);
    if (key.endsWith('.tsx')) {
      // Criar ficheiro com boilerplate
      const domain = parentDomain || getDomainName(currentPath);
      if (!fs.existsSync(fsPath)) {
        fs.writeFileSync(fsPath, createBoilerplate(key, domain));
        console.log('Created file:', fsPath);
      }
    } else if (key === 'index.ts') {
      // Index será preenchido depois
      if (!fs.existsSync(fsPath)) {
        fs.writeFileSync(fsPath, '// ...exports will be added automatically\n');
        console.log('Created index:', fsPath);
      }
    } else {
      // Pasta
      if (!fs.existsSync(fsPath)) {
        fs.mkdirSync(fsPath, { recursive: true });
        console.log('Created folder:', fsPath);
      }
      walk(value, newPath, key);
    }
  });
}

function fillIndexes(obj, currentPath = []) {
  Object.entries(obj).forEach(([key, value]) => {
    const newPath = [...currentPath, key];
    if (typeof value === 'object' && value !== null) {
      // Se tem ficheiros .tsx, gera exports
      const tsxFiles = Object.keys(value).filter((f) => f.endsWith('.tsx'));
      if (tsxFiles.length > 0 && value['index.ts']) {
        const indexPath = path.join(BASE_PATH, ...newPath, 'index.ts');
        const exports = tsxFiles
          .map((f) => `export { default as ${toComponentName(f)} } from './${toComponentName(f)}';`)
          .join('\n');
        fs.writeFileSync(indexPath, exports + '\n');
        console.log('Updated index:', indexPath);
      }
      // Recursivo
      fillIndexes(value, newPath);
    }
  });
}

function main() {
  // Criar o diretório base se não existir
  if (!fs.existsSync(BASE_PATH)) {
    fs.mkdirSync(BASE_PATH, { recursive: true });
    console.log('Created base directory:', BASE_PATH);
  }

  if (!fs.existsSync(STRUCTURE_FILE)) {
    console.error('folderStructure.json not found:', STRUCTURE_FILE);
    process.exit(1);
  }
  const structure = JSON.parse(fs.readFileSync(STRUCTURE_FILE, 'utf-8'));
  // Se a raiz do JSON tem a chave 'pages', começa a partir daí
  const root = structure.pages ? structure.pages : structure;
  walk(root);
  fillIndexes(root);
  console.log('Estrutura criada com sucesso!');
}

main();
