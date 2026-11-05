import type { Metadata } from 'next';
import { LegalShell, T } from '@/components/Legal';

export const metadata: Metadata = { title: 'Política de cookies | OptiBusiness' };

export default function Cookies() {
  return (
    <LegalShell titulo="Política de cookies" fecha="Última actualización: 5 de noviembre de 2026">
      <h2>1. Qué son</h2>
      <p>
        Las cookies son pequeños archivos que un sitio guarda en tu dispositivo. Según el artículo 22.2 de la LSSI-CE, para las que no son
        estrictamente necesarias necesito tu consentimiento antes de usarlas.
      </p>

      <h2>2. Qué cookies usa esta web</h2>
      <p>Esta web no usa cookies de analítica, publicidad ni de terceros. Solo guarda en tu navegador lo siguiente, que es necesario:</p>
      <div className="overflow-x-auto">
        <table>
          <thead>
            <tr><th>Nombre</th><th>Tipo</th><th>Para qué</th><th>Duración</th><th>Necesaria</th></tr>
          </thead>
          <tbody>
            <tr>
              <td>ob-aviso-cookies</td>
              <td>Técnica (almacenamiento local del navegador)</td>
              <td>Recordar que has visto el aviso de cookies</td>
              <td>Hasta que borres los datos del navegador</td>
              <td>Sí</td>
            </tr>
          </tbody>
        </table>
      </div>
      <p>Las cookies técnicas (necesarias) no requieren consentimiento. Las analíticas o de terceros solo se activarían si las aceptas.</p>

      <h2>3. Servicios de terceros</h2>
      <p>
        Los botones de WhatsApp y la demo de voz te llevan a servicios externos. Al entrar en ellos, esos servicios pueden usar sus propias
        cookies. Consulta sus políticas.
      </p>

      <h2>4. Cómo cambiar o retirar tu elección</h2>
      <ul>
        <li>Desde el enlace "Configurar cookies" del pie de la página.</li>
        <li>Desde la configuración de tu navegador (puedes bloquear o borrar cookies).</li>
      </ul>

      <h2>5. Contacto</h2>
      <p>
        <T>Para dudas sobre cookies: [pendiente: email de contacto].</T>
      </p>
    </LegalShell>
  );
}
