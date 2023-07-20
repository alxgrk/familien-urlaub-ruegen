import type { NextPage } from "next";
import { useCallback } from "react";
import Link from "next/link";
import { useRouter } from "next/router";
import SidePageHeader from "../components/side-page-header";
import Footer from "../components/footer";

const Impressum: NextPage = () => {
  const router = useRouter();

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
    <div className="relative rounded-2xl bg-light-text-color w-full overflow-hidden flex flex-col items-center justify-start text-center text-[3.5rem] text-black font-title-2">
      <SidePageHeader
        hamburgerMenu="/notification1.svg"
        mobileNavigationMenu={false}
        sidePageHeaderPosition="unset"
        sidePageHeaderWidth="unset"
        sidePageHeaderHeight="20.81rem"
        sidePageHeaderAlignSelf="stretch"
        sidePageHeaderHeight1="5.63rem"
        sidePageHeaderPadding="0.63rem 1rem"
        navbarHeight="3.75rem"
        logoFontSize="2.5rem"
        cayoBeachHeight="3.75rem"
        cayoBeachGap="3.31rem"
        navigationMenuFontSize="1rem"
        startFontSize="1rem"
        unterknfteFontSize="1rem"
        buchungFontSize="1rem"
        lageFontSize="1rem"
        impressumHeight="3.75rem"
        mobileNavigationMenuWidth="1.49rem"
        mobileNavigationMenuHeight="1.5rem"
      />
      <div className="self-stretch [background:linear-gradient(180deg,_#fff5eb,_#fff_50.52%,_#fff5eb)] flex flex-row items-center justify-start">
        <div className="self-stretch w-[12.5rem] overflow-hidden shrink-0 lg:hidden" />
        <div className="flex-1 flex flex-col items-center justify-start">
          <div className="self-stretch flex flex-col items-center justify-start">
            <div className="self-stretch flex flex-col py-[4.5rem] px-[0.5rem] items-center justify-start gap-[0.5rem] sm:items-center sm:justify-center">
              <b className="self-stretch relative leading-[125%] sm:text-[1.88rem] sm:text-center sm:flex-1">
                Unser Impressum
              </b>
              <div className="self-stretch relative text-[1.25rem] leading-[125%] font-medium sm:flex-1">
                Angaben gemäß § 5 TMG
              </div>
            </div>
            <div className="self-stretch flex flex-col p-[2.25rem] items-start justify-start gap-[1.25rem] text-left text-[0.88rem] font-inter sm:w-auto sm:[align-self:unset] sm:items-start sm:justify-center sm:pl-[2.25rem] sm:box-border">
              <b className="self-stretch relative text-[1.31rem]">
                Angaben gemäß § 5 TMG
              </b>
              <div className="self-stretch h-[4.5rem] flex flex-col items-start justify-start">
                <div className="relative flex items-center w-[10.73rem] h-[4.44rem] shrink-0">
                  <span className="[line-break:anywhere] w-full">
                    <p className="m-0">Rügen Grundstücks GbR</p>
                    <p className="m-0">c/o Christine Girke</p>
                    <p className="m-0">Gartenweg 3</p>
                    <p className="m-0">04463 Großpösna</p>
                  </span>
                </div>
              </div>
              <div className="self-stretch h-[3.38rem] flex flex-col items-start justify-start">
                <div className="relative flex items-center w-[9.15rem] h-[3.31rem] shrink-0">
                  <span className="[line-break:anywhere] w-full">
                    <p className="m-0">
                      <b>Vertreten durch:</b>
                    </p>
                    <p className="m-0">Dieter Scheibner</p>
                  </span>
                </div>
              </div>
              <b className="self-stretch relative text-[1.38rem]">Kontakt</b>
              <div className="self-stretch h-[3.38rem] flex flex-col items-start justify-start">
                <div className="relative flex items-center w-[16.37rem] h-[3.31rem] shrink-0">
                  <span className="[line-break:anywhere] w-full">
                    <p className="m-0">Telefon: +49 151 64681052</p>
                    <p className="m-0">
                      E-Mail: info@familien-urlaub-ruegen.de
                    </p>
                  </span>
                </div>
              </div>
              <b className="self-stretch relative text-[1.25rem]">Steuer-ID</b>
              <div className="self-stretch h-[2.25rem] flex flex-col items-start justify-start text-[0.81rem]">
                <div className="relative flex items-center w-[28.99rem] h-[2.19rem] shrink-0">
                  <span className="[line-break:anywhere] w-full">
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
              <div className="self-stretch h-[1.13rem] flex flex-col items-start justify-start text-[0.81rem]">
                <div className="relative flex items-center w-[8.18rem] h-[1.06rem] shrink-0">
                  <span className="[line-break:anywhere] w-full">
                    <span>{`Quelle: `}</span>
                    <span className="[text-decoration:underline] text-blue">
                      e-recht24.de
                    </span>
                  </span>
                </div>
              </div>
            </div>
          </div>
          <Footer
            footerPosition="unset"
            footerWidth="unset"
            footerPadding="3rem"
            footerGap="0.5rem"
            footerAlignSelf="stretch"
            companyDetailsSocialMediaGap="1rem"
            familiencampRgenFontSize="2.5rem"
            rgenGrundstcksGbRFontSize="0.88rem"
            rgenGrundstcksGbRWidth="20rem"
            familienurlaubAmStrandFontSize="1.13rem"
            familienurlaubAmStrandWidth="20rem"
            seasonsGap="0.5rem"
            hauptsaison0106FontSize="1rem"
            nebensaison0103FontSize="1rem"
            linksGap="0.5rem"
            unterknfteFontSize="1rem"
            buchungFontSize="1rem"
            lageFontSize="1rem"
            datenschutzFontSize="1rem"
            impressumFontSize="1rem"
            copyrightHeight="1rem"
            rgenGrundstcksGbRFontSize1="0.81rem"
            onUnterknfteClick={onUnterknfteClick}
            onBuchungClick={onBuchungClick}
            onLageClick={onLageClick}
            onDatenschutzClick={onDatenschutzClick}
            onImpressumClick={onImpressumClick}
          />
        </div>
        <div className="self-stretch w-[12.5rem] overflow-hidden shrink-0 lg:hidden" />
      </div>
    </div>
  );
};

export default Impressum;
