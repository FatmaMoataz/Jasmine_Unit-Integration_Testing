import { writeFileSync, readFileSync } from 'fs';

// Update package.json to ensure ESM
const packageJson = JSON.parse(readFileSync('package.json', 'utf8'));
packageJson.type = 'module';
writeFileSync('package.json', JSON.stringify(packageJson, null, 2));

console.log('Fixed ESM configuration!');
console.log('Now run: npm test');