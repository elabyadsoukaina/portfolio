import { Github, Linkedin, Mail, MapPin } from 'lucide-react';
import { contacts, profile } from '@/data/portfolio';
import SectionHeading from '@/components/SectionHeading';

const links = [
  { label: 'Email', value: contacts.email, href: `mailto:${contacts.email}`, icon: Mail },
  { label: 'GitHub', value: contacts.github.replace('https://', ''), href: contacts.github, icon: Github },
  { label: 'LinkedIn', value: contacts.linkedin.replace('https://', ''), href: contacts.linkedin, icon: Linkedin },
];

export default function About() {
  return (
    <section id="a-propos" className="mx-auto max-w-6xl px-6 py-24">
      <SectionHeading eyebrow="Profil" title="À propos & Contact" />

      <div className="max-w-3xl space-y-8">
        <div className="space-y-4 text-base leading-relaxed text-slate-300">
          {profile.bio.map((paragraph) => (
            <p key={paragraph}>{paragraph}</p>
          ))}
        </div>

        <div className="flex items-center gap-2 text-sm text-slate-400">
          <MapPin className="h-4 w-4 text-emerald-400" />
          {profile.location}
        </div>
      </div>

      <ul className="mt-12 grid gap-4 sm:grid-cols-3">
        {links.map(({ label, value, href, icon: Icon }) => (
          <li key={label}>
            <a
              href={href}
              target={href.startsWith('mailto:') ? undefined : '_blank'}
              rel="noreferrer"
              className="group flex h-full flex-col gap-3 rounded-xl border border-slate-800 bg-slate-900/60 p-5 transition hover:-translate-y-1 hover:border-emerald-400/50 hover:bg-slate-900"
            >
              <Icon className="h-5 w-5 text-emerald-400" />
              <span className="text-sm font-semibold text-slate-100">{label}</span>
              <span className="break-all text-xs text-slate-400 group-hover:text-slate-300">{value}</span>
            </a>
          </li>
        ))}
      </ul>
    </section>
  );
}
