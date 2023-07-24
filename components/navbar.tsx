import type { NextPage } from "next";
import { useMemo } from "react";
import CSS, { Property } from "csstype";

type NavbarType = {
  hamburgerMenu?: string;
  mobileNavigationMenu?: boolean;

  /** Style props */
  navbarHeight?: Property.Height;
  navbarPadding?: Property.Padding;
  navbarAlignSelf?: Property.AlignSelf;
  navbarJustifyContent?: Property.JustifyContent;
  logoHeight?: Property.Height;
  logoPadding?: Property.Padding;
  logoFlex?: Property.Flex;
  logoBoxSizing?: Property.BoxSizing;
  cayoBeachFontSize?: Property.FontSize;
  navigationMenuHeight?: Property.Height;
  navigationMenuPadding?: Property.Padding;
  navigationMenuGap?: Property.Gap;
  navigationMenuFlex?: Property.Flex;
  navigationMenuBoxSizing?: Property.BoxSizing;
  navigationMenuJustifyContent?: Property.JustifyContent;
  startFontSize?: Property.FontSize;
  unterknfteFontSize?: Property.FontSize;
  buchungFontSize?: Property.FontSize;
  lageFontSize?: Property.FontSize;
  impressumFontSize?: Property.FontSize;
  mobileNavigationMenuHeight?: Property.Height;
  hamburgerMenuIconWidth?: Property.Width;
  hamburgerMenuIconHeight?: Property.Height;
};

const Navbar: NextPage<NavbarType> = ({
  hamburgerMenu,
  mobileNavigationMenu,
  navbarHeight,
  navbarPadding,
  navbarAlignSelf,
  navbarJustifyContent,
  logoHeight,
  logoPadding,
  logoFlex,
  logoBoxSizing,
  cayoBeachFontSize,
  navigationMenuHeight,
  navigationMenuPadding,
  navigationMenuGap,
  navigationMenuFlex,
  navigationMenuBoxSizing,
  navigationMenuJustifyContent,
  startFontSize,
  unterknfteFontSize,
  buchungFontSize,
  lageFontSize,
  impressumFontSize,
  mobileNavigationMenuHeight,
  hamburgerMenuIconWidth,
  hamburgerMenuIconHeight,
}) => {
  const navbarStyle: CSS.Properties = useMemo(() => {
    return {
      position: "unset",
      width: "unset",
      height: navbarHeight,
      padding: navbarPadding,
      alignSelf: navbarAlignSelf,
      justifyContent: navbarJustifyContent,
    };
  }, [
    navbarHeight,
    navbarPadding,
    navbarAlignSelf,
    navbarJustifyContent,
  ]);

  const logoStyle: CSS.Properties = useMemo(() => {
    return {
      height: logoHeight,
      padding: logoPadding,
      flex: logoFlex,
      boxSizing: logoBoxSizing,
    };
  }, [logoHeight, logoPadding, logoFlex, logoBoxSizing]);

  const cayoBeachStyle: CSS.Properties = useMemo(() => {
    return {
      fontSize: cayoBeachFontSize,
    };
  }, [cayoBeachFontSize]);

  const navigationMenuStyle: CSS.Properties = useMemo(() => {
    return {
      height: navigationMenuHeight,
      padding: navigationMenuPadding,
      gap: navigationMenuGap,
      flex: navigationMenuFlex,
      boxSizing: navigationMenuBoxSizing,
      justifyContent: navigationMenuJustifyContent,
    };
  }, [
    navigationMenuHeight,
    navigationMenuPadding,
    navigationMenuGap,
    navigationMenuFlex,
    navigationMenuBoxSizing,
    navigationMenuJustifyContent,
  ]);

  const startStyle: CSS.Properties = useMemo(() => {
    return {
      fontSize: startFontSize,
    };
  }, [startFontSize]);

  const unterknfteStyle: CSS.Properties = useMemo(() => {
    return {
      fontSize: unterknfteFontSize,
    };
  }, [unterknfteFontSize]);

  const buchungStyle: CSS.Properties = useMemo(() => {
    return {
      fontSize: buchungFontSize,
    };
  }, [buchungFontSize]);

  const lageStyle: CSS.Properties = useMemo(() => {
    return {
      fontSize: lageFontSize,
    };
  }, [lageFontSize]);

  const impressumStyle: CSS.Properties = useMemo(() => {
    return {
      fontSize: impressumFontSize,
    };
  }, [impressumFontSize]);

  const mobileNavigationMenuStyle: CSS.Properties = useMemo(() => {
    return {
      height: mobileNavigationMenuHeight,
    };
  }, [mobileNavigationMenuHeight]);

  const hamburgerMenuIconStyle: CSS.Properties = useMemo(() => {
    return {
      width: hamburgerMenuIconWidth,
      height: hamburgerMenuIconHeight,
    };
  }, [hamburgerMenuIconWidth, hamburgerMenuIconHeight]);

  return (
    <div
      className="relative h-[90px] flex flex-row py-2.5 px-0 box-border items-center justify-start
      text-left text-base text-light-text-color font-title-2
      lg:flex-row lg:items-center lg:justify-center md:w-auto md:[align-self:unset] md:flex-row md:gap-[0px] md:items-center md:justify-center md:pl-2.5 md:pr-2.5 md:box-border
      sm:flex-row sm:gap-[0px] sm:items-center sm:justify-center"
      style={navbarStyle}
    >
      <div
        className="flex-1 flex flex-row py-0 pl-1
        box-border items-center justify-start md:flex-1 md:items-center md:justify-start"
        style={logoStyle}
      >
        <button
          className="cursor-pointer [border:none] p-0 bg-[transparent] relative text-21xl
          leading-[100%] font-belleza text-light-text-color text-left inline-block [backdrop-filter:blur(4px)]"
          style={cayoBeachStyle}
        >
          Familienurlaub Rügen
        </button>
      </div>
      <div
        className="flex-1 flex flex-row py-0 pr-[1rem]
        box-border items-center justify-end gap-[10%] md:hidden md:items-end md:justify-center sm:hidden"
        style={navigationMenuStyle}
      >
        <div className="relative leading-[125%] font-medium" style={startStyle}>
          Start
        </div>
        <div
          className="relative leading-[125%] font-medium"
          style={unterknfteStyle}
        >
          Unterkünfte
        </div>
        <div
          className="relative leading-[125%] font-medium"
          style={buchungStyle}
        >
          Buchung
        </div>
        <div className="relative leading-[125%] font-medium" style={lageStyle}>
          Lage
        </div>
        <div
          className="relative leading-[125%] font-medium"
          style={impressumStyle}
        >
          Impressum
        </div>
      </div>
      {!mobileNavigationMenu && (
        <div
          className="flex-1 pr-[1rem] hidden flex-col items-end justify-center md:flex md:flex-1 sm:flex sm:flex-1"
          style={mobileNavigationMenuStyle}
        >
          <img
            className="w-[23.82px] h-6 overflow-hidden shrink-0 md:flex sm:flex"
            alt=""
            src={hamburgerMenu}
            style={hamburgerMenuIconStyle}
          />
        </div>
      )}
    </div>
  );
};

export default Navbar;
