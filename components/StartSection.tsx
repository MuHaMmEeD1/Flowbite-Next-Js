import { Card } from "flowbite-react";

export function StartSection() {
  return (
    <div className="flex flex-col-reverse items-center md:flex-row">
      <Card className="max-w-[600px] border-0 shadow-none ">
        <div className="flex flex-col items-center justify-start md:items-start md:gap-[10px]">
          <h1 className="text-3xl sm:text-3xl md:text-[34px] lg:text-5xl xl:text-5xl">
            <span className="block">Want anything to be</span>
            <span className="block">
              easy with <span className="font-bold">LaslesVPN</span>
            </span>
          </h1>

          <p className="max-w-[350px] py-4 ">
            Lorem ipsum dolor sit amet consectetur. Quis tortor gravida nibh
            arcu id purus ullamcorper. Vel vel erat semper augue.
          </p>

          <button className="w-[200px] rounded-full bg-[#F53838] p-4 py-4 text-[20px] text-white ">
            Get started
          </button>
        </div>
      </Card>
      <div>
        <img
          src="/icons/img1.svg"
          alt="Main Image"
          className="h-[340px] w-[380px] lg:h-[400px] lg:w-[460px] xl:h-[500px] xl:w-[580px]"
        />
      </div>
    </div>
  );
}
