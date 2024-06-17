import React from "react";
function SmallCard() {
  return (
    <div class="flex max-w-[420px] gap-[14px] rounded-[20px] p-[12px] shadow-[0_4px_40px_-15px_rgba(0,0,0,0.05)]">
      <img src="https://picsum.photos/60" class="rounded-[10px]" alt="" />
      <div class="flex flex-col gap-[4px]">
        <span class="text-[18px] font-[600] text-[#2B3D70]">Maximoz Team</span>
        <span class="text-[#737791]">
          Lorem ipsum dolor sit amet consectetur. Mi ac platea adipiscing mi mi
          adipiscin
        </span>
      </div>
    </div>
  );
}
export default SmallCard;