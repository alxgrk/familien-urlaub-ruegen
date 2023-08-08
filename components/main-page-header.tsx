import type { NextPage } from "next";
import Navbar from "./navbar";

const MainPageHeader: NextPage = () => {
  return (
    <div className="self-stretch h-[52.5rem]
        flex flex-col box-border items-start justify-start
        gap-[6.25rem] bg-[url(/mainpage-header@3x.png)] bg-cover bg-no-repeat bg-[top]
        text-center text-[3.5rem] text-light-text-color font-title-2 lg:self-stretch">
      <Navbar/>
      <div className="flex flex-col px-[18.75rem] box-border items-start justify-center
        lg:self-stretch lg:w-auto pl-[6.25rem] lg:box-border
        sm:pl-[0rem] sm:pr-[0rem] sm:box-border">
        <b className="self-stretch relative leading-[125%] font-belleza
        [text-shadow:0px_358px_100px_rgba(0,_0,_0,_0),_0px_229px_92px_rgba(0,_0,_0,_0.01),_0px_129px_77px_rgba(0,_0,_0,_0.05),_0px_57px_57px_rgba(0,_0,_0,_0.09),_0px_14px_32px_rgba(0,_0,_0,_0.1),_0px_0px_0px_rgba(0,_0,_0,_0.1)]
        sm:text-[2.25rem] sm:text-center sm:self-stretch sm:w-auto sm:flex-1">
          “Ein Ort zum Entspannen für die ganze Familie.”
        </b>
      </div>
    </div>
  );
};

export default MainPageHeader;
