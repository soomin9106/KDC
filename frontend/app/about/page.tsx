import Welcome from "../components/Home/Welcome";

export default function About() {
    return (
        <div className="flex flex-col w-full h-screen py-32 space-y-20 overflow-y-scroll">
            <Welcome />
        </div>
    );
}
