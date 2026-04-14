import Link from "next/link";
import Image from "next/image";

const Footer = () => {
  return (
    <footer className="w-full bg-black border-t border-white/10">
      <div className="max-w-6xl mx-auto px-8 py-16">
        {/* Top */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-16">
          {/* Brand */}
          <div>
            <Image
              alt="KDT Logo"
              src="/logo.png"
              width={48}
              height={48}
              className="object-contain mb-4 opacity-80"
            />
            <p className="text-white/40 text-xs tracking-[0.2em] uppercase font-light mb-1">
              The 1st KDT Invitational
            </p>
            <p className="text-white/40 text-xs tracking-[0.2em] uppercase font-light">
              Dance Competition
            </p>
          </div>

          {/* Event Info */}
          <div>
            <p className="text-[#c9a96e] text-[10px] tracking-[0.4em] uppercase font-light mb-4">
              Event
            </p>
            <ul className="space-y-2 text-white/50 text-xs font-light tracking-wider">
              <li>2026 May 22–23</li>
              <li>Universitas Pendidikan Indonesia</li>
              <li>Gymnasium Hall</li>
            </ul>
          </div>

          {/* Navigation */}
          <div>
            <p className="text-[#c9a96e] text-[10px] tracking-[0.4em] uppercase font-light mb-4">
              Navigation
            </p>
            <ul className="space-y-2">
              {[
                { href: "/#about", label: "About" },
                { href: "/#event", label: "Categories" },
                { href: "/#schedule", label: "Schedule" },
                { href: "/#scholarship", label: "Scholarship" },
                { href: "/#contact", label: "Contact" },
              ].map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-white/50 hover:text-[#c9a96e] text-xs font-light tracking-wider transition-colors duration-300"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Divider */}
        <div className="h-px bg-white/10 mb-8" />

        {/* Bottom */}
        <div className="flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-white/30 text-xs font-light tracking-wider">
            © 2026 KDT · IDCA. All rights reserved.
          </p>
          <div className="flex gap-6">
            {/* Facebook */}
            <Link href="#" className="text-white/30 hover:text-[#c9a96e] transition-colors duration-300">
              <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" width="16" height="16" viewBox="0 0 24 24">
                <path d="M12.001 2.002c-5.522 0-9.999 4.477-9.999 9.999 0 4.99 3.656 9.126 8.437 9.879v-6.988h-2.54v-2.891h2.54V9.798c0-2.508 1.493-3.891 3.776-3.891 1.094 0 2.24.195 2.24.195v2.459h-1.264c-1.24 0-1.628.772-1.628 1.563v1.875h2.771l-.443 2.891h-2.328v6.988C18.344 21.129 22 16.992 22 12.001c0-5.522-4.477-9.999-9.999-9.999z" />
              </svg>
            </Link>
            {/* Instagram */}
            <Link href="#" className="text-white/30 hover:text-[#c9a96e] transition-colors duration-300">
              <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" width="16" height="16" viewBox="0 0 169.063 169.063">
                <g>
                  <path d="M122.406,0H46.654C20.929,0,0,20.93,0,46.655v75.752c0,25.726,20.929,46.655,46.654,46.655h75.752c25.727,0,46.656-20.93,46.656-46.655V46.655C169.063,20.93,148.133,0,122.406,0z M154.063,122.407c0,17.455-14.201,31.655-31.656,31.655H46.654C29.2,154.063,15,139.862,15,122.407V46.655C15,29.201,29.2,15,46.654,15h75.752c17.455,0,31.656,14.201,31.656,31.655V122.407z" />
                  <path d="M84.531,40.97c-24.021,0-43.563,19.542-43.563,43.563c0,24.02,19.542,43.561,43.563,43.561s43.563-19.541,43.563-43.561C128.094,60.512,108.552,40.97,84.531,40.97z M84.531,113.093c-15.749,0-28.563-12.812-28.563-28.561c0-15.75,12.813-28.563,28.563-28.563s28.563,12.813,28.563,28.563C113.094,100.281,100.28,113.093,84.531,113.093z" />
                  <path d="M129.921,28.251c-2.89,0-5.729,1.17-7.77,3.22c-2.051,2.04-3.23,4.88-3.23,7.78c0,2.891,1.18,5.73,3.23,7.78c2.04,2.04,4.88,3.22,7.77,3.22c2.9,0,5.73-1.18,7.78-3.22c2.05-2.05,3.22-4.89,3.22-7.78c0-2.9-1.17-5.74-3.22-7.78C135.661,29.421,132.821,28.251,129.921,28.251z" />
                </g>
              </svg>
            </Link>
            {/* YouTube */}
            <Link href="#" className="text-white/30 hover:text-[#c9a96e] transition-colors duration-300">
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                <path fillRule="evenodd" clipRule="evenodd" d="M9.49614 7.13176C9.18664 6.9549 8.80639 6.95617 8.49807 7.13509C8.18976 7.31401 8 7.64353 8 8V16C8 16.3565 8.18976 16.686 8.49807 16.8649C8.80639 17.0438 9.18664 17.0451 9.49614 16.8682L16.4961 12.8682C16.8077 12.6902 17 12.3589 17 12C17 11.6411 16.8077 11.3098 16.4961 11.1318L9.49614 7.13176ZM13.9844 12L10 14.2768V9.72318L13.9844 12Z" />
                <path fillRule="evenodd" clipRule="evenodd" d="M0 12C0 8.25027 0 6.3754 0.954915 5.06107C1.26331 4.6366 1.6366 4.26331 2.06107 3.95491C3.3754 3 5.25027 3 9 3H15C18.7497 3 20.6246 3 21.9389 3.95491C22.3634 4.26331 22.7367 4.6366 23.0451 5.06107C24 6.3754 24 8.25027 24 12C24 15.7497 24 17.6246 23.0451 18.9389C22.7367 19.3634 22.3634 19.7367 21.9389 20.0451C20.6246 21 18.7497 21 15 21H9C5.25027 21 3.3754 21 2.06107 20.0451C1.6366 19.7367 1.26331 19.3634 0.954915 18.9389C0 17.6246 0 15.7497 0 12Z" />
              </svg>
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
