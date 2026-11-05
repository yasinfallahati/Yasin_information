import { contact, copy, name, role } from "@/content/site";
import type { Locale } from "@/lib/i18n";

export default function Footer({ locale }: { locale: Locale }) {
  const { footer } = copy[locale];

  return (
    <footer id="contact" className="bg-ink text-paper">
      <div className="wrap pt-20 pb-10 lg:pt-28">
        <h2 className="display display-lg max-w-[18ch]">{footer.title}</h2>
        <p className="measure mt-6 text-lg opacity-80">{footer.body}</p>

        <dl className="mt-12 grid gap-6 border-t border-paper/25 pt-8 sm:grid-cols-3">
          <div>
            <dt className="text-sm opacity-70">{footer.email}</dt>
            <dd className="mt-1 text-lg font-semibold" dir="ltr">
              <a className="text-link" href={`mailto:${contact.email}`}>
                {contact.email}
              </a>
            </dd>
          </div>
          <div>
            <dt className="text-sm opacity-70">{footer.telegram}</dt>
            <dd className="mt-1 text-lg font-semibold" dir="ltr">
              <a className="text-link" href={contact.telegram} rel="noopener noreferrer" target="_blank">
                {contact.telegramHandle}
              </a>
            </dd>
          </div>
          <div>
            <dt className="text-sm opacity-70">{footer.github}</dt>
            <dd className="mt-1 text-lg font-semibold" dir="ltr">
              <a className="text-link" href={contact.github} rel="noopener noreferrer" target="_blank">
                github.com/yasinfallahati
              </a>
            </dd>
          </div>
        </dl>

        <p className="mt-16 text-sm opacity-70">
          {name[locale]}{copy[locale].comma} {role[locale]}
        </p>
      </div>
    </footer>
  );
}
