"use client";
import React, { useState } from "react";
import Image from "next/image";
import PageContainer from "@/components/ui/PageContainer";
import SummaryCard from "@/components/ui/SummaryCard";
import FilterButton from "@/components/ui/FilterButton";
import ProjectCard from "@/components/ui/ProjectCard";
import SearchInput from "@/components/ui/SearchInput";
import { useRouter } from "next/navigation";
import OutlinedButton from "@/components/ui/OutlinedButton";
import GradientButton from "@/components/ui/GradientButton";

export default function DashboardPage() {
  const [search, setSearch] = useState("");
  const summaryData = [
    {
      id: 1,
      icon: (
        <Image src="/assets/sol.svg" width={32} height={32} alt="Total SOL" />
      ),
      title: "Total SOL",
      value: "120.35 SOL",
    },
    {
      id: 2,
      icon: (
        <Image src="/assets/usd.svg" width={32} height={32} alt="Total USD" />
      ),
      title: "Total USD",
      value: "200 USD",
    },
    {
      id: 3,
      icon: (
        <Image
          src="/assets/diamond.svg"
          width={32}
          height={32}
          alt="Total Projects"
        />
      ),
      title: "Total Projects",
      value: "32",
    },
    {
      id: 4,
      icon: (
        <Image src="/assets/pnl.svg" width={25} height={25} alt="Total PNL" />
      ),
      title: "Total PNL",
      value: "37 SOL",
    },
    
  ];
  const router = useRouter();

  // Handler functions
  const handleGetBackAllSOL = () => {
    console.log("Get Back all SOL clicked!");
    // Implement logic here
  };

  const handleCreateProject = () => {
    router.push("/create-project");
  };

  return (
    <PageContainer>
      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 w-full">
        {summaryData.map((item) => (
          <SummaryCard
            key={item.id}
            icon={item.icon}
            title={item.title}
            value={item.value}
          />
        ))}
      </div>

      <div className="flex justify-between flex-col gap-4 lg:flex-row pt-10 mb-10 border-b border-[#FFFFFF14]">
        <h1 className="text-3xl font-semibold text-white">Projects</h1>
        <div className="flex items-center gap-4 mb-6 flex-col md:flex-row">
          <div className="flex gap-4 justify-between w-full">
            <SearchInput
              placeholder="Search here..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              className="w-64"
            />
            <FilterButton label="Filter" />
          </div>
          <div className="flex gap-2 md:gap-4 w-full justify-between">
            <OutlinedButton
              onClick={handleGetBackAllSOL}
              label="Get Back all SOL"
              width="176px"
              height="40px"
            />
            <GradientButton
              onClick={handleCreateProject}
              label="Create Project"
              gradient="linear-gradient(0deg, #5A43C6, #8761FF)"
              hoverGradient="linear-gradient(0deg, #4A36B0, #765FE0)"
              className="h-10 w-44"
            />
          </div>
        </div>
      </div>

<div className="w-full max-h-[500px] overflow-y-auto pr-1">
  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 w-full">
    {Array.from({ length: 12 }).map((_, index) => (
      <ProjectCard
        key={index}
        title={`SOLPhoenix SOL ${index + 1}`}
        pnl="2%"
        projectId={`VX1A-9034-${index + 1}`}
        status={index % 2 === 0 ? "Launched" : "Not Launched"}
        onDoubleClick={() => router.push("/swap-manager")}
        onMoreClick={() => router.push("/create-project")}
      />
    ))}
  </div>
</div>

    </PageContainer>
  );
}
