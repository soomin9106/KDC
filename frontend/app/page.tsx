import Image from "next/image";
import Welcome from "./components/Home/Welcome";

export default function Home() {
  return (
    <div className="flex flex-col w-full min-h-screen py-32">
      <Welcome />
    </div>
  );
}
