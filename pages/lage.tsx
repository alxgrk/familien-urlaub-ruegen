import type { NextPage } from "next";
import { useCallback } from "react";
import Link from "next/link";
import { useRouter } from "next/router";
import SidePageHeader from "../components/side-page-header";
import FlexRow from "../components/flex-row";
import Footer from "../components/footer";
import Sidebar from "../components/Sidebar";

const Lage: NextPage = () => {
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
        <Sidebar/>
        <div className="flex-1 flex flex-col items-center justify-start">
          <div className="self-stretch flex flex-col items-center justify-start">
            <div className="self-stretch flex flex-col py-[4.5rem] items-center justify-start gap-[0.5rem]">
              <b className="self-center relative leading-[125%] md:text-[2.63rem] sm:text-[1.75rem]">
                Unser Grundstück
              </b>
              <div className="self-center relative text-[1.25rem] leading-[125%] font-medium text-dimgray-100">
                100m bis zum Strand
              </div>
              <img
                className="self-center flex-1 relative max-w-full overflow-hidden max-h-full object-cover sm:max-h-[15rem]"
                alt=""
                src="/calendar-1@2x.png"
              />
            </div>
            <div className="self-center flex flex-row py-[3rem] items-center justify-center gap-[1.63rem] text-[1.75rem] text-dimgray-100
            lg:flex-row md:flex-col sm:flex-col">
              <div className="rounded-3xs bg-lavender w-[18rem] h-[21.69rem] overflow-hidden shrink-0 flex flex-col items-center justify-center">
                <div className="self-stretch flex-1 rounded-2xs bg-light-text-color overflow-hidden flex flex-col py-[1.88rem] px-[3.13rem] items-center justify-start border-[1px] border-solid border-lightskyblue">
                  <div className="relative leading-[200%] font-medium">
                    <p className="m-0">Zittkower Weg 18</p>
                    <p className="m-0">18556 Altenkirchen/Rügen​</p>
                    <p className="m-0">Deutschland</p>
                  </div>
                </div>
                <FlexRow
                  icnCircleCircleMd="/icncircle-circlemd3.svg"
                  h5="Adresse"
                  propBorderRadius="unset"
                  propFlex="unset"
                  propWidth="9rem"
                />
              </div>
              <div className="rounded-3xs bg-lavender w-[18rem] h-[21.69rem] overflow-hidden shrink-0 flex flex-col items-center justify-start">
                <div className="self-stretch flex-1 rounded-2xs bg-light-text-color overflow-hidden flex flex-col py-[1.88rem] px-[3.13rem] items-center justify-center border-[1px] border-solid border-lightskyblue">
                  <div className="relative leading-[200%] font-medium">
                    +49 151 64681052
                  </div>
                </div>
                <div className="self-stretch bg-rectangle-805 overflow-hidden flex flex-row py-[1.88rem] px-[3.13rem] items-center justify-start gap-[0.94rem] text-left text-[1.38rem] text-light-text-color font-link">
                  <img
                    className="relative rounded-181xl w-[4.5rem] h-[4.5rem] overflow-hidden shrink-0"
                    alt=""
                    src="/icncircle-circlemd4.svg"
                  />
                  <div className="w-[9rem] flex flex-row items-start justify-start">
                    <b className="flex-1 relative tracking-[0.1px] leading-[1.5rem]">
                      Telefon
                    </b>
                  </div>
                </div>
              </div>
              <div className="rounded-3xs bg-lavender w-[18rem] h-[21.69rem] overflow-hidden shrink-0 flex flex-col items-center justify-start text-[1.25rem]">
                <div className="self-stretch flex-1 rounded-2xs bg-light-text-color overflow-hidden flex flex-col py-[1.88rem] px-[3.13rem] items-center justify-center border-[1px] border-solid border-lightskyblue">
                  <div className="relative leading-[200%] font-medium">
                    buchung@familien-urlaub-ruegen.de
                  </div>
                </div>
                <div className="self-stretch bg-rectangle-805 overflow-hidden flex flex-row py-[1.88rem] px-[3.13rem] items-center justify-start gap-[0.94rem] text-left text-[1.38rem] text-light-text-color font-link">
                  <img
                    className="relative rounded-181xl w-[4.5rem] h-[4.5rem] overflow-hidden shrink-0"
                    alt=""
                    src="/icncircle-circlemd5.svg"
                  />
                  <div className="w-[9rem] flex flex-row items-start justify-start">
                    <b className="flex-1 relative tracking-[0.1px] leading-[1.5rem]">
                      Email
                    </b>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <Footer/>
        </div>
        <Sidebar/>
      </div>
    </div>
  );
};

export default Lage;
