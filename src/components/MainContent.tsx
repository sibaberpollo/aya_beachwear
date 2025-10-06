import { mainHtml } from '@/data/main';

// Server Component - Contenido principal (slideshow, productos, banners)
// El HTML incluye mucho JavaScript inline y componentes complejos del tema original
export default function MainContent() {
  return (
    <div 
      dangerouslySetInnerHTML={{ __html: mainHtml }}
      suppressHydrationWarning
    />
  );
}
