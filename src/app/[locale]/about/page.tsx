import type { Metadata } from "next";
import { certificates, copy, skillGroups } from "@/content/site";
import { languageAlternates, resolveLocale } from "@/lib/i18n";

export async function generateMetadata({ params }: PageProps<"/[locale]/about">): Promise<Metadata> {
  const locale = resolveLocale((await params).locale);
  return {
    title: copy[locale].meta.aboutTitle,
    alternates: { canonical: `/${locale}/about`, languages: languageAlternates("/about") },
  };
}

export default async function AboutPage({ params }: PageProps<"/[locale]/about">) {
  const locale = resolveLocale((await params).locale);
  const t = copy[locale].about;

  return (
    <div className="wrap pt-10 pb-20 lg:pt-16 lg:pb-28">
      <h1 className="display display-lg">{t.title}</h1>

      <div className="mt-10 grid gap-x-16 gap-y-10 lg:grid-cols-12">
        <div className="space-y-5 text-lg lg:col-span-8 lg:text-xl">
          {t.intro.map((paragraph) => (
            <p key={paragraph} className="measure">
              {paragraph}
            </p>
          ))}
        </div>
        <dl className="space-y-5 lg:col-span-4">
          <div className="border-t border-rule pt-3">
            <dt className="text-sm text-muted">{t.workplaceLabel}</dt>
            <dd className="font-semibold">{t.workplace}</dd>
          </div>
          <div className="border-t border-rule pt-3">
            <dt className="text-sm text-muted">{t.locationLabel}</dt>
            <dd className="font-semibold">{t.location}</dd>
          </div>
        </dl>
      </div>

      <section className="mt-20 lg:mt-28">
        <h2 className="display display-md">{t.principlesTitle}</h2>
        <div className="mt-10 grid gap-10 lg:grid-cols-3 lg:gap-12">
          {t.principles.map((principle) => (
            <div key={principle.title} className="border-t-2 border-ink pt-4">
              <h3 className="text-xl font-bold">{principle.title}</h3>
              <p className="mt-3 text-muted">{principle.body}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="mt-20 lg:mt-28">
        <h2 className="display display-md">{t.skillsTitle}</h2>
        <dl className="mt-8 border-t border-rule">
          {skillGroups.map((group) => (
            <div key={group.name.en} className="grid gap-x-8 gap-y-1 border-b border-rule py-4 lg:grid-cols-12">
              <dt className="font-bold lg:col-span-3">{group.name[locale]}</dt>
              <dd className="lg:col-span-9" dir="ltr">
                <span className={locale === "fa" ? "block text-right" : ""}>{group.items.join(", ")}</span>
              </dd>
            </div>
          ))}
        </dl>
      </section>

      <section className="mt-20 lg:mt-28">
        <h2 className="display display-md">{t.certificatesTitle}</h2>
        <ul className="mt-8 border-t border-rule">
          {certificates.map((certificate) => (
            <li key={certificate.name.en} className="grid gap-x-8 gap-y-1 border-b border-rule py-4 lg:grid-cols-12">
              <span className="font-bold lg:col-span-6">{certificate.name[locale]}</span>
              <span className="text-muted lg:col-span-6">
                {certificate.issuer}{copy[locale].comma} {t.certificateBy} {certificate.instructor}
              </span>
            </li>
          ))}
        </ul>
      </section>
    </div>
  );
}
