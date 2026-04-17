"use client";

import { localeOptions } from "@/data/site";
import { cn } from "@/lib/cn";
import { useSiteLanguage } from "@/components/providers/site-language-provider";

interface LanguageToggleProps {
  className?: string;
}

export function LanguageToggle({ className }: LanguageToggleProps) {
  const { locale, setLocale, siteContent } = useSiteLanguage();

  return (
    <div
      aria-label={siteContent.common.languageSwitcher}
      className={cn(
        "inline-flex items-center rounded-full border border-border-strong/70 bg-white/72 p-1 shadow-[0_12px_26px_rgba(69,54,48,0.08)] backdrop-blur-md",
        className,
      )}
      role="group"
    >
      {localeOptions.map((option) => {
        const isActive = option.code === locale;

        return (
          <button
            key={option.code}
            type="button"
            aria-pressed={isActive}
            className={cn(
              "min-w-[2.8rem] rounded-full px-3 py-2 text-[0.68rem] font-semibold uppercase tracking-[0.22em] transition-[background-color,color,box-shadow] duration-300",
              isActive
                ? "bg-ink text-shell-soft shadow-[0_10px_18px_rgba(38,29,26,0.18)]"
                : "text-muted hover:text-ink",
            )}
            onClick={() => setLocale(option.code)}
          >
            {option.label}
          </button>
        );
      })}
    </div>
  );
}
