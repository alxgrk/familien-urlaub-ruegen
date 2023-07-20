import type { NextPage } from "next";
import Navbar from "./navbar";

const MainPageHeader: NextPage = () => {
  return (
    <div className="self-stretch h-[52.5rem] overflow-hidden shrink-0 flex flex-col py-[0rem] px-[0.63rem] box-border items-start justify-start gap-[6.25rem] bg-[url(/mainpage-header@3x.png)] bg-cover bg-no-repeat bg-[top] text-center text-[3.5rem] text-light-text-color font-title-2 lg:self-stretch lg:w-auto">
      <Navbar
        hamburgerMenu="/notification.svg"
        mobileNavigationMenu={false}
        navbarPosition="unset"
        navbarWidth="unset"
        navbarHeight="5.63rem"
        navbarPadding="0.63rem 0rem"
        navbarGap="25rem"
        navbarAlignSelf="stretch"
        navbarJustifyContent="flex-start"
        logoHeight="3.75rem"
        logoPadding="0rem 3.13rem"
        logoFlex="1"
        logoBoxSizing="border-box"
        cayoBeachFontSize="2.5rem"
        navigationMenuHeight="3.75rem"
        navigationMenuPadding="0rem 3.13rem"
        navigationMenuGap="3.31rem"
        navigationMenuFlex="1"
        navigationMenuBoxSizing="border-box"
        navigationMenuJustifyContent="flex-end"
        startFontSize="1rem"
        unterknfteFontSize="1rem"
        buchungFontSize="1rem"
        lageFontSize="1rem"
        impressumFontSize="1rem"
        mobileNavigationMenuHeight="3.75rem"
        hamburgerMenuIconWidth="1.49rem"
        hamburgerMenuIconHeight="1.5rem"
      />
      <div className="w-[83.88rem] flex flex-col py-[0rem] px-[18.75rem] box-border items-start justify-center lg:self-stretch lg:w-auto lg:pl-[6.25rem] lg:box-border sm:pl-[3.13rem] sm:pr-[6.25rem] sm:box-border">
        <b className="self-stretch relative leading-[125%] [text-shadow:0px_358px_100px_rgba(0,_0,_0,_0),_0px_229px_92px_rgba(0,_0,_0,_0.01),_0px_129px_77px_rgba(0,_0,_0,_0.05),_0px_57px_57px_rgba(0,_0,_0,_0.09),_0px_14px_32px_rgba(0,_0,_0,_0.1),_0px_0px_0px_rgba(0,_0,_0,_0.1)] sm:text-[2.25rem] sm:text-left sm:self-stretch sm:w-auto sm:flex-1">
          “Ein Ort zum Entspannen für die ganze Familie.”
        </b>
      </div>
    </div>
  );
};

export default MainPageHeader;
