import Link from 'next/link';
import { Car, CircleArrowRight, Clock } from 'lucide-react';
import { homeHero } from '@/config/home';
import { Button } from '@/components/ui/Button';
import { Container } from '@/components/ui/Container';
import { Heading } from '@/components/ui/Heading';
import { Section } from '@/components/ui/Section';

function SunMark() {
  return (
    <svg viewBox="0 0 24 24" className="size-3.5 shrink-0" aria-hidden="true">
      <path
        fill="currentColor"
        d="M12 7.2a4.8 4.8 0 1 0 0 9.6 4.8 4.8 0 0 0 0-9.6Zm0-5.2.7 3.4h-1.4L12 2Zm0 20 .7-3.4h-1.4L12 22ZM2 12l3.4.7v-1.4L2 12Zm20 0-3.4.7v-1.4L22 12ZM5.1 5.1l2.8 2.1-1 1-2.8-2.1 1-1Zm13.8 13.8-2.8-2.1 1-1 2.8 2.1-1 1ZM5.1 18.9l2.8-2.1 1 1-2.8 2.1-1-1Zm13.8-13.8-2.8 2.1-1-1 2.8-2.1 1 1Z"
      />
    </svg>
  );
}

const promoIcons = {
  clock: Clock,
  car: Car,
};

export function Hero() {
  return (
    <Section background="muted" spacing="none" className="pt-3 pb-16">
      <Container gap="sm" className="md:flex-row md:items-stretch">
        <div className="relative flex min-h-136 flex-1 flex-col justify-end overflow-hidden rounded-lg bg-surface-inverse bg-cover bg-center p-6">
          <div
            className="pointer-events-none absolute inset-0 bg-cover bg-center"
            style={{ backgroundImage: `url(${homeHero.image.src})` }}
            aria-hidden="true"
          />
          <div className="pointer-events-none absolute inset-0 bg-linear-to-b from-transparent from-41% to-surface-inverse" />

          <div className="relative flex flex-col gap-4">
            <Heading level={1} className="text-ink-inverse">
              {homeHero.headline}
            </Heading>

            <ul className="flex max-w-[74%] flex-wrap gap-3 max-md:max-w-full">
              {homeHero.stats.map((stat) => {
                const className =
                  'bg-surface-inverse text-ink-inverse hover:bg-accent-500 inline-flex items-center gap-2 rounded-full px-3 py-1 text-sm no-underline transition-transform duration-300 hover:-translate-y-1';
                const content = (
                  <>
                    <SunMark />
                    {stat.label}
                  </>
                );

                return (
                  <li key={stat.label}>
                    {stat.href.startsWith('/') ? (
                      <Link href={stat.href} className={className}>
                        {content}
                      </Link>
                    ) : (
                      <a
                        href={stat.href}
                        className={className}
                        rel={stat.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                        target={stat.href.startsWith('http') ? '_blank' : undefined}
                      >
                        {content}
                      </a>
                    )}
                  </li>
                );
              })}
            </ul>

            <p className="text-ink-inverse max-w-[56%] max-md:max-w-full">{homeHero.body}</p>

            <Button href={homeHero.cta.href} className="w-fit rounded-full uppercase">
              {homeHero.cta.label}
              <CircleArrowRight className="size-5" aria-hidden="true" />
            </Button>
          </div>
        </div>

        <div className="flex w-full flex-col gap-3 md:max-w-[38%]">
          <div className="flex flex-wrap justify-center gap-2.5 border-b border-dashed border-line-base pb-2">
            {homeHero.promos.map((promo) => {
              const Icon = promoIcons[promo.icon];

              return (
                <Link
                  key={promo.label}
                  href={promo.href}
                  className="bg-accent-500 text-ink-inverse inline-flex min-h-14 min-w-44 flex-1 items-center justify-center gap-2 rounded-xl px-3 py-2 no-underline"
                >
                  <Icon className="size-7 shrink-0" aria-hidden="true" />
                  <span className="text-start text-sm leading-tight font-semibold tracking-wide uppercase">
                    {promo.label}
                    <br />
                    {promo.detail}
                  </span>
                </Link>
              );
            })}
          </div>

          <form
            action="/contact"
            className="bg-surface-base flex flex-1 flex-col gap-4 rounded-lg p-5 shadow-sm"
          >
            <div>
              <h2 className="text-xl font-semibold tracking-tight">{homeHero.form.title}</h2>
              <p className="text-ink-muted mt-1">{homeHero.form.body}</p>
            </div>
            <label className="flex flex-col gap-1 text-sm">
              Name
              <input
                name="name"
                className="border-line-base bg-surface-base min-h-11 rounded-md border px-3"
                autoComplete="name"
              />
            </label>
            <label className="flex flex-col gap-1 text-sm">
              Phone
              <input
                name="phone"
                type="tel"
                className="border-line-base bg-surface-base min-h-11 rounded-md border px-3"
                autoComplete="tel"
              />
            </label>
            <label className="flex flex-col gap-1 text-sm">
              How can we help?
              <textarea
                name="message"
                rows={4}
                className="border-line-base bg-surface-base rounded-md border px-3 py-2"
              />
            </label>
            <Button type="submit" className="mt-auto w-full rounded-full uppercase">
              {homeHero.form.submit}
              <CircleArrowRight className="size-5" aria-hidden="true" />
            </Button>
          </form>
        </div>
      </Container>
    </Section>
  );
}
