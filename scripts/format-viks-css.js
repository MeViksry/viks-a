import { readFileSync, writeFileSync } from 'fs';
import { resolve } from 'path';

const cssFile = resolve(process.cwd(), 'dist/css/viks.css');

try {
  let css = readFileSync(cssFile, 'utf-8');
  css = css.replace(/,(?![^(]*\))/g, ',\n');
  css = css.replace(/\s*\{\s*/g, ' {\n  ');
  css = css.replace(/\s*\}\s*/g, '\n}\n\n');
  css = css.replace(/;\s*/g, ';\n  ');
  css = css.replace(/\s+\n\}/g, '\n}');
  css = css.replace(/\n{3,}/g, '\n\n');
  const lines = css.split('\n');
  let indentLevel = 0;
  const formatted = lines.map(line => {
    const trimmed = line.trim();
    
    if (!trimmed) return '';
    if (trimmed === '}') {
      indentLevel = Math.max(0, indentLevel - 1);
    }
    
    const indent = '  '.repeat(indentLevel);
    const result = indent + trimmed;
    
    if (trimmed.endsWith('{')) {
      indentLevel++;
    }
    
    return result;
  }).join('\n');
  
  let final = formatted
    .replace(/\n{3,}/g, '\n\n')
    .replace(/^[\s\n]+/, '')
    .trim() + '\n';
  
  writeFileSync(cssFile, final, 'utf-8');
  console.log('viks.css formatted successfully!');
} catch (error) {
  console.error('error formatting CSS:', error.message);
  process.exit(1);
}