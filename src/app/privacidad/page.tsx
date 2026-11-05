import type { Metadata } from 'next';
import { LegalShell, T } from '@/components/Legal';

export const metadata: Metadata = {
  title: 'Política de privacidad | OptiBusiness',
  description: 'Qué datos trato cuando me escribes, para qué los uso y qué derechos tienes.',
  robots: 'noindex',
};

export default function Privacidad() {
  return (
    <LegalShell titulo="Política de privacidad" fecha="Última actualización: 5 de noviembre de 2026">
      <h2>1. Quién es el responsable</h2>
      <ul>
        <li><T>Responsable: [pendiente: nombre y apellidos del titular], NIF [pendiente: NIF]</T></li>
        <li><T>Domicilio: [pendiente: domicilio completo]</T></li>
        <li><T>Contacto para privacidad: [pendiente: email de contacto]</T></li>
        <li><T>Delegado de protección de datos: no he nombrado ninguno [pendiente: confirmar si procede].</T></li>
      </ul>

      <h2>2. Qué datos trato y para qué</h2>
      <div className="overflow-x-auto">
        <table>
          <thead>
            <tr><th>Situación</th><th>Datos</th><th>Para qué</th><th>Base legal (art. 6 RGPD)</th></tr>
          </thead>
          <tbody>
            <tr>
              <td>Me escribes por WhatsApp</td>
              <td>Tu número de teléfono, tu nombre si lo das y el contenido de tus mensajes</td>
              <td>Responder a tu consulta y, si quieres, hablar de la prueba gratis o del servicio</td>
              <td>Tu consentimiento (6.1.a) y la aplicación de medidas precontractuales a petición tuya (6.1.b)</td>
            </tr>
            <tr>
              <td>Me escribes por email</td>
              <td>Tu email, nombre y mensaje</td>
              <td>Responder a tu consulta</td>
              <td>Tu consentimiento (6.1.a) y medidas precontractuales (6.1.b)</td>
            </tr>
            <tr>
              <td>Usas la demo de voz</td>
              <td><T>[pendiente: qué se trata (voz, texto de la conversación) y si se guarda; depende de la configuración de la demo]</T></td>
              <td>Que puedas probar la recepcionista</td>
              <td><T>[pendiente]</T></td>
            </tr>
            <tr>
              <td>Navegas por la web</td>
              <td>Datos técnicos mínimos (IP, navegador) en los registros del servidor de alojamiento</td>
              <td>Seguridad y funcionamiento del sitio</td>
              <td>Interés legítimo (6.1.f)</td>
            </tr>
          </tbody>
        </table>
      </div>
      <p>Esta web no tiene formularios ni crea cuentas. No tomo decisiones automatizadas sobre ti con estos datos.</p>

      <h2>3. Cuánto tiempo los conservo</h2>
      <ul>
        <li><T>Conversaciones de contacto: [pendiente: plazo, por ejemplo hasta resolver tu consulta y, si no hay relación comercial, borrado en un plazo concreto].</T></li>
        <li>Si empezamos a trabajar juntos, los datos se conservan durante la relación y después durante los plazos que exija la ley.</li>
      </ul>

      <h2>4. A quién se los comunico</h2>
      <p>No vendo tus datos. Pueden acceder a ellos proveedores que me prestan servicios técnicos, siempre bajo contrato:</p>
      <ul>
        <li>Servicio de mensajería WhatsApp (Meta Platforms Ireland Ltd.).</li>
        <li><T>Alojamiento del sitio web: [pendiente: proveedor].</T></li>
        <li><T>Demo de voz: [pendiente: proveedor o proveedores que intervienen].</T></li>
        <li><T>Transferencias internacionales: [pendiente: confirmar si algún proveedor trata datos fuera del Espacio Económico Europeo y con qué garantías].</T></li>
      </ul>

      <h2>5. Tus derechos</h2>
      <p>
        <T>Puedes pedirme acceso, rectificación, supresión, oposición, limitación del tratamiento y portabilidad de tus datos, y retirar tu consentimiento cuando quieras, escribiendo a [pendiente: email de contacto] o por WhatsApp al +34 621 34 64 72.</T>{' '}
        Si no te respondo bien, puedes reclamar ante la Agencia Española de Protección de Datos (
        <a href="https://www.aepd.es" target="_blank" rel="noopener">www.aepd.es</a>).
      </p>

      <h2>6. Si eres una clínica cliente</h2>
      <p>
        <T>Cuando una clínica contrata mis servicios, los datos de sus pacientes los trato como encargado del tratamiento, solo para lo que la clínica decide y bajo un contrato de encargado del tratamiento firmado antes de empezar. Eso se regula en ese contrato, no en esta página.</T>
      </p>

      <h2>7. Menores</h2>
      <p>Esta web es para profesionales y no está dirigida a menores.</p>

      <h2>8. Cambios</h2>
      <p>Si cambio esta política, actualizaré la fecha de arriba.</p>
    </LegalShell>
  );
}
