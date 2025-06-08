"use client";
import { Search } from "lucide-react";
import React, { useEffect, useState } from "react";

interface StatusProps {
  status: "404" | "500" | "loading" | "not-found";
}

export default function Status({ status }: StatusProps) {
  let content;
  const totalBlocks = 8;
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((prevIndex) => (prevIndex + 1) % totalBlocks);
    }, 200); // Adjust speed here (milliseconds)
    return () => clearInterval(interval);
  }, []);

  switch (status) {
    case "404":
      content = (
        <div className="flex flex-col justify-center items-center w-full py-[73.5px] bg-[#06070B] text-white">
          <h1 className="text-[300px] font-bold leading-[250px] outline-text">
            404
          </h1>
          <div className="flex flex-col justify-center items-center gap-4 mt-4">
            <h2 className="text-3xl font-semibold">Page not found</h2>
            <p className="text-[#797979] text-center w-[500px]">
              Sorry, the page you are looking for doesn&apos;t exist or has been moved. Here are some helpful links:
            </p>
          </div>
        </div>
      );
      break;

    case "500":
      content = (
        <div className="flex flex-col justify-center items-center w-full py-[73.5px] bg-[#06070B] text-white">
          <h1 className="text-[300px] font-bold leading-[250px] outline-text">
            500
          </h1>
          <div className="flex flex-col justify-center items-center gap-4 mt-4">
            <h2 className="text-3xl font-semibold">Internal Server Error</h2>
            <p className="text-[#797979] text-center w-[500px]">
              The page you&apos;re looking for is currently under maintenance and will be back soon. Stay tuned!
            </p>
          </div>
        </div>
      );
      break;

    case "loading":
      content = (
        <div className="flex justify-center items-center w-full py-[192.5px] bg-[#06070B]">
          <div className="relative w-32 h-32">
            {[...Array(totalBlocks)].map((_, i) => (
              <div
                key={i}
                className="absolute top-0 left-0 w-full h-full"
                style={{
                  transform: `rotate(${i * 45}deg) translateY(-8px)`,
                }}
              >
                <div
                  className={`absolute top-0 left-[50%] w-[6px] h-[25%] border border-[#8761FF] ${
                    i === activeIndex ? "bg-[#8761FF]" : ""
                  }`}
                ></div>
              </div>
            ))}
          </div>
        </div>
      );
      break;

    case "not-found":
      content = (
        <div className="flex flex-col justify-center items-center w-full py-[154.5px] bg-[#06070B] text-white">
          <div className="text-center">
            <div className="mb-4 flex justify-center">
              <div className="flex justify-center items-center rounded-full bg-[#22242D99] w-[104px] aspect-square">
                <Search size={40} strokeWidth={1} color="#8761FF" />
              </div>
            </div>
            <h2 className="text-xl font-semibold mb-2">No result found</h2>
            <p className="text-[#6A7A8C] text-center w-[350px]">
              Your Search &quot;Landing page design&quot; did not match any projects. Please try again.
            </p>
          </div>
        </div>
      );
      break;

    default:
      content = null;
  }

  return <>{content}</>;
}
