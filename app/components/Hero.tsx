import Link from "next/link"

export default function Hero() {
  return (
    <section className="bg-blue-50 py-20 px-6">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-center gap-12">

        <div className="max-w-xl text-center md:text-left flex-1">
          <h1 className="text-4xl md:text-5xl font-bold text-blue-800 leading-tight">
            Trusted Plumbing Services in Austin, TX
          </h1>
          <p className="mt-4 text-gray-700 text-lg">
            Need a quick fix or full installation? Our licensed plumbers are ready to help 24/7.
          </p>
          <Link
            href="/contact"
            className="mt-6 inline-block bg-blue-600 text-white px-6 py-3 rounded-md font-medium text-sm hover:bg-blue-700 transition"
          >
            Book a Service
          </Link>
        </div>


        <div className="w-full md:w-1/2 flex justify-center">
          <img
            src="/images/hero-plumber.jpg"
            alt="Plumber working"
            className="rounded-lg shadow-lg w-full max-w-md h-auto object-cover"
          />
        </div>
      </div>
    </section>
  )
}
