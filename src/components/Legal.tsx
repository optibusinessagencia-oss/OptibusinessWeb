import Header from './Header';
import Footer from './Footer';

// Resalta las marcas [pendiente: ...] de los borradores legales.
export function T({ children }: { children: string }) {
  const parts = children.split(/(\[pendiente[^\]]*\])/g);
  return (
    <>
      {parts.map((p, i) =>
        p.startsWith('[pendiente') ? (
          <span key={i} className="pendiente">{p}</span>
        ) : (
          <span key={i}>{p}</span>
        ),
      )}
    </>
  );
}

export function LegalShell({ titulo, fecha, children }: { titulo: string; fecha: string; children: React.ReactNode }) {
  return (
    <>
      <Header />
      <main id="contenido" className="px-5 py-14 md:py-20">
        <article className="legal mx-auto max-w-3xl">
          <h1 className="text-4xl font-extrabold sm:text-5xl">{titulo}</h1>
          <p className="mt-3 text-tenue">{fecha}</p>
          <p className="mt-6 rounded-xl border border-linea bg-superficie p-4 text-sm !text-tenue">
            <T>Borrador: [pendiente: revisión por un asesor antes de publicar]</T>
          </p>
          {children}
        </article>
      </main>
      <Footer />
    </>
  );
}
