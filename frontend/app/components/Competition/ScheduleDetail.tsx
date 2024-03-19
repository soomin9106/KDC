const ScheduleDetail = () => {
    return (
        <div className="bg-black text-white w-full sm:w-[50%] rounded-[8px]">
            <div className="grid grid-cols-3 gap-4 p-4">
                <div className="col-span-1">
                    <p className="font-bold">JUNE 15</p>
                    <p>(Sat)</p>
                </div>
                <div className="col-span-2 grid grid-cols-2 gap-4">
                    <div className="col-span-1">
                        <p>Competition</p>
                    </div>
                    <div className="col-span-1">
                        <p>Ballet (Classic)</p>
                    </div>
                    <div className="col-span-1">
                        <p>Workshop</p>
                    </div>
                    <div className="col-span-1">
                        <p>Contemporary</p>
                    </div>
                </div>
            </div>
            <div className="grid grid-cols-3 gap-4 p-4 border-t border-white">
                <div className="col-span-1">
                    <p className="font-bold">JUNE 16</p>
                    <p>(Sun)</p>
                </div>
                <div className="col-span-2 grid grid-cols-2 gap-4">
                    <div className="col-span-1">
                        <p>Competition</p>
                    </div>
                    <div className="col-span-1">
                        <p>Contemporary</p>
                    </div>
                    <div className="col-span-1">
                        <p>Workshop</p>
                    </div>
                    <div className="col-span-1">
                        <p>Ballet (Classic)</p>
                    </div>
                    <div className="col-span-2">
                        <p>Award Ceremony</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ScheduleDetail