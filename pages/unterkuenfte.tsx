import type { NextPage } from "next";
import SidePageHeader from "../components/side-page-header";
import AccommodationsContainer from "../components/accommodations-container";
import AccommodationSection from "../components/accommodation-section";
import GallerySection from "../components/gallery-section";
import Footer from "../components/footer";

const gemeinschaftshaus = {
  id: "gemeinschaftshaus",
  eyebrow: "Für gesellige Abende",
  title: "Das Gemeinschaftshaus",
  description:
    "Unser Gemeinschaftshaus im unteren Teil des Familiencamps bietet alles für ein gemütliches Beisammensein. Eine geräumige Küche, große Tische und eine große Anzahl von Stühlen bieten jedem Gast Platz, um beispielsweise das Fernsehprogramm auf dem Flatscreen zu verfolgen oder einfach einen geselligen Abend mit Freunden zu verbringen.",
  facts: [
    "Bis zu 20 Personen",
    "Spiel- & TV-Hütte",
    "Kühlmöglichkeiten & Teeküche",
  ],
  images: [
    {
      src: "/kulturhütte.webp",
      alt: "Das Gemeinschaftshaus im Familiencamp",
      className: "col-span-2",
    },
  ],
  ctaLabel: null
};

const weitereEindruecke = [
  {
    src: "/doppelhäuser.webp",
    alt: "Doppelhäuser auf dem Gelände",
    className: "col-span-1  row-span-2",
    sizes: "100vw",
  },
  {
    src: "/hütten-unten.webp",
    alt: "Weitere kleine Hütten",
    className: "col-span-1 row-span-1",
    sizes: "100vw",
  },
  {
    src: "/tischtennisplatte.webp",
    alt: "Tischtennisplatte auf dem Gelände",
    className: "col-span-1 row-span-2",
    sizes: "100vw",
  },
  {
    src: "/outdoor-küche-einwärts.webp",
    alt: "Die überdachte Outdoor-Küche",
    className: "col-span-1 row-span-2",
    sizes: "50vw",
  },
  {
    src: "/outdoor-küche-überdacht-2.webp",
    alt: "Die überdachte Outdoor-Küche",
    className: "col-span-1 row-span-2",
    sizes: "50vw",
  },
  {
    src: "/abwaschzeile.webp",
    alt: "Die Abwaschzeile des Familiencamps",
    className: "col-span-1",
    sizes: "50vw",
  },
  {
    src: "/volleyballplatz.webp",
    alt: "Volleyballplatz des Familiencamps",
    className: "col-span-2 row-span-2",
    sizes: "50vw",
  },
];

const Unterkuenfte: NextPage = () => {
  return (
    <div className="relative bg-light-text-color w-full overflow-hidden flex flex-col items-center justify-start text-center text-base text-black font-title-2">
      <SidePageHeader
        sidePageHeaderPosition="unset"
        sidePageHeaderWidth="unset"
        sidePageHeaderHeight="20.81rem"
        sidePageHeaderAlignSelf="stretch"
        sidePageHeaderHeight1="5.63rem"
        sidePageHeaderPadding="0.63rem 1rem"
      />
      <div className="self-stretch [background:linear-gradient(180deg,_#fff5eb,_#fff_50.52%,_#fff5eb)] w-full flex flex-col items-stretch justify-start">
        <div className="w-full max-w-[80rem] mx-auto flex flex-col items-stretch justify-start">
          <AccommodationsContainer />
          <div className="self-stretch w-full flex flex-col px-[2rem] sm:px-[1rem] pb-[5rem] sm:pb-[2rem] box-border items-stretch justify-start gap-[3rem] sm:gap-[2.5rem]">
            <AccommodationSection {...gemeinschaftshaus} />
            <div className="self-stretch relative h-[0.06rem] border-t-[1px] border-solid border-gray-300" />
            <GallerySection items={weitereEindruecke} />
          </div>
          <Footer />
        </div>
      </div>
    </div>
  );
};

export default Unterkuenfte;
