import React from "react";

const SubscribeComponent = () => {
  return (
    <div className="mt-[40px] flex flex-col items-center gap-[10px] rounded-[20px] bg-white p-[30px] shadow-2xl sm:w-[90%] sm:flex-row sm:justify-between md:relative md:top-[50px] md:w-[80%] lg:w-[70%]">
      <div className="flex flex-col gap-[10px] text-center sm:text-start">
        <h2 className="text-[26px] font-bold max-[350px]:text-[22px] xl:text-[30px]">
          <span className="block">Subscribe now for</span>
          <span className="block">get special features!</span>
        </h2>
        <p className="text-gray-600 max-[350px]:text-[14px] xl:text-[18px]">
          Lorem ipsum dolor sit amet{" "}
        </p>
      </div>
      <button className="mt-4 rounded-[10px] bg-[#F53838] px-6 py-2 font-bold text-white shadow-md transition lg:p-[20px] lg:text-[22px] xl:px-[30px]">
        Subscribe now
      </button>
    </div>
  );
};

export default SubscribeComponent;
