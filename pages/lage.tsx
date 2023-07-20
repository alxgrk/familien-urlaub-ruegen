import type { NextPage } from "next";
import { useCallback } from "react";
import Link from "next/link";
import { useRouter } from "next/router";

const Lage: NextPage = () => {
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
    <div className="relative rounded-2xl bg-light-text-color w-full overflow-hidden flex flex-col items-center justify-start text-left text-[1rem] text-light-text-color font-title-2">
      <div className="self-stretch h-[20.81rem] flex flex-col items-center justify-start bg-[url(/sidepage-header@3x.png)] bg-cover bg-no-repeat bg-[top] lg:w-[75rem] lg:max-w-[75rem] md:self-stretch md:w-auto md:max-w-[60rem]">
        <div className="self-stretch h-[5.63rem] flex flex-row py-[0.63rem] px-[1rem] box-border items-center justify-between lg:w-auto lg:[align-self:unset] lg:flex-row lg:gap-[15rem] lg:items-center lg:justify-center md:self-stretch md:w-auto md:flex-row md:gap-[0rem] md:items-center md:justify-between md:pl-[0.63rem] md:pr-[0.63rem] md:box-border sm:flex-row sm:gap-[0rem] sm:items-center sm:justify-center">
          <div className="h-[3.75rem] flex flex-row items-center justify-start lg:w-auto lg:[align-self:unset] md:w-auto md:[align-self:unset] md:flex-col md:items-start md:justify-center sm:flex-col sm:items-start sm:justify-center">
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
          <div className="flex-1 h-[3.75rem] hidden flex-col items-end justify-center md:flex md:w-auto md:[align-self:unset] md:flex-col md:gap-[0.63rem] md:items-end md:justify-center md:pl-[0.5rem] md:pr-[0.5rem] md:box-border">
            <img
              className="w-[1.49rem] h-[1.5rem] overflow-hidden shrink-0 md:flex sm:flex"
              alt=""
              src="/notification1.svg"
            />
          </div>
        </div>
      </div>
      <div className="self-stretch [background:linear-gradient(180deg,_#fff5eb,_#fff_50.52%,_#fff5eb)] flex flex-row items-center justify-start text-center text-[3.5rem] text-black">
        <div className="self-stretch w-[12.5rem] overflow-hidden shrink-0 lg:hidden" />
        <div className="flex-1 flex flex-col items-center justify-start">
          <div className="self-stretch flex flex-col items-center justify-start">
            <div className="self-stretch flex flex-col py-[4.5rem] px-[0.5rem] items-center justify-start gap-[0.5rem]">
              <b className="self-stretch relative leading-[125%]">
                Unser Grundstück
              </b>
              <div className="self-stretch relative text-[1.25rem] leading-[125%] font-medium text-dimgray-100">
                100m bis zum Strand
              </div>
              <img
                className="self-stretch flex-1 relative max-w-full overflow-hidden max-h-full object-cover sm:max-h-[25rem]"
                alt=""
                src="/calendar-1@2x.png"
              />
            </div>
            <div className="self-stretch flex flex-row py-[3rem] px-[0.5rem] items-center justify-center gap-[1.63rem] text-[1.75rem] text-dimgray-100 lg:flex-row lg:gap-[1.63rem] lg:items-center lg:justify-center md:flex-col md:gap-[1.63rem] md:items-center md:justify-center">
              <div className="rounded-3xs bg-lavender w-[23.56rem] h-[21.69rem] overflow-hidden shrink-0 flex flex-col items-center justify-center">
                <div className="self-stretch flex-1 rounded-2xs bg-light-text-color overflow-hidden flex flex-col py-[1.88rem] px-[3.13rem] items-center justify-start border-[1px] border-solid border-lightskyblue">
                  <div className="relative leading-[200%] font-medium">
                    <p className="m-0">Zittkower Weg 18</p>
                    <p className="m-0">18556 Altenkirchen/Rügen​</p>
                    <p className="m-0">Deutschland</p>
                  </div>
                </div>
                <div className="self-stretch bg-rectangle-805 overflow-hidden flex flex-row py-[1.88rem] px-[3.13rem] items-center justify-start gap-[0.94rem] text-left text-[1.38rem] text-light-text-color font-link">
                  <img
                    className="relative rounded-181xl w-[4.5rem] h-[4.5rem] overflow-hidden shrink-0"
                    alt=""
                    src="/icncircle-circlemd3.svg"
                  />
                  <div className="w-[9rem] flex flex-row items-start justify-start">
                    <b className="flex-1 relative tracking-[0.1px] leading-[1.5rem]">
                      Adresse
                    </b>
                  </div>
                </div>
              </div>
              <div className="rounded-3xs bg-lavender w-[23.56rem] h-[21.69rem] overflow-hidden shrink-0 flex flex-col items-center justify-start">
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
              <div className="rounded-3xs bg-lavender w-[23.56rem] h-[21.69rem] overflow-hidden shrink-0 flex flex-col items-center justify-start text-[1.25rem]">
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

export default Lage;
