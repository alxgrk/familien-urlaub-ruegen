import type { NextPage } from "next";

const SidePageHeader: NextPage = () => {
  return (
    <div className="relative w-[1920px] h-[333px] flex flex-col items-center justify-start bg-[url(/sidepage-header@3x.png)] bg-cover bg-no-repeat bg-[top] text-left text-base text-light-text-color font-title-2 lg:w-[1200px] lg:max-w-[1200px] md:w-[960px] md:max-w-[960px]">
      <div className="self-stretch h-[90px] flex flex-row py-2.5 px-4 box-border items-center justify-between lg:w-auto lg:[align-self:unset] lg:flex-row lg:gap-[240px] lg:items-center lg:justify-center md:w-auto md:[align-self:unset] md:flex-row md:gap-[0px] md:items-center md:justify-between md:pl-2.5 md:pr-2.5 md:box-border sm:flex-row sm:gap-[0px] sm:items-center sm:justify-center">
        <div className="h-[60px] flex flex-row items-center justify-start lg:w-auto lg:[align-self:unset] md:w-auto md:[align-self:unset] md:items-center md:justify-between md:gap-[0px]">
          <button className="cursor-pointer [border:none] p-0 bg-[transparent] relative text-21xl leading-[100%] font-belleza text-light-text-color text-left inline-block [backdrop-filter:blur(4px)]">
            Familienurlaub Rügen
          </button>
        </div>
        <div className="h-[60px] flex flex-row items-center justify-start gap-[53px] lg:flex lg:w-auto lg:[align-self:unset] lg:gap-[53px] md:hidden md:items-end md:justify-center sm:hidden">
          <div className="relative leading-[125%] font-medium">Start</div>
          <div className="relative leading-[125%] font-medium">Unterkünfte</div>
          <div className="relative leading-[125%] font-medium">Buchung</div>
          <div className="relative leading-[125%] font-medium">Lage</div>
          <div className="relative leading-[125%] font-medium">Impressum</div>
        </div>
        <div className="flex-1 h-[60px] hidden flex-col items-end justify-center md:flex md:w-auto md:[align-self:unset] md:flex-row md:gap-[10px] md:items-center md:justify-between">
          <img
            className="w-[23.82px] h-6 overflow-hidden shrink-0 md:flex sm:flex"
            alt=""
            src="/notification2.svg"
          />
        </div>
      </div>
    </div>
  );
};

export default SidePageHeader;
