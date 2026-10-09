import type { NextPage } from "next";
import Image from "next/image";
import Navbar from "./navbar";

const MainPageHeader: NextPage = () => {
  return (
    <div className="self-stretch h-[43rem] md:h-[44rem] sm:h-[38rem]
        flex flex-col box-border items-start justify-start relative isolate
        gap-[6.25rem]
        text-center text-[3.5rem] text-light-text-color font-title-2 lg:self-stretch">
      <Image
        src="/dronensicht-main-page-header.webp"
        alt="Luftaufnahme des Familiencamps Rügen nahe dem Strand der Tromper Wiek"
        fill
        priority
        sizes="100vw"
        className="-z-10 object-cover object-top"
      />
      <Navbar/>
      <div className="flex flex-col px-[6.25rem] lg:px-[4rem] sm:px-[1.5rem] box-border items-start justify-center">
        <h1 className="m-0 self-stretch relative leading-[125%] font-belleza text-[3.5rem] font-bold
        [text-shadow:0px_358px_100px_rgba(0,_0,_0,_0),_0px_229px_92px_rgba(0,_0,_0,_0.01),_0px_129px_77px_rgba(0,_0,_0,_0.05),_0px_57px_57px_rgba(0,_0,_0,_0.09),_0px_14px_32px_rgba(0,_0,_0,_0.1),_0px_0px_0px_rgba(0,_0,_0,_0.1)]
        sm:text-[2.25rem] sm:text-center sm:self-stretch sm:w-auto sm:flex-1">
          “Ein Ort zum Entspannen für die ganze Familie.”
        </h1>
      </div>
    </div>
  );
};

export default MainPageHeader;
