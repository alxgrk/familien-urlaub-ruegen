import type { NextPage } from "next";
import Image from "next/image";
import {useCallback, useMemo, useState} from "react";
import Link from "next/link";
import { useRouter } from "next/router";
import MainPageHeader from "../components/main-page-header";

import FlexRow from "../components/flex-row";
import RoomCard from "../components/room-card";
import Footer from "../components/footer";
import PeopleSelector from "../components/people-selector";
import {DatePicker} from "@mui/x-date-pickers";
import CSS from "csstype";

const BookingStrip: NextPage<{onSearchButtonClick: (anreise: Date, abreise: Date, numErwachsene: number, numKinder: number) => void}> = ({onSearchButtonClick}) => {
  const [anreiseTag, setAnreiseTag] = useState(new Date());
  const [abreiseTag, setAbreiseTag] = useState(new Date(anreiseTag.getTime() + 7 * 24 * 60 * 60 * 1000));
  const minAbreiseTag = useMemo(() => {
    const minAbreise = new Date(anreiseTag.getTime() + 7 * 24 * 60 * 60 * 1000);
    const selectedAbreise = abreiseTag;
    return minAbreise.getTime() < selectedAbreise.getTime() ? selectedAbreise : minAbreise;
  }, [anreiseTag, abreiseTag]);

  const [numErwachsene, setNumErwachsene] = useState(2);
  const [numKinder, setNumKinder] = useState(0);

  return <div className="w-full max-w-[68rem] flex flex-row self-center items-center justify-center gap-[1.5rem] text-base text-dimgray-200">
    <div
      className="self-center flex flex-row px-[1.5rem] py-[1rem] items-center justify-start gap-[1.5rem] text-dimgray-200
      lg:flex-row lg:justify-between
      md:flex-col md:justify-center md:gap-[0.5rem]
      sm:flex-col sm:justify-center sm:gap-[0.2rem]">
    <div
        className="self-stretch flex-1 rounded-81xl flex flex-col py-[1rem] px-[0.5rem] items-center justify-center
        md:flex-[unset] md:self-stretch
        sm:w-auto sm:self-stretch sm:pl-[0rem] sm:pr-[0rem] sm:box-border sm:flex-[unset]">
      <DatePicker
          className="relative text-[1rem] leading-[125%] text-dimgray-200"
          label="Anreisetag"
          value={anreiseTag}
          onChange={(v: any) => {
            setAnreiseTag(v)
          }}
          slotProps={{
            textField: {
              variant: "standard",
              size: "medium",
              required: true,
              color: "primary",
            },
          }}
      />
    </div>
    <div className="relative box-border w-[0.06rem] h-[2.56rem] border-r-[1px] border-solid border-gray-300 sm:hidden md:hidden"/>
    <div
        className="self-stretch flex-1 rounded-81xl flex flex-col py-[1rem] px-[0.5rem] items-center justify-center md:flex-[unset] md:self-stretch sm:w-auto sm:self-stretch sm:flex-[unset]">
      <DatePicker
          className="relative text-[1rem] leading-[125%] text-dimgray-200"
          label="Abreisetag"
          value={minAbreiseTag}
          onChange={(v: any) => {
            setAbreiseTag(v)
          }}
          slotProps={{
            textField: {
              variant: "standard",
              size: "medium",
              required: true,
              color: "primary",
            },
          }}
      />
    </div>
    <div className="relative box-border w-[0.06rem] h-[2.56rem] border-r-[1px] border-solid border-gray-300 sm:hidden md:hidden"/>
    <div
        className="max-w-[22rem] self-stretch flex-1 rounded-81xl flex flex-row py-[1rem] px-[0.1rem] items-center justify-center gap-[0.75rem] md:flex-[unset] md:self-stretch sm:w-auto sm:self-stretch sm:flex-[unset]">
      <div className="flex flex-col items-start justify-center">
        <Image
            className="relative w-[1.37rem] h-[1.06rem]"
            alt="Personen"
            src="/vector.svg"
            width={22}
            height={17}
        />
      </div>
      <div className="flex flex-col items-start justify-center sm:flex-col md:flex-col">
        <div className="relative leading-[125%]">Unterkunft für</div>
        <PeopleSelector
            numErwachsene={numErwachsene}
            numKinder={numKinder}
            onErwachseneChange={(value) => setNumErwachsene(value)}
            onKinderChange={(value) => setNumKinder(value)}
        />
      </div>
    </div>
    <button
        className="cursor-pointer min-w-[30%] [border:none] py-[1rem] px-[0.5rem] bg-rectangle-805 flex-1 rounded-45xl
        shadow-[0px_138px_39px_rgba(0,_0,_0,_0),_0px_89px_35px_rgba(0,_0,_0,_0.01),_0px_50px_30px_rgba(0,_0,_0,_0.05),_0px_22px_22px_rgba(0,_0,_0,_0.09),_0px_6px_12px_rgba(0,_0,_0,_0.1),_0px_0px_0px_rgba(0,_0,_0,_0.1)]
        flex flex-row items-center justify-center gap-[0.5rem]
        md:min-w-[40%] md:flex-[unset] md:self-stretch
        sm:min-w-[40%] sm:self-stretch sm:w-auto sm:pl-[0.5rem] sm:pr-[0.5rem] sm:box-border sm:flex-[unset]"
        onClick={() => onSearchButtonClick(anreiseTag, minAbreiseTag, numErwachsene, numKinder)}
    >
      <Image
          className="relative w-[1.5rem] h-[1.5rem] overflow-hidden shrink-0"
          alt="Suche"
          src="/magnifier--24--outline.svg"
          width={24}
          height={24}
      />
      <span className="relative text-[1.13rem] leading-[1.5rem] font-title-2 font-bold text-light-text-color text-left">
        Verfügbarkeit prüfen
      </span>
    </button>
  </div>
  </div>;
}

const WelcomeSection: NextPage = () => {
  return (
    <section
        className="w-full max-w-[80rem] mt-[2rem] mx-auto flex flex-row md:flex-col sm:flex-col items-center justify-center gap-[3rem] md:gap-[2rem] sm:gap-[1.5rem] py-[4rem] sm:py-[2.5rem] px-[2rem] sm:px-[1.5rem] box-border text-left">
      <div
          className="flex-1 flex flex-col items-start justify-start gap-[1.25rem] leading-[1.6rem] text-dimgray-200">
        <div className="rounded-full bg-lightskyblue text-rectangle-805 text-base font-medium leading-none py-[0.3rem] px-[0.9rem]">
          Willkommen im Familiencamp
        </div>
        <h2 className="m-0 relative leading-[125%] text-[2.25rem] sm:text-[2rem] text-black">
          Familienurlaub auf <span className="text-rectangle-805">Rügen</span>
        </h2>
        <p className="m-0 text-[1.25rem] leading-[1.75rem] font-medium text-dimgray-300">
          Nur 100 Meter vom Strand entfernt: unser
          naturbelassenes Familiencamp in Drewoldke.
        </p>
        <p className="m-0">
          Gemütliche Ferienhäuser und ein Gemeinschaftshaus warten
          im Kiefernwäldchen hinter der Düne. Familien finden hier Platz zum Spielen
          und Entspannen.
        </p>
        <p className="m-0">
          Baden am Morgen, Radtour nach Kap Arkona am Nachmittag und abends
          gesellige Stunden im Gemeinschaftshaus. So abwechslungsreich kann der
          Urlaub sein.
        </p>
      </div>
        <div
            className="relative w-[45%] md:w-full sm:w-full h-[24rem] md:h-[20rem] sm:h-[15rem] shrink-0 rounded-13xl overflow-hidden">
            <Image
                src="/kontakt-banner.webp"
                alt="Abendstimmung am Feld bei Drewoldke auf Rügen"
                fill
                sizes="(max-width: 960px) 100vw, 45vw"
                className="object-cover animate-ken-burns motion-reduce:animate-none"
            />
        </div>
    </section>
  );
};

const lageItems = [
    "Naturbelassener Strand",
    "Meer in 100m Entfernung",
    "Ruhiges Areal im Wald",
    "Campingplatz-Markt",
    "Fahrradtouren über die Insel",
];

const ausstattungItems = [
    "Kühlschrank",
    "Kaffeemaschine",
    "Wasserkocher",
    "Mikrowelle/Grill",
    "Staubsauger",
    "Etagenbetten"
];

const gemeinschaftItems = [
    "Spiel- & TV-Hütte",
    "Outdoor-Küche",
    "Sanitärtrakt",
    "Waschmaschinen",
    "Tischtennisplatten",
    "Volleyballplatz",
];

const highlightChipClassName =
  "rounded-full bg-lightskyblue text-rectangle-805 text-base font-medium leading-none py-[0.3rem] px-[0.9rem]";

type HighlightCardProps = {
  icon: string;
  title: string;
  items: string[];
  href: string;
  onLinkClick: () => void;
};

const HighlightCard: NextPage<HighlightCardProps> = ({icon, title, items, href, onLinkClick}) => {
  return (
    <div
        className="self-stretch max-w-[25rem] min-h-[25rem] flex-1 overflow-hidden flex flex-col items-center justify-start sm:flex-[unset] sm:self-stretch">
      <FlexRow
          icnCircleCircleMd={icon}
          h5={title}
      />
      <div
          className="self-stretch flex-1 bg-light-text-color overflow-hidden flex flex-col py-[1.88rem] px-[3.13rem] items-start justify-start gap-[0.75rem] border-[1px] border-solid border-rectangle-805">
        <div className="flex flex-wrap gap-[0.4rem] items-start">
          {items.map((item) => (
            <div key={item} className={highlightChipClassName}>
              {item}
            </div>
          ))}
        </div>
        <div className="mt-auto w-full flex flex-row items-center justify-end">
          <Link
              className="cursor-pointer [text-decoration:none] border-[1px] border-solid border-rectangle-805 text-rectangle-805 font-semibold text-base px-[1.25rem] py-[0.5rem]"
              href={href}
              onClick={onLinkClick}
          >
            {`Mehr zur ${title}`}
          </Link>
        </div>
      </div>
    </div>
  );
};

const HighlightsSection: NextPage<{ onLinkClick: () => void, onButtonClick: () => void }> = ({onLinkClick, onButtonClick}) => {
  return <div
      className="self-stretch w-full flex flex-col items-center justify-start">
    <div
        className="w-full max-w-[80rem] mx-auto flex flex-col py-[5rem] px-[4rem] sm:px-[1rem] box-border items-center justify-start gap-[2.5rem]">
    <div className="relative mb-[2rem] box-border w-[80%] h-[0.06rem] border-t-[1px] border-solid border-gray-300"/>
    <div className="flex flex-col py-[0.5rem] px-[0rem] items-center justify-start gap-[0.5rem]">
      <h2 className="m-0 relative leading-[125%] text-[2.25rem] sm:text-[2rem]">
        Unsere Highlights
      </h2>
      <div className="relative text-[1.25rem] leading-[125%] font-medium text-dimgray-100">
        Freuen Sie sich auf:
      </div>
    </div>
    <div
        className="self-center flex-1 flex flex-row py-[2rem] gap-[1rem] items-center justify-start text-[1.25rem] text-light-text-color
        xl:gap-[1rem]
        lg:flex-row lg:items-start lg:justify-between
        md:h-auto md:flex-col md:items-start md:justify-start
        sm:h-auto sm:flex-col sm:items-start sm:justify-between sm:px-[1rem] sm:pt-[2rem] sm:box-border">
      <HighlightCard
          icon="/icncircle-circlemd.svg"
          title="Lage"
          items={lageItems}
          href="/lage"
          onLinkClick={onLinkClick}
      />
      <HighlightCard
          icon="/icncircle-circlemd1.svg"
          title="Ausstattung"
          items={ausstattungItems}
          href="/unterkuenfte"
          onLinkClick={onLinkClick}
      />
      <HighlightCard
          icon="/icncircle-circlemd2.svg"
          title="Gemeinschaft"
          items={gemeinschaftItems}
          href="/unterkuenfte"
          onLinkClick={onLinkClick}
      />
    </div>
    <div className="relative mb-[2rem] box-border w-[80%] h-[0.06rem] border-t-[1px] border-solid border-gray-300"/>
    <div
        className="self-stretch flex flex-row py-[0rem] px-[2rem] items-start justify-center text-[1rem] text-rectangle-807
         md:flex-1 md:flex-col md:gap-[0rem] md:items-center md:justify-between md:pt-[0rem] md:box-border
         sm:flex-col sm:items-center sm:justify-between sm:gap-[0rem] sm:pl-[0rem] sm:pr-[0rem] sm:box-border">
      <div
          className="self-stretch flex-1 flex flex-col items-start justify-center z-[1] md:flex-[unset] md:self-stretch sm:items-center sm:justify-center sm:px-[1.5rem] sm:box-border sm:flex-[unset] sm:self-stretch">
        <Image
            className="self-stretch rounded-13xl flex-1 relative rounded-m max-w-full overflow-hidden max-h-full object-cover sm:w-full sm:max-w-full"
            alt="Beliebte Ausflugsziele auf Rügen, wie Kap Arkona"
            src="/ausflugsziele.webp"
            width={1504}
            height={872}
            sizes="(max-width: 960px) 100vw, 50vw"
        />
      </div>
      <div
          className="w-full max-w-[30rem] flex flex-col py-[2.5rem] px-[3.5rem] box-border items-start justify-start relative gap-[2.5rem] z-[0] sm:w-auto sm:px-[1.5rem] sm:items-center sm:justify-center sm:box-border">
        <div className="self-stretch flex flex-col items-start justify-start gap-[1.5rem] z-[0]">
          <div className="self-stretch flex flex-col items-start justify-start gap-[0.25rem]">
            <div className="relative leading-[125%]">
              <span>{`z.B. `}</span>
              <span className="font-bold">Kap Arkona</span>
            </div>
            <h2 className="m-0 self-stretch relative text-[2rem] leading-[125%] font-medium text-black">
              Beliebte Ausflugsziele
            </h2>
          </div>
          <div
              className="w-[23rem] flex flex-col items-start justify-start text-dimgray-200 sm:self-stretch sm:w-auto">
            <div className="self-stretch relative leading-[125%]">
              <p className="m-0">
                Ob Kap Arkona, das Fischerdörfchen Vitt oder die Häfen von
                Wiek, Dranske und Breege: All diese Ziele erreichen Sie
                leicht per Fahrrad. Dabei erkunden Sie den Norden der Insel
                Rügen.
              </p>
              <p className="m-0">
                Auch ein Tagesausflug zur nahegelegenen Insel Hiddensee ist
                von Dranske oder Wiek aus möglich.
              </p>
            </div>
          </div>
        </div>
        <a
            className="[text-decoration:none] rounded-45xl bg-rectangle-805 h-[2.75rem] flex flex-row py-[0rem] px-[1.25rem] box-border items-center justify-start cursor-pointer z-[1] text-[1.13rem] text-light-text-color"
            href="https://www.tripadvisor.de/Attractions-g946482-Activities-Rugen_Island_Mecklenburg_West_Pomerania.html"
            target="_blank"
            onClick={onButtonClick}
        >
          <span className="relative leading-[1.5rem] font-bold">Mehr Entdecken</span>
        </a>
      </div>
    </div>
      </div>
  </div>;
}

const CTASection: NextPage<{ onCTAButtonClick: () => void }> = ({onCTAButtonClick}) => {
    return <div
        className="self-stretch w-full flex flex-col px-[0rem] box-border items-center justify-start relative isolate">
        <Image
            src="/cta.webp"
            alt="Familienurlaub am Strand von Rügen"
            fill
            sizes="100vw"
            className="-z-10 object-cover object-top"
        />
        <div
            className="w-full mx-auto flex flex-col items-center justify-start py-[5rem] gap-[1.5rem] text-[2.5rem] text-light-text-color bg-gray-300">
            <h2 className="m-0 relative leading-[125%] text-[2.25rem] sm:text-[1.75rem] font-normal">
                Um Erinnerungen zu schaffen
            </h2>
            <Link
                className="cursor-pointer [text-decoration:none] rounded-45xl bg-light-text-color shadow-[0px_138px_39px_rgba(0,_0,_0,_0),_0px_89px_35px_rgba(0,_0,_0,_0.01),_0px_50px_30px_rgba(0,_0,_0,_0.05),_0px_22px_22px_rgba(0,_0,_0,_0.09),_0px_6px_12px_rgba(0,_0,_0,_0.1),_0px_0px_0px_rgba(0,_0,_0,_0.1)] h-[3.5rem] flex flex-row py-[0rem] px-[1.5rem] box-border items-center justify-start text-[1.13rem] text-rectangle-805"
                href="/buchung"
                onClick={onCTAButtonClick}
            >
            <span className="relative leading-[1.5rem] font-bold">Jetzt reservieren</span>
            </Link>
        </div>
    </div>;
}

const RoomsSection: NextPage<{onItemsContainerClick: () => void}> = ({onItemsContainerClick}) => {
    return <div
        className="self-stretch w-full flex flex-col items-center justify-start">
        <div
            className="w-full max-w-[80rem] mx-auto flex flex-col py-[5rem] px-[0rem] box-border items-center justify-start gap-[3rem] sm:gap-[0rem] sm:py-[3rem] sm:px-[0rem] sm:box-border">
        <div
            className="flex flex-col items-center justify-start gap-[0.5rem] sm:pl-[0rem] sm:pr-[0rem] sm:box-border">
            <h2 className="m-0 relative leading-[125%] text-[2.25rem] sm:text-[2rem]">Unterkünfte</h2>
            <div className="relative text-[1.25rem] leading-[125%] font-medium text-dimgray-100 sm:text-[1rem]">
                Sehen Sie sich die verfügbaren Bungalows an
            </div>
            <div className="relative leading-[125%] text-dimgray-200 md:gap-[2rem] sm:gap-[1.5rem] px-[5rem] sm:px-[4.5rem] ">
                <p className="m-0 text-center">
                    Unterschieden wird zwischen kleinen Ferienhütten, zu denen auch 4 Doppelhaushälften zählen, und großen Ferienhütten. Die Anzahl der Betten variiert zwischen 3, 4 oder sogar 6 Betten.
                </p>
            </div>
        </div>
        <div
            className="flex flex-row items-center justify-center relative gap-[1.5rem] md:flex-col md:gap-[1.5rem] md:items-center md:justify-center sm:flex-col sm:items-center sm:justify-between sm:gap-[0rem] sm:px-[1.5rem] sm:box-border">
            <div
                className="flex-1 flex flex-row items-center justify-center gap-[1.25rem] z-[1] lg:flex-row lg:gap-[1.25rem] lg:items-center lg:justify-center md:flex-col md:gap-[1.25rem] md:items-center md:justify-center md:flex-[unset] md:self-stretch sm:flex-col sm:gap-[1.25rem] sm:items-center sm:justify-between sm:pl-[0rem] sm:pr-[0rem] sm:box-border sm:flex-[unset] sm:self-stretch"
                onClick={onItemsContainerClick}
            >
              <Link
                  className="cursor-pointer [text-decoration:none] flex-1 max-w-[27rem] rounded-13xl flex flex-col p-[1rem] items-start justify-start text-left text-[1.25rem] text-color-text font-title-2 md:flex-[unset] md:self-stretch sm:w-auto sm:self-stretch sm:flex-[unset] sm:items-center sm:justify-between sm:gap-[0rem] sm:pl-[0rem] sm:pr-[0rem] sm:box-border sm:min-w-0 sm:max-w-[26.25rem]"
                  href="/unterkuenfte#kleines-haus"
              >
                <RoomCard
                    image="/kleine-hütte-quer.webp"
                    title="Kleiner Bungalow"
                    description="3 Betten"
                    price="ab 40€"
                />
              </Link>
              <Link
                  className="cursor-pointer [text-decoration:none] flex-1 max-w-[27rem] rounded-13xl flex flex-col p-[1rem] items-start justify-start text-left text-[1.25rem] text-color-text font-title-2 md:flex-[unset] md:self-stretch sm:w-auto sm:self-stretch sm:flex-[unset] sm:items-center sm:justify-between sm:gap-[0rem] sm:pl-[0rem] sm:pr-[0rem] sm:box-border sm:min-w-0 sm:max-w-[26.25rem]"
                  href="/unterkuenfte#grosses-haus"
              >
                <RoomCard
                    image="/grosse-hütte-im-wald.webp"
                    title="Großer Bungalow"
                    description="Bis zu 6 Betten"
                    price="ab 52€"
                />
              </Link>
            </div>
        </div>
        </div>
    </div>;
}

const Homepage: NextPage = () => {
  const router = useRouter();

  const onSearchButtonClick = useCallback((anreise: Date, abreise: Date, numErwachsene: number, numKinder: number) => {
    router.push(`/buchung?anreise=${anreise.toISOString()}&abreise=${abreise.toISOString()}&numErwachsene=${numErwachsene}&numKinder=${numKinder}`);
  }, [router]);

  const onLinkClick = useCallback(() => {
    router.push("/unterkuenfte");
  }, [router]);

  const onButtonClick = useCallback(() => {
    window.open(
      "https://www.tripadvisor.de/Attractions-g946482-Activities-Rugen_Island_Mecklenburg_West_Pomerania.html"
    );
  }, []);

  const onCTAButtonClick = useCallback(() => {
    router.push("/buchung");
  }, [router]);

  const onItemsContainerClick = useCallback(() => {
    router.push("/unterkuenfte");
  }, [router]);

  return (
    <div
        className="relative bg-light-text-color w-full overflow-hidden flex flex-col items-center justify-start text-left text-base text-black font-title-2 md:[align-self:unset] sm:[align-self:unset]">
        <MainPageHeader/>
        <div
            className="[background:linear-gradient(180deg,_#fff5eb,_#fff_48.44%,_#fff5eb)] w-full flex flex-col items-stretch justify-start lg:box-border sm:[align-self:unset]">
            <div className="flex flex-col items-stretch justify-start w-full">
                <main className="flex flex-col items-stretch justify-start w-full">
                   <div className="w-full flex flex-row self-center items-center justify-center bg-lightskyblue">
                    <BookingStrip onSearchButtonClick={onSearchButtonClick}/>
                     </div>
                    <WelcomeSection/>
                    <HighlightsSection onLinkClick={onLinkClick} onButtonClick={onButtonClick}/>
                    <CTASection onCTAButtonClick={onCTAButtonClick}/>
                    <RoomsSection onItemsContainerClick={onItemsContainerClick} />
                </main>
                <div className="w-full max-w-[80rem] mx-auto">
                    <Footer/>
                </div>
            </div>
        </div>
    </div>
  );
};

export default Homepage;
