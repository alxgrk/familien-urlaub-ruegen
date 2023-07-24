import type { NextPage } from "next";
import { useMemo } from "react";
import Link from "next/link";
import CSS, { Property } from "csstype";

type ContainerLinkType = {
  bisZu3Personen?: string;
  kleinesFerienhaus?: string;
  unserKleinesFerienhausIst?: string;

  /** Style props */
  propZIndex?: Property.ZIndex;

  /** Action props */
  onFrameContainer11Click?: () => void;
};

const ContainerLink: NextPage<ContainerLinkType> = ({
  bisZu3Personen,
  kleinesFerienhaus,
  unserKleinesFerienhausIst,
  propZIndex,
  onFrameContainer11Click,
}) => {
  const rightStyle: CSS.Properties = useMemo(() => {
    return {
      zIndex: propZIndex,
    };
  }, [propZIndex]);

  return (
    <div
      className="self-stretch flex-1 flex flex-col p-[3rem] items-start justify-start z-[0] text-left text-[1rem] text-rectangle-807 font-title-2 md:flex-[unset] md:self-stretch sm:flex-col sm:flex-[unset] sm:self-stretch"
      style={rightStyle}
    >
      <div className="self-stretch flex-1 flex flex-col items-start justify-start gap-[1.5rem] md:pb-[1rem] md:box-border sm:pb-[1rem] sm:box-border">
        <div className="self-stretch flex-1 flex flex-col items-start justify-start">
          <div className="self-stretch flex-1 relative leading-[125%]">
            {bisZu3Personen}
          </div>
          <div className="self-stretch flex-1 relative text-[2rem] leading-[125%] font-medium text-black">
            {kleinesFerienhaus}
          </div>
        </div>
        <div className="self-stretch flex-1 relative leading-[125%] text-dimgray-200">
          {unserKleinesFerienhausIst}
        </div>
      </div>
      <Link
        className="cursor-pointer [text-decoration:none] self-stretch flex-1 flex flex-row items-center justify-start relative gap-[0.5rem] text-[1.13rem] text-light-text-color"
        href="/buchung"
      >
        <div
          className="rounded-45xl bg-rectangle-805 h-[2.75rem] flex flex-row py-[0rem] px-[1.25rem] box-border items-center justify-start cursor-pointer z-[1]"
          onClick={onFrameContainer11Click}
        >
          <b className="relative leading-[1.5rem]">Jetzt reservieren</b>
        </div>
        <div className="absolute my-0 mx-[!important] top-[1.22rem] left-[calc(50%_-_788.5px)] box-border w-[98.44rem] h-[0.06rem] z-[0] border-t-[1px] border-solid border-gray-300" />
      </Link>
    </div>
  );
};

export default ContainerLink;
