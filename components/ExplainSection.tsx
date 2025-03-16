import React from "react";

const ExplainSection = () => {
  return (
    <div className="flex flex-col items-center max-[400px]:pl-3 lg:pt-[40px]">
      <div className="flex flex-col justify-center gap-[20px] lg:flex-row lg:gap-[40px]">
        <img
          src="/icons/img2.svg"
          alt="ExplainImg"
          className="h-[340px] w-[380px] md:h-[420px] md:w-[490px]  lg:h-[380px] lg:w-[430px] xl:h-[500px] xl:w-[580px]"
        />
        <div className="flex flex-col gap-[10px] md:gap-[24px] ">
          <h2 className="text-[28px] font-bold max-[400px]:text-[24px] sm:text-[34px] md:text-[42px] lg:text-[36px] xl:text-[40px]">
            <span className="block"> We provide many</span>
            <span className="block"> features you can use</span>
          </h2>
          <p className="max-[400px]:text-[12px] sm:text-[20px] md:text-[26px] lg:text-[22px]">
            <span className="block">
              {" "}
              Lorem ipsum dolor sit amet consectetur. Quis tortor{" "}
            </span>
            <span className="block">
              {" "}
              gravida nibh arcu id purus ullamcorper. Vel vel erat{" "}
            </span>
            <span className="block"> semper augue.</span>
          </p>

          <ul className="flex list-none flex-col gap-3 max-[400px]:text-[12px] sm:text-[20px] md:text-[26px] lg:text-[22px]">
            <li className="flex gap-[6px] sm:gap-[10px] ">
              <img
                src="/icons/ok.svg"
                alt="ok"
                className="sm:h-[30px] sm:w-[30px]"
              />
              <p>Powerfull online protection.</p>
            </li>
            <li className="flex gap-[6px] sm:gap-[10px]">
              <img
                src="/icons/ok.svg"
                alt="ok"
                className="sm:h-[30px] sm:w-[30px]"
              />
              <p>Internet with borders</p>
            </li>
            <li className="flex gap-[6px] sm:gap-[10px]">
              <img
                src="/icons/ok.svg"
                alt="ok"
                className="sm:h-[30px] sm:w-[30px]"
              />
              <p>Supercharged VPN</p>
            </li>
            <li className="flex gap-[6px] sm:gap-[10px]">
              <img
                src="/icons/ok.svg"
                alt="ok"
                className="sm:h-[30px] sm:w-[30px]"
              />
              <p>No specific time limits</p>
            </li>
          </ul>
        </div>
      </div>

      <div className="flex flex-col items-center pt-[30px] md:pt-[45px] lg:pt-[60px] ">
        <h2 className="pb-[10px] text-[28px] font-bold max-[400px]:text-[24px] sm:text-[34px] md:pb-[20px] md:text-[42px] lg:text-[36px]">
          Choose your plan
        </h2>
        <p className="max-[400px]:text-[12px] sm:text-[20px] md:text-[26px] lg:text-[22px]">
          <span className="block">
            Lorem ipsum dolor sit amet consectetur. Quis tortor
          </span>
          <span className="block">
            gravida nibh arcu id purus ullamcorper. Vel vel erat
          </span>
          <span className="block">semper augue.</span>
        </p>
      </div>
    </div>
  );
};

export default ExplainSection;
