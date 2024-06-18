import React from "react";
import {
  BlogIcon,
  ContactIcon,
  CurrentIcon,
  GenerationHistory,
  MindMapIcon,
  QuizIcon,
  ToolPanelIcon,
  WriteIcon,
} from "../../assets/icons/Icons";

function Sidebar() {
  return (
      <div className="max-h-[100vh] overflow-y-scroll min-h-[100vh]">
        <div className=" max-h-[100vh] overflow-y-scroll min-h-[100vh] flex  w-full flex-col items-start justify-between rounded-r-[10px] bg-gradient-to-b gap-[16px] 2xl:gap-[24px] from-[#4EA7FF] to-[#007CF5] p-[20px] 2xl:p-[32px]">

          <div className="flex w-full flex-col items-start gap-[12px] 2xl:gap-[20px]">
            <div className="flex items-center gap-[6px]">
                <img src="./assets/logo.png" alt="" />
              <span className="text-[24px] font-[700] uppercase text-[#ECF6FF]">
                Tututor.AI
              </span>
            </div>
            <div className="h-[2px] w-full rounded-full bg-[#FFFFFF30]"></div>
            <div className="flex w-full flex-col gap-[5px]">
              <span className="mb-[10px] text-[12px] uppercase text-[#ECF6FF] px-[18px]">
                Main
              </span>
              <div className="flex w-full items-center gap-[10px] rounded-[8px] bg-[#e9f4ff] 2xl:px-[24px] py-[8px] px-[16px] 2xl:py-[16px]">
                <ToolPanelIcon className={"h-[20px] w-[20px]"} />
                <span className="font-[600] text-[#379BFC] max-2xl:text-[14px]">
                  Panel de herramientas
                </span>
              </div>
              <div className="flex w-full items-center gap-[10px] rounded-[8px] bg-transparent 2xl:px-[24px] py-[8px] px-[16px] 2xl:py-[16px]">
                <GenerationHistory className={"h-[20px] w-[20px]"}  />
                <span className="font-[600] text-[#FFF] max-2xl:text-[14px]">
                  Historial de Generaciones
                </span>
              </div>
              <div className="flex w-full items-center gap-[10px] rounded-[8px] bg-transparent 2xl:px-[24px] py-[8px] px-[16px] 2xl:py-[16px]">
                <QuizIcon className={"h-[20px] w-[20px]"}  />
                <span className="font-[600] text-[#FFF] max-2xl:text-[14px]">
                  Generador de test y exameness
                </span>
              </div>
              <div className="flex w-full items-center gap-[10px] rounded-[8px] bg-transparent 2xl:px-[24px] py-[8px] px-[16px] 2xl:py-[16px]">
                <WriteIcon className={"h-[20px] w-[20px]"}  />
                <span className="font-[600] text-[#FFF] max-2xl:text-[14px]">
                  Escritor Inteligente con IA
                </span>
              </div>
              <div className="flex w-full items-center gap-[10px] rounded-[8px] bg-transparent 2xl:px-[24px] py-[8px] px-[16px] 2xl:py-[16px]">
                <MindMapIcon className={"h-[20px] w-[20px]"}  />
                <span className="font-[600] text-[#FFF] max-2xl:text-[14px]">
                  Mapas mentales para ayudarte a estudiar
                </span>
              </div>
            </div>
            <div className="h-[2px] w-full rounded-full bg-[#FFFFFF30]"></div>
            <div className="flex w-full flex-col gap-[5px]">
              <span className="mb-[10px] text-[12px] uppercase text-[#ECF6FF] px-[18px]">
                OTHER
              </span>
              <div className="flex w-full items-center gap-[10px] rounded-[8px] bg-transparent 2xl:px-[24px] py-[8px] px-[16px] 2xl:py-[16px]">
                <BlogIcon />
                <span className="font-[600] text-[#FFF] max-2xl:text-[14px]"> Blog </span>
              </div>
              <div className="flex w-full items-center gap-[10px] rounded-[8px] bg-transparent 2xl:px-[24px] py-[8px] px-[16px] 2xl:py-[16px]">
                <ContactIcon />
                <span className="font-[600] text-[#FFF] max-2xl:text-[14px]"> Contacta </span>
              </div>
            </div>
          </div>

          <div className="flex w-full flex-col gap-[16px] rounded-[12px] bg-[#FFFFFF15] p-[16px]">
            <div className="flex w-full items-center justify-between  bg-[#CAE5FF] p-[10px] max-w-[38px] max-h-[38px] rounded-[8px]">
              <CurrentIcon iconColor="#FBFBFD" />
            </div>
            <div className="flex flex-col gap-[8px]">
              <div className="flex w-full items-center justify-between">
                <span className="text-[14px] text-[#FBFBFD]">
                  Free Generation
                </span>
                <span className="font-[600] text-[#FFF]"> 4/156 </span>
              </div>
              <div className="h-[8px] w-full overflow-hidden rounded-[3px] bg-[#06FEBE30]">
                <div className="h-full w-[70%] rounded-[3px] bg-[#06FEBE]"></div>
              </div>
            </div>
            <span className="w-full rounded-[8px] bg-[#CAE5FF] p-[10px] text-center font-[500] text-[#379BFC] cursor-pointer transition-all hover:scale-95">
              Upgrade Now
            </span>
          </div>

        </div>

      </div>
  );
}

export default Sidebar;
