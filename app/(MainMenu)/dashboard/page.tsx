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
import SelectTypeModal from "@/components/ui/SelectTypeModal"; // ✅ ADD THIS
import CreateCTOModal from "@/components/ui/CreateCTOModal";

export default function DashboardPage() {
  const [search, setSearch] = useState("");
  const [isPopupVisible, setPopupVisible] = useState(false);
  const [isCTOModalOpen, setCTOModalOpen] = useState(false);
  const [isSelectModalOpen, setSelectModalOpen] = useState(false); // ✅ NEW
  const [destinationAddress, setDestinationAddress] = useState("");
  const [isConfirming, setConfirming] = useState(false); // To handle confirmation step

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
    setPopupVisible(true); // Show the popup when the button is clicked
  };

  const handleCreateProject = () => {
    setSelectModalOpen(true); // ✅ OPEN MODAL
  };

  const handleCTOClick = () => {
    setSelectModalOpen(false);
    setCTOModalOpen(true); // ✅ Open the CTO modal
  };

  const handleNewProjectClick = () => {
    setSelectModalOpen(false);
    router.push("/create-project");
  };

  const handleAddressSubmit = () => {
    setConfirming(true); // After destination is filled, show confirmation step
  };

  const handleResend = () => {
    setConfirming(false); // Resend and reset for another input
    setDestinationAddress(""); // Clear the address input
    setPopupVisible(true); // Show the destination address input popup again
  };

  const handleConfirm = () => {
    // Proceed with sending SOL
    alert("SOL sent successfully to the address: " + destinationAddress);
    setPopupVisible(false);
    setConfirming(false);
    setDestinationAddress(""); // Clear the input after successful action
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setDestinationAddress(e.target.value);
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
          <div className="flex justify-between gap-4">
            <SearchInput
              placeholder="Search here..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              className="w-55"
            />
            <FilterButton label="Filter" />
          </div>
          <div className="flex gap-4 justify-between">
            <OutlinedButton
              onClick={() => {}}
              label="Claim Dev Rewards"
              width="165px"
              height="40px"
            />
            <OutlinedButton
              onClick={handleGetBackAllSOL}
              label="Get Back all SOL"
              width="155px"
              height="40px"
            />
          </div>
          <GradientButton
            onClick={handleCreateProject}
            label="Create Project"
            gradient="linear-gradient(0deg, #5A43C6, #8761FF)"
            hoverGradient="linear-gradient(0deg, #4A36B0, #765FE0)"
            className="h-10 w-full md:w-44"
          />
        </div>
      </div>

      {/* Modal for destination address */}
      {isPopupVisible && !isConfirming && (
        <div className="fixed inset-0 bg-[#000000a8] flex justify-center items-center z-50">
          <div className="bg-[#1E1F24] p-8 rounded-lg w-full max-w-md shadow-xl">
            <h2 className="text-3xl font-semibold text-white mb-6 text-center">
              Enter Destination Address
            </h2>

            <input
              type="text"
              placeholder="Destination Address"
              value={destinationAddress}
              onChange={handleInputChange} // Correct onChange handler
              className="w-full p-4 border text-white bg-transparent border-[#444] rounded-lg mb-6 focus:outline-none focus:ring-2 focus:ring-indigo-500"
              style={{ height: "48px" }} // Ensures consistent height
            />

            <div className="flex justify-between gap-4 mb-6">
              {/* Submit Button */}
              <button
                className="rounded-full cursor-pointer font-[600] text-sm text-white px-6 py-3 w-full"
                style={{
                  background: "linear-gradient(0deg, #5A43C6, #8761FF)",
                  height: "48px", // Ensures height is same for all buttons
                }}
                onClick={handleAddressSubmit}
                onMouseEnter={(e) => {
                  (e.currentTarget as HTMLButtonElement).style.background =
                    "linear-gradient(0deg, #4A36B0, #765FE0)";
                }}
                onMouseLeave={(e) => {
                  (e.currentTarget as HTMLButtonElement).style.background =
                    "linear-gradient(0deg, #5A43C6, #8761FF)";
                }}
              >
                Submit
              </button>

              {/* Cancel Button */}
              <button
                className="rounded-full cursor-pointer border border-[#7458E7] text-[#7458E7] hover:bg-[#8761FF]/10 px-6 py-3 w-full"
                onClick={() => setPopupVisible(false)}
                style={{ width: "100%", height: "48px" }}
              >
                Cancel
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Confirmation modal */}
      {isConfirming && (
        <div className="fixed inset-0 bg-[#000000a8] flex justify-center items-center z-50">
          <div className="bg-[#1E1F24] p-8 rounded-lg w-full max-w-md shadow-xl">
            <h2 className="text-3xl font-semibold text-white mb-4 text-center">
              Confirmation
            </h2>
            <p className="text-lg text-[#E0E0E0] mb-6 text-center">
              Are you sure you want to send SOL to this address?
            </p>

            <div className="flex gap-4 mb-6">
              {/* Confirm Button */}
              <button
                className="rounded-full cursor-pointer font-[600] text-sm text-white px-6 py-3 w-full"
                style={{
                  background: "linear-gradient(0deg, #5A43C6, #8761FF)",
                  height: "48px", // Ensures height is same for all buttons
                }}
                onClick={handleConfirm}
                onMouseEnter={(e) => {
                  (e.currentTarget as HTMLButtonElement).style.background =
                    "linear-gradient(0deg, #4A36B0, #765FE0)";
                }}
                onMouseLeave={(e) => {
                  (e.currentTarget as HTMLButtonElement).style.background =
                    "linear-gradient(0deg, #5A43C6, #8761FF)";
                }}
              >
                Confirm
              </button>

              {/* Resend Button with same width and styles */}
              <button
                className="rounded-full cursor-pointer border border-[#7458E7] text-[#7458E7] hover:bg-[#8761FF]/10 px-6 py-3 w-full"
                onClick={handleResend}
                style={{ height: "48px" }}
              >
                Resend
              </button>
            </div>
          </div>
        </div>
      )}

      <div className="w-full pr-1">
        <div className="max-h-[500px] overflow-y-auto custom-scroll pr-2">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 w-full">
            {Array.from({ length: 12 }).map((_, index) => (
              <ProjectCard
                key={index}
                title={`SOLPhoenix SOL ${index + 1}`}
                pnl="2%"
                projectId={`VX1A-9034-${index + 1}`}
                status={index % 2 === 0 ? "Launched" : "Not Launched"}
                onDoubleClick={() => router.push("/features/overview")}
                onMoreClick={() => router.push("/create-project")}
              />
            ))}
          </div>
        </div>
      </div>
      <SelectTypeModal
        isOpen={isSelectModalOpen}
        onClose={() => setSelectModalOpen(false)}
        onCTOClick={handleCTOClick}
        onNewProjectClick={handleNewProjectClick}
      />
      <CreateCTOModal
        isOpen={isCTOModalOpen}
        onClose={() => setCTOModalOpen(false)}
        onSave={(address) => {
          console.log("CTO Wallet Address saved:", address);
          setCTOModalOpen(false);
          router.push("/create-project?flow=cto"); // ✅ pass param
        }}
      />
    </PageContainer>
  );
}
