import type { NextPage } from "next";

const Navbar: NextPage = () => {
  return (
    <div className="relative w-[1474px] h-[90px] flex flex-row py-2.5 px-0 box-border items-center justify-start gap-[400px] text-left text-base text-light-text-color font-title-2 lg:flex-row lg:gap-[240px] lg:items-center lg:justify-center md:w-auto md:[align-self:unset] md:flex-row md:gap-[0px] md:items-center md:justify-center md:pl-2.5 md:pr-2.5 md:box-border sm:flex-row sm:gap-[0px] sm:items-center sm:justify-center">
      <div className="flex-1 h-[60px] flex flex-row py-0 px-[50px] box-border items-center justify-start md:flex-1 md:items-center md:justify-start">
        <button className="cursor-pointer [border:none] p-0 bg-[transparent] relative text-21xl leading-[100%] font-belleza text-light-text-color text-left inline-block [backdrop-filter:blur(4px)]">
          Familienurlaub Rügen
        </button>
      </div>
      <div className="flex-1 h-[60px] flex flex-row py-0 px-[50px] box-border items-center justify-end gap-[53px] lg:flex lg:gap-[53px] md:hidden md:items-end md:justify-center sm:hidden">
        <div className="relative leading-[125%] font-medium">Start</div>
        <div className="relative leading-[125%] font-medium">Unterkünfte</div>
        <div className="relative leading-[125%] font-medium">Buchung</div>
        <div className="relative leading-[125%] font-medium">Lage</div>
        <div className="relative leading-[125%] font-medium">Impressum</div>
      </div>
      <div className="flex-1 h-[60px] hidden flex-col items-end justify-center md:flex md:flex-1 md:items-center md:justify-end">
        <img
          className="w-[23.82px] h-6 overflow-hidden shrink-0 md:flex sm:flex"
          alt=""
          src="/notification3.svg"
        />
      </div>
    </div>
  );
};

export default Navbar;
