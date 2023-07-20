import type { NextPage } from "next";
import { useCallback } from "react";
import Link from "next/link";
import { useRouter } from "next/router";
import AccommodationsContainer from "../components/accommodations-container";

const Unterkuenfte: NextPage = () => {
  const router = useRouter();

  const onReserveNowButtonSmallClick = useCallback(() => {
    router.push("/buchung");
  }, [router]);

  const onReserveNowButtonClick = useCallback(() => {
    router.push("/buchung");
  }, [router]);

  const onUnterknfteClick = useCallback(() => {
    router.push("/unterkuenfte");
  }, [router]);

  const onBuchungClick = useCallback(() => {
    router.push("/buchung");
  }, [router]);

  const onLageClick = useCallback(() => {
    router.push("/lage");
  }, [router]);

  const onDatenschutzClick = useCallback(() => {
    router.push("/d-s-g-v-o");
  }, [router]);

  const onImpressumClick = useCallback(() => {
    router.push("/impressum");
  }, [router]);

  return (
    <div className="relative rounded-2xl bg-light-text-color w-full overflow-hidden flex flex-col items-center justify-start text-left text-[1rem] text-light-text-color font-title-2 lg:w-auto lg:[align-self:unset]">
      <div className="self-stretch h-[20.81rem] flex flex-col items-center justify-start bg-[url(/sidepage-header@3x.png)] bg-cover bg-no-repeat bg-[top] lg:self-stretch lg:w-auto md:self-stretch md:w-auto">
        <div className="self-stretch h-[5.63rem] flex flex-row py-[0.63rem] px-[1rem] box-border items-center justify-between lg:w-auto lg:[align-self:unset] lg:flex-row lg:gap-[15rem] lg:items-center lg:justify-center md:self-stretch md:w-auto md:flex-row md:gap-[0rem] md:items-center md:justify-between md:pl-[0.63rem] md:pr-[0.63rem] md:box-border sm:self-stretch sm:w-auto sm:flex-row sm:gap-[0rem] sm:items-center sm:justify-center">
          <div className="h-[3.75rem] flex flex-row items-center justify-start lg:w-auto lg:[align-self:unset] md:w-auto md:[align-self:unset] md:items-center md:justify-between md:gap-[0rem] md:pl-[1rem] md:box-border sm:pl-[0.5rem] sm:box-border">
            <button className="cursor-pointer [border:none] p-0 bg-[transparent] relative text-[2.5rem] leading-[100%] font-belleza text-light-text-color text-left inline-block [backdrop-filter:blur(4px)] sm:text-[2rem]">
              Familienurlaub Rügen
            </button>
          </div>
          <div className="h-[3.75rem] flex flex-row items-center justify-start gap-[3.31rem] lg:flex lg:w-auto lg:[align-self:unset] lg:gap-[3.31rem] md:hidden md:items-end md:justify-center sm:hidden">
            <div className="relative leading-[125%] font-medium">Start</div>
            <div className="relative leading-[125%] font-medium">
              Unterkünfte
            </div>
            <div className="relative leading-[125%] font-medium">Buchung</div>
            <div className="relative leading-[125%] font-medium">Lage</div>
            <div className="relative leading-[125%] font-medium">Impressum</div>
          </div>
          <div className="flex-1 h-[3.75rem] hidden flex-col items-end justify-center md:flex md:w-auto md:[align-self:unset] md:flex-col md:gap-[0.63rem] md:items-end md:justify-center md:pl-[1rem] md:pr-[1rem] md:box-border sm:pl-[0rem] sm:pr-[0rem] sm:box-border">
            <img
              className="w-[1.49rem] h-[1.5rem] overflow-hidden shrink-0 md:flex sm:flex"
              alt=""
              src="/notification2.svg"
            />
          </div>
        </div>
      </div>
      <div className="self-stretch [background:linear-gradient(180deg,_#fff5eb,_#fff_50.52%,_#fff5eb)] flex flex-row items-center justify-start text-center text-[3.5rem] text-black">
        <div className="self-stretch w-[12.5rem] overflow-hidden shrink-0 lg:hidden" />
        <div className="flex-1 flex flex-col items-center justify-start">
          <div className="self-stretch flex flex-col items-center justify-start">
            <AccommodationsContainer />
            <div className="self-stretch flex flex-col py-[0rem] px-[6rem] items-center justify-start gap-[1rem]">
              <b className="self-stretch relative leading-[125%]">
                Das Gemeinschaftshaus
              </b>
              <div className="self-stretch relative text-[1.25rem] leading-[125%] font-medium text-dimgray-100">
                Für gesellige Abende
              </div>
              <div className="self-stretch rounded-xl overflow-hidden flex flex-row items-center justify-between border-[1px] border-solid border-dimgray-200 sm:flex-row sm:gap-[0rem] sm:items-center sm:justify-start">
                <div className="flex-1 h-[50rem] flex flex-col items-center justify-between min-h-[30rem]">
                  <img
                    className="self-stretch flex-1 relative max-w-full overflow-hidden max-h-full object-cover min-h-[25rem]"
                    alt=""
                    src="/image14@2x.png"
                  />
                  <img
                    className="self-stretch flex-1 relative max-w-full overflow-hidden max-h-full object-cover"
                    alt=""
                    src="/image32@2x.png"
                  />
                </div>
                <img
                  className="self-stretch flex-1 relative max-w-full overflow-hidden max-h-full object-cover min-h-[30rem]"
                  alt=""
                  src="/image22@2x.png"
                />
              </div>
              <div className="self-stretch flex flex-col py-[0rem] px-[6rem] items-center justify-start gap-[1.5rem] text-left text-[1rem] text-rectangle-807">
                <div className="relative leading-[125%]">
                  Bis zu 20 Personen
                </div>
                <div className="self-stretch relative leading-[125%] text-dimgray-200 text-center">
                  Unser Gemeinschaftshaus im unteren Teil des Familiencamps
                  bietet alles für ein gemütliches Beisammensein. Eine geräumige
                  Küche, große Tische und eine große Anzahl von Stühlen bieten
                  jedem Gast Platz um beispielsweise das Fernsehprogramm auf dem
                  riesigen Flatscreen zu verfolgen, oder einfach einen
                  geselligen Abend mit Freunden zu verbringen.
                </div>
              </div>
            </div>
          </div>
          <div className="self-stretch flex flex-col p-[3rem] items-center justify-start gap-[0.5rem] text-[1rem] text-gray-200">
            <div className="self-stretch flex flex-row items-start justify-between md:flex-row md:gap-[0.63rem] md:items-start md:justify-center sm:flex-col sm:gap-[3rem] sm:items-start sm:justify-center">
              <div className="self-stretch flex-1 flex flex-col items-start justify-center gap-[1rem] text-left text-[2.5rem] text-dimgray-100 sm:flex-[unset] sm:self-stretch">
                <div className="self-stretch flex flex-row items-start justify-start text-black font-belleza">
                  <div className="flex-1 relative leading-[100%] [backdrop-filter:blur(4px)]">
                    Familiencamp Rügen
                  </div>
                </div>
                <div className="relative text-[0.88rem] leading-[125%] inline-block w-[20rem]">
                  Rügen Grundstücks GbR
                </div>
                <div className="relative text-[1.13rem] leading-[125%] inline-block w-[20rem]">
                  Familienurlaub am Strand von Rügen
                </div>
              </div>
              <div className="self-stretch flex-1 flex flex-col items-center justify-center gap-[0.5rem] sm:items-start sm:justify-center sm:flex-[unset] sm:self-stretch">
                <div className="relative leading-[125%]">
                  Hauptsaison: 01.06. - 31.08
                </div>
                <div className="relative leading-[125%]">{`Nebensaison:   01.03. - 31.05. & 01.09. - 31.10.`}</div>
              </div>
              <div className="flex-1 flex flex-col items-end justify-center gap-[0.5rem] sm:items-start sm:justify-center sm:flex-[unset] sm:self-stretch">
                <Link
                  className="cursor-pointer [text-decoration:none] relative leading-[125%] text-[inherit]"
                  href="/unterkuenfte"
                  onClick={onUnterknfteClick}
                >
                  Unterkünfte
                </Link>
                <Link
                  className="cursor-pointer [text-decoration:none] relative leading-[125%] text-[inherit]"
                  href="/buchung"
                  onClick={onBuchungClick}
                >
                  Buchung
                </Link>
                <Link
                  className="cursor-pointer [text-decoration:none] relative leading-[125%] text-[inherit]"
                  href="/lage"
                  onClick={onLageClick}
                >
                  Lage
                </Link>
                <Link
                  className="cursor-pointer [text-decoration:none] relative leading-[125%] text-[inherit]"
                  href="/d-s-g-v-o"
                  onClick={onDatenschutzClick}
                >
                  Datenschutzerklärung
                </Link>
                <Link
                  className="cursor-pointer [text-decoration:none] relative leading-[125%] text-[inherit]"
                  href="/impressum"
                  onClick={onImpressumClick}
                >
                  Impressum
                </Link>
              </div>
            </div>
            <div className="self-stretch h-[1rem] flex flex-col items-center justify-between text-left text-[0.81rem] text-dimgray-300">
              <div className="relative leading-[125%]">
                © Rügen Grundstücks GbR 2023. Alle Rechte vorbehalten.
              </div>
            </div>
          </div>
        </div>
        <div className="self-stretch w-[12.5rem] overflow-hidden shrink-0 lg:hidden" />
      </div>
    </div>
  );
};

export default Unterkuenfte;
