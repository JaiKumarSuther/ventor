"use client";
import React from "react";
import { useRouter } from "next/navigation";  // Import useRouter
import "@/app/globals.css"; // Ensure you import this
import Image from "next/image";

export default function LoginPage() {
  const router = useRouter();  // Initialize router

  const handleSignIn = () => {
    router.push("/dashboard");
  };

  return (
    <div className="relative flex justify-center items-center w-full h-screen bg-[#06070B] text-white">
      {/* Radial gradient background behind everything */}
      <div
        className="
          absolute w-80 h-80
          left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2
          rounded-full
          bg-[radial-gradient(circle,#8761FF_40%,transparent_100%)]
          blur-[200px]
          z-0
        "
      ></div>

      {/* Main content with higher z-index */}
      <div className="flex flex-col justify-between gap-5 items-center w-106 z-10">
        <Image src="/assets/logo.svg" width={250} height={56} alt="Ventor" />
        <div className="flex flex-col gap-10 justify-between items-center w-full">
          <div
            className="flex flex-col
           gap-2"
          >
            <h2 className="text-center text-[30px] font-semibold">
              Log in to your account
            </h2>
            <p className="text-center text-[#B4B4B4]">Welcome back</p>
          </div>
          <button
            onClick={handleSignIn}  // Add onClick handler
            className="flex w-90 justify-center h-13 items-center gap-2 bg-[#101017E5] border cursor-pointer border-[#D5D7DA0F] font-semibold rounded-md"
          >
            <Image
              src="/assets/telegram.svg"
              width={24}
              height={24}
              alt="Ventor"
              className=""
            />
            <p>Sign in with Telegram</p>
          </button>
        </div>
      </div>
    </div>
  );
}
