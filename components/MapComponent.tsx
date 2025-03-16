import React from "react";

const MapComponent = () => {
  return (
    <div className="flex flex-col items-center gap-[20px] pt-[40px]">
      <p className="flex flex-col items-center text-[26px] font-bold">
        <span>Huge global network</span>
        <span>of fast VPN</span>
      </p>
      <p className="flex flex-col items-center text-[14px] max-[500px]:text-[10px] max-[350px]:text-[8px]">
        <span>
          Lorem ipsum dolor sit amet consectetur. Quis tortor gravida nibh arcu
          id
        </span>
        <span> purus ullamcorper. Vel vel erat semper augue.</span>
      </p>
      <div className=" p-[30px]">
        <img src="/icons/word_map.svg" alt="world-map" />
      </div>

      <div className=" p-[30px]">
        <img src="/icons/sponsor_logos.svg" alt="world-map" />
      </div>
    </div>
  );
};

export default MapComponent;
