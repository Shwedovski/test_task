import Image from "next/image";

const services = [
  {
    title: "Drain Cleaning",
    description: "Professional drain cleaning to keep your plumbing flowing smoothly.",
    image: "/images/drain.jpg",
  },
  {
    title: "Water Heater Repair",
    description: "Expert repair and installation of all types of water heaters.",
    image: "/images/water.jpg",
  },
  {
    title: "Leak Detection",
    description: "Accurate and fast leak detection using modern tools.",
    image: "/images/leak.jpg",
  },
  {
    title: "Emergency Plumbing",
    description: "24/7 emergency plumbing services to tackle any crisis.",
    image: "/images/plumbing.jpg",
  },
];

export default function MainServices() {
  return (
    <section className="py-16 px-4 md:px-8 lg:px-16 bg-white">
      <div className="max-w-7xl mx-auto text-center">
        <h2 className="text-3xl font-bold mb-4">Our Main Services</h2>
        <p className="text-gray-600 mb-10">Reliable plumbing services for every need, available across Austin, TX.</p>

        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {services.map((service, idx) => (
            <div
              key={idx}
              className="bg-gray-50 p-6 rounded-2xl shadow hover:shadow-md transition"
            >
              <div className="relative w-full h-40 mb-4">
                <Image
                  src={service.image}
                  alt={service.title}
                  fill
                  className="object-cover rounded-xl"
                />
              </div>
              <h3 className="text-xl font-semibold mb-2">{service.title}</h3>
              <p className="text-gray-600 text-sm">{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
