import { site } from './site';

export const homeHero = {
  headline: 'Work Done Right',
  body: `Personalized service for ${site.business.address.locality}, ${site.business.address.region}, tailored to your needs, with a clear diagnosis of the problem before the work starts.`,
  image: {
    src: '/hero.svg',
    alt: `${site.name} team on a job site`,
  },
  cta: {
    label: 'Request a Quote Today',
    href: '/contact',
  },
  stats: [
    { label: '200+ Jobs Completed', href: '/about' },
    { label: '4.9 Google Reviews', href: 'https://www.google.com/maps' },
    { label: '24/7 Phone Line', href: `tel:${site.business.phoneHref}` },
    {
      label: `10+ Years in ${site.business.address.locality}, ${site.business.address.region}`,
      href: '/about',
    },
  ],
  promos: [
    {
      label: 'Click to Start',
      detail: 'Free Estimate',
      href: '/contact',
      icon: 'clock' as const,
    },
    {
      label: 'Emergency?',
      detail: 'We Can Help!',
      href: '/services/emergency',
      icon: 'car' as const,
    },
  ],
  form: {
    title: 'Tell us what you need',
    body: 'A few details are enough to point you at the right service.',
    submit: 'Get started',
  },
};
