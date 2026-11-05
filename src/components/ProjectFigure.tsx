import Image from "next/image";
import type { Project } from "@/content/projects";
import type { Locale } from "@/lib/i18n";
import VoiceConversation from "./VoiceConversation";

export default function ProjectFigure({
  project,
  locale,
  priority = false,
}: {
  project: Project;
  locale: Locale;
  priority?: boolean;
}) {
  if (project.conversation) return <VoiceConversation locale={locale} />;

  const shot = project.shots[0];
  const phone = project.phoneShot;

  return (
    <figure className="band-figure m-0">
      <Image
        src={shot.src}
        width={shot.width}
        height={shot.height}
        alt={shot.alt[locale]}
        sizes="(min-width: 64rem) 60vw, 100vw"
        priority={priority}
        className="shot"
      />
      {phone && (
        <Image
          src={phone.src}
          width={phone.width}
          height={phone.height}
          alt={phone.alt[locale]}
          sizes="10rem"
          className="shot shot-phone"
        />
      )}
    </figure>
  );
}
