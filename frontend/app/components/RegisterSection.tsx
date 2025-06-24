import { ExternalLink } from "lucide-react";

export function RegisterSection() {
    return (
      <section id="register" className="w-full py-16 px-6 bg-gray-50 text-gray-800">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-10">How to Register</h2>
          <p className="text-center text-lg mb-6">
            Please complete your registration via the google form below.
          </p>
          <div className="text-center">
            <a
              href="https://docs.google.com/forms/d/e/your-form-id/viewform" // 🔁 여기에 실제 구글폼 링크 삽입
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center bg-pink-500 hover:bg-pink-600 text-white px-6 py-3 rounded-lg text-lg font-semibold transition"
            >
              <ExternalLink className="w-5 h-5 mr-2" />
              Go to Registration Form
            </a>
          </div>
        </div>
      </section>
    );
  }