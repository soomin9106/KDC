import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { GraduationCap, School, Users } from "lucide-react";

export function CategorySection() {
    return (
      <section id="event" className="w-full py-16 px-6 bg-white text-gray-800">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-10">Event Categories & Schedule</h2>
          <Tabs defaultValue="kpop" className="w-full">
            <TabsList className="flex justify-center space-x-2 mb-6">
              <TabsTrigger value="kpop" className="px-4 py-2 text-lg">Day 1: K-pop Dance</TabsTrigger>
              <TabsTrigger value="ballet" className="px-4 py-2 text-lg">Day 2: Ballet</TabsTrigger>
            </TabsList>
            <TabsContent value="kpop">
              <div className="bg-white p-6 rounded-lg shadow-md space-y-6">
                <div className="space-y-3">
                  <div className="flex items-center space-x-3 text-lg">
                    <School className="w-5 h-5 text-pink-500" />
                    <span>Elementary & Middle School Division</span>
                  </div>
                  <div className="flex items-center space-x-3 text-lg">
                    <GraduationCap className="w-5 h-5 text-pink-500" />
                    <span>High School & University Division</span>
                  </div>
                </div>
                <div className="mt-6">
                  <h3 className="text-xl font-semibold mb-4">Program Schedule</h3>
                  <ul className="space-y-2 text-base">
                    <li>08:00 - 09:00 : Stage Check and Rehearsal</li>
                    <li>09:00 - 09:30 : Opening Remarks and Judges Introduction</li>
                    <li>09:30 - 13:00 : Dance Competition (Elementary & Middle School Division)</li>
                    <li>13:00 - 14:00 : Lunch Break</li>
                    <li>14:00 - 17:30 : Dance Competition (High School & University Division)</li>
                    <li>17:30 - 18:00 : Judging Time</li>
                    <li>18:00 - 19:00 : Awards Ceremony and Group Photo</li>
                  </ul>
                </div>
              </div>
            </TabsContent>
            <TabsContent value="ballet">
              <div className="bg-white p-6 rounded-lg shadow-md space-y-6">
                <div className="space-y-3">
                  <div className="flex items-center space-x-3 text-lg">
                    <School className="w-5 h-5 text-pink-500" />
                    <span>Elementary Division</span>
                  </div>
                  <div className="flex items-center space-x-3 text-lg">
                    <Users className="w-5 h-5 text-pink-500" />
                    <span>Middle School Division</span>
                  </div>
                  <div className="flex items-center space-x-3 text-lg">
                    <GraduationCap className="w-5 h-5 text-pink-500" />
                    <span>High School & University Division</span>
                  </div>
                </div>
                <div className="mt-6">
                  <h3 className="text-xl font-semibold mb-4">Program Schedule</h3>
                  <ul className="space-y-2 text-base">
                    <li>08:00 - 09:00 : Stage Check and Rehearsal</li>
                    <li>09:00 - 09:30 : Opening Remarks and Judges Introduction</li>
                    <li>09:30 - 11:30 : Ballet Competition (Elementary Division)</li>
                    <li>11:30 - 13:00 : Ballet Competition (Middle School Division)</li>
                    <li>13:00 - 14:00 : Lunch Break</li>
                    <li>14:00 - 16:30 : Ballet Competition (High School & University Division)</li>
                    <li>16:30 - 17:00 : Judging Time</li>
                    <li>17:00 - 18:00 : Awards Ceremony and Group Photo</li>
                  </ul>
                </div>
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </section>
    );
  }
  