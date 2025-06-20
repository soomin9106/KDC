import { FileText, Mail, UploadCloud } from "lucide-react";

export function RegisterSection() {
    return (
      <section id="register" className="w-full py-16 px-6 bg-white text-gray-800">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-10">How to Register</h2>
          <div className="space-y-6 text-lg">
            <div className="flex items-start gap-3">
              <FileText className="text-pink-500 w-6 h-6 mt-1" />
              <p>Complete the online application form via the registration link.</p>
            </div>
            <div className="flex items-start gap-3">
              <UploadCloud className="text-pink-500 w-6 h-6 mt-1" />
              <p>Upload required documents or videos (if applicable).</p>
            </div>
            <div className="flex items-start gap-3">
              <FileText className="text-pink-500 w-6 h-6 mt-1" />
              <p>Check registration fees and payment details.</p>
            </div>
            <div className="flex items-start gap-3">
              <Mail className="text-pink-500 w-6 h-6 mt-1" />
              <p>Contact us for any questions or inquiries.</p>
            </div>
            <div className="text-center mt-10">
              <button className="bg-pink-500 hover:bg-pink-600 text-white px-6 py-3 rounded-lg text-lg font-semibold">Go to Registration</button>
            </div>
          </div>
        </div>
      </section>
    );
  }