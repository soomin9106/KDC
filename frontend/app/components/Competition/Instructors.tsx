import InstructorCon from "./InstructionCon"
import InstructorBallet from "./InstructorBallet"

const Instructors = () => {
    return (
        <div className="w-full flex flex-col justify-center items-center space-y-10 h-screen py-16 px-[16px]">
            <div className="flex flex-col space-y-2">
                <div className="text-3xl font-bold text-center">Instructors</div>
            </div>
            <InstructorBallet />
            <InstructorCon />
        </div>
    )
}

export default Instructors