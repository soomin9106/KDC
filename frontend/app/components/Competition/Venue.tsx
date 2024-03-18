import { VenueImages } from "./VenueImages"
import Image from "next/image"
import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
  } from "@/components/ui/accordion"


const Venue = () => {
    return (
        <div className="w-full flex flex-col justify-center items-center space-y-10 h-screen py-16 px-[16px]">
            <div className="flex flex-col space-y-5">
                <div className="text-3xl font-bold text-center">Performance Venue</div>
                <div className="text-2xl font-bold text-center">Vietnam Academy Of Dance</div>
            </div>
            <div className="hidden sm:block">
                <VenueImages />
            </div>
            <div className="flex flex-col sm:hidden">
                <div className="relative w-[300px] h-[200px] items-center justify-center">
                    <Image src="/academy1.jpg" alt="academy1" fill />
                </div>
                <div className="relative w-[300px] h-[200px] items-center justify-center">
                    <Image src="/academy2.jpg" alt="academy1" fill />
                </div>
                <div className="relative w-[300px] h-[200px] items-center justify-center">
                    <Image src="/academy3.jpg" alt="academy1" fill />
                </div>
            </div>
            <div className="w-full lg:w-[1000px]">
            <Accordion type="single" collapsible className="w-full">
                <AccordionItem value="item-1">
                    <AccordionTrigger>Main Theatre</AccordionTrigger>
                    <AccordionContent>
                        for <strong>Competition</strong>
                    </AccordionContent>
                </AccordionItem>
                <AccordionItem value="item-2">
                    <AccordionTrigger>Practice Room</AccordionTrigger>
                    <AccordionContent>
                        for <strong>Workshop</strong>
                    </AccordionContent>
                </AccordionItem>
            </Accordion>
            </div>
        </div>
    )
}

export default Venue