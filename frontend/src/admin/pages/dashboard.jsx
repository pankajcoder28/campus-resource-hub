import { BookOpen, Files, LayoutDashboard, Plus } from 'lucide-react'
import { Link } from 'react-router-dom'
import logo from '../../assets/logo.png'

const summaryCards = [
  {
    label: 'Courses',
    count: '04',
    description: 'Courses in the catalog',
    Icon: BookOpen,
    iconClass: 'bg-blue-100 text-blue-700',
    accentClass: 'from-blue-600 to-indigo-600',
  },
  {
    label: 'Resources',
    count: '00',
    description: 'Resources in the library',
    Icon: Files,
    iconClass: 'bg-violet-100 text-violet-700',
    accentClass: 'from-violet-600 to-fuchsia-600',
  },
]

function Dashboard() {
  return (
    <div className="min-h-screen bg-slate-50 text-slate-900 lg:flex">
      <aside className="border-b border-slate-200 bg-white px-5 py-5 lg:flex lg:min-h-screen lg:w-64 lg:shrink-0 lg:flex-col lg:border-b-0 lg:border-r lg:px-5 lg:py-6">
        <Link
          to="/"
          className="flex items-center gap-3 rounded-xl focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-blue-700"
          aria-label="Campus Resource Hub home"
        >
          <span className="relative size-11 shrink-0 overflow-hidden rounded-xl bg-white">
            <img
              src={logo}
              alt=""
              className="absolute left-[-177%] top-[-89%] w-[710%] max-w-none"
            />
          </span>
          <span className="text-sm font-bold leading-5 text-slate-900">
            Campus Resource
            <span className="block text-blue-700">Hub</span>
          </span>
        </Link>

        <nav aria-label="Dashboard navigation" className="mt-6 flex gap-2 lg:mt-12 lg:flex-col">
          <Link
            to="/admin/dashboard"
            aria-current="page"
            className="inline-flex min-h-11 flex-1 items-center gap-3 rounded-xl bg-blue-50 px-4 py-3 text-sm font-semibold text-blue-800 lg:flex-none"
          >
            <LayoutDashboard aria-hidden="true" size={19} />
            Dashboard
          </Link>
          <button
            type="button"
            className="inline-flex min-h-11 flex-1 items-center justify-center gap-2 rounded-xl border border-slate-200 bg-white px-4 py-3 text-sm font-semibold text-slate-700 transition hover:border-blue-200 hover:bg-blue-50 hover:text-blue-800 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-700 lg:flex-none lg:justify-start"
          >
            <Plus aria-hidden="true" size={19} />
            Add
          </button>
        </nav>
      </aside>

      <main className="min-w-0 flex-1 px-5 py-8 sm:px-8 sm:py-10 lg:px-8 lg:py-8">
        <div className="mx-auto max-w-7xl">
          <header className="mb-8 sm:mb-10">
            <p className="text-sm font-semibold uppercase tracking-[0.16em] text-blue-700">
              Overview
            </p>
            <h1 className="mt-2 text-3xl font-bold tracking-tight text-slate-950 sm:text-4xl">
              Dashboard
            </h1>
            <p className="mt-3 max-w-xl text-sm leading-6 text-slate-600 sm:text-base">
              A quick overview of courses and learning resources in your hub.
            </p>
          </header>

          <section aria-label="Dashboard totals" className="grid gap-5 sm:grid-cols-2 sm:gap-6">
            {summaryCards.map(({ label, count, description, Icon, iconClass, accentClass }) => (
              <article
                key={label}
                className="relative isolate overflow-hidden rounded-2xl border border-slate-200 bg-white p-6 shadow-sm shadow-slate-900/5 sm:p-7"
              >
                <div className={`absolute inset-x-0 top-0 h-1 bg-linear-to-r ${accentClass}`} />
                <div className="flex items-start justify-between gap-4">
                  <div>
                    <h2 className="text-sm font-semibold text-slate-600">{label}</h2>
                    <p className="mt-5 text-4xl font-bold tracking-tight text-slate-950 sm:text-5xl">
                      {count}
                    </p>
                    <p className="mt-2 text-sm text-slate-500">{description}</p>
                  </div>
                  <span className={`flex size-12 shrink-0 items-center justify-center rounded-xl ${iconClass}`}>
                    <Icon aria-hidden="true" size={23} />
                  </span>
                </div>
              </article>
            ))}
          </section>
        </div>
      </main>
    </div>
  )
}

export default Dashboard