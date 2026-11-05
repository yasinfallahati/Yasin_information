import { redirect } from "next/navigation";

export default async function LegacyPage({ params }: PageProps<"/[locale]/skills">) {
  const { locale } = await params;
  redirect(`/${locale}/about`);
}
