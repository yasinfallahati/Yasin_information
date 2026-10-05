"use client";

import { motion, useReducedMotion } from "framer-motion";
import { useParams } from "next/navigation";
import { Award } from "lucide-react";
import { Locale } from "@/types/project";
import { certificates } from "@/data/certificates";
import Container from "@/components/ui/Container";
import SectionTitle from "@/components/ui/SectionTitle";
import Card from "@/components/ui/Card";
import { useInView } from "@/hooks/useInView";

const sectionTitles: Record<
  Locale,
  { title: string; subtitle: string; issuer: string; instructor: string }
> = {
  fa: {
    title: "گواهینامه‌ها",
    subtitle: "گواهینامه‌ها و دوره‌های آموزشی",
    issuer: "صادر کننده",
    instructor: "مدرس",
  },
  en: {
    title: "Certificates",
    subtitle: "Certifications and courses",
    issuer: "Issuer",
    instructor: "Instructor",
  },
  de: {
    title: "Zertifikate",
    subtitle: "Zertifikate und Kurse",
    issuer: "Aussteller",
    instructor: "Dozent",
  },
};

export default function Certificates() {
  const params = useParams();
  const locale = (params.locale as Locale) || "fa";
  const { ref, isInView } = useInView(0.1);
  const reduce = useReducedMotion();
  const titles = sectionTitles[locale];

  return (
    <section className="border-y border-line py-24 sm:py-28" ref={ref}>
      <Container>
        <SectionTitle title={titles.title} subtitle={titles.subtitle} />

        <div className="grid gap-5 md:grid-cols-2">
          {certificates.map((cert, i) => (
            <motion.div
              key={cert.id}
              initial={reduce ? false : { opacity: 0, y: 16 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.45, delay: i * 0.1 }}
            >
              <Card className="p-6">
                <div className="flex items-start gap-4">
                  <div className="rounded-lg border border-accent/20 bg-accent/5 p-2.5">
                    <Award className="h-5 w-5 text-accent" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-lg font-semibold text-bright">{cert.name[locale]}</h3>
                    <p className="mt-1 text-sm text-soft">{cert.issuer}</p>
                    {cert.instructor && (
                      <p className="mt-1 text-xs text-mute">
                        {titles.instructor}: {cert.instructor}
                      </p>
                    )}
                    <p className="mt-2 text-xs text-mute">{cert.date}</p>
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
