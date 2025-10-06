import { readFileSync } from 'fs';
import { join } from 'path';

// Leer el HTML en tiempo de compilación (build time)
export const mainHtml = readFileSync(
  join(process.cwd(), 'src', 'data', 'main.html'),
  'utf-8'
);

