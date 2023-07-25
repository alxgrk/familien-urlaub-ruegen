import type { NextPage } from "next";
import Link from "next/link";

type RoomCardType = {
  image?: string;
  title?: string;
  description?: string;
  price?: string;
};

const RoomCard: NextPage<RoomCardType> = ({
  image,
  title,
  description,
  price,
}) => {
  return (
    <div>
      <img
        className="self-stretch rounded-xl max-w-full overflow-hidden h-[25rem] shrink-0 object-cover sm:w-auto sm:[align-self:unset] sm:flex-1 sm:pl-[0rem] sm:pr-[0rem] sm:box-border"
        alt=""
        src={image}
      />
      <div className="self-stretch flex flex-col pt-[1.5rem] px-[0.5rem] pb-[0.5rem] items-center justify-start gap-[1rem] sm:w-auto sm:[align-self:unset] sm:items-center sm:justify-between sm:gap-[0rem] sm:pl-[0rem] sm:pr-[0rem] sm:box-border">
        <div className="self-stretch flex flex-col items-start justify-start sm:w-auto sm:[align-self:unset] sm:items-start sm:justify-start">
          <div className="relative leading-[125%] font-medium">
            {title}
          </div>
          <div className="relative text-[0.81rem] leading-[125%] text-gray-100">
            {description}
          </div>
        </div>
        <div className="self-stretch flex flex-row items-baseline justify-start gap-[0.5rem] text-[1.75rem] text-rectangle-807 sm:w-auto sm:[align-self:unset] sm:pl-[0rem] sm:pr-[0rem] sm:box-border">
          <div className="relative leading-[125%]">{price}</div>
          <div className="relative text-[1rem] leading-[125%]">/ Nacht</div>
        </div>
      </div>
    </div>
  );
};

export default RoomCard;
