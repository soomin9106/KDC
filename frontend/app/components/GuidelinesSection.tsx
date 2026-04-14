import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";

const guidelines = [
  {
    value: "eligibility",
    title: "Eligibility by Category",
    content:
      "Participants must register under the correct age division and genre to be eligible for the competition. Age verification may be required at the event.",
  },
  {
    value: "conduct",
    title: "Code of Conduct",
    content:
      "All participants must adhere to respectful behavior, follow instructions from event staff, and uphold fair play throughout the competition.",
  },
  {
    value: "performance",
    title: "Performance Rules & Music Requirements",
    content:
      "All performances must meet timing and format requirements. Music files must be submitted in approved formats prior to the event date.",
  },
  {
    value: "media",
    title: "Media Release Terms",
    content:
      "By participating, all individuals grant permission to be photographed or filmed for promotional and archival purposes.",
  },
  {
    value: "disqualification",
    title: "Disqualification Rules",
    content:
      "Violations of any rules may result in disqualification at the discretion of the event organizers. Decisions are final.",
  },
];

export function GuidelinesSection() {
  return (
    <section id="guideline" className="w-full py-32 px-6 bg-[#0a0a0a] text-white">
      <div className="max-w-3xl mx-auto">
        {/* Section header */}
        <div className="text-center mb-20">
          <p className="text-[#c9a96e] text-xs tracking-[0.4em] uppercase font-light mb-4">
            Rules
          </p>
          <h2 className="text-3xl md:text-4xl font-light tracking-widest uppercase text-white mb-6">
            Participant Guidelines
          </h2>
          <div className="w-16 h-px bg-[#c9a96e] mx-auto" />
        </div>

        <Accordion type="multiple" className="space-y-0 divide-y divide-white/10">
          {guidelines.map((item) => (
            <AccordionItem
              key={item.value}
              value={item.value}
              className="border-none"
            >
              <AccordionTrigger className="text-sm font-light tracking-[0.15em] uppercase text-white/80 hover:text-[#c9a96e] py-6 hover:no-underline transition-colors duration-300">
                {item.title}
              </AccordionTrigger>
              <AccordionContent className="text-white/50 font-light text-sm leading-relaxed pb-6">
                {item.content}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  );
}
