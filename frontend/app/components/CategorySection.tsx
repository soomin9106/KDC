import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { GraduationCap, School, Users } from "lucide-react";

export function CategorySection() {
    return (
      <section id="event" className="w-full py-16 px-6 bg-gray-50 text-gray-800">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-10">Event Categories</h2>
          <Tabs defaultValue="kpop" className="w-full">
            <TabsList className="flex justify-center space-x-2 mb-6">
              <TabsTrigger value="kpop" className="px-4 py-2 text-lg">Day 1: K-pop Dance</TabsTrigger>
              <TabsTrigger value="ballet" className="px-4 py-2 text-lg">Day 2: Ballet</TabsTrigger>
            </TabsList>
            <TabsContent value="kpop">
              <div className="bg-white p-6 rounded-lg shadow-md space-y-3">
                <div className="flex items-center space-x-3 text-lg">
                  <School className="w-5 h-5 text-pink-500" />
                  <span>Elementary & Middle School Division</span>
                </div>
                <div className="flex items-center space-x-3 text-lg">
                  <GraduationCap className="w-5 h-5 text-pink-500" />
                  <span>High School & University Division</span>
                </div>
              </div>
            </TabsContent>
            <TabsContent value="ballet">
              <div className="bg-white p-6 rounded-lg shadow-md space-y-3">
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
            </TabsContent>
          </Tabs>
        </div>
      </section>
    );
  }