import type { Locale } from "@/lib/i18n";

const lines: Record<
  Locale,
  {
    voice: string;
    transcript: string;
    confirm: string;
    run: string;
    cancel: string;
    done: string;
    caption: string;
  }
> = {
  fa: {
    voice: "پیام صوتی، ۰:۰۴",
    transcript: "«کروم را باز کن»",
    confirm: "این دستور را اجرا کنم؟",
    run: "اجرا",
    cancel: "لغو",
    done: "انجام شد. این هم اسکرین‌شات صفحه.",
    caption: "نمونهٔ یک گفتگو، برای نشان دادن مسیر کار.",
  },
  en: {
    voice: "Voice note, 0:04",
    transcript: "“Open Chrome”",
    confirm: "Run this command?",
    run: "Run",
    cancel: "Cancel",
    done: "Done. Here's a screenshot of the desktop.",
    caption: "A sample conversation, drawn to show how the work flows.",
  },
  de: {
    voice: "Sprachnachricht, 0:04",
    transcript: "„Öffne Chrome“",
    confirm: "Diesen Befehl ausführen?",
    run: "Ausführen",
    cancel: "Abbrechen",
    done: "Erledigt. Hier ist ein Screenshot des Desktops.",
    caption: "Ein Beispielgespräch, das den Arbeitsablauf zeigt.",
  },
};

const wave = [6, 12, 20, 10, 16, 24, 14, 8, 18, 11, 6];

export default function VoiceConversation({ locale }: { locale: Locale }) {
  const t = lines[locale];

  return (
    <figure className="m-0">
      <div className="chat">
        <p className="chat-bubble chat-me">
          <span className="flex items-center gap-[3px]" aria-hidden="true" dir="ltr">
            {wave.map((height, index) => (
              <span key={index} className="w-[3px] bg-current" style={{ height }} />
            ))}
          </span>
          <span className="text-sm">{t.voice}</span>
        </p>
        <p className="chat-bubble chat-bot">{t.transcript}</p>
        <div className="chat-bubble chat-bot">
          <p>{t.confirm}</p>
          <code className="chat-code" dir="ltr">
            google-chrome
          </code>
          <p className="mt-3 flex gap-2 text-sm font-semibold">
            <span className="chat-choice chat-choice-primary">{t.run}</span>
            <span className="chat-choice">{t.cancel}</span>
          </p>
        </div>
        <p className="chat-bubble chat-bot">{t.done}</p>
      </div>
      <figcaption className="band-soft mt-3 text-sm">{t.caption}</figcaption>
    </figure>
  );
}
