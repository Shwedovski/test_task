import Image from "next/image";
import Link from "next/link";

export default function DrainCleaning() {
  return (
    <main className="max-w-5xl mx-auto px-6 py-16">
      <h1 className="text-5xl font-bold mb-8 text-blue-700">Drain Cleaning</h1>

      <div className="flex flex-col md:flex-row gap-10 mb-12">
        <div className="md:w-1/2">
          <p className="mb-6 text-lg text-gray-700 leading-relaxed">
            Our drain cleaning service removes clogs and blockages using state-of-the-art equipment, ensuring your plumbing flows smoothly and efficiently. Whether it’s a kitchen sink, bathroom drain, or main sewer line, our licensed plumbers quickly diagnose and fix the problem to prevent damage and costly repairs.
          </p>
          <p className="mb-6 text-gray-600">
            We use eco-friendly, safe methods to clear drains without harming your plumbing or the environment.
          </p>

          <Link
            href="/contact"
            className="inline-block bg-blue-600 text-white px-6 py-3 rounded-md font-semibold hover:bg-blue-700 transition"
          >
            Book Drain Cleaning Service
          </Link>
        </div>

        <div className="md:w-1/2 rounded-lg overflow-hidden shadow-lg">
          <Image
            src="/images/drain-cleaning-service.jpg"
            alt="Drain cleaning service"
            width={600}
            height={400}
            className="object-cover"
            priority
          />
        </div>
      </div>

      <section className="mb-12">
        <h2 className="text-3xl font-semibold mb-6 text-gray-800">Why Choose Our Drain Cleaning?</h2>
        <ul className="list-disc list-inside space-y-3 text-gray-700 text-lg">
          <li>Fast and efficient service with licensed professionals</li>
          <li>Advanced equipment for thorough cleaning</li>
          <li>Eco-friendly and safe cleaning methods</li>
          <li>Affordable pricing with no hidden fees</li>
          <li>Emergency services available 24/7</li>
        </ul>
      </section>

      <section className="mb-12 bg-blue-50 p-8 rounded-lg shadow-inner">
        <h2 className="text-3xl font-semibold mb-6 text-blue-700">Customer Reviews</h2>
        <div className="space-y-6">
          <blockquote className="border-l-4 border-blue-600 pl-4 italic text-gray-800">
            “ABC Plumber saved us from a nasty clog that was flooding our kitchen! Fast, professional, and friendly service. Highly recommend!”
            <footer className="mt-2 text-sm font-semibold">— Sarah K., Austin, TX</footer>
          </blockquote>

          <blockquote className="border-l-4 border-blue-600 pl-4 italic text-gray-800">
            “The team arrived quickly and fixed our bathroom drain efficiently. Excellent communication and fair pricing.”
            <footer className="mt-2 text-sm font-semibold">— Mark D., Austin, TX</footer>
          </blockquote>
        </div>
      </section>

    </main>
  );
}
