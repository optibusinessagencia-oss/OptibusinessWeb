import type { Metadata } from 'next';
import { LegalShell, T } from '@/components/Legal';

export const metadata: Metadata = { title: 'Aviso legal | OptiBusiness' };

export default function AvisoLegal() {
  return (
    <LegalShell titulo="Aviso legal" fecha="Última actualización: 5 de noviembre de 2026">
      <h2>1. Datos del titular</h2>
      <p>
        En cumplimiento del artículo 10 de la Ley 34/2002, de Servicios de la Sociedad de la Información y de Comercio Electrónico
        (LSSI-CE), te informo de que este sitio web, <T>[pendiente: dominio final]</T>, es titularidad de:
      </p>
      <ul>
        <li><T>Titular: [pendiente: nombre y apellidos del titular]</T></li>
        <li><T>NIF: [pendiente: NIF]</T></li>
        <li><T>Domicilio: [pendiente: domicilio completo]</T></li>
        <li><T>Correo electrónico: [pendiente: email de contacto]</T></li>
        <li>Teléfono y WhatsApp: +34 621 34 64 72</li>
        <li>Nombre comercial: OptiBusiness</li>
        <li><T>Inscripción en registros públicos: [pendiente: indicar si procede; si es autónomo sin inscripción mercantil, se elimina esta línea]</T></li>
        <li><T>Alta como autónomo: [pendiente: confirmar si está dado de alta como autónomo y desde cuándo]</T></li>
      </ul>

      <h2>2. Objeto</h2>
      <p>
        Este sitio presenta los servicios de OptiBusiness: una recepcionista virtual para llamadas y un agente de WhatsApp para clínicas
        estéticas y dentales en España. Navegar por él implica aceptar este aviso legal.
      </p>

      <h2>3. Condiciones de uso</h2>
      <p>
        Te comprometes a usar el sitio de forma lícita y a no hacer nada que dañe su funcionamiento o a otros usuarios. La demo de voz es
        solo una prueba: no reserva citas reales ni da precios ni consejos médicos.
      </p>

      <h2>4. Propiedad intelectual</h2>
      <p>
        Los textos, diseños, logotipos y demás contenidos de este sitio son del titular o se usan con permiso. No puedes copiarlos,
        distribuirlos ni modificarlos sin autorización por escrito, salvo lo que permita la ley.
      </p>

      <h2>5. Responsabilidad</h2>
      <p>
        Me esfuerzo por que la información sea correcta y esté al día, pero no garantizo que no haya errores ni que el sitio esté siempre
        disponible. La información de la web es orientativa y no constituye una oferta vinculante: las condiciones del servicio se acuerdan
        por escrito con cada clínica. No me hago responsable de los contenidos de enlaces a sitios de terceros.
      </p>

      <h2>6. Enlaces</h2>
      <p>Los enlaces a WhatsApp y a la demo de voz te llevan a servicios de terceros, con sus propias condiciones y políticas de privacidad.</p>

      <h2>7. Legislación y jurisdicción</h2>
      <p>
        <T>Este aviso se rige por la ley española. Para cualquier conflicto, y siempre que la ley no disponga otra cosa, las partes se someten a los juzgados y tribunales de [pendiente: ciudad; si el usuario es consumidor, aplicará su domicilio].</T>
      </p>
    </LegalShell>
  );
}
