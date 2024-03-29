import Fee from "../components/Competition/Fee";
import Instructors from "../components/Competition/Instructors";
import Intro from "../components/Competition/Intro";
import Overall from "../components/Competition/Overall";
import Schedule from "../components/Competition/Schedule";
import Venue from "../components/Competition/Venue";

export default function Competition() {
    return (
        <div className="flex flex-col w-full h-screen py-32 space-y-20 overflow-y-scroll">
            <Schedule />
            <Fee />
        </div>
    );
}