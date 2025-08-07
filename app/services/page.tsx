import Link from "next/link";

const services = [
  {
    slug: "drain-cleaning",
    name: "Drain Cleaning",
    description:
      "Remove clogs and blockages fast with our professional drain cleaning services.",
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="h-10 w-10 text-blue-600"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
      >
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 17v-6a2 2 0 014 0v6m-4 0h4" />
      </svg>
    ),
  },
  {
    slug: "water-heater",
    name: "Water Heater Repair & Installation",
    description:
      "Expert repairs and installations for all types of water heaters.",
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="h-10 w-10 text-blue-600"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
      >
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
  },
  {
    slug: "leak-detection",
    name: "Leak Detection",
    description:
      "Find and fix hidden leaks quickly to prevent damage and save water.",
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="h-10 w-10 text-blue-600"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
      >
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 10h18M3 6h18M3 14h18M3 18h18" />
      </svg>
    ),
  },
  {
    slug: "emergency-plumbing",
    name: "Emergency Plumbing",
    description:
      "24/7 emergency plumbing services when you need urgent help.",
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="h-10 w-10 text-blue-600"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
      >
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v3m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
  },
];

export default function ServicesPage() {
  return (
    <main className="max-w-6xl mx-auto px-6 py-16">
      <h1 className="text-5xl font-bold mb-12 text-blue-700 text-center">
        Our Plumbing Services
      </h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
        {services.map(({ slug, name, description, icon }) => (
          <div
            key={slug}
            className="flex flex-col bg-white rounded-lg shadow-md p-6 hover:shadow-xl transition cursor-pointer"
          >
            <div className="flex items-center mb-4 space-x-4">
              <div className="p-3 bg-blue-100 rounded-full">{icon}</div>
              <h2 className="text-2xl font-semibold text-gray-800">{name}</h2>
            </div>
            <p className="text-gray-600 mb-6 flex-grow">{description}</p>
            <Link
              href={`/services/${slug}`}
              className="self-start bg-blue-600 text-white px-5 py-2 rounded-md font-medium hover:bg-blue-700 transition"
            >
              Learn More
            </Link>
          </div>
        ))}
      </div>
    </main>
  );
}
