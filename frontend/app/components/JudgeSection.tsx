import Image from "next/image";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { GraduationCap, School, Users, FileText, Mail, UploadCloud, CalendarCheck2, Clock3, Trophy, Megaphone, Star } from "lucide-react";


export function JudgesSection() {
    const judges = [
      {
        name: "Park Hyun Soo",
        role: "K-pop",
        image: "/park.png",
        affiliation: "K-pop Choreographer & Judge"
      },
      {
        name: "Ryu Joo Yeon",
        role: "Ballet",
        image: "/ryu.png",
        affiliation: "Principal Ballerina - Korea Ballet Theatre"
      },
      {
        name: "Jo Chae Eun",
        role: "Ballet",
        image: "/jo.png",
        affiliation: "Artistic Director - Seoul Dance Ensemble"
      }
    ];
  
    return (
      <section id="judge" className="w-full py-16 px-6 bg-gray-50 text-gray-800">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-12">Meet the Judges</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
            {judges.map((judge, index) => (
              <Card key={index} className="text-center">
                <CardHeader>
                <Image
                    src={judge.image}
                    alt={judge.name}
                    width={300}
                    height={300}
                    className="w-60 h-80 mx-auto mb-4 rounded-[50px] object-cover"
                />
                  <CardTitle className="text-2xl font-semibold">{judge.name}</CardTitle>
                  <p className="text-pink-500 font-medium">{judge.role}</p>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-gray-600 text-sm">
                    {judge.affiliation}
                  </CardDescription>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>
    );
  }
  