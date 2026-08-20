"use client";

import { motion } from "framer-motion";
import { useParams } from "next/navigation";
import { Award } from "lucide-react";
import { Locale } from "@/types/project";
import { certificates } from "@/data/certificates";
import Container from "@/components/ui/Container";
import SectionTitle from "@/components/ui/SectionTitle";
import Card from "@/components/ui/Card";
import { useInView } from "@/hooks/useInView";

const sectionTitles: Record<Locale, { title: string; subtitle: string; issuer: string; instructor: string }> = {
  fa: { title: "گواهینامه‌ها", subtitle: "گواهینامه‌ها و دوره‌های آموزشی من", issuer: "صادر کننده", instructor: "مدرس" },
  en: { title: "Certificates", subtitle: "My certifications and courses", issuer: "Issuer", instructor: "Instructor" },
  de: { title: "Zertifikate", subtitle: "Meine Zertifikate und Kurse", issuer: "Aussteller", instructor: "Dozent" },
};

export default function Certificates() {
  const params = useParams();
  const locale = (params.locale as Locale) || "fa";
  const { ref, isInView } = useInView(0.1);
  const titles = sectionTitles[locale];

  return (
    <section className="py-24 bg-gray-800/50" ref={ref}>
      <Container>
        <SectionTitle title={titles.title} subtitle={titles.subtitle} />

        <div className="grid gap-6 md:grid-cols-2">
          {certificates.map((cert, i) => (
            <motion.div
              key={cert.id}
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
            >
              <Card className="p-6">
                <div className="flex items-start gap-4">
                  <div className="rounded-lg bg-blue-500/10 p-2.5">
                    <Award className="h-5 w-5 text-blue-500" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-lg font-semibold text-gray-50">
                      {cert.name[locale]}
                    </h3>
                    <p className="mt-1 text-sm text-gray-400">
                      {cert.issuer}
                    </p>
                    {cert.instructor && (
                      <p className="mt-1 text-xs text-gray-500">
                        {titles.instructor}: {cert.instructor}
                      </p>
                    )}
                    <p className="mt-2 text-xs text-gray-500">{cert.date}</p>
                  </div>
                </div>
              </Card>
            </motion.div>
          ))}
        </div>
      </Container>
    </section>
  );
}
