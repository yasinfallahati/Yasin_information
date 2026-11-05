import { redirect } from "next/navigation";

export default async function LegacyPage({ params }: PageProps<"/[locale]/contact">) {
  const { locale } = await params;
  redirect(`/${locale}#contact`);
}
