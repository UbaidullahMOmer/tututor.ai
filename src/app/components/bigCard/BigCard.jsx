import React from "react";
import { DocumentIcon } from "../../assets/icons/Icons";

function BigCard() {
  return (
    <div
      style={{ boxShadow: "0px 4px 40px 0px rgba(0, 0, 0, 0.05)" }}
      className="bg-white border border-[#F5F5F5] flex  flex-col 2xl:gap-[14px] gap-[6px] rounded-[20px] p-[12px] shadow-[0_4px_40px_-15px_rgba(0,0,0,0.05)]"
    >
      <div className="flex items-center justify-between">
        <div className="flex flex-col gap-[4px]">
          <span className="text-[#737791]"> Maximoz Team </span>
          <span className="text-[18px] font-[600] text-[#2B3D70] leading-[18px]">
            Generador d tests y examenes
          </span>
        </div>
        <div className="rounded-[8px] bg-[#02E8AC] p-[12px]">
          <DocumentIcon />
        </div>
      </div>
      <span className="font-[500] text-[#4Ea7FF]"> $14,000 - $18,000 </span>
      <span className="text-[#737791] leading-[18px]">
        Lorem ipsum dolor sit amet consectetur. Mi ac platea adipiscing mi mi
        adipiscing elementum odio. In eget volutpat mauris dictumst sit
        ultricies tellus.
      </span>
      <div className="flex items-center justify-between">
        <span className="cursor-default rounded-[4px] bg-[#4EA7FF80] px-[12px] py-[6px] text-[#FFF]">
          Remote
        </span>
        <span className="text-[#737791]">Education</span>
      </div>
    </div>
  );
}

export default BigCard;
