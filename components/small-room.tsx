import type { NextPage } from "next";
import Link from "next/link";

type SmallRoomType = {
  image?: string;
  mittlereHtte?: string;
  betten?: string;
  prop?: string;
};

const SmallRoom: NextPage<SmallRoomType> = ({
  image,
  mittlereHtte,
  betten,
  prop,
}) => {
  return (
    <Link
      className="cursor-pointer [text-decoration:none] flex-1 rounded-13xl flex flex-col p-[1rem] items-start justify-start text-left text-[1.25rem] text-color-text font-title-2 md:flex-[unset] md:self-stretch sm:w-auto sm:self-stretch sm:flex-[unset] sm:items-center sm:justify-between sm:gap-[0rem] sm:pl-[0rem] sm:pr-[0rem] sm:box-border sm:min-w-[21.88rem] sm:max-w-[26.25rem]"
      href="/unterkuenfte"
    >
      <img
        className="self-stretch rounded-xl max-w-full overflow-hidden h-[25rem] shrink-0 object-cover sm:w-auto sm:[align-self:unset] sm:flex-1 sm:pl-[0rem] sm:pr-[0rem] sm:box-border"
        alt=""
        src={image}
      />
      <div className="self-stretch flex flex-col pt-[1.5rem] px-[0.5rem] pb-[0.5rem] items-center justify-start gap-[1rem] sm:w-auto sm:[align-self:unset] sm:items-center sm:justify-between sm:gap-[0rem] sm:pl-[0rem] sm:pr-[0rem] sm:box-border">
        <div className="self-stretch flex flex-col items-start justify-start sm:w-auto sm:[align-self:unset] sm:items-start sm:justify-start">
          <div className="relative leading-[125%] font-medium">
            {mittlereHtte}
          </div>
          <div className="relative text-[0.81rem] leading-[125%] text-gray-100">
            {betten}
          </div>
        </div>
        <div className="self-stretch flex flex-row items-baseline justify-start gap-[0.5rem] text-[1.75rem] text-rectangle-807 sm:w-auto sm:[align-self:unset] sm:pl-[0rem] sm:pr-[0rem] sm:box-border">
          <div className="relative leading-[125%]">{prop}</div>
          <div className="relative text-[1rem] leading-[125%]">/ Nacht</div>
        </div>
      </div>
    </Link>
  );
};

export default SmallRoom;
