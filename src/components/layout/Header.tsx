import Link from 'next/link';
import { Hexagon, MapPin, Phone } from 'lucide-react';
import { mapsDirectionsUrl, site } from '@/config/site';
import { Container } from '@/components/ui/Container';
import { MegaMenu } from './MegaMenu';
import { MobileNav } from './MobileNav';

const utilityClass =
  'inline-flex min-h-11 items-center gap-2 rounded-full bg-surface-inverse px-5 text-sm font-medium text-ink-inverse no-underline';

export function Header() {
  return (
    <header className="bg-surface-muted sticky top-0 z-50 w-full">
      <Container as="div" layout="bar" gap="none" className="justify-between gap-4 py-5">
        <Link
          href="/"
          className="bg-surface-base text-ink-base inline-flex items-center gap-2 rounded-xl px-4 py-3 font-semibold no-underline"
        >
          <Hexagon className="text-brand-600 size-7" aria-hidden="true" />
          <span>{site.name}</span>
        </Link>

        <div className="hidden flex-col items-end gap-2 md:flex">
          <div className="flex items-center gap-2">
            <a href={`tel:${site.business.phoneHref}`} className={utilityClass}>
              <Phone className="size-4" aria-hidden="true" />
              Call Today
            </a>
            <a
              href={mapsDirectionsUrl}
              rel="noopener noreferrer"
              target="_blank"
              className={utilityClass}
            >
              <MapPin className="size-4" aria-hidden="true" />
              Directions
            </a>
          </div>

          <MegaMenu />
        </div>

        <MobileNav />
      </Container>
    </header>
  );
}
