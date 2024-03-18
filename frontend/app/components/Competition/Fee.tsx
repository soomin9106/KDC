import { Badge } from "@/components/ui/badge"

const Fee = () => {
    return (
        <div className="w-full flex flex-col justify-center items-center space-y-10 h-screen py-16 px-[16px]">
            <div className="flex flex-col space-y-5">
                <div className="text-3xl font-bold text-center">Participation Entry Fee</div>
            </div>
            <div className="w-full md:w-[50%] mx-auto my-10 p-6 bg-white shadow-md rounded-lg">
                <div className="space-y-4">
                    <div className="flex justify-between items-center">
                        <span className="text-lg font-medium">Competition - Individual</span>
                        <span className="text-lg">USD 120 (≒ 2,950,000 VND)</span>
                        <Badge variant="secondary">Local Preference</Badge>
                    </div>
                    <div className="flex justify-between items-center">
                        <span className="text-lg font-medium">Competition - Group</span>
                        <span className="text-lg">USD 100 (≒ 2,460,000 VND)</span>
                        <Badge variant="secondary">Local Preference</Badge>
                    </div>
                    <div className="flex justify-between items-center">
                        <span className="text-lg font-medium">Workshop</span>
                        <span className="text-lg">USD 30 (≒ 737,500 VND)</span>
                        <Badge>Optional</Badge>
                    </div>
                    <div className="border-t pt-4 mt-4">
                        <p className="text-lg font-medium">Travel cost & Accommodation</p>
                        <p className="text-lg">Individual Responsibility</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Fee