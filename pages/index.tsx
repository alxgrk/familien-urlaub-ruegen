import type { NextPage } from "next";
import Head from "next/head";
import { useCallback } from "react";
import Link from "next/link";
import { useRouter } from "next/router";
import MainPageHeader from "../components/main-page-header";
import Sidebar from "../components/Sidebar";
import FlexRow from "../components/flex-row";
import RoomCard from "../components/room-card";
import Footer from "../components/footer";

const BookingStrip: NextPage<{onSearchButtonClick: () => void}> = ({onSearchButtonClick}) => {
  return <div className="w-full flex flex-row items-center justify-center gap-[2rem] text-[0.81rem] text-dimgray-200 box-border border-b-[1px] border-solid border-gray-300">
    <div
      className="self-center flex flex-row py-[3rem] items-center justify-start gap-[2rem] text-[0.81rem] text-dimgray-200
      lg:flex-row lg:justify-between
      md:flex-col md:justify-center
      sm:flex-col sm:justify-center">
    <div
        className="self-stretch flex-1 rounded-81xl flex flex-col py-[1rem] px-[0.5rem] items-center justify-center md:flex-[unset] md:self-stretch sm:w-auto sm:self-stretch sm:pl-[0rem] sm:pr-[0rem] sm:box-border sm:flex-[unset]">
      <div className="relative leading-[125%]">Anreisetag</div>
      <div className="relative text-[1rem] leading-[125%] text-black">
        10 Juni 2023
      </div>
    </div>
    <div className="relative box-border w-[0.06rem] h-[2.56rem] border-r-[1px] border-solid border-gray-300"/>
    <div
        className="self-stretch flex-1 rounded-81xl flex flex-col py-[1rem] px-[0.5rem] items-center justify-center md:flex-[unset] md:self-stretch sm:w-auto sm:self-stretch sm:flex-[unset]">
      <div className="relative leading-[125%]">Abreisetag</div>
      <div className="relative text-[1rem] leading-[125%] text-black">
        15 Juni 2023
      </div>
    </div>
    <div
        className="relative box-border w-[0.06rem] h-[2.56rem] border-r-[1px] border-solid border-gray-300 sm:w-[0.06rem]"/>
    <div
        className="self-stretch flex-1 rounded-81xl flex flex-row py-[1rem] px-[0.5rem] items-center justify-center gap-[0.75rem] md:flex-[unset] md:self-stretch sm:w-auto sm:self-stretch sm:flex-[unset]">
      <div className="overflow-hidden flex flex-col items-start justify-center">
        <img
            className="relative w-[1.37rem] h-[1.06rem]"
            alt=""
            src="/vector.svg"
        />
      </div>
      <div className="flex flex-col items-start justify-center gap-[0.5rem]">
        <div className="relative leading-[125%]">Unterkunft für</div>
        <div className="flex flex-row items-center justify-start gap-[0.5rem] text-[1rem] text-black">
          <div className="flex flex-row items-center justify-start gap-[0.5rem] min-w-[4.69rem]">
            <div className="relative leading-[125%]">2</div>
            <div className="flex-1 relative leading-[125%]">Erw.</div>
          </div>
          <div className="relative leading-[125%]">-</div>
          <div className="flex flex-row items-center justify-start gap-[0.5rem] min-w-[4.69rem]">
            <div className="relative leading-[125%]">0</div>
            <div className="flex-1 relative leading-[125%]">
              Kinder
            </div>
          </div>
        </div>
      </div>
    </div>
    <button
        className="cursor-pointer min-w-[40%] [border:none] py-[1rem] px-[0.5rem] bg-rectangle-805 flex-1 rounded-45xl
        shadow-[0px_138px_39px_rgba(0,_0,_0,_0),_0px_89px_35px_rgba(0,_0,_0,_0.01),_0px_50px_30px_rgba(0,_0,_0,_0.05),_0px_22px_22px_rgba(0,_0,_0,_0.09),_0px_6px_12px_rgba(0,_0,_0,_0.1),_0px_0px_0px_rgba(0,_0,_0,_0.1)]
        flex flex-row items-center justify-center gap-[0.5rem]
        md:flex-[unset] md:self-stretch sm:self-stretch sm:w-auto sm:pl-[0.5rem] sm:pr-[0.5rem] sm:box-border sm:flex-[unset]"
        onClick={onSearchButtonClick}
    >
      <img
          className="relative w-[1.5rem] h-[1.5rem] overflow-hidden shrink-0"
          alt=""
          src="/magnifier--24--outline.svg"
      />
      <b className="relative text-[1.13rem] leading-[1.5rem] font-title-2 text-light-text-color text-left">
        Verfügbarkeit prüfen
      </b>
    </button>
  </div>
  </div>;
}

const HighlightsSection: NextPage<{ onLinkClick: () => void, onButtonClick: () => void }> = ({onLinkClick, onButtonClick}) => {
  return <div
      className="center flex flex-col py-[9rem] px-[0rem] box-border items-center justify-start gap-[3rem]
      md:flex-1 md:items-center md:justify-between md:gap-[0rem]
       sm:flex-1 sm:items-center sm:justify-between sm:gap-[0rem] sm:pl-[0rem] sm:pr-[0rem] sm:box-border">
    <div className="flex flex-col py-[0.5rem] px-[0rem] items-center justify-start gap-[0.5rem]">
      <b className="relative leading-[125%] sm:text-[2.25rem]">
        Unsere Highlights
      </b>
      <div className="relative text-[1.25rem] leading-[125%] font-medium text-dimgray-100">
        Freuen Sie sich auf:
      </div>
    </div>
    <div
        className="self-center flex-1 flex flex-row py-[3rem] gap-[1rem] items-center justify-start text-[1.38rem] text-light-text-color font-link
        xl:gap-[5rem]
        lg:flex-row lg:items-start lg:justify-between lg:text-[1.1rem]
        md:h-auto md:flex-col md:items-start md:justify-start md:text-[1rem]
        sm:h-auto sm:flex-col sm:items-start sm:justify-between sm:pt-[3rem] sm:box-border sm:text-[1rem]">
      <div
          className="self-stretch flex-1 rounded-3xs overflow-hidden flex flex-col items-center justify-start text-[0.88rem] text-dimgray-200 sm:flex-[unset] sm:self-stretch">
        <FlexRow
            icnCircleCircleMd="/icncircle-circlemd.svg"
            h5="Lage"
        />
        <div
            className="self-stretch flex-1 rounded-2xs bg-light-text-color overflow-hidden flex flex-col py-[1.88rem] px-[3.13rem] items-start justify-start gap-[0.31rem] border-[1px] border-solid border-lightskyblue">
          <div className="relative tracking-[0.2px] leading-[1.5rem] font-semibold whitespace-pre-wrap">
            <p className="m-0">{`- Naturbelassener Strand `}</p>
            <p className="m-0"> in 150m Entfernung</p>
          </div>
          <div className="relative tracking-[0.2px] leading-[1.5rem] font-semibold">
            - Ruhiges Areal im Wald
          </div>
          <div className="relative tracking-[0.2px] leading-[1.5rem] font-semibold">
            - Campingplatz-Markt fußläufig
          </div>
          <div className="relative tracking-[0.2px] leading-[1.5rem] font-semibold">
            - Insel erkunden mit dem Fahrrad
          </div>
          <Link
              className="cursor-pointer [text-decoration:none] relative tracking-[0.2px] leading-[1.5rem] font-semibold text-rectangle-805"
              href="/unterkuenfte"
              onClick={onLinkClick}
          >
            Mehr
          </Link>
        </div>
      </div>
      <div
          className="self-stretch flex-1 rounded-3xs overflow-hidden flex flex-col items-center justify-start sm:flex-[unset] sm:self-stretch">
        <div
            className="self-stretch rounded-2xs bg-rectangle-805 overflow-hidden flex flex-row py-[1.88rem] px-[3.13rem] items-center justify-start gap-[0.94rem]">
          <img
              className="relative rounded-181xl w-[4.5rem] h-[4.5rem] overflow-hidden shrink-0"
              alt=""
              src="/icncircle-circlemd1.svg"
          />
          <div className="flex flex-row items-start justify-start">
            <b className="relative tracking-[0.1px] leading-[1.5rem]">
              Ausstattung
            </b>
          </div>
        </div>
        <div
            className="self-stretch flex-1 rounded-2xs bg-light-text-color overflow-hidden flex flex-col py-[1.88rem] px-[3.13rem] items-start justify-start gap-[0.31rem] text-[0.88rem] text-dimgray-200 border-[1px] border-solid border-lightskyblue">
          <div className="relative tracking-[0.2px] leading-[1.5rem] font-semibold">
            - Kaffeemaschine
          </div>
          <div className="relative tracking-[0.2px] leading-[1.5rem] font-semibold">
            - Kühlschrank
          </div>
          <div className="relative tracking-[0.2px] leading-[1.5rem] font-semibold">
            - Wasserkocher
          </div>
          <div className="relative tracking-[0.2px] leading-[1.5rem] font-semibold">
            - Mikrowelle/Grill
          </div>
          <div className="relative tracking-[0.2px] leading-[1.5rem] font-semibold">
            - Staubsauger
          </div>
          <Link
              className="cursor-pointer [text-decoration:none] relative tracking-[0.2px] leading-[1.5rem] font-semibold text-rectangle-805"
              href="/unterkuenfte"
              onClick={onLinkClick}
          >
            Mehr
          </Link>
        </div>
      </div>
      <div
          className="self-stretch flex-1 rounded-3xs overflow-hidden flex flex-col items-center justify-start sm:flex-[unset] sm:self-stretch">
        <div
            className="self-stretch rounded-2xs bg-rectangle-805 overflow-hidden flex flex-row py-[1.88rem] px-[3.13rem] items-center justify-start gap-[0.94rem]">
          <img
              className="relative rounded-181xl w-[4.5rem] h-[4.5rem] overflow-hidden shrink-0"
              alt=""
              src="/icncircle-circlemd2.svg"
          />
          <div className="flex flex-row items-start justify-start">
            <b className="relative tracking-[0.1px] leading-[1.5rem]">
              Gemeinschaft
            </b>
          </div>
        </div>
        <div
            className="self-stretch flex-1 rounded-2xs bg-light-text-color overflow-hidden flex flex-col py-[1.88rem] px-[3.13rem] items-start justify-start gap-[0.31rem] text-[0.88rem] text-dimgray-200 border-[1px] border-solid border-lightskyblue">
          <div className="relative tracking-[0.2px] leading-[1.5rem] font-semibold">
            - Gemeinschaftshütte
          </div>
          <div className="relative tracking-[0.2px] leading-[1.5rem] font-semibold">
            - Gemeinschaftsküche
          </div>
          <div className="relative tracking-[0.2px] leading-[1.5rem] font-semibold">
            - Duschkabinen
          </div>
          <div className="relative tracking-[0.2px] leading-[1.5rem] font-semibold">
            - Parkplatz
          </div>
          <div className="relative tracking-[0.2px] leading-[1.5rem] font-semibold">
            - Ladestation für Elektroautos
          </div>
          <Link
              className="cursor-pointer [text-decoration:none] relative tracking-[0.2px] leading-[1.5rem] font-semibold text-rectangle-805"
              href="/unterkuenfte"
              onClick={onLinkClick}
          >
            Mehr
          </Link>
        </div>
      </div>
    </div>
    <div
        className="self-stretch flex flex-row py-[0rem] px-[4rem] items-start justify-center text-[1rem] text-rectangle-807
         md:flex-1 md:flex-col md:gap-[0rem] md:items-center md:justify-between md:pl-[5rem] md:pt-[0rem] md:pr-[5rem] md:box-border
         sm:flex-col sm:items-center sm:justify-between sm:gap-[0rem] sm:pl-[0rem] sm:pr-[0rem] sm:box-border">
      <div
          className="self-stretch flex-1 flex flex-col items-start justify-center z-[1] md:flex-[unset] md:self-stretch sm:items-center sm:justify-center sm:pl-[15.63rem] sm:pr-[15.63rem] sm:box-border sm:flex-[unset] sm:self-stretch">
        <img
            className="self-stretch flex-1 relative rounded-xl max-w-full overflow-hidden max-h-full object-cover sm:w-[25rem]"
            alt=""
            src="/image@2x.png"
        />
      </div>
      <div
          className="w-[30rem] flex flex-col py-[2.5rem] px-[3.5rem] box-border items-start justify-start relative gap-[4rem] z-[0] sm:self-stretch sm:w-auto sm:pl-[15.63rem] sm:pr-[15.63rem] sm:box-border">
        <div className="self-stretch flex flex-col items-start justify-start gap-[1.5rem] z-[0]">
          <div className="self-stretch flex flex-col items-start justify-start gap-[0.25rem]">
            <div className="relative leading-[125%]">
              <span>{`z.B. `}</span>
              <b>Kap Arkona</b>
            </div>
            <div className="self-stretch relative text-[2rem] leading-[125%] font-medium text-black">
              Beliebte Ausflugsziele
            </div>
          </div>
          <div
              className="w-[23rem] flex flex-col items-start justify-start text-dimgray-200 sm:self-stretch sm:w-auto">
            <div className="self-stretch relative leading-[125%]">
              <p className="m-0">
                Ob Kap Arkona, Fischerdörfchen Vitt oder die Häfen von
                Wiek, Dranske und Breege - all diese touristischen
                Ziele können Sie leicht per Fahrrad erreichen und
                dabei den Norden der Insel Rügen erkunden.
              </p>
              <p className="m-0">
                Auch ein Tagesausflug zur nahegelegenen Insel
                Hiddensee ist von Dranske oder Wiek aus möglich.
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
          <b className="relative leading-[1.5rem]">Mehr Entdecken</b>
        </a>
        <div
            className="self-stretch absolute my-0 mx-[!important] top-[23.22rem] left-[calc(50%_-_880.5px)] box-border h-[0.06rem] z-[2] border-t-[1px] border-solid border-gray-300"/>
      </div>
    </div>
  </div>;
}

const CTASection: NextPage<{ onCTAButtonClick: () => void }> = ({onCTAButtonClick}) => {
    return <div
        className="self-stretch flex flex-col py-[5rem] px-[0rem] items-center justify-start gap-[1.5rem] bg-[url(/cta@3x.png)] bg-cover bg-no-repeat bg-[top] text-[2.5rem] text-light-text-color">
        <div className="relative leading-[125%] sm:text-[1.5rem]">
            Um Erinnerungen zu schaffen
        </div>
        <Link
            className="cursor-pointer [text-decoration:none] rounded-45xl bg-light-text-color shadow-[0px_138px_39px_rgba(0,_0,_0,_0),_0px_89px_35px_rgba(0,_0,_0,_0.01),_0px_50px_30px_rgba(0,_0,_0,_0.05),_0px_22px_22px_rgba(0,_0,_0,_0.09),_0px_6px_12px_rgba(0,_0,_0,_0.1),_0px_0px_0px_rgba(0,_0,_0,_0.1)] h-[3.5rem] flex flex-row py-[0rem] px-[1.5rem] box-border items-center justify-start text-[1.13rem] text-rectangle-805"
            href="/buchung"
            onClick={onCTAButtonClick}
        >
            <b className="relative leading-[1.5rem]">Jetzt reservieren</b>
        </Link>
    </div>;
}

const RoomsSection: NextPage<{onItemsContainerClick: () => void}> = ({onItemsContainerClick}) => {
    return <div
        className="self-stretch flex flex-col py-[10rem] px-[0rem] items-center justify-start gap-[4rem] sm:items-center sm:justify-between sm:gap-[0rem] sm:py-[4rem] sm:px-[0rem] sm:box-border">
        <div
            className="flex flex-col items-center justify-start gap-[0.5rem] sm:pl-[0rem] sm:pr-[0rem] sm:box-border">
            <b className="relative leading-[125%]">Unterkünfte</b>
            <div className="relative text-[1.25rem] leading-[125%] font-medium text-dimgray-100">
                Sehen Sie sich die verfügbaren Hütten an
            </div>
        </div>
        <div
            className="self-stretch flex flex-row items-center justify-center relative gap-[1.5rem] md:flex-col md:gap-[1.5rem] md:items-center md:justify-center sm:flex-col sm:items-center sm:justify-between sm:gap-[0rem] sm:pl-[15.63rem] sm:pr-[15.63rem] sm:box-border">
            <div
                className="absolute my-0 mx-[!important] top-[7.22rem] left-[calc(50%_-_1182.5px)] box-border w-[147.81rem] h-[0.06rem] z-[0] border-t-[1px] border-solid border-gray-300"/>
            <div
                className="flex-1 flex flex-row items-center justify-start gap-[1.25rem] cursor-pointer z-[1] lg:flex-row lg:gap-[1.25rem] lg:items-center lg:justify-start md:flex-col md:gap-[1.25rem] md:items-center md:justify-start md:flex-[unset] md:self-stretch sm:flex-col sm:gap-[1.25rem] sm:items-center sm:justify-between sm:pl-[0rem] sm:pr-[0rem] sm:box-border sm:flex-[unset] sm:self-stretch"
                onClick={onItemsContainerClick}
            >
                <RoomCard
                    image="/image1@2x.png"
                    title="Kleine Hütte"
                    description="3 Betten"
                    price="25€"
                />
                <RoomCard
                    image="/image2@2x.png"
                    title="Große Hütte"
                    description="Bis zu 6 Betten"
                    price="45€"
                />
            </div>
        </div>
    </div>;
}

const Homepage: NextPage = () => {
  const router = useRouter();

  const onSearchButtonClick = useCallback(() => {
    router.push("/buchung");
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
        className="relative bg-light-text-color w-full overflow-hidden flex flex-col items-center justify-start text-left text-[3.5rem] text-black font-title-2 md:[align-self:unset] sm:[align-self:unset]">
        <MainPageHeader/>
        <div
            className="[background:linear-gradient(180deg,_#fff5eb,_#fff_48.44%,_#fff5eb)] flex flex-row items-center justify-start lg:pl-[0rem] lg:box-border sm:[align-self:unset]">
            <Sidebar/>
            <div className="flex-1 flex flex-col items-center justify-start lg:pl-[0rem] lg:box-border">
                <div
                    className="flex flex-col items-center justify-start lg:pl-[0rem] lg:box-border md:items-center md:justify-center sm:gap-[0rem] sm:items-start sm:justify-between">
                    <BookingStrip onSearchButtonClick={onSearchButtonClick}/>
                    <HighlightsSection onLinkClick={onLinkClick} onButtonClick={onButtonClick}/>
                    <CTASection onCTAButtonClick={onCTAButtonClick}/>
                    <RoomsSection onItemsContainerClick={onItemsContainerClick} />
                </div>
                <Footer/>
            </div>
            <Sidebar/>
        </div>
    </div>
  );
};

export default Homepage;
