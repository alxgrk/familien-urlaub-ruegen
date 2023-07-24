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
    <div className="self-stretch flex flex-col py-[5rem] px-[2rem] items-center justify-center gap-[1rem] text-center text-[3.5rem] text-black font-title-2
    sm:w-auto sm:[align-self:unset] sm:py-[2rem] sm:px-[1rem] sm:box-border">
      <div className="self-stretch flex flex-col items-center justify-center gap-[1rem] md:w-auto md:[align-self:unset]">
        <b className="self-stretch relative leading-[125%] md:text-[2.63rem] sm:text-[1.75rem]">
          Unsere Unterkünfte
        </b>
        <div className="self-stretch relative text-[1.25rem] leading-[125%] font-medium text-dimgray-100 sm:font-title-2">
          Für alle Familiengrößen
        </div>
      </div>
      <div className="w-full flex flex-row items-center justify-center min-h-[30rem] text-left text-[1rem] text-rectangle-807
      lg:flex-row md:flex-col sm:flex-col sm:max-w-[26.25rem]">
        <div className="flex-1 rounded-xl box-border overflow-hidden flex flex-row items-center justify-start min-h-[25rem] z-[1] border-[1px] border-solid border-dimgray-200
        lg:flex-row md:flex-row md:min-h-[0rem] sm:flex-col">
          <div className="flex-1 h-[30rem] flex flex-col items-center justify-start md:h-auto sm:h-auto">
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
            className="self-stretch flex-1 relative max-w-full overflow-hidden h-[30rem] object-cover md:h-auto"
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
      <div className="w-full flex flex-row items-center justify-center min-h-[30rem]
       lg:flex-row md:flex-col sm:flex-col sm:max-w-[26.25rem]">
        <div className="flex-1 rounded-xl box-border h-[30rem] overflow-hidden flex flex-row items-center justify-start min-h-[25rem] z-[1] border-[1px] border-solid border-dimgray-200 md:flex-[unset] md:items-center md:justify-between md:gap-[0rem] md:min-h-[0rem] md:self-stretch sm:h-auto sm:flex-col sm:flex-[unset] sm:self-stretch">
          <div className="self-stretch flex-1 flex flex-col items-center justify-start">
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
            className="self-stretch flex-1 relative max-w-full overflow-hidden max-h-full object-cover"
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
