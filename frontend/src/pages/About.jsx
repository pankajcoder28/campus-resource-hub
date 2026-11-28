
import {
  BookOpen,
  NotebookPen,
  FileText,
  Target,
  Eye,
  Users,
  GraduationCap,
  ArrowRight,
  Search,
  Lightbulb,
  Heart,
} from "lucide-react";
import { Link } from "react-router-dom";

const resources = [
  {
    icon: BookOpen,
    title: "Subject Syllabus",
    description:
      "Access subject-wise syllabus PDFs to understand your curriculum and plan your studies.",
    color: "bg-blue-50 text-blue-600",
  },
  {
    icon: NotebookPen,
    title: "Study Notes",
    description:
      "Find organized study materials and unit-wise notes for your subjects.",
    color: "bg-purple-50 text-purple-600",
  },
  {
    icon: FileText,
    title: "Previous Year Papers",
    description:
      "Practice with previous-year question papers and understand examination patterns.",
    color: "bg-orange-50 text-orange-600",
  },
  {
    icon: "Youtube",
    title: "Video Lectures",
    description:
      "Explore curated YouTube lectures and additional learning resources.",
    color: "bg-red-50 text-red-600",
  },
];

const values = [
  {
    icon: Users,
    title: "Student Focused",
    description:
      "Designed around students' academic needs and learning experiences.",
  },
  {
    icon: Search,
    title: "Easy Accessibility",
    description:
      "Find important academic resources without searching across multiple platforms.",
  },
  {
    icon: Lightbulb,
    title: "Simplified Learning",
    description:
      "Keep learning materials organized so students can focus on understanding.",
  },
  {
    icon: Heart,
    title: "Learning Together",
    description:
      "Encourage sharing useful academic resources and supporting fellow students.",
  },
];

export default function About() {
  return (
    <main className="bg-white">

      {/* HERO SECTION */}
      <section className="animated-gradient-hero relative overflow-hidden px-6 py-20 sm:py-28">
        <div className="relative z-10 mx-auto max-w-4xl text-center">
          <div className="inline-flex items-center gap-2 rounded-full border border-white/80 bg-white/70 px-4 py-2 text-sm font-semibold text-blue-700 shadow-sm shadow-blue-900/5 backdrop-blur-md">
            <BookOpen size={16} aria-hidden="true" />
            <span>Your campus, one resource hub</span>
          </div>

          <h1 className="mt-6 text-4xl font-bold leading-tight tracking-tight text-slate-900 sm:text-5xl lg:text-6xl">
            Making Learning Resources
            <span className="block bg-linear-to-r from-blue-700 via-indigo-600 to-violet-600 bg-clip-text text-transparent">
              Accessible to Everyone.
            </span>
          </h1>

          <p className="mx-auto mt-6 max-w-2xl text-base leading-8 text-slate-600 sm:text-lg">
            Campus Resource Hub is a centralized platform that
            brings essential academic resources together in one place.
            We help students find their syllabus, study notes,
            previous-year question papers and video lectures easily.
          </p>

          <div className="mt-8 flex flex-wrap justify-center gap-4">
            <Link
              to="/courses"
              className="inline-flex items-center gap-2 rounded-xl bg-blue-600 px-6 py-3 font-semibold text-white shadow-lg shadow-blue-600/25 transition duration-200 hover:-translate-y-0.5 hover:bg-blue-700 hover:shadow-xl hover:shadow-blue-600/30"
            >
              Explore Courses
              <ArrowRight size={18} />
            </Link>
          </div>

        </div>
      </section>

      {/* WHO WE ARE */}
      <section className="mx-auto grid max-w-7xl items-center gap-12 px-6 py-20 md:grid-cols-2">

        <div>
          <span className="text-sm font-semibold uppercase tracking-wider text-blue-600">
            Who We Are
          </span>

          <h2 className="mt-3 text-3xl font-bold text-slate-900 sm:text-4xl">
            One Platform.
            <span className="block text-blue-600">
              Everything to Learn.
            </span>
          </h2>

          <p className="mt-6 leading-8 text-slate-600">
            Finding the right study material can sometimes be
            time-consuming. Students often need to visit multiple
            websites, search through different sources or ask
            others to find the resources they need.
          </p>

          <p className="mt-4 leading-8 text-slate-600">
            Campus Resource Hub aims to simplify this experience
            by organizing academic resources according to courses,
            semesters and subjects. Students can browse the
            materials they need from one convenient platform.
          </p>

        </div>

        {/* Visual card */}
        <div className="relative rounded-3xl bg-linear-to-br from-blue-600 to-indigo-700 p-8 text-white shadow-xl shadow-blue-200 sm:p-12">

          <div className="absolute right-6 top-6 opacity-20">
            <GraduationCap size={100} />
          </div>

          <div className="relative">
            <div className="mb-6 flex h-16 w-16 items-center justify-center rounded-2xl bg-white/15">
              <BookOpen size={34} />
            </div>

            <h3 className="text-3xl font-bold">
              Learn. Explore. Grow.
            </h3>

            <p className="mt-4 max-w-sm leading-7 text-blue-100">
              Your academic journey deserves an organized
              place for knowledge, learning and preparation.
            </p>
          </div>

        </div>

      </section>

      {/* WHAT WE OFFER */}
      <section className="bg-slate-50 px-6 py-20">

        <div className="mx-auto max-w-7xl">

          <div className="mx-auto max-w-2xl text-center">
            <span className="text-sm font-semibold uppercase tracking-wider text-blue-600">
              What We Offer
            </span>

            <h2 className="mt-3 text-3xl font-bold text-slate-900 sm:text-4xl">
              Everything You Need for Your Studies
            </h2>

            <p className="mt-4 leading-7 text-slate-600">
              Explore different types of academic resources
              available through Campus Resource Hub.
            </p>
          </div>

          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">

            {resources.map((resource) => {
              const Icon = resource.icon;

              return (
                <div
                  key={resource.title}
                  className="rounded-2xl border border-slate-100 bg-white p-6 transition hover:-translate-y-1 hover:shadow-lg"
                >
                  <div className={`mb-5 flex h-12 w-12 items-center justify-center rounded-xl ${resource.color}`}>
                    <Icon size={25} />
                  </div>

                  <h3 className="text-lg font-bold text-slate-800">
                    {resource.title}
                  </h3>

                  <p className="mt-3 text-sm leading-7 text-slate-500">
                    {resource.description}
                  </p>
                </div>
              );
            })}

          </div>
        </div>
      </section>

      {/* MISSION AND VISION */}
      <section className="mx-auto grid max-w-7xl gap-6 px-6 py-20 md:grid-cols-2">

        <div className="rounded-2xl border border-blue-100 bg-blue-50/60 p-8 sm:p-10">

          <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-blue-600 text-white">
            <Target size={25} />
          </div>

          <h2 className="mt-6 text-2xl font-bold text-slate-900">
            Our Mission
          </h2>

          <p className="mt-4 leading-8 text-slate-600">
            Our mission is to make academic resources easier
            to discover, access and use. We aim to bring
            syllabus PDFs, study notes, previous-year papers
            and video lectures together in an organized
            learning environment.
          </p>

        </div>

        <div className="rounded-2xl border border-indigo-100 bg-indigo-50/60 p-8 sm:p-10">

          <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-indigo-600 text-white">
            <Eye size={25} />
          </div>

          <h2 className="mt-6 text-2xl font-bold text-slate-900">
            Our Vision
          </h2>

          <p className="mt-4 leading-8 text-slate-600">
            Our vision is to create a reliable and accessible
            academic resource platform that supports students
            throughout their educational journey and encourages
            a more organized approach to learning.
          </p>

        </div>

      </section>

      {/* OUR VALUES */}
      <section className="bg-slate-50 px-6 py-20">

        <div className="mx-auto max-w-7xl">

          <div className="text-center">
            <span className="text-sm font-semibold uppercase tracking-wider text-blue-600">
              What Matters to Us
            </span>

            <h2 className="mt-3 text-3xl font-bold text-slate-900">
              Our Core Values
            </h2>
          </div>

          <div className="mt-12 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">

            {values.map((value) => {
              const Icon = value.icon;

              return (
                <div key={value.title} className="text-center">

                  <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-2xl bg-white text-blue-600 shadow-sm">
                    <Icon size={27} />
                  </div>

                  <h3 className="mt-5 font-bold text-slate-800">
                    {value.title}
                  </h3>

                  <p className="mt-2 text-sm leading-7 text-slate-500">
                    {value.description}
                  </p>

                </div>
              );
            })}

          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="px-6 py-20">

        <div className="mx-auto max-w-5xl rounded-3xl bg-blue-600 px-6 py-14 text-center text-white shadow-xl shadow-blue-200 sm:px-12">

          <h2 className="text-3xl font-bold sm:text-4xl">
            Ready to Explore and Learn?
          </h2>

          <p className="mx-auto mt-4 max-w-xl leading-7 text-blue-100">
            Find the academic resources you need and
            make your learning journey more organized.
          </p>

          <Link
            to="/courses"
            className="mt-8 inline-flex items-center gap-2 rounded-lg bg-white px-6 py-3 font-semibold text-blue-600 transition hover:bg-blue-50"
          >
            Explore Courses
            <ArrowRight size={18} />
          </Link>

        </div>
      </section>

    </main>
  );
}
