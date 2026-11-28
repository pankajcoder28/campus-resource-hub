
import { useState } from "react";
import {
  Mail,
  Send,
  ArrowUpRight,
  MessageSquare,
  Heart,
} from "lucide-react";

const CONTACT_EMAIL = "YOUR_EMAIL@example.com";

const socialLinks = [

];

function Connect() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const subject = encodeURIComponent(formData.subject);
    const body = encodeURIComponent(
      `Name: ${formData.name}\nEmail: ${formData.email}\n\nMessage:\n${formData.message}`
    );

    window.location.href = `mailto:${CONTACT_EMAIL}?subject=${subject}&body=${body}`;
  };

  return (
    <main className="min-h-screen bg-white">

      {/* Hero Section */}
      <section className="animated-gradient-hero relative overflow-hidden px-5 py-20 sm:py-24">
        <div className="relative z-10 mx-auto max-w-4xl text-center">
          <span className="inline-flex items-center gap-2 rounded-full border border-blue-100 bg-white px-4 py-2 text-sm font-medium text-blue-600 shadow-sm">
            <MessageSquare size={16} />
            We'd Love to Hear From You
          </span>

          <h1 className="mt-6 text-4xl font-bold tracking-tight text-slate-900 sm:text-5xl lg:text-6xl">
            Let's Start a{" "}
            <span className="bg-linear-to-r from-blue-700 via-indigo-600 to-violet-600 bg-clip-text text-transparent">
              Conversation.
            </span>
          </h1>

          <p className="mx-auto mt-6 max-w-2xl text-base leading-7 text-slate-600 sm:text-lg">
            Have a question, suggestion, or feedback? We're always happy to
            connect with students and make Campus Resource Hub better.
          </p>
        </div>
      </section>

      {/* Contact Section */}
      <section className="px-5 py-16 sm:py-20">
        <div className="mx-auto max-w-6xl">

          <div className="grid gap-10 lg:grid-cols-5">

            {/* Contact Information */}
            <div className="lg:col-span-2">
              <span className="text-sm font-semibold uppercase tracking-wider text-blue-600">
                Get in Touch
              </span>

              <h2 className="mt-3 text-3xl font-bold text-slate-900">
                We're here to help.
              </h2>

              <p className="mt-4 leading-7 text-slate-600">
                Whether you need help finding study materials or want to share
                an idea, feel free to reach out. Your feedback helps us improve.
              </p>

              {/* Email Card */}
              <div className="mt-8 flex items-start gap-4 rounded-2xl border border-slate-100 bg-slate-50 p-5">
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-blue-100 text-blue-600">
                  <Mail size={23} />
                </div>

                <div>
                  <h3 className="font-semibold text-slate-900">
                    Email Us
                  </h3>
                  <p className="mt-1 text-sm text-slate-500">
                    Send us your questions anytime.
                  </p>
                  <a
                    href={`mailto:${CONTACT_EMAIL}`}
                    className="mt-2 inline-block break-all text-sm font-medium text-blue-600 hover:underline"
                  >
                    {CONTACT_EMAIL}
                  </a>
                </div>
              </div>

              {/* Social Links */}
              <div className="mt-10">
                <h3 className="font-semibold text-slate-900">
                  Connect with us
                </h3>

                <p className="mt-2 text-sm text-slate-500">
                  Follow us on social media for updates and more.
                </p>

                <div className="mt-5 flex flex-wrap gap-3">
                  {socialLinks.map((social) => {
                    const Icon = social.icon;

                    return (
                      <a
                        key={social.name}
                        href={social.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label={social.name}
                        className={`flex h-12 w-12 items-center justify-center rounded-xl border border-slate-200 text-slate-600 transition-all duration-200 ${social.color}`}
                      >
                        <Icon size={21} />
                      </a>
                    );
                  })}
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <div className="lg:col-span-3">
              <div className="rounded-3xl border border-slate-100 bg-white p-6 shadow-xl shadow-slate-200/50 sm:p-9">
                <div className="mb-7">
                  <h2 className="text-2xl font-bold text-slate-900">
                    Send us a message
                  </h2>
                  <p className="mt-2 text-sm text-slate-500">
                    Fill out the form below and we'll be happy to hear from you.
                  </p>
                </div>

                <form onSubmit={handleSubmit} className="space-y-5">

                  {/* Name and Email */}
                  <div className="grid gap-5 sm:grid-cols-2">
                    <div>
                      <label
                        htmlFor="name"
                        className="mb-2 block text-sm font-medium text-slate-700"
                      >
                        Full Name *
                      </label>

                      <input
                        id="name"
                        type="text"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        placeholder="Enter your name"
                        required
                        className="w-full rounded-xl border border-slate-200 bg-slate-50 px-4 py-3 text-sm outline-none transition focus:border-blue-500 focus:bg-white focus:ring-4 focus:ring-blue-500/10"
                      />
                    </div>

                    <div>
                      <label
                        htmlFor="email"
                        className="mb-2 block text-sm font-medium text-slate-700"
                      >
                        Email Address *
                      </label>

                      <input
                        id="email"
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        placeholder="you@example.com"
                        required
                        className="w-full rounded-xl border border-slate-200 bg-slate-50 px-4 py-3 text-sm outline-none transition focus:border-blue-500 focus:bg-white focus:ring-4 focus:ring-blue-500/10"
                      />
                    </div>
                  </div>

                  {/* Subject */}
                  <div>
                    <label
                      htmlFor="subject"
                      className="mb-2 block text-sm font-medium text-slate-700"
                    >
                      Subject *
                    </label>

                    <select
                      id="subject"
                      name="subject"
                      value={formData.subject}
                      onChange={handleChange}
                      required
                      className="w-full rounded-xl border border-slate-200 bg-slate-50 px-4 py-3 text-sm text-slate-700 outline-none transition focus:border-blue-500 focus:bg-white focus:ring-4 focus:ring-blue-500/10"
                    >
                      <option value="" disabled>
                        Select a subject
                      </option>
                      <option value="General Inquiry">General Inquiry</option>
                      <option value="Missing Study Material">
                        Missing Study Material
                      </option>
                      <option value="Incorrect Resource">
                        Incorrect Resource
                      </option>
                      <option value="Feedback and Suggestions">
                        Feedback and Suggestions
                      </option>
                      <option value="Technical Support">
                        Technical Support
                      </option>
                      <option value="Other">Other</option>
                    </select>
                  </div>

                  {/* Message */}
                  <div>
                    <label
                      htmlFor="message"
                      className="mb-2 block text-sm font-medium text-slate-700"
                    >
                      Your Message *
                    </label>

                    <textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      placeholder="Tell us how we can help you..."
                      rows="5"
                      required
                      className="w-full resize-none rounded-xl border border-slate-200 bg-slate-50 px-4 py-3 text-sm outline-none transition focus:border-blue-500 focus:bg-white focus:ring-4 focus:ring-blue-500/10"
                    />
                  </div>

                  {/* Submit */}
                  <button
                    type="submit"
                    className="group flex w-full items-center justify-center gap-2 rounded-xl bg-blue-600 px-6 py-3.5 font-semibold text-white shadow-lg shadow-blue-600/20 transition hover:-translate-y-0.5 hover:bg-blue-700 hover:shadow-blue-600/30 sm:w-auto"
                  >
                    Send Message
                    <Send
                      size={17}
                      className="transition-transform group-hover:translate-x-1"
                    />
                  </button>

                  <p className="text-xs text-slate-400">
                    * Required fields
                  </p>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Feedback Section */}
      <section className="px-5 pb-20">
        <div className="mx-auto max-w-6xl">
          <div className="relative overflow-hidden rounded-3xl bg-linear-to-r from-blue-600 to-indigo-700 px-6 py-12 text-center sm:px-12 sm:py-14">
            <div className="absolute -right-16 -top-16 h-56 w-56 rounded-full border-35 border-white/10" />
            <div className="absolute -bottom-20 -left-16 h-64 w-64 rounded-full border-35 border-white/10" />

            <div className="relative">
              <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-2xl bg-white/15 text-white">
                <Heart size={28} />
              </div>

              <h2 className="mt-5 text-2xl font-bold text-white sm:text-3xl">
                Help Us Make Learning Better
              </h2>

              <p className="mx-auto mt-4 max-w-2xl leading-7 text-blue-100">
                Found a missing PDF, incorrect study material, or have an idea
                to improve our platform? Your suggestions make Campus Resource
                Hub more useful for every student.
              </p>

              <a
                href={`mailto:${CONTACT_EMAIL}?subject=${encodeURIComponent("Feedback for Campus Resource Hub")}`}
                className="mt-7 inline-flex items-center gap-2 rounded-xl bg-white px-6 py-3 font-semibold text-blue-700 transition hover:bg-blue-50"
              >
                Share Your Feedback
                <ArrowUpRight size={18} />
              </a>
            </div>
          </div>
        </div>
      </section>

    </main>
  );
}

export default Connect;
