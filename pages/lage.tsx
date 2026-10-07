import type { NextPage } from "next";
import Image from "next/image";
import { useCallback } from "react";
import Link from "next/link";
import { useRouter } from "next/router";
import SidePageHeader from "../components/side-page-header";
import FlexRow from "../components/flex-row";
import GallerySection from "../components/gallery-section";
import Footer from "../components/footer";


const grundstueckItems = [
  {
    src: "/dronensicht-4.webp",
    alt: "Dronenansicht des Grundstücks",
    className: "col-span-1 row-span-3",
    sizes: "50vw",
  },
  {
    src: "/satellite-view.webp",
    alt: "Satellitenansicht des Grundstücks",
    className: "col-span-1 row-span-3",
    sizes: "50vw",
  },
];

const umgebungItems = [
  {
    src: "/strandaufgang-sonnenschein.webp",
    alt: "Strandaufgang bei Sonnenschein",
    className: "col-span-1 row-span-2",
    sizes: "50vw",
  },
  {
    src: "/sonnenuntergang.webp",
    alt: "Sonnenuntergang über der Ostsee",
    className: "col-span-1 row-span-2",
    sizes: "50vw",
  },
  {
    src: "/strand-landwärts-tag-2.webp",
    alt: "Blick landwärts vom Strand",
    className: "col-span-2 row-span-2",
    sizes: "100vw",
  },
  {
    src: "/steine-am-strand-hochkant.webp",
    alt: "Steine am Strand",
    className: "col-span-1 row-span-2",
    sizes: "50vw",
  },
  {
    src: "/kreidefelsen.webp",
    alt: "Kreidefelsen auf Rügen",
    className: "col-span-1 row-span-2",
    sizes: "50vw",
  },
  {
    src: "/standhafer.webp",
    alt: "Strandhafer am Strand",
    className: "col-span-1 row-span-2",
    sizes: "50vw",
  },
  {
    src: "/hünengrab.webp",
    alt: "Hünengrab in der Umgebung",
    className: "col-span-1",
    sizes: "50vw",
  },
  {
    src: "/strand-abends.webp",
    alt: "Der Strand am Abend",
    className: "col-span-1",
    sizes: "50vw",
  },
];

const Lage: NextPage = () => {
  return (
    <div className="relative bg-light-text-color w-full overflow-hidden flex flex-col items-center justify-start text-center text-base text-black font-title-2">
      <SidePageHeader
        sidePageHeaderPosition="unset"
        sidePageHeaderWidth="unset"
        sidePageHeaderHeight="20.81rem"
        sidePageHeaderAlignSelf="stretch"
        sidePageHeaderHeight1="5.63rem"
        sidePageHeaderPadding="0.63rem 1rem"
      />
      <div className="self-stretch [background:linear-gradient(180deg,_#fff5eb,_#fff_50.52%,_#fff5eb)] w-full flex flex-col items-stretch justify-start">
        <div className="w-full max-w-[80rem] mx-auto flex flex-col items-stretch justify-start">
          <div className="self-stretch flex flex-col items-center justify-start">
            <div className="self-stretch flex flex-col py-[2.5rem] items-center justify-start gap-[0.5rem]">
              <div className="self-stretch w-full flex flex-col px-[2rem] sm:px-[1rem] pb-[1rem] sm:pb-[2rem] box-border items-stretch justify-start gap-[3rem] sm:gap-[2.5rem]">
                <div className="self-stretch relative h-[0.06rem] border-t-[1px] border-solid border-gray-300" />
                <GallerySection
                    id="unser-grundstueck"
                    title="Unser Grundstück"
                    subtitle="100m bis zum Strand"
                    items={grundstueckItems}
                />
              </div>
              <a
                  className="[text-decoration:none] rounded-45xl bg-rectangle-805 h-[2.75rem] flex flex-row py-[0rem] px-[1.25rem] box-border items-center justify-start cursor-pointer z-[1] text-[1.13rem] text-light-text-color"
                  href="https://www.google.de/maps/place/Drewoldke+18,+18556+Altenkirchen/@54.6312338,13.3724427,18.46z/data=!4m17!1m10!3m9!1s0x47ab51a7907f7223:0xecbbd7f9ed9a2841!2sCampingplatz+Drewoldke!5m2!4m1!1i2!8m2!3d54.634331!4d13.37358!16s%2Fg%2F1tkrkv9v!3m5!1s0x47ab51a7944a4c8d:0x7716f1cb0cc4cbef!8m2!3d54.6312159!4d13.3737595!16s%2Fg%2F11c4tc17b7?entry=ttu"
                  target="_blank"
              >
                <b className="relative leading-[1.5rem]">Ansehen auf Google Maps</b>
              </a>
            </div>
            <div className="self-center flex flex-row py-[3rem] items-center justify-center gap-[1.63rem] text-[1.75rem] text-dimgray-100
            lg:flex-row md:flex-col sm:flex-col">
              <div className="bg-lavender w-[18rem] h-[21.69rem] overflow-hidden shrink-0 flex flex-col items-center justify-center">
                <div className="self-stretch flex-1 bg-light-text-color overflow-hidden flex flex-col py-[1.88rem] px-[3.13rem] items-center justify-start border-[1px] border-solid border-lightskyblue">
                  <div className="relative leading-[200%] font-medium">
                    <p className="m-0">Zittkower Weg 18</p>
                    <p className="m-0">18556 Altenkirchen/Rügen​</p>
                    <p className="m-0">Deutschland</p>
                  </div>
                </div>
                <FlexRow
                  icnCircleCircleMd="/icncircle-circlemd3.svg"
                  h5="Adresse"
                  propFlex="unset"
                  propWidth="9rem"
                />
              </div>
              <div className="bg-lavender w-[18rem] h-[21.69rem] overflow-hidden shrink-0 flex flex-col items-center justify-start">
                <div className="self-stretch flex-1 bg-light-text-color overflow-hidden flex flex-col py-[1.88rem] px-[3.13rem] items-center justify-center border-[1px] border-solid border-lightskyblue">
                  <div className="relative leading-[200%] font-medium">
                    +49 151 64681052
                  </div>
                </div>
                <FlexRow
                    icnCircleCircleMd="/icncircle-circlemd4.svg"
                    h5="Telefon"
                    propFlex="unset"
                    propWidth="9rem"
                />
              </div>
              <div className="bg-lavender w-[18rem] h-[21.69rem] overflow-hidden shrink-0 flex flex-col items-center justify-start text-[1.25rem]">
                <div className="self-stretch flex-1 bg-light-text-color overflow-hidden flex flex-col py-[1.88rem] px-[3.13rem] items-center justify-center border-[1px] border-solid border-lightskyblue">
                  <div className="relative leading-[200%] font-medium">
                    buchung@familien-urlaub-ruegen.de
                  </div>
                </div>
                <FlexRow
                    icnCircleCircleMd="/icncircle-circlemd5.svg"
                    h5="Email"
                    propFlex="unset"
                    propWidth="9rem"
                />
              </div>
            </div>
          </div>
          <div className="self-stretch w-full flex flex-col px-[2rem] sm:px-[1rem] pb-[5rem] sm:pb-[2rem] box-border items-stretch justify-start gap-[3rem] sm:gap-[2.5rem]">
            <div className="self-stretch relative h-[0.06rem] border-t-[1px] border-solid border-gray-300" />
            <GallerySection
                id="umgebung-und-strand"
                title="Umgebung und Strand"
                subtitle="Strand, Klippen und Ausflugsziele rund um das Camp"
                items={umgebungItems}
            />
          </div>
          <Footer/>
        </div>
      </div>
    </div>
  );
};

export default Lage;
