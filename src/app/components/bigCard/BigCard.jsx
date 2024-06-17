import React from "react";
import { DocumentIcon } from "../../assets/icons/Icons";

function BigCard() {
  return (
    <div style={{ boxShadow: "0px 4px 40px 0px rgba(0, 0, 0, 0.05)" }}  class=" border border-[#F5F5F5] flex  flex-col gap-[14px] rounded-[20px] p-[12px] shadow-[0_4px_40px_-15px_rgba(0,0,0,0.05)]">
      <div class="flex items-center justify-between">
        <div class="flex flex-col gap-[4px]">
          <span class="text-[#737791]"> Maximoz Team </span>
          <span class="text-[18px] font-[600] text-[#2B3D70]">
            Generador d tests y examenes
          </span>
        </div>
        <div class="rounded-[8px] bg-[#02E8AC] p-[12px]">
          <DocumentIcon/>
        </div>
      </div>
      <span class="font-[500] text-[#4Ea7FF]"> $14,000 - $18,000 </span>
      <span class="text-[#737791]">
        Lorem ipsum dolor sit amet consectetur. Mi ac platea adipiscing mi mi
        adipiscing elementum odio. In eget volutpat mauris dictumst sit
        ultricies tellus.
      </span>
      <div class="flex items-center justify-between">
        <span class="cursor-default rounded-[4px] bg-[#4EA7FF80] px-[12px] py-[10px] text-[#FFF]">
          Remote
        </span>
        <span class="text-[#737791]">Education</span>
      </div>
    </div>
  );
}

export default BigCard;
