"use client";

import { motion, useReducedMotion } from "framer-motion";

type IconProps = {
  className?: string;
  size?: number;
};

/** Monochrome programming-language marks — muted for a serious UI */

export function PythonIcon({ className = "", size = 48 }: IconProps) {
  return (
    <svg className={className} width={size} height={size} viewBox="0 0 48 48" fill="none" aria-hidden>
      <path
        d="M24 6c-8 0-7.5 3.5-7.5 3.5V14h7.6v1H13.2S6 14.2 6 24s5.4 9.5 5.4 9.5h3.8V27.2S15 21 21.8 21h7.7s6.5-.2 6.5-6.8V9.5S37.5 6 24 6Zm-4.2 3.2a1.8 1.8 0 1 1 0 3.6 1.8 1.8 0 0 1 0-3.6Z"
        fill="currentColor"
        opacity="0.9"
      />
      <path
        d="M24 42c8 0 7.5-3.5 7.5-3.5V34h-7.6v-1h10.9S42 33.8 42 24s-5.4-9.5-5.4-9.5h-3.8v6.3S33 27 26.2 27h-7.7s-6.5.2-6.5 6.8v4.7S10.5 42 24 42Zm4.2-3.2a1.8 1.8 0 1 1 0-3.6 1.8 1.8 0 0 1 0 3.6Z"
        fill="currentColor"
        opacity="0.55"
      />
    </svg>
  );
}

export function JavaScriptIcon({ className = "", size = 48 }: IconProps) {
  return (
    <svg className={className} width={size} height={size} viewBox="0 0 48 48" fill="none" aria-hidden>
      <rect x="6" y="6" width="36" height="36" rx="4" fill="currentColor" opacity="0.2" />
      <path
        d="M21 34.5c0 2.8-1.6 4.5-4.4 4.5-2.2 0-3.6-1.1-4.3-2.6l2.4-1.4c.4.8 1 1.4 1.9 1.4.9 0 1.5-.5 1.5-2.2V22h2.9v12.5Zm7.2 4.4c-2.6 0-4.3-1.2-5.1-2.9l2.4-1.4c.5 1 1.3 1.7 2.6 1.7 1.1 0 1.8-.5 1.8-1.3 0-.9-.7-1.3-2-1.8l-.7-.3c-2-.8-3.3-1.9-3.3-4.1 0-2 1.6-3.6 4-3.6 1.7 0 3 .6 3.9 2.1l-2.1 1.4c-.5-.8-1-1.1-1.8-1.1-.8 0-1.3.5-1.3 1.1 0 .8.5 1.1 1.7 1.6l.7.3c2.3 1 3.6 2 3.6 4.3 0 2.5-1.9 3.8-4.4 3.8Z"
        fill="currentColor"
      />
    </svg>
  );
}

export function TypeScriptIcon({ className = "", size = 48 }: IconProps) {
  return (
    <svg className={className} width={size} height={size} viewBox="0 0 48 48" fill="none" aria-hidden>
      <rect x="6" y="6" width="36" height="36" rx="4" fill="currentColor" opacity="0.2" />
      <path
        d="M14 20.5h9.2v2.4h-3.2V35h-2.8V22.9H14v-2.4Zm16.4 14.8c-2.9 0-4.8-1.4-5.5-3.3l2.5-1.2c.4 1.1 1.3 1.9 3 1.9 1.2 0 2-.5 2-1.4 0-.9-.6-1.3-2.4-1.9l-1-.3c-2.4-.9-3.7-2.2-3.7-4.4 0-2.3 1.9-4 4.6-4 2.1 0 3.6.7 4.6 2.4l-2.3 1.4c-.5-.9-1.2-1.3-2.3-1.3-1 0-1.7.5-1.7 1.3 0 .8.6 1.2 2.2 1.8l1 .3c2.7 1 4 2.2 4 4.6 0 2.6-2 4.1-5 4.1Z"
        fill="currentColor"
      />
    </svg>
  );
}

export function DockerIcon({ className = "", size = 48 }: IconProps) {
  return (
    <svg className={className} width={size} height={size} viewBox="0 0 48 48" fill="none" aria-hidden>
      <path
        d="M9 26.5h4.2V22H9v4.5Zm5.2 0h4.2V22h-4.2v4.5Zm5.2 0h4.2V22h-4.2v4.5Zm0-5.3h4.2v-4.4h-4.2v4.4Zm5.2 5.3h4.2V22h-4.2v4.5Zm0-5.3h4.2v-4.4h-4.2v4.4Zm0-5.3h4.2v-4.4h-4.2v4.4Zm5.2 10.6h4.2V22H30v4.5Z"
        fill="currentColor"
      />
      <path
        d="M8 27.8c0 5.4 4.5 8.7 11.2 8.7 7.8 0 13.6-3.5 16.4-9.7 1.6.1 5.2.2 7.1-2.6.4-.6-.1-.9-.6-.7 1.2-1.8 1.5-3.5 1.3-4.4-.3.2-1.7.9-4.3.7C36.4 14.2 32 12 26.8 12c-7.4 0-11.8 4.3-13 9.6-2 .5-4.6 1.5-5.8 3.8C6.5 27.5 7.2 27.8 8 27.8Z"
        fill="currentColor"
        opacity="0.45"
      />
    </svg>
  );
}

export function GitIcon({ className = "", size = 48 }: IconProps) {
  return (
    <svg className={className} width={size} height={size} viewBox="0 0 48 48" fill="none" aria-hidden>
      <path
        d="M43.2 22.3 25.7 4.8a2.7 2.7 0 0 0-3.8 0L18 8.7l4.7 4.7a3.1 3.1 0 0 1 3.9 3.9l4.5 4.5a3.1 3.1 0 1 1-1.9 1.9l-4.5-4.5v11.8a3.1 3.1 0 1 1-2.2.1V19a3.1 3.1 0 0 1-1.7-4.1l-4.6-4.6-12 12a2.7 2.7 0 0 0 0 3.8l17.5 17.5a2.7 2.7 0 0 0 3.8 0l17.4-17.4a2.7 2.7 0 0 0 0-3.8Z"
        fill="currentColor"
      />
    </svg>
  );
}

export function LinuxIcon({ className = "", size = 48 }: IconProps) {
  return (
    <svg className={className} width={size} height={size} viewBox="0 0 48 48" fill="none" aria-hidden>
      <path
        d="M24 6c-4.5 3.2-7.5 9-7.5 15.2 0 3.2.8 5.8 1.8 8.1-2.5 1.4-4.3 3.6-4.3 6.6 0 2.2 1 4.1 2.8 5.2 1.6-3.8 4.9-5.8 7.2-6.4.4 1.4 1.2 2.7 2.4 3.6-1.9.6-4.6 2.2-5.6 5.2H27c.8-1.8 2.4-3 4.2-3.4 1.7.4 3.3 1.6 4.1 3.4h5.2c-1-3-3.7-4.6-5.6-5.2 1.2-.9 2-2.2 2.4-3.6 2.3.6 5.6 2.6 7.2 6.4 1.8-1.1 2.8-3 2.8-5.2 0-3-1.8-5.2-4.3-6.6 1-2.3 1.8-4.9 1.8-8.1C31.5 15 28.5 9.2 24 6Z"
        fill="currentColor"
        opacity="0.85"
      />
      <circle cx="20.5" cy="22" r="1.6" fill="#0a0a0b" />
      <circle cx="27.5" cy="22" r="1.6" fill="#0a0a0b" />
    </svg>
  );
}

export function HtmlIcon({ className = "", size = 48 }: IconProps) {
  return (
    <svg className={className} width={size} height={size} viewBox="0 0 48 48" fill="none" aria-hidden>
      <path d="M10 8h28l-2.4 27.2L24 40l-11.6-4.8L10 8Z" fill="currentColor" opacity="0.25" />
      <path d="M24 36.8V12h11.2l-1.9 21.2L24 36.8Z" fill="currentColor" opacity="0.55" />
      <path d="M24 18h7.2l.2 2.4H24V18Zm0 5.2h6.8l-.5 5.4L24 30.2v-2.5l3.4-.9.2-2.1H24v-1.5Z" fill="currentColor" />
    </svg>
  );
}

export function CssIcon({ className = "", size = 48 }: IconProps) {
  return (
    <svg className={className} width={size} height={size} viewBox="0 0 48 48" fill="none" aria-hidden>
      <path d="M10 8h28l-2.4 27.2L24 40l-11.6-4.8L10 8Z" fill="currentColor" opacity="0.25" />
      <path d="M24 36.8V12h11.2l-1.9 21.2L24 36.8Z" fill="currentColor" opacity="0.55" />
      <path
        d="M24 18.2h7l.3 2.8H26.6l.2 1.8h4.3l-.6 5.8L24 30.4v-2.6l3.2-.8.2-2H24v-6.8Z"
        fill="currentColor"
      />
    </svg>
  );
}

export function FastApiIcon({ className = "", size = 48 }: IconProps) {
  return (
    <svg className={className} width={size} height={size} viewBox="0 0 48 48" fill="none" aria-hidden>
      <circle cx="24" cy="24" r="16" fill="currentColor" opacity="0.18" />
      <path d="M18 30 28 12h3.2L21.2 36H18l1.6-6Zm8.4 0 1.8-6H32l-1.8 6h-3.8Z" fill="currentColor" />
    </svg>
  );
}

const fieldIcons = [
  { Comp: PythonIcon, style: { top: "12%", left: "8%" }, size: 56, slow: false, hideOnMobile: false },
  { Comp: JavaScriptIcon, style: { top: "18%", right: "12%" }, size: 48, slow: true, hideOnMobile: false },
  { Comp: DockerIcon, style: { bottom: "28%", left: "14%" }, size: 52, slow: true, hideOnMobile: true },
  { Comp: GitIcon, style: { bottom: "22%", right: "16%" }, size: 46, slow: false, hideOnMobile: false },
  { Comp: TypeScriptIcon, style: { top: "42%", right: "8%" }, size: 44, slow: true, hideOnMobile: true },
  { Comp: LinuxIcon, style: { top: "48%", left: "42%" }, size: 50, slow: false, hideOnMobile: true },
  { Comp: HtmlIcon, style: { bottom: "12%", left: "36%" }, size: 42, slow: true, hideOnMobile: true },
  { Comp: CssIcon, style: { top: "28%", left: "28%" }, size: 40, slow: false, hideOnMobile: true },
] as const;

/** Subtle drifting language icons behind the hero */
export default function LanguageField() {
  const reduce = useReducedMotion();

  return (
    <div className="pointer-events-none absolute inset-0 overflow-hidden" aria-hidden>
      <div className="absolute inset-0 bg-gradient-to-r from-ink via-ink/85 to-ink/40" />
      <div className="absolute inset-x-0 bottom-0 h-40 bg-gradient-to-t from-ink to-transparent" />

      {fieldIcons.map(({ Comp, style, size, slow, hideOnMobile }, i) => (
        <motion.div
          key={i}
          className={`absolute text-accent ${hideOnMobile ? "hidden sm:block" : ""} ${
            reduce ? "opacity-30" : slow ? "icon-drift-slow" : "icon-drift"
          }`}
          style={{ ...style, animationDelay: `${i * 0.7}s` }}
          initial={reduce ? false : { opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.2 + i * 0.08 }}
        >
          <Comp size={size} />
        </motion.div>
      ))}
    </div>
  );
}

export const skillGroupIcons = {
  backend: PythonIcon,
  "ai-data": FastApiIcon,
  automation: JavaScriptIcon,
  frontend: HtmlIcon,
  tools: GitIcon,
} as const;
