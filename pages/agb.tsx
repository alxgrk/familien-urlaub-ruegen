import type { NextPage } from "next";
import { useCallback } from "react";
import Link from "next/link";
import { useRouter } from "next/router";
import SidePageHeader from "../components/side-page-header";
import Footer from "../components/footer";
import Sidebar from "../components/Sidebar";
import PdfViewer from "../components/PdfViewer";

const Agb: NextPage = () => {
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
            <div className="self-stretch flex flex-col pt-[4.5rem] px-[0.5rem] items-center justify-start gap-[0.5rem] sm:items-center sm:justify-center">
              <b className="self-stretch relative leading-[125%] sm:text-center sm:flex-1 md:text-[2.63rem] sm:text-[1.75rem]">
                Unsere AGB
              </b>
            </div>
            <div className="self-center flex flex-col p-[2.25rem] items-start justify-start gap-[1.25rem] text-left text-[0.88rem] font-inter sm:[align-self:unset] sm:items-start sm:justify-center sm:pl-[2.25rem] sm:box-border">
              <div className="relative flex items-center shrink-0">
                <PdfViewer url={"/agb.pdf"} />
              </div>
            </div>
            <div className="self-stretch flex flex-col items-center justify-start">
              <div className="self-stretch flex flex-col pt-[4.5rem] px-[0.5rem] items-center justify-start gap-[0.5rem] sm:items-center sm:justify-center">
                <b className="self-stretch relative leading-[125%] sm:text-center sm:flex-1 md:text-[2.63rem] sm:text-[1.75rem]">
                  Unsere Hausordnung
                </b>
              </div>
              <div className="self-center flex flex-col p-[2.25rem] items-start justify-start gap-[1.25rem] text-left text-[0.88rem] font-inter sm:[align-self:unset] sm:items-start sm:justify-center sm:pl-[2.25rem] sm:box-border">
                <div className="relative flex items-center shrink-0">
                  <PdfViewer url={"/hausordnung.pdf"} />
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

export default Agb;
