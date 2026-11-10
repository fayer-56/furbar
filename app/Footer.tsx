"use client";

import { ArrowRight, ArrowUp, PawPrint } from "lucide-react";
import { Bagel_Fat_One, Nunito } from "next/font/google";

import { StaticDataWebsite } from "@/data/main";
import { Button } from "@/components/ui/button";
import { useRouter } from "next/navigation";

const display = Bagel_Fat_One({ subsets: ["latin"], weight: "400" });
const body = Nunito({ subsets: ["latin"] });

const MAX_SECTIONS = 4;

const focusRing =
  "focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[var(--fb-on-tonal)]";

export default function Footer() {
  const data = StaticDataWebsite.footer;
  const sections = StaticDataWebsite.footer.sections;
  const siteName = StaticDataWebsite.website.name;

  const visibleSections = (sections ?? []).slice(0, MAX_SECTIONS);

  const router = useRouter();

  return (
    <footer className={`${body.className} relative`}>
      <svg
        aria-hidden
        viewBox="0 0 1440 80"
        preserveAspectRatio="none"
        className="relative z-10 block h-12 w-full translate-y-px text-(--fb-tonal) md:h-16"
      >
        <path
          fill="currentColor"
          d="M0 80V36C120 6 240 6 360 32S600 68 720 40 960 2 1080 24s240 36 360 6V80Z"
        />
      </svg>

      <div className="relative isolate overflow-hidden bg-(--fb-tonal) text-(--fb-on-tonal)">
        {/* 
        <svg
          aria-hidden
          className="pointer-events-none absolute inset-0 -z-10 h-full w-full opacity-60"
          viewBox="0 0 1200 700"
          preserveAspectRatio="xMidYMid slice"
          fill="none"
        >
          <g
            className="blur-[6px]"
            stroke="var(--fb-ribbon)"
            strokeWidth="70"
            strokeLinecap="round"
            opacity="0.55"
          >
            <path d="M-80 520 C 200 430, 390 640, 630 540 S 980 430, 1320 590" />
            <path d="M900 -40 C 840 120, 960 260, 1160 320" />
          </g>
        </svg> */}

        <div className="mx-auto max-w-7xl px-8 pb-10 pt-8">
          <div className="grid grid-cols-2 gap-x-8 gap-y-12 lg:grid-cols-6">
            <div className="col-span-2 flex flex-col items-start gap-5">
              <a
                href={"/"}
                className={`block overflow-hidden duration-500 text-4xl ${display.className}`}
              >
                {siteName}
              </a>
              <p className="max-w-sm text-lg font-semibold leading-relaxed opacity-90">
                {data.description}
              </p>
              <a
                href="#rejoindre"
                className={`inline-flex h-12 items-center gap-x-2 rounded-full bg-(--fb-accent) px-6 font-bold text-(--fb-on-accent) transition-all duration-300 hover:brightness-105 active:scale-95 ${focusRing}`}
              >
                Rejoindre <ArrowRight className="h-4 w-4" />
              </a>
            </div>

            {visibleSections.map((section, sectionIdx) => (
              <nav key={sectionIdx} aria-label={section.title}>
                <h3 className={`${display.className} mb-4 text-xl`}>
                  {section.title}
                </h3>
                <ul className="-ml-3 space-y-1">
                  {section.links.map((link, linkIdx) => (
                    <li key={linkIdx}>
                      <a
                        href={link.href}
                        className={`group inline-flex items-center gap-x-2 rounded-full px-3 py-1.5 font-semibold opacity-85 transition-all duration-300 hover:bg-white/10 hover:opacity-100 ${focusRing}`}
                      >
                        <PawPrint className="-ml-1 h-4 w-0 opacity-0 transition-all duration-300 group-hover:ml-0 group-hover:w-4 group-hover:opacity-100" />
                        {link.name}
                      </a>
                    </li>
                  ))}
                </ul>
              </nav>
            ))}
          </div>

          <div className="mt-14 flex flex-col gap-4 border-t border-white/15 pt-6 text-sm font-semibold md:flex-row md:items-center md:justify-between">
            <p className="opacity-85">{data.copyright}</p>

            <div className="flex flex-wrap items-center gap-2">
              <ul className="flex flex-wrap gap-2">
                {data.legalLinks?.map((link, linkIdx) => (
                  <li key={linkIdx}>
                    <Button
                      size={"lg"}
                      aria-label="Retour en haut de la page"
                      onClick={() => {
                        router.push(link.href);
                      }}
                      className={`inline-block rounded-full bg-white/10 px-4 py-2 transition-all duration-300 hover:bg-white/20 ${focusRing}`}
                    >
                      {link.name}
                    </Button>
                  </li>
                ))}
              </ul>
              <Button
                size={"icon-lg"}
                aria-label="Retour en haut de la page"
                className={`flex  items-center justify-center rounded-full bg-(--fb-primary) text-(--fb-on-primary) transition-all duration-300 hover:-translate-y-1 ${focusRing}`}
              >
                <ArrowUp className="h-5 w-5" />
              </Button>
            </div>
          </div>
        </div>

        <p
          aria-hidden
          className={`${display.className} pointer-events-none select-none whitespace-nowrap px-8 text-center text-[clamp(3rem,13vw,10rem)] leading-[0.8] opacity-[0.08]`}
        >
          {siteName}
        </p>
      </div>
    </footer>
  );
}
