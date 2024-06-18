import React from "react";
import { DocumentIcon } from "../../assets/icons/Icons";
function SmallCard() {
  return (
    <div
      style={{ boxShadow: "0px 4px 40px 0px rgba(0, 0, 0, 0.05)" }}
      className="bg-white border border-[#F5F5F5] flex  gap-[14px] rounded-[20px] p-[12px] shadow-[0_4px_40px_-15px_rgba(0,0,0,0.05)]"
    >
      <div className="rounded-[8px] bg-[#02E8AC] p-[12px] h-fit">
        <DocumentIcon />
      </div>
      <div className="flex flex-col gap-[4px]">
        <span className="text-[18px] font-[600] text-[#2B3D70]">Maximoz Team</span>
        <span className="text-[#737791]">
          Lorem ipsum dolor sit amet consectetur. Mi ac platea adipiscing mi mi
          adipiscin
        </span>
      </div>
    </div>
  );
}
export default SmallCard;
