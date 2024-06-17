import React from "react";
import BigCard from "../../components/bigCard/BigCard";

function Home() {
  return (
    <>
      <div class="flex flex-col items-center gap-[36px]">
        <div class="flex w-[310px] items-center overflow-hidden rounded-full border-[1px] border-[#4EA7FF] p-[4px]">
          <span class="w-full cursor-pointer rounded-full bg-[#4EA7FF] p-[12px] text-center text-[#FFF]">
            Professors
          </span>
          <span class="w-full cursor-pointer rounded-full bg-[#FFF] p-[12px] text-center text-[#4EA7FF]">
            Estudiantes
          </span>
        </div>
        <div class="flex w-full items-center justify-between rounded-[8px] p-[12px] shadow-[0_4px_40px_0px_rgba(0,0,0,0.05)]">
          <input
            type="text"
            class="w-full font-[500] text-[#4EA7FF] outline-none placeholder:text-[#2B3D70]"
            placeholder="Type to Search"
          />
          <div class="flex cursor-pointer items-center justify-center gap-[6px] rounded-[8px] bg-[#4EA7FF] px-[12px] py-[10px] transition-all hover:scale-95">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              viewBox="0 0 16 16"
              fill="none"
              class="h-[20px] w-[20px]"
            >
              <path
                d="M14 14L11.1046 11.1046M11.1046 11.1046C12.0697 10.1394 12.6667 8.80609 12.6667 7.33333C12.6667 4.38781 10.2789 2 7.33333 2C4.38781 2 2 4.38781 2 7.33333C2 10.2789 4.38781 12.6667 7.33333 12.6667C8.80609 12.6667 10.1394 12.0697 11.1046 11.1046Z"
                stroke="white"
                stroke-width="1.33333"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </svg>
            <span class="text-[#FFF]"> Search </span>
          </div>
        </div>
        <div class="flex flex-wrap items-center justify-center gap-[8px]">
          <span class="min-w-[160px] cursor-pointer rounded-full bg-[#4EA7FF] p-[12px] text-center text-[#FFF]">
            Generador de tests
          </span>
          <span class="min-w-[160px] cursor-pointer rounded-full bg-[#4EA7FF80] p-[12px] text-center text-[#FFF]">
            Resumidor de textos
          </span>
          <span class="min-w-[160px] cursor-pointer rounded-full bg-[#4EA7FF80] p-[12px] text-center text-[#FFF]">
            Explicador de testos
          </span>
          <span class="min-w-[160px] cursor-pointer rounded-full bg-[#4EA7FF80] p-[12px] text-center text-[#FFF]">
            Explicador de testos
          </span>
        </div>
        <div class="flex w-full items-center justify-between">
          <div class="flex flex-col gap-[4px]">
            <span class="text-[18px] font-[500] text-[#2B3D70]">
              Showing 246 Jobs Results
            </span>
            <span class="text-[14px] text-[#737791]">
              Based on your preferences
            </span>
          </div>
          <div class="flex items-center gap-[24px]">
            <div class="flex items-center justify-center gap-[12px] rounded-[10px] border-[1px] border-[#4EA7FF] p-[10px]">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                width="48"
                height="48"
                color="#4EA7FF"
                fill="none"
                class="h-[20px] w-[20px]"
              >
                <path
                  d="M6 15.5L18.0001 15.5001"
                  stroke="currentColor"
                  stroke-width="1.5"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
                <path
                  d="M3 11.5H21"
                  stroke="currentColor"
                  stroke-width="1.5"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
                <path
                  d="M8 2.5V8.5M8 8.5L6 6.5M8 8.5L10 6.5"
                  stroke="currentColor"
                  stroke-width="1.5"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
                <path
                  d="M12 15.5V21.5M12 21.5L10 19.5M12 21.5L14 19.5"
                  stroke="currentColor"
                  stroke-width="1.5"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
                <path
                  d="M16 2.5V8.5M16 8.5L14 6.5M16 8.5L18 6.5"
                  stroke="currentColor"
                  stroke-width="1.5"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
              </svg>
              <span class="text-[#2B3D70]">Newest</span>

              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                width="48"
                height="48"
                color="#4EA7FF"
                fill="none"
                class="h-[20px] w-[20px]"
              >
                <path
                  d="M18 9.00005C18 9.00005 13.5811 15 12 15C10.4188 15 6 9 6 9"
                  stroke="currentColor"
                  stroke-width="1.5"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
              </svg>
            </div>
            <div class="flex cursor-pointer items-center justify-center rounded-[8px] bg-[#4EA7FF] p-[8px]">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="30"
                height="30"
                viewBox="0 0 30 30"
                fill="none"
              >
                <path
                  d="M9.375 8.4375H26.25M9.375 15H26.25M9.375 21.5625H26.25"
                  stroke="white"
                  stroke-width="2.8125"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
                <path
                  d="M4.6875 9.375C5.20527 9.375 5.625 8.95527 5.625 8.4375C5.625 7.91973 5.20527 7.5 4.6875 7.5C4.16973 7.5 3.75 7.91973 3.75 8.4375C3.75 8.95527 4.16973 9.375 4.6875 9.375Z"
                  stroke="white"
                  stroke-width="1.875"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
                <path
                  d="M4.6875 15.9375C5.20527 15.9375 5.625 15.5178 5.625 15C5.625 14.4822 5.20527 14.0625 4.6875 14.0625C4.16973 14.0625 3.75 14.4822 3.75 15C3.75 15.5178 4.16973 15.9375 4.6875 15.9375Z"
                  stroke="white"
                  stroke-width="1.875"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
                <path
                  d="M4.6875 22.5C5.20527 22.5 5.625 22.0803 5.625 21.5625C5.625 21.0447 5.20527 20.625 4.6875 20.625C4.16973 20.625 3.75 21.0447 3.75 21.5625C3.75 22.0803 4.16973 22.5 4.6875 22.5Z"
                  stroke="white"
                  stroke-width="1.875"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
              </svg>
            </div>
            <div class="flex cursor-pointer items-center justify-center rounded-[8px] bg-[#4EA7FF50] p-[8px]">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="30"
                height="30"
                viewBox="0 0 30 30"
                fill="none"
              >
                <path
                  d="M6.25006 6.875H8.28131V8.90625H6.25006V6.875Z"
                  stroke="white"
                  stroke-width="2.03125"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
                <path
                  d="M6.25006 21.0938H8.28131V23.125H6.25006V21.0938Z"
                  stroke="white"
                  stroke-width="2.03125"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
                <path
                  d="M20.4687 6.875H22.4999V8.90625H20.4687V6.875Z"
                  stroke="white"
                  stroke-width="2.03125"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
                <path
                  d="M20.4687 13.9844H22.4999V16.0156H20.4687V13.9844Z"
                  stroke="white"
                  stroke-width="2.03125"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
                <path
                  d="M13.3594 13.9844H15.3906V16.0156H13.3594V13.9844Z"
                  stroke="white"
                  stroke-width="2.03125"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
                <path
                  d="M6.25006 13.9844H8.28131V16.0156H6.25006V13.9844Z"
                  stroke="white"
                  stroke-width="2.03125"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
                <path
                  d="M13.3594 6.875H15.3906V8.90625H13.3594V6.875Z"
                  stroke="white"
                  stroke-width="2.03125"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
                <path
                  d="M13.3594 21.0938H15.3906V23.125H13.3594V21.0938Z"
                  stroke="white"
                  stroke-width="2.03125"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
                <path
                  d="M20.4687 21.0938H22.4999V23.125H20.4687V21.0938Z"
                  stroke="white"
                  stroke-width="2.03125"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
              </svg>
            </div>
          </div>
        </div>
      </div>
      <div className="grid mt-[24px] grid-cols-4 gap-[24px]">
        <BigCard/>
        <BigCard/>
        <BigCard/>
        <BigCard/>
        <BigCard/>
      </div>
    </>
  );
}

export default Home;