import Image from "next/image";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Mail, Phone, Instagram, Youtube, Music2, Facebook } from "lucide-react";

export function ContactSection() {
    return (
      <section id="contact" className="w-full py-20 px-8 bg-gray-50 text-gray-800">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-10">Get in Touch</h2>
  
          {/* <form className="space-y-6 mb-10">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <input
                type="text"
                placeholder="Name"
                className="w-full border border-gray-300 px-4 py-3 rounded-md"
              />
              <input
                type="email"
                placeholder="Email"
                className="w-full border border-gray-300 px-4 py-3 rounded-md"
              />
            </div>
            <input
              type="text"
              placeholder="Subject"
              className="w-full border border-gray-300 px-4 py-3 rounded-md"
            />
            <textarea
              rows={5}
              placeholder="Message"
              className="w-full border border-gray-300 px-4 py-3 rounded-md"
            />
            <button
              type="submit"
              className="bg-pink-500 hover:bg-pink-600 text-white px-6 py-3 rounded-md font-semibold"
            >
              Send Message
            </button>
          </form> */}
  
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4 text-lg">
            <div className="flex items-center gap-2">
              <Mail className="w-5 h-5 text-pink-500" /> <span>contact@kdt-event.org</span>
            </div>
            <div className="flex items-center gap-2">
              <Phone className="w-5 h-5 text-pink-500" /> <span>+62 812-3456-7890</span>
            </div>
            <div className="flex gap-4 mt-4 md:mt-0">
              <Instagram className="w-5 h-5 text-pink-500" />
              <Youtube className="w-5 h-5 text-pink-500" />
              <Facebook className="w-5 h-5 text-pink-500" />
            </div>
          </div>
        </div>
      </section>
    );
  }
  