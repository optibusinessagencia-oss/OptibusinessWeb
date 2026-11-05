import Header from '@/components/Header';
import Footer from '@/components/Footer';
import WhatsAppMockup from '@/components/WhatsAppMockup';
import VoiceMockup from '@/components/VoiceMockup';
import {
  COMO, CTA_FINAL, DEMO, FAQ, HERO, HERO_TITLE, PROBLEMA, PRUEBA, QUIEN, SERVICIOS, SITE, WHATSAPP, wa,
} from '@/content';

const ext = { target: '_blank', rel: 'noopener' } as const;

const Check = () => (
  <svg width="22" height="22" viewBox="0 0 22 22" fill="none" className="mt-1 shrink-0" aria-hidden="true">
    <circle cx="11" cy="11" r="11" fill="#2DD4BF" fillOpacity=".16" />
    <path d="M6.5 11.5l3 3 6-6.5" stroke="#2DD4BF" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);

const Section = ({ id, className = '', children }: { id?: string; className?: string; children: React.ReactNode }) => (
  <section id={id} className={`px-5 py-20 md:py-28 ${className}`}>
    <div className="mx-auto max-w-6xl">{children}</div>
  </section>
);

const H2 = ({ children }: { children: React.ReactNode }) => (
  <h2 className="text-[2rem] font-extrabold sm:text-5xl">{children}</h2>
);

export default function Home() {
  return (
    <>
      <Header />
      <main id="contenido">
        {/* HERO */}
        <section className="relative overflow-hidden px-5 pb-20 pt-12 md:pb-28 md:pt-20">
          <div aria-hidden="true" className="pointer-events-none absolute -right-40 top-0 h-[34rem] w-[34rem] rounded-full bg-turquesa/[0.07] blur-3xl" />
          <div className="relative mx-auto grid max-w-6xl items-start gap-14 lg:grid-cols-[1.05fr_0.95fr] lg:gap-16">
            <div>
              <p className="inline-flex items-center gap-2 rounded-full border border-linea px-3.5 py-1.5 text-sm text-tenue">
                <span className="h-2 w-2 rounded-full bg-turquesa" aria-hidden="true" />
                {HERO.etiqueta}
              </p>
              <h1 className="mt-6 text-[2.6rem] font-extrabold leading-[1.02] sm:text-5xl lg:text-[3.5rem]">{HERO_TITLE}</h1>
              <p className="mt-6 max-w-xl text-lg text-tenue sm:text-xl">{HERO.subtitulo}</p>
              <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                <a href="#demo" className="btn btn-secundario">{HERO.ctaDemo}</a>
                <a href={wa.hero_prueba} {...ext} className="btn btn-primario">{HERO.ctaPrueba}</a>
              </div>
              <ul className="mt-8 flex flex-wrap gap-2">
                {HERO.pills.map((p) => (
                  <li key={p} className="rounded-full bg-superficie px-3.5 py-1.5 text-sm text-texto ring-1 ring-linea">{p}</li>
                ))}
              </ul>
              <p className="mt-5 text-sm text-tenue">{HERO.nota}</p>
            </div>

            <div className="mx-auto flex w-full max-w-md flex-col gap-10 lg:max-w-none">
              <WhatsAppMockup />
              <VoiceMockup />
            </div>
          </div>
        </section>

        {/* PROBLEMA */}
        <Section id="problema" className="bg-superficie">
          <div className="grid gap-12 lg:grid-cols-[1.1fr_0.9fr] lg:gap-20">
            <div>
              <H2>{PROBLEMA.titulo}</H2>
              <p className="mt-6 max-w-xl text-xl leading-relaxed text-texto/90">{PROBLEMA.escena}</p>
            </div>
            <ul className="space-y-6 lg:pt-3">
              {PROBLEMA.cards.map((c) => (
                <li key={c.t} className="border-l-2 border-turquesa pl-5">
                  <h3 className="text-xl font-bold">{c.t}</h3>
                  <p className="mt-1 text-tenue">{c.x}</p>
                </li>
              ))}
            </ul>
          </div>
          <div className="mt-14 max-w-3xl">
            <p className="font-titulo text-2xl font-bold sm:text-3xl">{PROBLEMA.pregunta}</p>
            <p className="mt-4 text-lg text-tenue">{PROBLEMA.cierre}</p>
            <a href={wa.problema} {...ext} className="btn btn-primario mt-8">{PROBLEMA.cta}</a>
          </div>
        </Section>

        {/* SERVICIOS */}
        <Section id="servicios">
          <H2>{SERVICIOS.titulo}</H2>
          <div className="mt-12 grid gap-6 md:grid-cols-2">
            {[SERVICIOS.voz, SERVICIOS.wa].map((s, i) => (
              <article key={s.n} className="flex flex-col rounded-3xl border border-linea bg-superficie p-7 sm:p-9">
                <span className="font-titulo text-6xl font-extrabold text-turquesa/30" aria-hidden="true">{s.n}</span>
                <h3 className="mt-4 text-2xl font-bold">{s.t}</h3>
                <p className="mt-3 flex-1 text-tenue">{s.x}</p>
                {i === 0 ? (
                  <a href="#demo" className="btn btn-secundario mt-8 self-start">{s.cta}</a>
                ) : (
                  <a href={wa.whatsapp_servicio} {...ext} className="btn btn-secundario mt-8 self-start">{s.cta}</a>
                )}
              </article>
            ))}
          </div>
          <p className="mt-8 max-w-2xl text-tenue">{SERVICIOS.nota}</p>
        </Section>

        {/* COMO FUNCIONA */}
        <Section id="como-funciona" className="bg-superficie">
          <H2>{COMO.titulo}</H2>
          <ol className="mt-14 grid gap-12 md:grid-cols-3 md:gap-8">
            {COMO.pasos.map((p, i) => (
              <li key={p.t} className="relative md:pr-4">
                <div className="flex items-center gap-4">
                  <span className="grid h-12 w-12 shrink-0 place-items-center rounded-full bg-turquesa font-titulo text-xl font-extrabold text-fondo">{i + 1}</span>
                  {i < 2 && <span aria-hidden="true" className="hidden h-px flex-1 bg-linea md:block" />}
                </div>
                <h3 className="mt-5 text-2xl font-bold">{p.t}</h3>
                <p className="mt-3 text-tenue">{p.x}</p>
              </li>
            ))}
          </ol>
          <p className="mt-12 max-w-2xl border-l-2 border-linea pl-5 text-tenue">{COMO.nota}</p>
          <a href={wa.como_funciona} {...ext} className="btn btn-primario mt-8">{COMO.cta}</a>
        </Section>

        {/* DEMO */}
        <Section id="demo">
          <div className="grid items-center gap-10 rounded-[2rem] border border-linea bg-superficie p-7 sm:p-12 lg:grid-cols-[1.2fr_0.8fr]">
            <div>
              <H2>{DEMO.titulo}</H2>
              <p className="mt-5 max-w-xl text-lg text-tenue">{DEMO.texto}</p>
              <a href={SITE.demoUrl} {...ext} className="btn btn-primario mt-8">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor" className="mr-2" aria-hidden="true">
                  <path d="M12 15a4 4 0 004-4V6a4 4 0 10-8 0v5a4 4 0 004 4zm6-4a6 6 0 01-12 0H4a8 8 0 007 7.9V22h2v-3.1A8 8 0 0020 11h-2z" />
                </svg>
                {DEMO.boton}
              </a>
              <p className="mt-5 max-w-xl text-sm text-tenue">{DEMO.aviso}</p>
              <a href={wa.demo} {...ext} className="btn-enlace mt-6">{DEMO.cta}</a>
            </div>
            <div aria-hidden="true" className="hidden items-center justify-center gap-[5px] lg:flex">
              {[30, 55, 80, 45, 100, 70, 40, 90, 60, 35, 75, 50].map((h, i) => (
                <span key={i} className="w-2 rounded-full bg-turquesa" style={{ height: `${h * 1.6}px`, opacity: 0.35 + (h / 100) * 0.65 }} />
              ))}
            </div>
          </div>
        </Section>

        {/* WHATSAPP */}
        <Section id="whatsapp" className="bg-superficie">
          <div className="grid gap-12 lg:grid-cols-[1.1fr_0.9fr] lg:gap-20">
            <div>
              <p className="text-tenue">{WHATSAPP.etiqueta}</p>
              <h2 className="mt-2 text-[2rem] font-extrabold sm:text-5xl">{WHATSAPP.titulo}</h2>
              <p className="mt-6 max-w-xl text-lg text-tenue">{WHATSAPP.texto}</p>
              <p className="mt-6 max-w-xl text-tenue">{WHATSAPP.nota}</p>
              <a href={wa.whatsapp_servicio} {...ext} className="btn btn-primario mt-8">{WHATSAPP.cta}</a>
            </div>
            <ul className="space-y-5 lg:pt-4">
              {WHATSAPP.puntos.map((p) => (
                <li key={p} className="flex gap-3 text-xl font-semibold"><Check />{p}</li>
              ))}
            </ul>
          </div>
        </Section>

        {/* PRUEBA */}
        <Section id="prueba">
          <H2>{PRUEBA.titulo}</H2>
          <p className="mt-5 max-w-2xl text-xl text-tenue">{PRUEBA.intro}</p>
          <div className="mt-12 grid gap-6 lg:grid-cols-[1.25fr_0.75fr]">
            <div className="rounded-3xl border border-turquesa/40 bg-superficie p-7 sm:p-9">
              <h3 className="text-2xl font-bold">{PRUEBA.incluyeTitulo}</h3>
              <ul className="mt-5 space-y-4">
                {PRUEBA.incluye.map((x) => (
                  <li key={x} className="flex gap-3"><Check />{x}</li>
                ))}
              </ul>
            </div>
            <div className="rounded-3xl border border-linea p-7 sm:p-9">
              <h3 className="text-2xl font-bold">{PRUEBA.noTitulo}</h3>
              <ul className="mt-5 space-y-4 text-tenue">
                {PRUEBA.no.map((x) => (
                  <li key={x} className="border-l-2 border-linea pl-4">{x}</li>
                ))}
              </ul>
            </div>
          </div>
          <div className="mt-10 flex flex-col gap-4 sm:flex-row sm:items-center">
            <a href={wa.prueba} {...ext} className="btn btn-primario self-start">{PRUEBA.cta}</a>
            <p className="text-sm text-tenue">{PRUEBA.nota}</p>
          </div>
        </Section>

        {/* QUIEN */}
        <Section id="quien" className="bg-superficie">
          <div className="grid gap-10 lg:grid-cols-[0.8fr_1.2fr] lg:gap-20">
            <H2>{QUIEN.titulo}</H2>
            <div className="max-w-2xl space-y-5 text-lg text-texto/90">
              {QUIEN.textos.map((t) => (
                <p key={t}>{t}</p>
              ))}
              <a href={wa.quien} {...ext} className="btn btn-primario !mt-8">{QUIEN.cta}</a>
            </div>
          </div>
        </Section>

        {/* FAQ */}
        <Section id="preguntas">
          <div className="mx-auto max-w-3xl">
            <H2>{FAQ.titulo}</H2>
            <div className="mt-10 divide-y divide-linea border-y border-linea">
              {FAQ.items.map((f) => (
                <details key={f.q} className="group py-1">
                  <summary className="flex items-center justify-between gap-4 py-4 text-lg font-bold">
                    <span>{f.q}</span>
                    <span className="mas grid h-8 w-8 shrink-0 place-items-center rounded-full ring-1 ring-linea transition-transform" aria-hidden="true">
                      <svg width="14" height="14" viewBox="0 0 14 14" stroke="#2DD4BF" strokeWidth="2" strokeLinecap="round"><path d="M7 1v12M1 7h12" /></svg>
                    </span>
                  </summary>
                  <div className="pb-5 pr-10 text-tenue">
                    <p>{f.a}</p>
                    {f.cta && f.href && (
                      <a href={f.href} {...ext} className="btn-enlace mt-4">{f.cta}</a>
                    )}
                  </div>
                </details>
              ))}
            </div>
            <p className="mt-10 text-lg">{FAQ.pie}</p>
            <a href={wa.faq} {...ext} className="btn btn-secundario mt-4">{FAQ.pieCta}</a>
          </div>
        </Section>

        {/* CTA FINAL */}
        <Section id="contacto" className="border-t border-linea bg-superficie">
          <div className="max-w-3xl">
            <h2 className="text-[2.2rem] font-extrabold leading-[1.05] sm:text-6xl">{CTA_FINAL.titulo}</h2>
            <p className="mt-6 text-xl text-tenue">{CTA_FINAL.texto}</p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <a href={wa.cta_final_prueba} {...ext} className="btn btn-primario">{CTA_FINAL.principal}</a>
              <a href={wa.cta_final_whatsapp} {...ext} className="btn btn-secundario">{CTA_FINAL.secundario}</a>
            </div>
            <a href="#demo" className="btn-enlace mt-6">{CTA_FINAL.demo}</a>
            <p className="mt-8 text-sm text-tenue">
              {CTA_FINAL.privacidad}{' '}
              <a href="/privacidad/" className="underline underline-offset-4 hover:text-texto">{CTA_FINAL.privacidadLink}</a>.
            </p>
          </div>
        </Section>
      </main>
      <Footer />
    </>
  );
}
