import React from "react";

function BigCard() {
  return (
    <div class="flex max-w-[420px] flex-col gap-[14px] rounded-[20px] p-[12px] shadow-[0_4px_40px_-15px_rgba(0,0,0,0.05)]">
      <div class="flex items-center justify-between">
        <div class="flex flex-col gap-[4px]">
          <span class="text-[#737791]"> Maximoz Team </span>
          <span class="text-[18px] font-[600] text-[#2B3D70]">
            Generador d tests y examenes
          </span>
        </div>
        <img src="https://picsum.photos/60" class="rounded-[10px]" alt="" />
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
