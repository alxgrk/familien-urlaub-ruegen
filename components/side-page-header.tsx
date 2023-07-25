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
  sidePageHeaderPosition,
  sidePageHeaderWidth,
  sidePageHeaderHeight,
  sidePageHeaderAlignSelf,
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

  return (
    <div
      className="relative w-[1920px] h-[333px] flex flex-col items-center justify-start bg-[url(/sidepage-header@3x.png)] bg-cover bg-no-repeat bg-[top] lg:w-[1200px] lg:max-w-[1200px] md:w-[960px] md:max-w-[960px]"
      style={sidePageHeaderStyle}
    >
      <Navbar/>
    </div>
  );
};

export default SidePageHeader;
