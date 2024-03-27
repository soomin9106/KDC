import { ChevronRight } from "lucide-react"
import Image from "next/image"

const InstructorBallet2 = () => {
    return (
        <div className="w-full md:w-[60%] mx-auto my-10 p-6 bg-white shadow-md rounded-lg">
            <div className="flex items-center space-x-4">
                <div className="flex-shrink-0">
                    <Image
                        alt="Ballet Master"
                        className="h-60 w-36 rounded-[8px] object-cover"
                        height="100"
                        src="/LUISA.jpeg"
                        style={{
                            aspectRatio: "100/100",
                            objectFit: "cover",
                        }}
                        width="100"
                    />
                </div>
                <div className="flex-1 min-w-0">
                    <p className="text-lg font-medium leading-5">Ms. LUISA LAU</p>
                    <p className="text-sm leading-5 text-gray-500">Ballet</p>
                    <div className="mt-2">
                        <div className="flex items-center text-sm leading-5">
                            <ChevronRight className="h-4 w-4 text-gray-400" />
                            <span className="ml-1">Royal Academy of Dance (UK)</span>
                        </div>
                        <div className="flex items-center text-sm leading-5">
                            <ChevronRight className="h-4 w-4 text-gray-400" />
                            <span className="ml-1">CEO, WL Danceworld Productions, Malaysia</span>
                        </div>
                        <div className="flex items-center text-sm leading-5">
                            <ChevronRight className="h-4 w-4 text-gray-400" />
                            <span className="ml-1">MIBGP Organizer</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default InstructorBallet2