
import {
  Mail,
  ArrowUpRight,
  Heart,
} from "lucide-react";

import { Link } from "react-router-dom";

import logoIcon from "../assets/flogo.png";
import logoWordmark from "../assets/footerLogo.png";

const Footer = () => {
  const socialLinks = [
    {
      name: "Instagram",
      icon: Mail,
      url: "YOUR_INSTAGRAM_URL",
    },
    {
      name: "LinkedIn",
      icon: Mail,
      url: "YOUR_LINKEDIN_URL",
    },
    {
      name: "GitHub",
      icon: Mail,
      url: "YOUR_GITHUB_URL",
    },
  ];

  return (
    <footer className="relative mt-16 overflow-hidden bg-[#111936]">

      {/* Background Wordmark */}
      <div className="pointer-events-none absolute bottom-2 right-110 z-0 w-137.5 max-w-[90%] opacity-[0.08]">
        <img
          src={logoWordmark}
          alt=""
          className="h-auto w-full brightness-0 invert"
        />
      </div>

      <div className="relative z-10 mx-auto max-w-7xl px-5">

        {/* Main Footer */}
        <div className="grid gap-12 py-14 sm:grid-cols-2 lg:grid-cols-4">

          {/* Brand Section */}
          <div className="lg:col-span-2">

            <Link to="/" className="inline-flex items-center gap-3">

              {/* Logo */}
              <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-white p-1">
                <img
                  src={logoIcon}
                  alt="Campus Resource Hub logo"
                  className="h-full w-full object-contain"
                />
              </div>

              <div>
                <h2 className="text-xl font-bold tracking-tight text-white">
                  Campus
                </h2>
                <p className="-mt-1 text-lg font-light text-slate-300">
                  Resource Hub
                </p>
              </div>

            </Link>

            <p className="mt-5 max-w-sm text-sm leading-7 text-slate-400">
              Your one-stop destination for academic resources.
              Access syllabus, study notes, previous year question
              papers, and learning materials — all in one place.
            </p>

            {/* Social Links */}
            <div className="mt-6 flex items-center gap-3">

              {socialLinks.map((social) => {
                const Icon = social.icon;

                return (
                  <a
                    key={social.name}
                    href={social.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={social.name}
                    className="flex h-10 w-10 items-center justify-center rounded-xl border border-slate-700 bg-white/5 text-slate-300 transition-all duration-200 hover:border-[#F5A623] hover:bg-[#F5A623] hover:text-[#111936]"
                  >
                    <Icon size={19} />
                  </a>
                );
              })}

            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="mb-5 text-base font-bold text-white">
              Quick Links
            </h3>

            <ul className="space-y-3 text-sm text-slate-400">

              <li>
                <Link to="/" className="transition hover:text-[#F5A623]">
                  Home
                </Link>
              </li>

              <li>
                <Link to="/courses" className="transition hover:text-[#F5A623]">
                  Explore Courses
                </Link>
              </li>

              <li>
                <Link to="/about" className="transition hover:text-[#F5A623]">
                  About Us
                </Link>
              </li>

              <li>
                <Link to="/connect" className="transition hover:text-[#F5A623]">
                  Contact Us
                </Link>
              </li>

            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="mb-5 text-base font-bold text-white">
              Get in Touch
            </h3>

            <p className="mb-4 text-sm leading-6 text-slate-400">
              Have a question or suggestion? We'd love to hear from you.
            </p>

            <a
              href="mailto:YOUR_EMAIL@example.com"
              className="flex items-center gap-2 break-all text-sm font-medium text-slate-300 transition hover:text-[#F5A623]"
            >
              <Mail size={17} className="shrink-0" />
              YOUR_EMAIL@example.com
              <ArrowUpRight size={15} className="shrink-0" />
            </a>

            <Link
              to="/connect"
              className="mt-5 inline-flex items-center gap-2 rounded-xl bg-[#F5A623] px-5 py-3 text-sm font-semibold text-[#111936] transition hover:bg-amber-400"
            >
              Contact Us
              <ArrowUpRight size={16} />
            </Link>
          </div>

        </div>

        {/* Bottom Footer */}
        <div className="flex flex-col items-center justify-between gap-4 border-t border-slate-700/70 py-6 text-center sm:flex-row sm:text-left">

          <p className="text-sm text-slate-400">
            © {new Date().getFullYear()} Campus Resource Hub. All rights reserved.
          </p>

          <p className="flex items-center gap-1.5 text-sm text-slate-400">
            Made with
            <Heart
              size={13}
              className="fill-[#F5A623] text-[#F5A623]"
            />
            for students.
          </p>

        </div>

      </div>
    </footer>
  );
};

export default Footer;
