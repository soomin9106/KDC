import { ChevronRight } from "lucide-react"
import Image from "next/image"

const InstructorCon = () => {
    return (
        <div className="w-full md:w-[60%] mx-auto my-10 p-6 bg-white shadow-md rounded-lg">
            <div className="flex items-center space-x-4">
                <div className="flex-shrink-0">
                    <Image
                        alt="Contemporary Master"
                        className="h-60 w-36 object-cover rounded-[8px]"
                        height="100"
                        src="/LEE.jpg"
                        style={{
                            aspectRatio: "100/100",
                            objectFit: "cover",
                        }}
                        width="100"
                    />
                </div>
                <div className="flex-1 min-w-0">
                    <p className="text-lg font-medium leading-5">Mr. LEE DAEGUN</p>
                    <p className="text-sm leading-5 text-gray-500">Contemporary</p>
                    <div className="mt-2">
                        <div className="flex items-center text-sm leading-5">
                            <ChevronRight className="h-4 w-4 text-gray-400" />
                            <span className="ml-1">Instructor, Goyang High School Of Arts</span>
                        </div>
                        <div className="flex items-center text-sm leading-5">
                            <ChevronRight className="h-4 w-4 text-gray-400" />
                            <span className="ml-1">Artistic Director, Crayon Dance Project</span>
                        </div>
                        <div className="flex items-center text-sm leading-5">
                            <ChevronRight className="h-4 w-4 text-gray-400" />
                            <span className="ml-1">2023 CODAKO “Dancer Of The Year” Winner</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default InstructorCon