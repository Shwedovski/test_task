export default function BlogSection() {
  return (
    <section className="py-16 bg-white" id="blog">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-gray-900 mb-10 text-center">
          Plumbing Tips & Advice
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {[
            {
              title: "How to prevent drain clogs",
              description:
                "Learn simple ways to avoid clogged drains and keep your plumbing in top shape.",
              date: "August 1, 2025",
              image: "/images/blog1.jpg",
            },
            {
              title: "Signs your water heater needs replacing",
              description:
                "Discover when it's time to replace your water heater and how to choose the right one.",
              date: "July 25, 2025",
              image: "/images/blog2.jpg",
            },
            {
              title: "Emergency plumbing checklist",
              description:
                "Be prepared for any plumbing emergency with this handy checklist.",
              date: "July 15, 2025",
              image: "/images/blog3.jpg",
            },
          ].map((post, index) => (
            <div
              key={index}
              className="rounded-xl border border-gray-200 overflow-hidden shadow hover:shadow-lg transition duration-300"
            >
              <img
                src={post.image}
                alt={post.title}
                className="w-full h-48 object-cover"
              />
              <div className="p-4">
                <p className="text-sm text-gray-500 mb-1">{post.date}</p>
                <h3 className="text-xl font-semibold text-gray-900">
                  {post.title}
                </h3>
                <p className="text-gray-700 mt-2 text-sm">{post.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
