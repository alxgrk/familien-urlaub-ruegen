import type { NextPage } from "next";
import { useCallback } from "react";
import Link from "next/link";
import { useRouter } from "next/router";
import SidePageHeader from "../components/side-page-header";
import Footer from "../components/footer";
import Sidebar from "../components/Sidebar";

const Impressum: NextPage = () => {
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
                Unser Impressum
              </b>
              <div className="self-stretch relative text-[1.25rem] leading-[125%] font-medium sm:flex-1">
                Angaben gemäß § 5 TMG
              </div>
            </div>
            <div className="self-stretch flex flex-col p-[2.25rem] items-start justify-start gap-[1.25rem] text-left text-[0.88rem] font-inter sm:w-auto sm:[align-self:unset] sm:items-start sm:justify-center sm:pl-[2.25rem] sm:box-border">
              <div className="self-stretch flex flex-col items-start justify-start">
                <div className="relative flex items-center shrink-0">
                  <span className="w-full">
                    <p className="m-0">Rügen Grundstücks eGbR</p>
                    <p className="m-0">c/o Christine Girke</p>
                    <p className="m-0">Gartenweg 3</p>
                    <p className="m-0">04463 Großpösna</p>
                  </span>
                </div>
              </div>
              <div className="self-stretch flex flex-col items-start justify-start">
                <div className="relative flex items-center shrink-0">
                  <span className="w-full">
                    <p className="m-0">
                      <b>Vertreten durch:</b>
                    </p>
                    <p className="m-0">Julia Gommola Vukov</p>
                  </span>
                </div>
              </div>
              <b className="self-stretch relative text-[1.38rem]">Kontakt</b>
              <div className="self-stretch flex flex-col items-start justify-start">
                <div className="relative flex items-center shrink-0">
                  <span className="w-full">
                    <p className="m-0">Telefon: +49 155 67184861</p>
                    <p className="m-0">
                      E-Mail: info@familien-urlaub-ruegen.de
                    </p>
                  </span>
                </div>
              </div>
              <b className="self-stretch relative text-[1.25rem]">Steuer-ID</b>
              <div className="self-stretch flex flex-col items-start justify-start text-[0.81rem]">
                <div className="relative flex items-center shrink-0">
                  <span className="w-full">
                    <p className="m-0">
                      Umsatzsteuer-Identifikationsnummer gemäß § 27 a
                      Umsatzsteuergesetz:
                    </p>
                    <p className="m-0">238/292/09187</p>
                    <p className="m-0">Finanzamt Grimma</p>
                  </span>
                </div>
              </div>
              <b className="self-stretch relative text-[1.25rem]">
                Verbraucher­streit­beilegung/Universal­schlichtungs­stelle
              </b>
              <div className="self-stretch relative text-[0.81rem]">
                Wir sind nicht bereit oder verpflichtet, an
                Streitbeilegungsverfahren vor einer
                Verbraucherschlichtungsstelle teilzunehmen.
              </div>
              <div className="self-stretch flex flex-col items-start justify-start text-[0.81rem]">
                <div className="relative flex items-center shrink-0">
                  <span className="w-full">
                    <span>{`Quelle: `}</span>
                    <span className="[text-decoration:underline] text-blue">
                      e-recht24.de
                    </span>
                  </span>
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

export default Impressum;
