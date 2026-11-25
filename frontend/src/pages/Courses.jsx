
import { Link } from "react-router-dom";
import {
  GraduationCap,
  Laptop,
  Code2,
  BriefcaseBusiness,
  Calculator,
  ArrowRight,
  BookOpen,
  Clock3,
  Sparkles,
} from "lucide-react";


const courses = [
  {
    id: "bca",
    name: "BCA",
    fullName: "Bachelor of Computer Applications",
    description:
      "Explore programming, computer applications, software development and modern computing technologies.",
    icon: Laptop,
    color: "bg-blue-50 text-blue-600",
    path: "/courses/bca",
    available: true,
  },
  {
    id: "bsc-cs",
    name: "B.Sc. Computer Science",
    fullName: "Bachelor of Science in Computer Science",
    description:
      "Explore computer science, programming, algorithms, mathematics and computing fundamentals.",
    icon: Code2,
    color: "bg-indigo-50 text-indigo-600",
    path: "/courses/bsc-cs",
    available: true,
  },
  {
    id: "bba",
    name: "BBA",
    fullName: "Bachelor of Business Administration",
    description:
      "Explore business management, administration and organizational studies.",
    icon: BriefcaseBusiness,
    available: false,
  },
  {
    id: "bcom",
    name: "B.Com",
    fullName: "Bachelor of Commerce",
    description:
      "Explore commerce, accounting, finance and business studies.",
    icon: Calculator,
    available: false,
  },
];


function AvailableCourseCard({ course }) {
  const Icon = course.icon;

  return (
    <div className="group relative overflow-hidden rounded-2xl border border-slate-200 bg-white p-7 transition duration-300 hover:-translate-y-1 hover:border-blue-200 hover:shadow-xl hover:shadow-blue-100/60">

      {/* Available badge */}
      <div className="flex items-center justify-between">
        <span className="rounded-full bg-green-50 px-3 py-1 text-xs font-semibold text-green-700">
          Available
        </span>

        <GraduationCap className="text-slate-300 transition group-hover:text-blue-500" size={24} />
      </div>

      {/* Course icon */}
      <div className={`mt-7 flex h-16 w-16 items-center justify-center rounded-2xl ${course.color}`}>
        <Icon size={32} />
      </div>

      {/* Course information */}
      <h3 className="mt-6 text-2xl font-bold text-slate-900">
        {course.name}
      </h3>

      <p className="mt-1 text-sm font-medium text-blue-600">
        {course.fullName}
      </p>

      <p className="mt-4 min-h-16 text-sm leading-7 text-slate-500">
        {course.description}
      </p>

      {/* Course link */}
      <Link
        to={course.path}
        className="mt-6 inline-flex w-full items-center justify-center gap-2 rounded-xl bg-blue-600 px-5 py-3 font-semibold text-white transition hover:bg-blue-700"
      >
        Explore Course
        <ArrowRight size={18} />
      </Link>

    </div>
  );
}

function ComingSoonCard({ course }) {
  const Icon = course.icon;

  return (
    <div className="relative rounded-2xl border border-dashed border-slate-300 bg-slate-50/80 p-7">

      <div className="flex items-center justify-between">
        <span className="rounded-full bg-amber-50 px-3 py-1 text-xs font-semibold text-amber-700">
          Coming Soon
        </span>

        <Sparkles size={21} className="text-slate-300" />
      </div>

      <div className="mt-7 flex h-16 w-16 items-center justify-center rounded-2xl bg-slate-200 text-slate-500">
        <Icon size={32} />
      </div>

      <h3 className="mt-6 text-2xl font-bold text-slate-700">
        {course.name}
      </h3>

      <p className="mt-1 text-sm font-medium text-slate-500">
        {course.fullName}
      </p>

      <p className="mt-4 min-h-16 text-sm leading-7 text-slate-500">
        {course.description}
      </p>

      <button
        type="button"
        disabled
        className="mt-6 w-full cursor-not-allowed rounded-xl border border-slate-200 bg-white px-5 py-3 font-semibold text-slate-400"
      >
        Coming Soon
      </button>

    </div>
  );
}

export default function Courses() {
  return (
    <main className="min-h-screen bg-white">

      {/* PAGE HERO */}
      <section className="relative overflow-hidden bg-linear-to-br from-blue-50 via-white to-indigo-50 px-6 py-20 sm:py-24">

        <div className="absolute -right-20 -top-20 h-72 w-72 rounded-full bg-blue-200/40 blur-3xl" />

        <div className="relative mx-auto max-w-3xl text-center">

          

          <h1 className="mt-7 text-4xl font-bold tracking-tight text-slate-900 sm:text-5xl lg:text-6xl">
            Explore Your
            <span className="block text-blue-600">
              Courses.
            </span>
          </h1>

          <p className="mx-auto mt-6 max-w-2xl text-base leading-8 text-slate-600 sm:text-lg">
            Choose your course to discover semester-wise
            subjects, syllabus, study notes, previous-year
            question papers and video lectures.
          </p>

          <div className="mt-8 flex flex-wrap justify-center gap-3 text-sm text-slate-500">
            <span className="flex items-center gap-2">
              <BookOpen size={17} className="text-blue-600" />
              Study Materials
            </span>

            <span className="flex items-center gap-2">
              <Clock3 size={17} className="text-blue-600" />
              Semester-wise
            </span>
          </div>

        </div>
      </section>
      

{/* COURSE CATALOGUE */}
<section className="mx-auto max-w-7xl px-6 py-20">

  {/* Section heading */}
  <div className="mb-12 text-center">
    <span className="text-sm font-semibold uppercase tracking-wider text-blue-600">
      Explore Programs
    </span>

    <h2 className="mt-3 text-3xl font-bold text-slate-900 sm:text-4xl">
      Find Your Academic Path
    </h2>

    <p className="mx-auto mt-4 max-w-2xl text-slate-500">
      Choose your course and discover syllabus, study notes,
      previous-year question papers and video lectures.
    </p>
  </div>

  {/* All courses in one grid */}
  <div className="grid gap-7 sm:grid-cols-2 lg:grid-cols-2">

    {courses.map((course) => {
      const Icon = course.icon;

      return (
        <div
          key={course.id}
          className={`group rounded-2xl border p-7 transition duration-300
            ${
              course.available
                ? "border-slate-200 bg-white hover:-translate-y-1 hover:border-blue-200 hover:shadow-xl hover:shadow-blue-100/60"
                : "border-slate-200 bg-slate-50/70"
            }`}
        >

          {/* Status */}
          <div className="flex items-center justify-between">
            <span
              className={`rounded-full px-3 py-1 text-xs font-semibold
                ${
                  course.available
                    ? "bg-green-50 text-green-700"
                    : "bg-amber-50 text-amber-700"
                }`}
            >
              {course.available ? "Available" : "Coming Soon"}
            </span>

            <GraduationCap
              size={24}
              className={
                course.available
                  ? "text-blue-400"
                  : "text-slate-300"
              }
            />
          </div>

          {/* Icon */}
          <div
            className={`mt-7 flex h-16 w-16 items-center justify-center rounded-2xl
              ${
                course.available
                  ? course.color
                  : "bg-slate-200 text-slate-500"
              }`}
          >
            <Icon size={32} />
          </div>

          {/* Course information */}
          <h3 className="mt-6 text-2xl font-bold text-slate-900">
            {course.name}
          </h3>

          <p className="mt-1 text-sm font-medium text-slate-500">
            {course.fullName}
          </p>

          <p className="mt-4 min-h-14 text-sm leading-7 text-slate-500">
            {course.description}
          </p>

          {/* Action */}
          {course.available ? (
            <Link
              to={course.path}
              className="mt-6 inline-flex w-full items-center justify-center gap-2 rounded-xl bg-blue-600 px-5 py-3 font-semibold text-white transition hover:bg-blue-700"
            >
              Explore Course
              <ArrowRight size={18} />
            </Link>
          ) : (
            <button
              type="button"
              disabled
              className="mt-6 w-full cursor-not-allowed rounded-xl border border-slate-200 bg-white px-5 py-3 font-semibold text-slate-400"
            >
              Coming Soon
            </button>
          )}

        </div>
      );
    })}

  </div>
</section>

      

    </main>
  );
}

