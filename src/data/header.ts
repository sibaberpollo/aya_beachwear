import { readFileSync } from 'fs';
import { join } from 'path';

// Leer el HTML en tiempo de compilación (build time)
export const headerHtml = readFileSync(
  join(process.cwd(), 'src', 'data', 'header.html'),
  'utf-8'
);

