import { Github, Linkedin, Mail } from 'lucide-react';
import { contacts, profile } from '@/data/portfolio';

export default function Footer() {
  return (
    <footer className="border-t border-slate-800">
      <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-6 px-6 py-10 sm:flex-row">
        <p className="text-sm text-slate-400">
          &copy; {new Date().getFullYear()} {profile.firstName} {profile.lastName}. Tous droits réservés.
        </p>
        <div className="flex items-center gap-4">
          <a
            href={`mailto:${contacts.email}`}
            aria-label="Email"
            className="rounded-lg p-2 text-slate-400 transition hover:bg-slate-800 hover:text-emerald-300"
          >
            <Mail className="h-5 w-5" />
          </a>
          <a
            href={contacts.github}
            target="_blank"
            rel="noreferrer"
            aria-label="GitHub"
            className="rounded-lg p-2 text-slate-400 transition hover:bg-slate-800 hover:text-emerald-300"
          >
            <Github className="h-5 w-5" />
          </a>
          <a
            href={contacts.linkedin}
            target="_blank"
            rel="noreferrer"
            aria-label="LinkedIn"
            className="rounded-lg p-2 text-slate-400 transition hover:bg-slate-800 hover:text-emerald-300"
          >
            <Linkedin className="h-5 w-5" />
          </a>
        </div>
      </div>
    </footer>
  );
}
