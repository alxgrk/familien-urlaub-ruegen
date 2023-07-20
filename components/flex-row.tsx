import type { NextPage } from "next";
import { useMemo } from "react";
import CSS, { Property } from "csstype";

type FlexRowType = {
  icnCircleCircleMd?: string;
  h5?: string;

  /** Style props */
  propBorderRadius?: Property.BorderRadius;
  propFlex?: Property.Flex;
  propWidth?: Property.Width;
};

const FlexRow: NextPage<FlexRowType> = ({
  icnCircleCircleMd,
  h5,
  propBorderRadius,
  propFlex,
  propWidth,
}) => {
  const flexRowStyle: CSS.Properties = useMemo(() => {
    return {
      borderRadius: propBorderRadius,
    };
  }, [propBorderRadius]);

  const divStyle: CSS.Properties = useMemo(() => {
    return {
      flex: propFlex,
      width: propWidth,
    };
  }, [propFlex, propWidth]);

  return (
    <div
      className="self-stretch rounded-2xs bg-rectangle-805 overflow-hidden flex flex-row py-[1.88rem] px-[3.13rem] items-center justify-start gap-[0.94rem] text-left text-[1.38rem] text-light-text-color font-link"
      style={flexRowStyle}
    >
      <img
        className="relative rounded-181xl w-[4.5rem] h-[4.5rem] overflow-hidden shrink-0"
        alt=""
        src={icnCircleCircleMd}
      />
      <div
        className="flex-1 flex flex-row items-start justify-start"
        style={divStyle}
      >
        <b className="flex-1 relative tracking-[0.1px] leading-[1.5rem]">
          {h5}
        </b>
      </div>
    </div>
  );
};

export default FlexRow;
