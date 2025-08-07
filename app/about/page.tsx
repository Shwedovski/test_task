import Image from "next/image";
import Link from "next/link";

export default function AboutPage() {
  return (
    <main className="max-w-6xl mx-auto px-6 py-20 space-y-16">
      <h1 className="text-5xl font-bold mb-12 text-blue-700 text-center">About ABC Plumber</h1>


      <section className="max-w-4xl mx-auto space-y-4 text-center">
        <h2 className="text-3xl font-semibold text-gray-800">Our Story</h2>
        <p className="text-gray-700 text-lg leading-relaxed">
          Founded in 2005 in Austin, TX, ABC Plumber started as a small local plumbing company dedicated to honest, reliable, and high-quality service.
          Over the years, we have grown into one of the most trusted plumbing providers in the area, proudly serving thousands of satisfied customers and building lasting relationships.
        </p>
      </section>


      <section className="flex flex-col md:flex-row max-w-5xl mx-auto gap-12">
        <div className="flex-1 bg-blue-50 p-8 rounded-lg shadow-md">
          <h3 className="text-2xl font-semibold mb-4 text-blue-700">Our Mission</h3>
          <p className="text-gray-700 text-lg leading-relaxed">
            To provide fast, reliable, and affordable plumbing services with unmatched quality and professionalism. We strive to exceed customer expectations on every job and foster trust in every interaction.
          </p>
        </div>
        <div className="flex-1 bg-blue-50 p-8 rounded-lg shadow-md">
          <h3 className="text-2xl font-semibold mb-4 text-blue-700">Our Vision</h3>
          <p className="text-gray-700 text-lg leading-relaxed">
            To be Austin’s most respected plumbing company, recognized for our commitment to innovation, sustainability, and community engagement.
          </p>
        </div>
      </section>


      <section className="max-w-4xl mx-auto space-y-6">
        <h2 className="text-3xl font-semibold text-gray-800 text-center mb-6">Core Values</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 text-gray-700 text-lg">
          <div className="flex items-start space-x-4">
            <span className="text-blue-600 text-3xl font-bold">💎</span>
            <p><strong>Integrity:</strong> We always do the right thing, ensuring honesty and transparency in every job.</p>
          </div>
          <div className="flex items-start space-x-4">
            <span className="text-blue-600 text-3xl font-bold">⚙️</span>
            <p><strong>Quality:</strong> Exceptional workmanship is our standard, never compromised.</p>
          </div>
          <div className="flex items-start space-x-4">
            <span className="text-blue-600 text-3xl font-bold">⏰</span>
            <p><strong>Reliability:</strong> We're available 24/7 and always on time for our customers.</p>
          </div>
          <div className="flex items-start space-x-4">
            <span className="text-blue-600 text-3xl font-bold">🤝</span>
            <p><strong>Customer Focus:</strong> Your satisfaction drives everything we do.</p>
          </div>
          <div className="flex items-start space-x-4">
            <span className="text-blue-600 text-3xl font-bold">🛡️</span>
            <p><strong>Safety:</strong> We follow the highest standards to keep you and our team safe.</p>
          </div>
        </div>
      </section>


      <section className="max-w-5xl mx-auto text-center">
        <h2 className="text-3xl font-semibold mb-6 text-gray-800">Meet Our Team</h2>
        <Image
          src="/images/team.jpg"
          alt="ABC Plumber Team"
          width={900}
          height={450}
          className="rounded-lg shadow-lg mx-auto"
          priority
        />
        <p className="mt-4 text-gray-600 max-w-xl mx-auto">
          Our highly trained and friendly team is ready to tackle any plumbing challenge with professionalism and care.
        </p>
      </section>

      <section className="max-w-4xl mx-auto space-y-4 text-center bg-blue-50 p-10 rounded-lg shadow-md">
        <h2 className="text-3xl font-semibold text-blue-700">Community Involvement</h2>
        <p className="text-gray-700 text-lg leading-relaxed">
          At ABC Plumber, we believe in giving back. We regularly participate in local events, sponsor community programs, and support sustainable practices to make Austin a better place for all.
        </p>
      </section>


      <section className="max-w-3xl mx-auto text-center">
        <h3 className="text-3xl font-semibold mb-4 text-blue-700">Want to work with us?</h3>
        <p className="text-gray-700 mb-6">
          Contact ABC Plumber today for top-quality plumbing services you can trust.
        </p>
        <Link
          href="/contact"
          className="inline-block bg-blue-600 text-white px-8 py-3 rounded-md font-semibold hover:bg-blue-700 transition"
        >
          Get in Touch
        </Link>
      </section>
    </main>
  );
}
