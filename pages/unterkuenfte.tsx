import type { NextPage } from "next";
import { useCallback } from "react";
import Link from "next/link";
import { useRouter } from "next/router";
import SidePageHeader from "../components/side-page-header";
import AccommodationsContainer from "../components/accommodations-container";
import Footer from "../components/footer";
import Sidebar from "../components/Sidebar";

const Unterkuenfte: NextPage = () => {
  const router = useRouter();

  const onReserveNowButtonSmallClick = useCallback(() => {
    router.push("/buchung");
  }, [router]);

  const onReserveNowButtonClick = useCallback(() => {
    router.push("/buchung");
  }, [router]);

  return (
    <div className="relative bg-light-text-color w-full overflow-hidden flex flex-col items-center justify-start text-center text-[3.5rem] text-black font-title-2">
      <SidePageHeader
        sidePageHeaderPosition="unset"
        sidePageHeaderWidth="unset"
        sidePageHeaderHeight="20.81rem"
        sidePageHeaderAlignSelf="stretch"
        sidePageHeaderHeight1="5.63rem"
        sidePageHeaderPadding="0.63rem 1rem"
      />
      <div className="self-stretch [background:linear-gradient(180deg,_#fff5eb,_#fff_50.52%,_#fff5eb)] flex flex-row items-center justify-start">
        <Sidebar />
        <div className="flex-1 flex flex-col items-center justify-start lg:pl-[0rem] lg:box-border">
          <div className="self-stretch flex flex-col items-center justify-start">
            <AccommodationsContainer />
            <div className="self-stretch flex flex-col py-[0rem] px-[2rem] sm:px-[1rem] items-center justify-start gap-[1rem]">
              <b className="self-stretch relative leading-[125%] md:text-[2.63rem] sm:text-[1.75rem]">
                Das Gemeinschaftshaus
              </b>
              <div className="self-stretch relative text-[1.25rem] leading-[125%] font-medium text-dimgray-100">
                Für gesellige Abende
              </div>
              <div className="self-stretch rounded-xl overflow-hidden flex flex-row items-center justify-between border-[1px] border-solid border-dimgray-200
               sm:flex-col sm:gap-[0rem] sm:items-center sm:justify-start">
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
              <div className="self-stretch flex flex-col py-[0rem] px-[6rem] sm:px-[3rem] items-center justify-start gap-[1.5rem] text-left text-[1rem] text-rectangle-807">
                <div className="relative leading-[125%]">
                  Bis zu 20 Personen
                </div>
                <div className="self-stretch relative leading-[125%] text-dimgray-200 text-center">
                  Unser Gemeinschaftshaus im unteren Teil des Familiencamps
                  bietet alles für ein gemütliches Beisammensein. Eine geräumige
                  Küche, große Tische und eine große Anzahl von Stühlen bieten
                  jedem Gast Platz, um beispielsweise das Fernsehprogramm auf dem
                  riesigen Flatscreen zu verfolgen, oder einfach einen
                  geselligen Abend mit Freunden zu verbringen.
                </div>
              </div>
            </div>
          </div>
          <Footer/>
        </div>
        <Sidebar />
      </div>
    </div>
  );
};

export default Unterkuenfte;
