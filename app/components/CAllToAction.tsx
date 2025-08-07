import Link from "next/link";

export default function CallToAction() {
  return (
    <section className="bg-blue-600 text-white py-20 px-6">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-4xl font-bold mb-4">
          Need Plumbing Help? We&apos;re Here 24/7!
        </h2>
        <p className="mb-8 text-lg max-w-2xl mx-auto">
          Contact ABC Plumber today for fast, reliable, and affordable plumbing services in Austin, TX.
        </p>
        <Link
          href="/contact"
          className="inline-block bg-white text-blue-600 font-semibold px-8 py-3 rounded-md hover:bg-gray-100 transition"
        >
          Contact Us Now
        </Link>
      </div>
    </section>
  );
}
