"use client";

import {
  ArrowRight,
  ArrowUpRight,
  Beer,
  CalendarHeart,
  CalendarPlus,
  ChevronDown,
  Clock,
  Compass,
  Dices,
  MapPin,
  Menu,
  Moon,
  Palette,
  PawPrint,
  ShieldCheck,
  Sun,
  Ticket,
} from "lucide-react";
import { Bagel_Fat_One, Nunito } from "next/font/google";
import { useTheme } from "next-themes";

import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { StaticDataWebsite } from "@/data/main";
import Link from "next/link";
import Footer from "./Footer";

/* -------------------------------------------------------------------------- */
/*  Typo : remplace Bagel_Fat_One par la police exacte du logo si tu l'as     */
/* -------------------------------------------------------------------------- */
const display = Bagel_Fat_One({ subsets: ["latin"], weight: "400" });
const body = Nunito({ subsets: ["latin"] });

/* -------------------------------------------------------------------------- */
/*  Contenu par défaut (à déplacer dans @/data/main quand tu veux)            */
/* -------------------------------------------------------------------------- */
const content = {
  hero: {
    eyebrow: "Association · Lorient, Bretagne",
    title: "Le bar, au cœur de Lorient",
    highlight: "fish",
    description:
      "Soirées conviviales, jeux et rencontres pour la communauté furry de Lorient et du Morbihan. Viens comme tu es, avec ou sans fursuit.",
  },
  facts: [
    {
      icon: Clock,
      label: "Quand",
      value: "Un samedi par mois",
      hint: "Dès 19h",
    },
    {
      icon: MapPin,
      label: "Où",
      value: "Centre-ville de Lorient",
      hint: "Adresse envoyée aux inscrits",
    },
    {
      icon: ShieldCheck,
      label: "Pour qui",
      value: "Dès 18 ans",
      hint: "Avec ou sans fursuit",
    },
    {
      icon: Ticket,
      label: "Combien",
      value: "Entrée libre",
      hint: "Adhésion : 10 € / an",
    },
  ],
  events: [
    {
      day: "21",
      month: "NOV",
      weekday: "Samedi",
      title: "Soirée d'automne",
      time: "19h – 00h",
      place: "Centre-ville, Lorient",
      desc: "Jeux de société, discussions et photo de groupe. Parfaite pour une première visite.",
    },
    {
      day: "19",
      month: "DÉC",
      weekday: "Samedi",
      title: "Soirée de Noël",
      time: "19h – 01h",
      place: "Centre-ville, Lorient",
      desc: "Échange de petits cadeaux et décorations de saison.",
    },
    {
      day: "16",
      month: "JAN",
      weekday: "Samedi",
      title: "Jeux & karaoké",
      time: "19h – 00h",
      place: "Centre-ville, Lorient",
      desc: "Une soirée pour chanter (ou juste écouter).",
    },
    {
      day: "20",
      month: "FÉV",
      weekday: "Samedi",
      title: "Soirée carnaval",
      time: "19h – 01h",
      place: "Centre-ville, Lorient",
      desc: "Costumes et fursuits à l'honneur.",
    },
  ],
  activities: [
    {
      icon: Beer,
      title: "Soirées au bar",
      desc: "Un rendez-vous mensuel pour se retrouver autour d'un verre, dans une ambiance détendue.",
    },
    {
      icon: Dices,
      title: "Jeux & animations",
      desc: "Jeux de société, quiz et défis pour faire connaissance sans pression.",
    },
    {
      icon: Palette,
      title: "Ateliers créatifs",
      desc: "Dessin, customisation de fursuit, partage de techniques entre passionnés.",
    },
    {
      icon: Compass,
      title: "Sorties",
      desc: "Balades et sorties en Bretagne, en petit groupe, quand la météo s'y prête.",
    },
  ],
  steps: [
    {
      title: "Découvre",
      desc: "Viens à une soirée pour voir l'ambiance, sans engagement.",
    },
    {
      title: "Adhère",
      desc: "Remplis le formulaire d'adhésion : 10 € par an, c'est tout.",
    },
    {
      title: "Participe",
      desc: "Rejoins le groupe de discussion et propose tes idées de soirées.",
    },
  ],
  faq: [
    {
      q: "Faut-il un fursuit pour venir ?",
      a: "Non, pas du tout. Fursuit, simple accessoire ou tenue de tous les jours : toutes et tous sont les bienvenus.",
    },
    {
      q: "Je viens seul·e, est-ce un problème ?",
      a: "Au contraire, c'est le cas de beaucoup de nouveaux. Quelqu'un de l'équipe t'accueille à ton arrivée.",
    },
    {
      q: "Les soirées sont-elles réservées aux adultes ?",
      a: "Oui, elles se déroulent dans un bar : l'accès est réservé aux personnes majeures.",
    },
    {
      q: "Comment je m'inscris à une soirée ?",
      a: "L'adhésion suffit. Tu peux aussi venir une première fois pour découvrir avant d'adhérer.",
    },
    {
      q: "Est-ce accessible aux personnes à mobilité réduite ?",
      a: "Écris-nous avant la soirée : on t'indique l'accessibilité du lieu et on s'adapte si besoin.",
    },
  ],
};

/* -------------------------------------------------------------------------- */
/*  Styles réutilisables                                                      */
/* -------------------------------------------------------------------------- */
const focusRing =
  "focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[var(--fb-on-bg)]";
const btnBase = `inline-flex h-14 items-center justify-center gap-x-2 rounded-full px-8 text-base font-bold transition-all duration-300 hover:brightness-105 active:scale-95 ${focusRing}`;
const btnPrimary = `${btnBase} bg-[var(--fb-primary)] text-[var(--fb-on-primary)]`;
const btnTonal = `${btnBase} bg-[var(--fb-tonal)] text-[var(--fb-on-tonal)]`;
const blobA =
  "rounded-[2.5rem_4rem_2.5rem_4rem/3rem_2.5rem_4rem_2.5rem] hover:rounded-[4rem_2.5rem_4rem_2.5rem/2.5rem_4rem_2.5rem_4rem] transition-[border-radius,background-color] duration-500";
const blobB =
  "rounded-[4rem_2.5rem_4rem_2.5rem/2.5rem_4rem_2.5rem_4rem] hover:rounded-[2.5rem_4rem_2.5rem_4rem/4rem_2.5rem_4rem_2.5rem] transition-[border-radius,background-color] duration-500";

export default function Home() {
  const data = StaticDataWebsite;

  return (
    <div
      className={`${body.className} fb-root min-h-screen bg-[var(--fb-bg)] text-[var(--fb-on-bg)] transition-colors`}
    >
      <a
        href="#contenu"
        className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-60 focus:rounded-full focus:bg-(--fb-primary) focus:px-4 focus:py-2 focus:text-(--fb-on-primary)"
      >
        Aller au contenu
      </a>

      {/* ============================ HEADER ============================ */}
      <header className="sticky top-4 z-50 mx-auto w-full max-w-7xl px-4">
        <div className="flex items-center justify-between rounded-full bg-(--fb-tonal) py-2 pl-6 pr-2 text-(--fb-on-tonal) shadow-lg shadow-black/20">
          <Link
            href="/"
            className={`${display.className} flex items-center gap-x-2 text-xl ${focusRing}`}
          >
            <PawPrint className="h-5 w-5" />
            {data.website.name}
          </Link>

          <nav className="hidden md:block" aria-label="Navigation principale">
            <ul className="flex gap-x-1">
              {data.header.nav.map((item, itemIndex) => (
                <li key={itemIndex}>
                  <Link
                    className={`group flex items-center gap-x-2 rounded-full px-4 py-2 font-semibold transition-all duration-300 hover:bg-white/10 ${focusRing}`}
                    href={item.href}
                  >
                    <PawPrint className="-ml-2 h-4 w-0 opacity-0 transition-all duration-300 group-hover:ml-0 group-hover:w-4 group-hover:opacity-100" />
                    {item.title}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          <div className="flex items-center gap-x-1">
            <ModeToggle />
            <Link
              href="#rejoindre"
              className={`inline-flex h-12 items-center gap-x-2 rounded-full bg-(--fb-accent) px-6 font-bold text-(--fb-on-accent) transition-all duration-300 hover:brightness-105 active:scale-95 ${focusRing}`}
            >
              Rejoindre <ArrowRight className="h-4 w-4" />
            </Link>
            <MobileMenu />
          </div>
        </div>
      </header>

      <main id="contenu">
        {/* ============================= HERO ============================= */}
        <section className="relative isolate -mt-20 overflow-hidden bg-(--fb-hero) pt-36 text-[#f6efe7]">
          <svg
            aria-hidden
            className="fb-drift pointer-events-none absolute inset-0 -z-10 h-full w-full"
            viewBox="0 0 1200 700"
            preserveAspectRatio="xMidYMid slice"
            fill="none"
          >
            <g
              className="blur-[6px]"
              stroke="var(--fb-ribbon)"
              strokeWidth="70"
              strokeLinecap="round"
              opacity="0.9"
            >
              <path d="M-80 120 C 150 20, 260 280, 470 190 S 760 -30, 920 120 S 1160 320, 1320 190" />
              <path d="M-80 580 C 200 470, 390 660, 630 560 S 980 450, 1320 610" />
              <path d="M980 -40 C 900 120, 1010 260, 1150 330" />
            </g>
          </svg>

          <div className="mx-auto grid max-w-7xl items-center gap-12 px-8 pb-24 lg:grid-cols-[1.15fr_0.85fr]">
            <div className="flex flex-col items-start gap-6">
              <span className="inline-flex items-center gap-x-2 rounded-full bg-(--fb-tonal) px-4 py-2 text-sm font-bold text-(--fb-on-tonal)">
                <Beer className="h-4 w-4" />
                {content.hero.eyebrow}
              </span>

              <h1
                className={`${display.className} text-5xl leading-[1.03] md:text-6xl lg:text-7xl`}
              >
                {content.hero.title.split(content.hero.highlight)[0]}
                <span className="inline-block -rotate-2 rounded-[60%_40%_55%_45%/55%_45%_55%_45%] bg-[#ede2d6] px-5 py-1 text-[#7f563b]">
                  {content.hero.highlight}
                </span>
                {content.hero.title.split(content.hero.highlight)[1]}
              </h1>

              <p className="max-w-xl text-xl font-semibold leading-relaxed">
                {content.hero.description}
              </p>

              <div className="flex flex-wrap gap-3 pt-2">
                <Link href="#rejoindre" className={btnPrimary}>
                  Rejoindre <ArrowRight />
                </Link>
                <Link href="#evenements" className={btnTonal}>
                  Voir les soirées
                </Link>
              </div>
            </div>

            <div className="relative mx-auto h-88 w-full max-w-md md:h-104">
              {/* Remplace la patte par <Image src="/logo.png" .../> si tu veux le logo ici */}
              <div className="fb-morph absolute left-1/2 top-1/2 flex h-72 w-72 -translate-x-1/2 -translate-y-1/2 items-center justify-center bg-[#ede2d6] shadow-[0_20px_60px_-20px_rgba(60,30,15,0.6)] md:h-80 md:w-80">
                <PawPrint className="h-32 w-32 text-[#9c6745] md:h-36 md:w-36" />
              </div>

              <div className="fb-float absolute -left-2 bottom-2 flex items-center gap-x-3 rounded-[2rem_2.5rem_2rem_1rem] bg-(--fb-tonal) px-5 py-4 text-(--fb-on-tonal) shadow-xl md:-left-6">
                <span className="flex h-11 w-11 items-center justify-center rounded-full bg-[#ede2d6] text-[#5c3a24]">
                  <CalendarHeart className="h-5 w-5" />
                </span>
                <div>
                  <p className="text-xs font-semibold opacity-80">
                    Prochaine soirée
                  </p>
                  <p className="font-bold">Sam. 21 nov. · 19h</p>
                </div>
              </div>
            </div>
          </div>

          {/* Bord ondulé */}
          <svg
            aria-hidden
            viewBox="0 0 1440 80"
            preserveAspectRatio="none"
            className="absolute bottom-0 left-0 block h-12 w-full text-(--fb-bg) md:h-16"
          >
            <path
              fill="currentColor"
              d="M0 80V40C120 10 240 10 360 36S600 70 720 44 960 4 1080 20s240 36 360 8V80Z"
            />
          </svg>
        </section>

        {/* ===================== INFOS PRATIQUES (user first) ===================== */}
        <section
          id="infos"
          aria-labelledby="infos-title"
          className="mx-auto max-w-7xl scroll-mt-24 px-8 pb-20 pt-8"
        >
          <h2 id="infos-title" className="sr-only">
            Infos pratiques
          </h2>
          <ul className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {content.facts.map((fact, i) => (
              <li
                key={fact.label}
                className={`${i % 2 === 0 ? blobA : blobB} flex flex-col gap-4 bg-(--fb-card) p-7 text-(--fb-on-card)`}
              >
                <span className="flex h-12 w-12 items-center justify-center rounded-full bg-(--fb-accent) text-(--fb-on-accent)">
                  <fact.icon className="h-6 w-6" />
                </span>
                <div>
                  <p className="text-sm font-bold uppercase tracking-wide text-(--fb-on-card-var)">
                    {fact.label}
                  </p>
                  <p
                    className={`${display.className} mt-1 text-2xl leading-tight`}
                  >
                    {fact.value}
                  </p>
                  <p className="mt-1 text-(--fb-on-card-var)">{fact.hint}</p>
                </div>
              </li>
            ))}
          </ul>
        </section>

        {/* ============================ ÉVÉNEMENTS ============================ */}
        <section
          id="evenements"
          aria-labelledby="events-title"
          className="mx-auto max-w-7xl scroll-mt-24 px-8 pb-24"
        >
          <SectionTitle
            id="events-title"
            eyebrow="Agenda"
            title="Prochaines soirées"
          />

          <div className="mt-10 grid gap-6 lg:grid-cols-[1.1fr_0.9fr]">
            {/* Événement mis en avant */}
            <article
              className={`${blobA} group relative flex min-h-104 flex-col justify-between overflow-hidden bg-(--fb-tonal) p-8 text-(--fb-on-tonal) md:p-10`}
            >
              <PawPrint className="pointer-events-none absolute -right-10 -top-10 h-64 w-64 rotate-12 opacity-[0.06]" />
              <div className="relative flex items-start justify-between gap-4">
                <div className="flex h-24 w-24 flex-col items-center justify-center rounded-[2rem_2.5rem_2rem_2.5rem] bg-(--fb-accent) text-text-(--fb-on-accent)">
                  <span
                    className={`${display.className} text-4xl leading-none`}
                  >
                    {content.events[0].day}
                  </span>
                  <span className="text-sm font-extrabold tracking-wider">
                    {content.events[0].month}
                  </span>
                </div>
                <span className="rounded-full bg-white/10 px-4 py-2 text-sm font-bold">
                  Prochainement
                </span>
              </div>

              <div className="relative space-y-4">
                <h3 className={`${display.className} text-4xl md:text-5xl`}>
                  {content.events[0].title}
                </h3>
                <p className="max-w-lg text-lg leading-relaxed opacity-90">
                  {content.events[0].desc}
                </p>
                <ul className="flex flex-wrap gap-2 text-sm font-bold">
                  <li className="inline-flex items-center gap-x-2 rounded-full bg-white/10 px-4 py-2">
                    <Clock className="h-4 w-4" /> {content.events[0].weekday} ·{" "}
                    {content.events[0].time}
                  </li>
                  <li className="inline-flex items-center gap-x-2 rounded-full bg-white/10 px-4 py-2">
                    <MapPin className="h-4 w-4" /> {content.events[0].place}
                  </li>
                </ul>
                <div className="flex flex-wrap gap-3 pt-2">
                  <Link href="#rejoindre" className={btnPrimary}>
                    Je viens <ArrowUpRight />
                  </Link>
                  <Link
                    href="#"
                    className={`${btnBase} bg-white/10 text-(--fb-on-tonal)`}
                  >
                    <CalendarPlus /> Ajouter au calendrier
                  </Link>
                </div>
              </div>
            </article>

            {/* Liste des dates suivantes */}
            <div
              className={`${blobB} flex flex-col gap-2 bg-(--fb-card) p-6 text-(--fb-on-card) md:p-8`}
            >
              <h3 className={`${display.className} px-2 pb-2 text-2xl`}>
                Ensuite
              </h3>
              <ul className="flex flex-col gap-2">
                {content.events.slice(1).map((event) => (
                  <li key={event.title}>
                    <Link
                      href="#"
                      className={`group flex items-center gap-4 rounded-[2rem] p-3 transition-all duration-300 hover:bg-(--fb-chip) ${focusRing}`}
                    >
                      <div className="flex h-16 w-16 shrink-0 flex-col items-center justify-center rounded-[1.25rem] bg-(--fb-tonal) text-(--fb-on-tonal)">
                        <span
                          className={`${display.className} text-2xl leading-none`}
                        >
                          {event.day}
                        </span>
                        <span className="text-[0.65rem] font-extrabold tracking-wider">
                          {event.month}
                        </span>
                      </div>
                      <div className="min-w-0 flex-1">
                        <p className="truncate text-lg font-extrabold">
                          {event.title}
                        </p>
                        <p className="truncate text-sm text-(--fb-on-card-var)">
                          {event.weekday} · {event.time}
                        </p>
                      </div>
                      <ArrowUpRight className="h-5 w-5 shrink-0 opacity-0 transition-opacity group-hover:opacity-100" />
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </section>

        {/* ============================ ACTIVITÉS ============================ */}
        <section
          id="activites"
          aria-labelledby="activities-title"
          className="mx-auto max-w-7xl scroll-mt-24 px-8 pb-24"
        >
          <SectionTitle
            id="activities-title"
            eyebrow="L'association"
            title="Ce qu'on y fait"
          />
          <ul className="mt-10 grid gap-4 md:grid-cols-2">
            {content.activities.map((a, i) => (
              <li
                key={a.title}
                className={`${i % 2 === 0 ? blobA : blobB} flex items-start gap-5 bg-(--fb-tonal) p-8 text-(--fb-on-tonal)`}
              >
                <span className="flex h-14 w-14 shrink-0 items-center justify-center rounded-full bg-(--fb-accent) text-(--fb-on-accent)">
                  <a.icon className="h-7 w-7" />
                </span>
                <div>
                  <h3 className={`${display.className} text-2xl`}>{a.title}</h3>
                  <p className="mt-2 leading-relaxed opacity-90">{a.desc}</p>
                </div>
              </li>
            ))}
          </ul>
        </section>

        {/* ============================ REJOINDRE ============================ */}
        <section
          id="rejoindre"
          aria-labelledby="join-title"
          className="mx-auto max-w-7xl scroll-mt-24 px-8 pb-24"
        >
          <div className="grid gap-6 lg:grid-cols-[0.9fr_1.1fr]">
            <div className="flex flex-col justify-between gap-8 rounded-[3rem_5rem_3rem_5rem/4rem_3rem_5rem_3rem] bg-(--fb-accent) p-8 text-(--fb-on-accent) md:p-12">
              <div className="space-y-4">
                <h2
                  id="join-title"
                  className={`${display.className} text-4xl md:text-5xl`}
                >
                  Rejoins la meute
                </h2>
                <p className="text-lg font-semibold leading-relaxed">
                  L&apos;adhésion est à 10 € par an. Elle soutient
                  l&apos;organisation des soirées et donne accès au groupe de
                  discussion.
                </p>
              </div>
              <div className="flex flex-wrap gap-3">
                <Link
                  href="#"
                  className={`${btnBase} bg-(--fb-on-accent) text-(--fb-accent)`}
                >
                  Adhérer <ArrowRight />
                </Link>
                <Link
                  href="#faq"
                  className={`${btnBase} bg-black/10 text-(--fb-on-accent)`}
                >
                  Une question ?
                </Link>
              </div>
            </div>

            <ol className="flex flex-col gap-4">
              {content.steps.map((step, i) => (
                <li
                  key={step.title}
                  className={`${i % 2 === 0 ? blobB : blobA} flex items-center gap-5 bg-(--fb-card) p-6 text-(--fb-on-card) md:p-8`}
                >
                  <span
                    className={`${display.className} flex h-16 w-16 shrink-0 items-center justify-center rounded-[40%_60%_55%_45%/50%_45%_55%_50%] bg-(--fb-tonal) text-3xl text-(--fb-on-tonal)`}
                  >
                    {i + 1}
                  </span>
                  <div>
                    <h3 className={`${display.className} text-2xl`}>
                      {step.title}
                    </h3>
                    <p className="mt-1 text-(--fb-on-card-var)">{step.desc}</p>
                  </div>
                </li>
              ))}
            </ol>
          </div>
        </section>

        {/* ================================ FAQ ================================ */}
        <section
          id="faq"
          aria-labelledby="faq-title"
          className="mx-auto max-w-4xl scroll-mt-24 px-8 pb-28"
        >
          <SectionTitle
            id="faq-title"
            eyebrow="Questions fréquentes"
            title="Avant de venir"
            center
          />
          <div className="mt-10 flex flex-col gap-3">
            {content.faq.map((item) => (
              <details
                key={item.q}
                className="group rounded-[2rem] bg-(--fb-card) text-(--fb-on-card) transition-all duration-300 open:rounded-[2.5rem]"
              >
                <summary
                  className={`flex cursor-pointer list-none items-center justify-between gap-4 rounded-[inherit] p-6 text-lg font-extrabold [&::-webkit-details-marker]:hidden ${focusRing}`}
                >
                  {item.q}
                  <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-(--fb-chip) transition-transform duration-300 group-open:rotate-180">
                    <ChevronDown className="h-5 w-5" />
                  </span>
                </summary>
                <p className="px-6 pb-6 leading-relaxed text-(--fb-on-card-var)">
                  {item.a}
                </p>
              </details>
            ))}
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}

/* -------------------------------------------------------------------------- */
/*  Composants                                                                */
/* -------------------------------------------------------------------------- */
function SectionTitle({
  id,
  eyebrow,
  title,
  center = false,
}: {
  id: string;
  eyebrow: string;
  title: string;
  center?: boolean;
}) {
  return (
    <div
      className={`flex flex-col gap-3 ${center ? "items-center text-center" : "items-start"}`}
    >
      <span className="rounded-full bg-(--fb-tonal) px-4 py-1.5 text-sm font-bold text-(--fb-on-tonal)">
        {eyebrow}
      </span>
      <h2 id={id} className={`${display.className} text-4xl md:text-5xl`}>
        {title}
      </h2>
    </div>
  );
}

function MobileMenu() {
  const data = StaticDataWebsite;
  return (
    <div className="md:hidden">
      <DropdownMenu>
        <DropdownMenuTrigger
          render={
            <Button variant="ghost" size="icon-lg" className="rounded-full">
              <Menu className="h-[1.2rem] w-[1.2rem]" />
              <span className="sr-only">Ouvrir le menu</span>
            </Button>
          }
        >
          Menu
        </DropdownMenuTrigger>
        <DropdownMenuContent align="end">
          {data.header.nav.map((item, i) => (
            <DropdownMenuItem key={i} render={<Link href={item.href} />}>
              {item.title}
            </DropdownMenuItem>
          ))}
          <DropdownMenuItem render={<Link href="#rejoindre" />}>
            Rejoindre
          </DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>
    </div>
  );
}

export function ModeToggle() {
  const { setTheme } = useTheme();
  return (
    <DropdownMenu>
      <DropdownMenuTrigger
        render={
          <Button variant="ghost" size="icon-lg" className="rounded-full">
            <Sun className="h-[1.2rem] w-[1.2rem] scale-100 rotate-0 transition-all dark:scale-0 dark:-rotate-90" />
            <Moon className="absolute h-[1.2rem] w-[1.2rem] scale-0 rotate-90 transition-all dark:scale-100 dark:rotate-0" />
            <span className="sr-only">Changer le thème</span>
          </Button>
        }
      >
        Open
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end">
        <DropdownMenuItem onClick={() => setTheme("light")}>
          Clair
        </DropdownMenuItem>
        <DropdownMenuItem onClick={() => setTheme("dark")}>
          Sombre
        </DropdownMenuItem>
        <DropdownMenuItem onClick={() => setTheme("system")}>
          Système
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
