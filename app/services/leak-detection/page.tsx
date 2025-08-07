import Image from "next/image";
import Link from "next/link";

export default function LeakDetection() {
  return (
    <main className="max-w-5xl mx-auto px-6 py-16">
      <h1 className="text-5xl font-bold mb-8 text-blue-700">Leak Detection</h1>

      <div className="flex flex-col md:flex-row gap-10 mb-12">
        <div className="md:w-1/2">
          <p className="mb-6 text-lg text-gray-700 leading-relaxed">
            Our advanced leak detection services identify hidden leaks early, preventing costly damage to your property.
            Using state-of-the-art equipment, we accurately locate leaks in pipes, walls, and fixtures with minimal disruption.
          </p>
          <p className="mb-6 text-gray-600">
            Early detection helps save water and reduces repair costs by addressing issues before they escalate.
          </p>

          <Link
            href="/contact"
            className="inline-block bg-blue-600 text-white px-6 py-3 rounded-md font-semibold hover:bg-blue-700 transition"
          >
            Book Leak Detection Service
          </Link>
        </div>

        <div className="md:w-1/2 rounded-lg overflow-hidden shadow-lg">
          <Image
            src="/images/leak-detection.jpg"
            alt="Leak detection service"
            width={600}
            height={400}
            className="object-cover"
            priority
          />
        </div>
      </div>

      <section className="mb-12">
        <h2 className="text-3xl font-semibold mb-6 text-gray-800">Why Choose Our Leak Detection?</h2>
        <ul className="list-disc list-inside space-y-3 text-gray-700 text-lg">
          <li>Fast, accurate leak identification with advanced technology</li>
          <li>Minimally invasive detection methods to avoid damage</li>
          <li>Experienced, licensed plumbers ensuring quality service</li>
          <li>Affordable pricing and transparent quotes</li>
          <li>Emergency leak detection available 24/7</li>
        </ul>
      </section>

      <section className="mb-12 bg-blue-50 p-8 rounded-lg shadow-inner">
        <h2 className="text-3xl font-semibold mb-6 text-blue-700">Customer Reviews</h2>
        <div className="space-y-6">
          <blockquote className="border-l-4 border-blue-600 pl-4 italic text-gray-800">
            “Thanks to ABC Plumber’s leak detection, we avoided a major flood. Professional and quick service!”
            <footer className="mt-2 text-sm font-semibold">— Emily R., Austin, TX</footer>
          </blockquote>

          <blockquote className="border-l-4 border-blue-600 pl-4 italic text-gray-800">
            “The leak was hidden inside our wall, but their team found it fast and fixed it with minimal mess.”
            <footer className="mt-2 text-sm font-semibold">— John T., Austin, TX</footer>
          </blockquote>
        </div>
      </section>
    </main>
  );
}
