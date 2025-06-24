import Image from "next/image";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { GraduationCap, School, Users, FileText, Mail, UploadCloud, CalendarCheck2, Clock3, Trophy, Megaphone } from "lucide-react";


export function ScheduleSection() {
    return (
      <section id="schedule" className="w-full py-20 px-8 bg-white text-gray-800">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-12">Event Schedule</h2>
          <Tabs defaultValue="day1" className="w-full">
            <TabsList className="flex justify-center space-x-2 mb-8">
              <TabsTrigger value="day1" className="px-4 py-2 text-lg">Day 1: K-pop (Aug 21)</TabsTrigger>
              <TabsTrigger value="day2" className="px-4 py-2 text-lg">Day 2: Ballet (Aug 22)</TabsTrigger>
            </TabsList>
  
            <TabsContent value="day1">
              <Accordion type="single" collapsible className="bg-white rounded-lg shadow-md p-6 space-y-4">
                <AccordionItem value="item-1">
                  <AccordionTrigger className="text-lg font-semibold">
                    <div className="flex items-center gap-2">
                      <CalendarCheck2 className="text-pink-500 w-5 h-5" />
                      <span>Registration Opens</span>
                    </div>
                  </AccordionTrigger>
                  <AccordionContent className="text-gray-600 px-2 pb-4">
                    Online registration for K-pop competition opens early July.
                  </AccordionContent>
                </AccordionItem>
                <AccordionItem value="item-2">
                  <AccordionTrigger className="text-lg font-semibold">
                    <div className="flex items-center gap-2">
                      <Clock3 className="text-pink-500 w-5 h-5" />
                      <span>Competition Time</span>
                    </div>
                  </AccordionTrigger>
                  <AccordionContent className="text-gray-600 px-2 pb-4">
                    Morning to afternoon — performances by different school divisions.
                  </AccordionContent>
                </AccordionItem>
                <AccordionItem value="item-3">
                  <AccordionTrigger className="text-lg font-semibold">
                    <div className="flex items-center gap-2">
                      <Megaphone className="text-pink-500 w-5 h-5" />
                      <span>Finalists Announcement</span>
                    </div>
                  </AccordionTrigger>
                  <AccordionContent className="text-gray-600 px-2 pb-4">
                    Evening session includes announcement of finalists.
                  </AccordionContent>
                </AccordionItem>
                <AccordionItem value="item-4">
                  <AccordionTrigger className="text-lg font-semibold">
                    <div className="flex items-center gap-2">
                      <Trophy className="text-pink-500 w-5 h-5" />
                      <span>Award Ceremony</span>
                    </div>
                  </AccordionTrigger>
                  <AccordionContent className="text-gray-600 px-2 pb-4">
                    Awards and special stage performances.
                  </AccordionContent>
                </AccordionItem>
              </Accordion>
            </TabsContent>
  
            <TabsContent value="day2">
              <Accordion type="single" collapsible className="bg-white rounded-lg shadow-md p-6 space-y-4">
                <AccordionItem value="item-1">
                  <AccordionTrigger className="text-lg font-semibold">
                    <div className="flex items-center gap-2">
                      <CalendarCheck2 className="text-pink-500 w-5 h-5" />
                      <span>Registration Deadline</span>
                    </div>
                  </AccordionTrigger>
                  <AccordionContent className="text-gray-600 px-2 pb-4">
                    All ballet applicants must submit required materials before Aug 10.
                  </AccordionContent>
                </AccordionItem>
                <AccordionItem value="item-2">
                  <AccordionTrigger className="text-lg font-semibold">
                    <div className="flex items-center gap-2">
                      <Clock3 className="text-pink-500 w-5 h-5" />
                      <span>Ballet Competition Time</span>
                    </div>
                  </AccordionTrigger>
                  <AccordionContent className="text-gray-600 px-2 pb-4">
                    Segmented by age groups from morning till evening.
                  </AccordionContent>
                </AccordionItem>
                <AccordionItem value="item-3">
                  <AccordionTrigger className="text-lg font-semibold">
                    <div className="flex items-center gap-2">
                      <Trophy className="text-pink-500 w-5 h-5" />
                      <span>Award Ceremony</span>
                    </div>
                  </AccordionTrigger>
                  <AccordionContent className="text-gray-600 px-2 pb-4">
                    Winners and scholarship announcements with guest performances.
                  </AccordionContent>
                </AccordionItem>
              </Accordion>
            </TabsContent>
          </Tabs>
        </div>
      </section>
    );
  }
  