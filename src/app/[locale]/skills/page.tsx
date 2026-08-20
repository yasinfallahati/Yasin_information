import type { Metadata } from "next";
import { Locale } from "@/types/project";
import Container from "@/components/ui/Container";
import SectionTitle from "@/components/ui/SectionTitle";
import Card from "@/components/ui/Card";
import { skillGroups } from "@/data/skills";
import { Server, Brain, Zap, Layout, Wrench } from "lucide-react";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  const loc = locale as Locale;
  const titles: Record<Locale, string> = {
    fa: "مهارت‌ها — یاسین فلاحتی",
    en: "Skills — Yasin Fallahati",
    de: "Fähigkeiten — Yasin Fallahati",
  };
  return { title: titles[loc] };
}

const iconMap: Record<string, React.ElementType> = {
  server: Server,
  brain: Brain,
  zap: Zap,
  layout: Layout,
  wrench: Wrench,
};

export default async function SkillsPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  const loc = locale as Locale;

  const titles: Record<Locale, { title: string; subtitle: string }> = {
    fa: { title: "مهارت‌های من", subtitle: "تکنولوژی‌ها و ابزارهایی که با آن‌ها کار می‌کنم" },
    en: { title: "My Skills", subtitle: "Technologies and tools I work with" },
    de: { title: "Meine Fähigkeiten", subtitle: "Technologien und Tools, mit denen ich arbeite" },
  };

  return (
    <section className="pt-24 pb-16">
      <Container>
        <SectionTitle title={titles[loc].title} subtitle={titles[loc].subtitle} />
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {skillGroups.map((group) => {
            const Icon = iconMap[group.icon] || Server;
            return (
              <Card key={group.id} className="p-6">
                <div className="mb-4 flex items-center gap-3">
                  <div className="rounded-lg bg-blue-500/10 p-2">
                    <Icon className="h-5 w-5 text-blue-500" />
                  </div>
                  <h3 className="text-lg font-semibold text-gray-50">
                    {group.name[loc]}
                  </h3>
                </div>
                <div className="flex flex-wrap gap-2">
                  {group.skills.map((skill) => (
                    <span
                      key={skill.name}
                      className="inline-flex items-center rounded-md bg-gray-900 border border-gray-700 px-2.5 py-1 text-xs font-medium text-gray-300"
                    >
                      {skill.name}
                    </span>
                  ))}
                </div>
              </Card>
            );
          })}
        </div>
      </Container>
    </section>
  );
}
