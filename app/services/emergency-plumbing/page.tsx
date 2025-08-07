import Image from "next/image";
import Link from "next/link";

export default function EmergencyPlumbing() {
  return (
    <main className="max-w-5xl mx-auto px-6 py-16">
      <h1 className="text-5xl font-bold mb-8 text-blue-700">Emergency Plumbing</h1>

      <div className="flex flex-col md:flex-row gap-10 mb-12">
        <div className="md:w-1/2">
          <p className="mb-6 text-lg text-gray-700 leading-relaxed">
            Plumbing emergencies can happen anytime. Our 24/7 emergency plumbing service ensures rapid response to protect your home.
          </p>
          <p className="mb-6 text-gray-600">
            From burst pipes to severe leaks, our expert plumbers are equipped to handle urgent repairs quickly and efficiently, minimizing damage and inconvenience.
          </p>

          <Link
            href="/contact"
            className="inline-block bg-blue-600 text-white px-6 py-3 rounded-md font-semibold hover:bg-blue-700 transition"
          >
            Request Emergency Service
          </Link>
        </div>
        <div className="md:w-1/2 rounded-lg overflow-hidden shadow-lg">
          <Image
            src="/images/emergency-plumbing.jpg"
            alt="Emergency plumbing service"
            width={600}
            height={400}
            className="object-cover"
            priority
          />
        </div>
      </div>

      <section className="mb-12">
        <h2 className="text-3xl font-semibold mb-6 text-gray-800">Why Choose Our Emergency Plumbing?</h2>
        <ul className="list-disc list-inside space-y-3 text-gray-700 text-lg">
          <li>Rapid 24/7 response to plumbing emergencies</li>
          <li>Experienced and licensed plumbers</li>
          <li>Fully equipped for all urgent repairs</li>
          <li>Transparent pricing with no surprises</li>
          <li>Committed to minimizing your stress and damage</li>
        </ul>
      </section>

      <section className="mb-12 bg-blue-50 p-8 rounded-lg shadow-inner">
        <h2 className="text-3xl font-semibold mb-6 text-blue-700">Customer Reviews</h2>
        <div className="space-y-6">
          <blockquote className="border-l-4 border-blue-600 pl-4 italic text-gray-800">
            “They arrived within an hour after my call and fixed a burst pipe that flooded my basement. Amazing service!”
            <footer className="mt-2 text-sm font-semibold">— Jessica L., Austin, TX</footer>
          </blockquote>

          <blockquote className="border-l-4 border-blue-600 pl-4 italic text-gray-800">
            “Emergency plumbing saved our home from serious water damage late at night. Professional and friendly team.”
            <footer className="mt-2 text-sm font-semibold">— Mike S., Austin, TX</footer>
          </blockquote>
        </div>
      </section>

    </main>
  );
}
