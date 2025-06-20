import Image from "next/image";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";


export function GuidelinesSection() {
    return (
      <section id="guideline" className="w-full py-20 px-8 bg-white text-gray-800">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-10">Participant Guidelines</h2>
          <Accordion type="multiple" className="space-y-4">
            <AccordionItem value="eligibility">
              <AccordionTrigger className="text-lg font-semibold">Eligibility by Category</AccordionTrigger>
              <AccordionContent className="text-gray-600">
                Participants must register under the correct age division and genre to be eligible for the competition.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="conduct">
              <AccordionTrigger className="text-lg font-semibold">Code of Conduct</AccordionTrigger>
              <AccordionContent className="text-gray-600">
                All participants must adhere to respectful behavior, follow instructions from event staff, and uphold fair play.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="performance">
              <AccordionTrigger className="text-lg font-semibold">Performance Rules & Music Requirements</AccordionTrigger>
              <AccordionContent className="text-gray-600">
                All performances must meet timing and format requirements. Music files must be submitted in approved formats only.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="media">
              <AccordionTrigger className="text-lg font-semibold">Media Release Terms</AccordionTrigger>
              <AccordionContent className="text-gray-600">
                By participating, all individuals grant permission to be photographed or filmed for promotional purposes.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="disqualification">
              <AccordionTrigger className="text-lg font-semibold">Disqualification Rules</AccordionTrigger>
              <AccordionContent className="text-gray-600">
                Violations of any rules may result in disqualification at the discretion of the event organizers.
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </div>
      </section>
    );
  }