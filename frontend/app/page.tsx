import Image from "next/image";
import Schedule from "./components/Competition/Schedule";
import Venue from "./components/Competition/Venue";
import Overall from "./components/Competition/Overall";
import Instructors from "./components/Competition/Instructors";
import Fee from "./components/Competition/Fee";
import Introduction from "./components/Home/Introduction";

export default function Home() {
  return (
    <div className="flex flex-col w-full h-screen py-32 space-y-40 sm:space-y-20 overflow-y-scroll w-full">
      <Introduction />
      <Schedule />
      <Venue />
      <Overall />
      <Instructors />
      <Fee />
    </div>
  );
}
