import { redirect } from "next/navigation";

export default async function LegacyPage({ params }: PageProps<"/[locale]/journey">) {
  const { locale } = await params;
  redirect(`/${locale}/about`);
}
