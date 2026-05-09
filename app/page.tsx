import Link from "next/link"

export default function HomePage() {
  return (
    <main className="min-h-screen bg-linear-to-br from-slate-900 via-slate-800 to-slate-900 p-6 text-gray-50">

      {/* Navbar */}
      <nav className="flex items-center justify-between px-6 py-4 bg-sky-900 shadow-sm">
        <h1 className="text-xl font-bold">Stunning Lamp</h1>

        <div className="flex items-center gap-4">
          <Link href="/profile">
            <button className="px-4 py-2 rounded-lg bg-blue-400 hover:bg-sky-800 transition">
              Profile
            </button>
          </Link>

          <Link href="/sign-in">
            <button className="px-4 py-2 rounded-lg border  border-sky-800 text-lg hover:bg-sky-800 transition">
              Sign In
            </button>
          </Link>

          <Link href="/sign-up">
            <button className="px-4 py-2 rounded-lg  bg-sky-600 text-sky-100 text-lg hover:bg-sky-800 transition">
              Sign Up
            </button>
          </Link>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="flex flex-col items-center justify-center text-center px-6 py-24">
        <h2 className="text-4xl md:text-6xl font-bold mb-6">
          Try nextjs Authentication
        </h2>

        <p className="text-lg text-sky-400 max-w-xl mb-8">
          Start your journey with a modern web app. Fast, clean, and scalable.
        </p>

        <div className="flex gap-4">
          <Link href="/sign-up">
            <button className="px-6 py-3 rounded-lg bg-sky-600 text-sky-100 text-lg hover:bg-sky-800 transition">
              Get Started
            </button>
          </Link>

          <Link href="/sign-in">
            <button className="px-6 py-3 rounded-lg border border-sky-800 text-lg hover:bg-sky-800 transition">
              Login
            </button>
          </Link>
        </div>
      </section>

    </main>
  )
}