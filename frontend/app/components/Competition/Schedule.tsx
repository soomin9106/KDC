import ScheduleDetail from "./ScheduleDetail"

const Schedule = () => {
    return (
        <div className="w-full flex flex-col justify-center items-center space-y-10 h-screen bg-accent/50 py-16 px-[16px]">
            <div className="flex flex-col space-y-2">
                <div className="text-3xl font-bold text-center">Event Schedule</div>
                <div className="text-2xl font-medium text-center">2024 JUNE 15(Sat) & 16(Sun) : 2-Days Span</div>
            </div>
            <ScheduleDetail />
        </div>
    )
}

export default Schedule