import Image from "next/image";
import Link from "next/link";

export default function WaterHeaterRepair() {
  return (
    <main className="max-w-5xl mx-auto px-6 py-16">
      <h1 className="text-5xl font-bold mb-8 text-blue-700">
        Water Heater Repair & Installation
      </h1>

      <div className="flex flex-col md:flex-row gap-10 mb-12">
        <div className="md:w-1/2">
          <p className="mb-6 text-lg text-gray-700 leading-relaxed">
            We specialize in repairing and installing all types of water heaters, including tankless, electric, and gas models. Our experts ensure your water heater operates efficiently and safely, keeping your home comfortable year-round.
          </p>
          <p className="mb-6 text-gray-600">
            Whether you need a quick repair or a full replacement, we provide professional service with quality parts and workmanship guaranteed.
          </p>

          <Link
            href="/contact"
            className="inline-block bg-blue-600 text-white px-6 py-3 rounded-md font-semibold hover:bg-blue-700 transition"
          >
            Schedule a Water Heater Service
          </Link>
        </div>

        <div className="md:w-1/2 rounded-lg overflow-hidden shadow-lg">
          <Image
            src="/images/water-heater-repair.jpg"
            alt="Water heater repair and installation"
            width={600}
            height={400}
            className="object-cover"
            priority
          />
        </div>
      </div>

      <section className="mb-12">
        <h2 className="text-3xl font-semibold mb-6 text-gray-800">
          Why Choose Our Water Heater Services?
        </h2>
        <ul className="list-disc list-inside space-y-3 text-gray-700 text-lg">
          <li>Experienced technicians specialized in all heater types</li>
          <li>Fast diagnostics and transparent pricing</li>
          <li>Energy-efficient installation options</li>
          <li>High-quality parts and manufacturer warranties</li>
          <li>Emergency repairs available 24/7</li>
        </ul>
      </section>

      <section className="mb-12 bg-blue-50 p-8 rounded-lg shadow-inner">
        <h2 className="text-3xl font-semibold mb-6 text-blue-700">Customer Testimonials</h2>
        <div className="space-y-6">
          <blockquote className="border-l-4 border-blue-600 pl-4 italic text-gray-800">
            “Fast and reliable water heater repair! The team was professional and courteous from start to finish.”
            <footer className="mt-2 text-sm font-semibold">— Emily R., Austin, TX</footer>
          </blockquote>

          <blockquote className="border-l-4 border-blue-600 pl-4 italic text-gray-800">
            “They installed a new tankless water heater for us and the energy savings have been amazing. Highly recommend ABC Plumber.”
            <footer className="mt-2 text-sm font-semibold">— James P., Austin, TX</footer>
          </blockquote>
        </div>
      </section>
    </main>
  );
}
