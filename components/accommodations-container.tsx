import type { NextPage } from "next";
import { useCallback } from "react";
import { useRouter } from "next/router";
import ContainerLink from "./container-link";

const AccommodationsContainer: NextPage = () => {
  const router = useRouter();

  const onReserveNowButtonSmallClick = useCallback(() => {
    router.push("/buchung");
  }, [router]);

  const onReserveNowButtonClick = useCallback(() => {
    router.push("/buchung");
  }, [router]);

  return (
    <div className="self-stretch flex flex-col py-[10rem] px-[0rem] items-center justify-center gap-[1rem] text-center text-[3.5rem] text-black font-title-2 md:w-auto md:[align-self:unset] md:py-[3rem] md:px-[1rem] md:box-border">
      <div className="self-stretch flex flex-col items-center justify-center gap-[1rem] md:w-auto md:[align-self:unset]">
        <b className="self-stretch relative leading-[125%] md:text-[2.63rem] sm:text-[1.63rem]">
          Unsere Unterkünfte
        </b>
        <div className="self-stretch relative text-[1.25rem] leading-[125%] font-medium text-dimgray-100 sm:font-medium sm:font-title-2 sm:text-[0.75rem]">
          Für alle Familiengrößen
        </div>
      </div>
      <div className="self-stretch flex flex-row items-center justify-center min-h-[30rem] text-left text-[1rem] text-rectangle-807 lg:flex-row lg:gap-[0rem] lg:items-center lg:justify-start md:flex-col md:gap-[0rem] md:items-center md:justify-start sm:flex-col sm:gap-[0rem] sm:items-center sm:justify-start sm:max-w-[26.25rem]">
        <div className="flex-1 rounded-xl box-border overflow-hidden flex flex-row items-center justify-start min-h-[25rem] z-[1] border-[1px] border-solid border-dimgray-200 lg:flex-row lg:gap-[0rem] lg:items-center lg:justify-start md:flex-[unset] md:flex-row md:gap-[0rem] md:items-center md:justify-start md:min-h-[0rem] md:self-stretch sm:flex-col sm:gap-[0rem] sm:items-center sm:justify-start sm:flex-[unset] sm:self-stretch">
          <div className="flex-1 h-[30rem] flex flex-col items-center justify-start md:self-stretch md:h-auto sm:h-auto sm:flex-[unset] sm:self-stretch">
            <img
              className="self-stretch flex-1 relative max-w-full overflow-hidden max-h-full object-cover"
              alt=""
              src="/image11@2x.png"
            />
            <img
              className="self-stretch flex-1 relative max-w-full overflow-hidden max-h-full object-cover"
              alt=""
              src="/image3@2x.png"
            />
          </div>
          <img
            className="flex-1 relative max-w-full overflow-hidden h-[30rem] object-cover md:self-stretch md:h-auto sm:flex-[unset] sm:self-stretch"
            alt=""
            src="/image21@2x.png"
          />
        </div>
        <ContainerLink
          bisZu3Personen="Bis zu 3 Personen"
          kleinesFerienhaus="Kleines Ferienhaus"
          unserKleinesFerienhausIst="Unser kleines Ferienhaus ist ideal für zwei Personen und bietet bei maximaler Auslastung 4 Schlafplätze. Diese gemütlichen Häuschen befinden sich am Ende des Grundstücks ganz in der Nähe des Strandes zum Tromper Wiek."
          onFrameContainer11Click={onReserveNowButtonSmallClick}
        />
      </div>
      <div className="self-stretch flex flex-row items-center justify-center min-h-[30rem] lg:flex-row lg:gap-[0rem] lg:items-center lg:justify-center md:flex-col md:gap-[0rem] md:items-center md:justify-between sm:flex-col">
        <div className="flex-1 rounded-xl box-border h-[30rem] overflow-hidden flex flex-row items-center justify-start min-h-[25rem] z-[1] border-[1px] border-solid border-dimgray-200 md:flex-[unset] md:items-center md:justify-between md:gap-[0rem] md:min-h-[0rem] md:self-stretch sm:h-auto sm:flex-col sm:flex-[unset] sm:self-stretch">
          <div className="self-stretch flex-1 flex flex-col items-center justify-start sm:flex-[unset] sm:self-stretch">
            <img
              className="self-stretch flex-1 relative max-w-full overflow-hidden max-h-full object-cover"
              alt=""
              src="/image12@2x.png"
            />
            <img
              className="self-stretch flex-1 relative max-w-full overflow-hidden max-h-full object-cover"
              alt=""
              src="/image31@2x.png"
            />
          </div>
          <img
            className="self-stretch flex-1 relative max-w-full overflow-hidden max-h-full object-cover sm:flex-[unset] sm:self-stretch"
            alt=""
            src="/image13@2x.png"
          />
        </div>
        <ContainerLink
          bisZu3Personen="Bis zu 6 Personen"
          kleinesFerienhaus="Großes Ferienhaus"
          unserKleinesFerienhausIst="Das größte unserer Ferienhäuser bietet 4 bis maximal 6 Personen Platz und ist damit ideal für kleine Gruppen oder große Familien, die in der Nähe der Ostsee Erholung suchen. Einige der Häuser besitzen auch eine Schlafcouch die es dann bis zu 6 Personen erlaubt in unserem großen Ferienhaus zu übernachten."
          propZIndex="0"
          onFrameContainer11Click={onReserveNowButtonClick}
        />
      </div>
    </div>
  );
};

export default AccommodationsContainer;
