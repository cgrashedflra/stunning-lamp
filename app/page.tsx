import Link from "next/link"

export default function HomePage() {
  return (
    <main className="min-h-screen bg-gray-50 text-gray-900">

      {/* Navbar */}
      <nav className="flex items-center justify-between px-6 py-4 bg-white shadow-sm">
        <h1 className="text-xl font-bold">MyApp</h1>

        <div className="flex items-center gap-4">
          <Link href="/profile">
            <button className="px-4 py-2 rounded-lg bg-gray-200 hover:bg-gray-300 transition">
              Profile
            </button>
          </Link>

          <Link href="/sign-in">
            <button className="px-4 py-2 rounded-lg border border-gray-300 hover:bg-gray-100 transition">
              Sign In
            </button>
          </Link>

          <Link href="/sign-up">
            <button className="px-4 py-2 rounded-lg bg-black text-white hover:bg-gray-800 transition">
              Sign Up
            </button>
          </Link>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="flex flex-col items-center justify-center text-center px-6 py-24">
        <h2 className="text-4xl md:text-6xl font-bold mb-6">
          Build Something Amazing
        </h2>

        <p className="text-lg text-gray-600 max-w-xl mb-8">
          Start your journey with a modern web app. Fast, clean, and scalable.
        </p>

        <div className="flex gap-4">
          <Link href="/sign-up">
            <button className="px-6 py-3 rounded-lg bg-black text-white text-lg hover:bg-gray-800 transition">
              Get Started
            </button>
          </Link>

          <Link href="/sign-in">
            <button className="px-6 py-3 rounded-lg border border-gray-300 text-lg hover:bg-gray-100 transition">
              Login
            </button>
          </Link>
        </div>
      </section>

    </main>
  )
}