
import { useState } from "react";
import {
  Search,
  ArrowRight,
  BookOpen,
  FileText,
  GraduationCap,
  Sparkles,
} from "lucide-react";

const Hero = () => {
  const [search, setSearch] = useState("");

  const handleSearch = (e) => {
    e.preventDefault();

    if (!search.trim()) return;

    // Connect this to your search functionality later.
    console.log("Searching for:", search);
  };

  return (
    <section className="relative overflow-hidden bg-slate-50">
      {/* Background decoration */}
      <div className="absolute -top-32 -right-32 h-96 w-96 rounded-full bg-blue-100/60 blur-3xl" />
      <div className="absolute bottom-0 -left-32 h-72 w-72 rounded-full bg-indigo-100/50 blur-3xl" />

      <div className="relative mx-auto grid max-w-7xl items-center gap-12 px-5 py-15 md:grid-cols-2 md:py-15">

        {/* Left Content */}
        <div>

          <h1 className="text-4xl font-bold leading-tight tracking-tight text-slate-900 sm:text-5xl lg:text-6xl">
            Your Learning Journey
            <span className="mt-2 block text-blue-600">
              Starts Here.
            </span>
          </h1>

          <p className="mt-6 max-w-xl text-base leading-8 text-slate-600 sm:text-lg">
            Access everything you need for your studies.
            Find subject-wise syllabus, study notes,
            previous-year question papers and video lectures
            all in one place.
          </p>

          {/* Search Bar */}
          <form
            onSubmit={handleSearch}
            className="mt-8 flex max-w-xl items-center gap-2 rounded-xl border border-slate-200 bg-white p-2 shadow-sm focus-within:border-blue-400 focus-within:ring-4 focus-within:ring-blue-100"
          >
            <Search className="ml-2 shrink-0 text-slate-400" size={21} />

            <input
              type="text"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              placeholder="Search courses, subjects or resources..."
              className="min-w-0 flex-1 bg-transparent px-2 py-2 text-sm text-slate-700 outline-none placeholder:text-slate-400 sm:text-base"
            />

            <button
              type="submit"
              className="flex shrink-0 items-center gap-2 rounded-lg bg-blue-600 px-4 py-3 text-sm font-semibold text-white transition hover:bg-blue-700"
            >
              Search
              <ArrowRight size={16} />
            </button>
          </form>

          {/* CTA Buttons */}
          <div className="mt-7 flex flex-wrap gap-4">
            <a
              href="/courses"
              className="inline-flex items-center gap-2 rounded-lg bg-blue-600 px-6 py-3 font-semibold text-white shadow-md shadow-blue-200 transition hover:-translate-y-0.5 hover:bg-blue-700"
            >
              Explore Courses
              <ArrowRight size={18} />
            </a>

            <a
              href="/resources"
              className="inline-flex items-center gap-2 rounded-lg border border-slate-300 bg-white px-6 py-3 font-semibold text-slate-700 transition hover:border-blue-300 hover:text-blue-600"
            >
              Browse Resources
            </a>
          </div>

          {/* Resource types */}
          
        </div>

        {/* Right Illustration */}
        <div className="relative mx-auto w-full max-w-lg">

          <div className="relative rounded-3xl border border-blue-100 bg-linear-to-br from-blue-100 via-indigo-50 to-white p-6 shadow-xl shadow-blue-100/60 sm:p-10">

            {/* Main illustration */}
            <div className="flex min-h-72 flex-col items-center justify-center rounded-2xl bg-white/80 p-8 text-center shadow-sm">
              <div className="mb-5 flex h-24 w-24 items-center justify-center rounded-3xl bg-blue-600 shadow-lg shadow-blue-200">
                <GraduationCap size={54} className="text-white" />
              </div>

              <h2 className="text-2xl font-bold text-slate-800">
                Learn. Explore. Grow.
              </h2>

              <p className="mt-2 max-w-xs text-sm leading-6 text-slate-500">
                Your academic resources, organized and ready whenever you need them.
              </p>

              <div className="mt-6 flex gap-3">
                <div className="rounded-xl bg-blue-50 p-3 text-blue-600">
                  <BookOpen size={23} />
                </div>
                <div className="rounded-xl bg-indigo-50 p-3 text-indigo-600">
                  <FileText size={23} />
                </div>
                
              </div>
            </div>

            {/* Floating resource card */}
            <div className="absolute -left-5 top-12 rounded-xl border border-slate-100 bg-white p-4 shadow-lg sm:-left-10">
              <div className="flex items-center gap-3">
                <div className="rounded-lg bg-blue-50 p-2 text-blue-600">
                  <BookOpen size={23} />
                </div>
                <div>
                  <p className="text-sm font-bold text-slate-800">
                    Study Notes
                  </p>
                  <p className="text-xs text-slate-500">
                    Unit-wise materials
                  </p>
                </div>
              </div>
            </div>

            <div className="absolute -right-3 bottom-12 rounded-xl border border-slate-100 bg-white p-4 shadow-lg sm:-right-8">
              <div className="flex items-center gap-3">
                <div className="rounded-lg bg-red-50 p-2 text-red-500">
                  <FileText size={23} />
                </div>
                <div>
                  <p className="text-sm font-bold text-slate-800">
                    Previous Papers
                  </p>
                  <p className="text-xs text-slate-500">
                    Prepare with confidence
                  </p>
                </div>
              </div>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
};

export default Hero;
