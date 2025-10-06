import { readFileSync } from 'fs';
import { join } from 'path';

// Leer el HTML en tiempo de compilación (build time)
export const footerHtml = readFileSync(
  join(process.cwd(), 'src', 'data', 'footer.html'),
  'utf-8'
);

