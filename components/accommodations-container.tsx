import type { NextPage } from "next";
import AccommodationSection, {
  SectionImage,
} from "./accommodation-section";

const unterkuenfte: {
  id: string;
  eyebrow: string;
  title: string;
  description: string;
  facts: string[];
  images: SectionImage[];
}[] = [
  {
    id: "kleines-haus",
    eyebrow: "Bis zu 4 Personen",
    title: "Kleines Ferienhaus",
    description:
      "Unser kleines Ferienhaus ist ideal für zwei Personen und bietet bei maximaler Auslastung 4 Schlafplätze. Diese gemütlichen Häuschen befinden sich am Ende des Grundstücks ganz in der Nähe des Strandes zum Tromper Wiek.",
    facts: ["2 Personen ideal", "Bis zu 4 Schlafplätze", "Auch als Doppelhaushälfte"],
    images: [
      {
        src: "/kleine-hütte-hochkant.webp",
        alt: "Kleines Ferienhaus des Familiencamps",
        className: "col-span-1 row-span-2",
      },
      {
        src: "/haus-drewoldke.webp",
        alt: "Ferienhaus auf dem Grundstück in Drewoldke",
        className: "col-span-1 row-span-2",
      },
      {
        src: "/teeküche-drewoldke.webp",
        alt: "Teeküche im kleinen Ferienhaus",
        className: "col-span-1",
      },
      {
        src: "/kleine-hütten-links.webp",
        alt: "Reihe der kleinen Ferienhäuser",
        className: "col-span-1",
      },
    ],
  },
  {
    id: "grosses-haus",
    eyebrow: "Bis zu 6 Personen",
    title: "Großes Ferienhaus",
    description:
      "Das größte unserer Ferienhäuser bietet 4 bis maximal 6 Personen Platz und ist damit ideal für kleine Gruppen oder große Familien, die in der Nähe der Ostsee Erholung suchen. Einige der Häuser besitzen auch eine Schlafcouch die es dann bis zu 6 Personen erlaubt in unserem großen Ferienhaus zu übernachten.",
    facts: [
      "4 bis 6 Personen",
      "Für Gruppen und Familien",
      "Mit Terasse und Vordach",
    ],
    images: [
      {
        src: "/haus-1.webp",
        alt: "Großes Ferienhaus des Familiencamps",
        className: "col-span-1 row-span-2",
      },
      {
        src: "/haus-1-dach.webp",
        alt: "Dach und Balkon des großen Ferienhauses",
        className: "col-span-1",
      },
      {
        src: "/haus-1-mit-vorplatz.webp",
        alt: "Vorplatz vor dem großen Ferienhaus",
        className: "col-span-1",
      },
    ],
  },
];

const AccommodationsContainer: NextPage = () => {
  return (
    <div
      className="self-stretch w-full flex flex-col py-[5rem] sm:py-[2rem] px-[2rem] sm:px-[1rem] box-border items-center justify-start gap-[3rem] sm:gap-[2.5rem] text-center text-base text-black font-title-2"
    >
      <div className="self-stretch flex flex-col items-center justify-center gap-[1rem]">
        <b className="self-stretch relative leading-[125%] text-[2.25rem] sm:text-[2rem]">
          Unsere Unterkünfte
        </b>
        <div className="self-stretch relative text-[1.25rem] leading-[125%] font-medium text-dimgray-100 sm:font-title-2">
          Für alle Familiengrößen
        </div>
      </div>
      {unterkuenfte.map((unterkunft) => (
          <div key={unterkunft.id}>
            <AccommodationSection {...unterkunft} />
            <div className="self-stretch relative my-[2.5rem] h-[0.06rem] border-t-[1px] border-solid border-gray-300" />
          </div>
      ))}
    </div>
  );
};

export default AccommodationsContainer;
