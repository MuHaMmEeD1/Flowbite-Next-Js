import { Card, List, ListItem } from "flowbite-react";

export function StartSectionComponent() {
  return (
    <Card className="flex w-[70%] flex-col items-center justify-center py-[10px]">
      <List className="flex list-none flex-col min-[600px]:flex-row md:gap-[20px] lg:gap-[35px]">
        <ListItem className="flex flex-row items-center gap-3 md:gap-4 lg:gap-6">
          <div className="relative h-[30px] w-[30px] rounded-full bg-[#F53838] bg-opacity-25 md:h-[50px] md:w-[50px]">
            <img
              src="/icons/user.svg"
              className="absolute left-[5.35px] top-[4px] z-10 h-[20px] w-[20px] opacity-100 md:left-[10px] md:top-[10px] md:h-[30px] md:w-[30px]"
            />
          </div>
          <div className="">
            <p className="font-bold text-black md:text-[20px]">90+</p>
            <p className="md:text-[18px]">Users</p>
          </div>
          <div className="mx-3 hidden h-[40px] w-px bg-gray-400 min-[600px]:flex"></div>
        </ListItem>

        <ListItem className="flex flex-row items-center gap-3 md:gap-4 lg:gap-6">
          <div className="relative h-[30px] w-[30px] rounded-full bg-[#F53838] bg-opacity-25 md:h-[50px] md:w-[50px]">
            <img
              src="/icons/location.svg"
              className="absolute left-[5.35px] top-[4px] z-10 h-[20px] w-[20px] opacity-100 md:left-[10px] md:top-[10px] md:h-[30px] md:w-[30px]"
            />
          </div>
          <div className="">
            <p className="font-bold text-black md:text-[20px]">30+</p>
            <p className="md:text-[18px]">Locations</p>
          </div>
          <div className="mx-3 hidden h-[40px] w-px bg-gray-400 min-[600px]:flex"></div>
        </ListItem>
        <ListItem className="flex flex-row items-center gap-3 md:gap-4 lg:gap-6">
          <div className="relative h-[30px] w-[30px] rounded-full bg-[#F53838] bg-opacity-25 md:h-[50px] md:w-[50px]">
            <img
              src="/icons/it.svg"
              className="absolute left-[5.35px] top-[4px] z-10 h-[20px] w-[20px] opacity-100 md:left-[10px] md:top-[10px] md:h-[30px] md:w-[30px]"
            />
          </div>
          <div className="">
            <p className="font-bold text-black md:text-[20px]">50+</p>
            <p className="md:text-[18px]">Servers</p>
          </div>
        </ListItem>
      </List>
    </Card>
  );
}

export default StartSectionComponent;
