import {
    ResizableHandle,
    ResizablePanel,
    ResizablePanelGroup,
} from "@/components/ui/resizable"
import Image from "next/image"

export function VenueImages() {
    return (
        <ResizablePanelGroup
            direction="horizontal"
            className="w-full rounded-lg border"
        >
            <ResizablePanel className="w-[250px]">
                <div className="relative w-[250px] h-[300px] items-center justify-center">
                    <Image src="/academy1.jpg" alt="academy1" fill />
                </div>
            </ResizablePanel>
            <ResizablePanel className="w-[350px]">
                <div className="relative w-[350px] h-[300px] items-center justify-center">
                    <Image src="/academy2.jpg" alt="academy1" fill />
                </div>
            </ResizablePanel>
            <ResizablePanel className="w-[400px]">
                <div className="relative w-[400px] h-[300px] items-center justify-center">
                    <Image src="/academy3.jpg" alt="academy1" fill />
                </div>
            </ResizablePanel>
        </ResizablePanelGroup>
    )
}