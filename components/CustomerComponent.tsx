"use client";

import React, { useEffect, useState } from "react";
import { Card, Rating } from "flowbite-react";

const CustomerComponent = () => {
  const users = [
    {
      id: 1,
      name: "Brooklyn Simmons",
      location: "Warsaw, Poland",
      rating: 4.5,
      image: "/icons/p3.svg",
      review:
        "Wow... I am very happy to use this VPN, it turned out to be more than my expectations and so far there have been no problems. LaslesVPN is always the best.",
    },
    {
      id: 2,
      name: "Darlene Robertson",
      location: "Warsaw, Poland",
      rating: 4.5,
      image: "/icons/p2.svg",
      review:
        "Wow... I am very happy to use this VPN, it turned out to be more than my expectations and so far there have been no problems. LaslesVPN is always the best.",
    },
    {
      id: 3,
      name: "Darrell Steward",
      location: "Warsaw, Poland",
      rating: 4.5,
      image: "/icons/p1.svg",
      review:
        "Wow... I am very happy to use this VPN, it turned out to be more than my expectations and so far there have been no problems. LaslesVPN is always the best.",
    },
    {
      id: 4,
      name: "Ethan Carter",
      location: "Berlin, Germany",
      rating: 4.8,
      image: "/icons/p4.svg",
      review:
        "LaslesVPN has completely changed my online experience. Fast, reliable, and easy to use! Highly recommended!",
    },
  ];

  const [startIndex, setStartIndex] = useState(0);
  const [maxVisible, setMaxVisible] = useState(3);
  const [windowWidth, setWindowWidth] = useState(0);

  const handleNext = () => {
    setStartIndex((prev) => (prev + 1) % users.length);
  };

  const handlePrev = () => {
    setStartIndex((prev) => (prev - 1 + users.length) % users.length);
  };

  useEffect(() => {
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };

    handleResize();

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  useEffect(() => {
    if (windowWidth < 650) {
      setMaxVisible(1);
    } else if (windowWidth < 970) {
      setMaxVisible(2);
    } else {
      setMaxVisible(3);
    }
  }, [windowWidth]);

  return (
    <div className="flex flex-col items-center gap-[20px] pt-[10px]">
      <p className="flex flex-col items-center text-[26px] font-bold">
        <span>Trusted by thousands of</span>
        <span>happy customers</span>
      </p>
      <p className="flex flex-col items-center text-[14px] max-[500px]:text-[10px] max-[350px]:text-[8px]">
        <span>
          Lorem ipsum dolor sit amet consectetur. Quis tortor gravida nibh arcu
          id
        </span>
        <span> purus ullamcorper. Vel vel erat semper augue.</span>
      </p>

      <div className="relative flex w-full justify-center gap-[20px] overflow-hidden lg:pt-[20px]">
        {users.slice(startIndex, startIndex + maxVisible).map((user, index) => (
          <Card
            key={user.id}
            className="max-w-[300px] border-2 transition-transform duration-300 ease-in-out xl:max-w-[400px]"
          >
            <div className="flex items-center gap-[10px] xl:gap-[24px]">
              <img
                src={user.image}
                alt={`profile-img-${user.id}`}
                className="h-[50px] w-[50px] xl:h-[70px] xl:w-[70px]"
              />
              <div>
                <h5 className="text-[15px] font-bold xl:text-[20px]">
                  {user.name}
                </h5>
                <p className="text-[12px] text-gray-700 xl:text-[14px]">
                  {user.location}
                </p>
              </div>
              <div className="flex items-center gap-1">
                <p className="xl:text-[18px]">{user.rating}</p>
                <Rating>
                  <Rating.Star />
                </Rating>
              </div>
            </div>
            <p className="text-[13px] xl:text-[16px]">{user.review}</p>
          </Card>
        ))}
      </div>

      <div className="flex w-[80%] items-center justify-between md:w-[90%] lg:w-[100%]">
        <ul className="flex gap-[10px]">
          {users.map((_, index) => (
            <div
              key={index}
              className={`h-[20px] rounded-full transition-all duration-300 ${
                startIndex === index
                  ? "w-[80px] bg-[#F53838]"
                  : "w-[20px] bg-gray-500"
              }`}
            ></div>
          ))}
        </ul>
        <div className="flex gap-[10px]">
          <button onClick={handlePrev}>
            <img src="/icons/left_button.svg" alt="navigator" />
          </button>
          <button onClick={handleNext}>
            <img src="/icons/right_button.svg" alt="navigator" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default CustomerComponent;
