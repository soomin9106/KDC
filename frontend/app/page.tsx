import Image from "next/image";
import Welcome from "./components/Home/Introduction";
import Schedule from "./components/Competition/Schedule";
import Venue from "./components/Competition/Venue";
import Overall from "./components/Competition/Overall";
import Instructors from "./components/Competition/Instructors";
import Fee from "./components/Competition/Fee";
import Introduction from "./components/Home/Introduction";

export default function Home() {
  return (
    <div className="flex flex-col w-full h-screen py-32 space-y-20 overflow-y-scroll">
      <Introduction />
      <Schedule />
      <Venue />
      <Overall />
      <Instructors />
      <Fee />
    </div>
  );
}
