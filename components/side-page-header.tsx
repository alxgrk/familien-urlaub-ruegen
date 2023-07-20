import type { NextPage } from "next";
import { useMemo } from "react";
import CSS, { Property } from "csstype";
import Navbar from "./navbar";

type SidePageHeaderType = {
  hamburgerMenu?: string;
  mobileNavigationMenu?: boolean;

  /** Style props */
  sidePageHeaderPosition?: Property.Position;
  sidePageHeaderWidth?: Property.Width;
  sidePageHeaderHeight?: Property.Height;
  sidePageHeaderAlignSelf?: Property.AlignSelf;
  sidePageHeaderHeight1?: Property.Height;
  sidePageHeaderPadding?: Property.Padding;
  navbarHeight?: Property.Height;
  logoFontSize?: Property.FontSize;
  cayoBeachHeight?: Property.Height;
  cayoBeachGap?: Property.Gap;
  navigationMenuFontSize?: Property.FontSize;
  startFontSize?: Property.FontSize;
  unterknfteFontSize?: Property.FontSize;
  buchungFontSize?: Property.FontSize;
  lageFontSize?: Property.FontSize;
  impressumHeight?: Property.Height;
  mobileNavigationMenuWidth?: Property.Width;
  mobileNavigationMenuHeight?: Property.Height;
};

const SidePageHeader: NextPage<SidePageHeaderType> = ({
  hamburgerMenu,
  mobileNavigationMenu,
  sidePageHeaderPosition,
  sidePageHeaderWidth,
  sidePageHeaderHeight,
  sidePageHeaderAlignSelf,
  sidePageHeaderHeight1,
  sidePageHeaderPadding,
  navbarHeight,
  logoFontSize,
  cayoBeachHeight,
  cayoBeachGap,
  navigationMenuFontSize,
  startFontSize,
  unterknfteFontSize,
  buchungFontSize,
  lageFontSize,
  impressumHeight,
  mobileNavigationMenuWidth,
  mobileNavigationMenuHeight,
}) => {
  const sidePageHeaderStyle: CSS.Properties = useMemo(() => {
    return {
      position: sidePageHeaderPosition,
      width: sidePageHeaderWidth,
      height: sidePageHeaderHeight,
      alignSelf: sidePageHeaderAlignSelf,
    };
  }, [
    sidePageHeaderPosition,
    sidePageHeaderWidth,
    sidePageHeaderHeight,
    sidePageHeaderAlignSelf,
  ]);

  const navbarStyle: CSS.Properties = useMemo(() => {
    return {
      height: sidePageHeaderHeight1,
      padding: sidePageHeaderPadding,
    };
  }, [sidePageHeaderHeight1, sidePageHeaderPadding]);

  const logoStyle: CSS.Properties = useMemo(() => {
    return {
      height: navbarHeight,
    };
  }, [navbarHeight]);

  const cayoBeachStyle: CSS.Properties = useMemo(() => {
    return {
      fontSize: logoFontSize,
    };
  }, [logoFontSize]);

  const navigationMenuStyle: CSS.Properties = useMemo(() => {
    return {
      height: cayoBeachHeight,
      gap: cayoBeachGap,
    };
  }, [cayoBeachHeight, cayoBeachGap]);

  const startStyle: CSS.Properties = useMemo(() => {
    return {
      fontSize: navigationMenuFontSize,
    };
  }, [navigationMenuFontSize]);

  const unterknfteStyle: CSS.Properties = useMemo(() => {
    return {
      fontSize: startFontSize,
    };
  }, [startFontSize]);

  const buchungStyle: CSS.Properties = useMemo(() => {
    return {
      fontSize: unterknfteFontSize,
    };
  }, [unterknfteFontSize]);

  const lageStyle: CSS.Properties = useMemo(() => {
    return {
      fontSize: buchungFontSize,
    };
  }, [buchungFontSize]);

  const impressumStyle: CSS.Properties = useMemo(() => {
    return {
      fontSize: lageFontSize,
    };
  }, [lageFontSize]);

  const mobileNavigationMenuStyle: CSS.Properties = useMemo(() => {
    return {
      height: impressumHeight,
    };
  }, [impressumHeight]);

  const hamburgerMenuIconStyle: CSS.Properties = useMemo(() => {
    return {
      width: mobileNavigationMenuWidth,
      height: mobileNavigationMenuHeight,
    };
  }, [mobileNavigationMenuWidth, mobileNavigationMenuHeight]);

  return (
    <div
      className="relative w-[1920px] h-[333px] flex flex-col items-center justify-start bg-[url(/sidepage-header@3x.png)] bg-cover bg-no-repeat bg-[top] lg:w-[1200px] lg:max-w-[1200px] md:w-[960px] md:max-w-[960px]"
      style={sidePageHeaderStyle}
    >
      <Navbar
        hamburgerMenu="/notification2.svg"
        mobileNavigationMenu={false}
        navbarPosition="unset"
        navbarWidth="unset"
        navbarHeight="90px"
        navbarPadding="10px 16px"
        navbarGap="unset"
        navbarAlignSelf="stretch"
        navbarJustifyContent="space-between"
        logoHeight="60px"
        logoPadding="unset"
        logoFlex="unset"
        logoBoxSizing="unset"
        cayoBeachFontSize="40px"
        navigationMenuHeight="60px"
        navigationMenuPadding="unset"
        navigationMenuGap="53px"
        navigationMenuFlex="unset"
        navigationMenuBoxSizing="unset"
        navigationMenuJustifyContent="flex-start"
        startFontSize="16px"
        unterknfteFontSize="16px"
        buchungFontSize="16px"
        lageFontSize="16px"
        impressumFontSize="16px"
        mobileNavigationMenuHeight="60px"
        hamburgerMenuIconWidth="23.82px"
        hamburgerMenuIconHeight="24px"
      />
    </div>
  );
};

export default SidePageHeader;
