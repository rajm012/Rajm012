import { profile } from './site';

export const nav = [
  { to: '/research', label: 'Research' },
  { to: '/projects', label: 'Projects' },
  { to: '/about', label: 'About' },
  { to: '/contact', label: 'Contact' },
];

export const socials = [
  { href: profile.links.github, label: 'GitHub', icon: 'github' },
  { href: profile.links.linkedin, label: 'LinkedIn', icon: 'linkedin' },
  { href: profile.links.orcid, label: 'ORCID', icon: 'orcid' },
  { href: `mailto:${profile.email}`, label: 'Email', icon: 'mail' },
];
