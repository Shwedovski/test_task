import { BadgeCheck, Clock, Wrench, DollarSign } from 'lucide-react'

export default function Features() {
  const features = [
    {
      title: 'Experienced Professionals',
      description: 'Over 20 years of plumbing expertise in Austin homes.',
      icon: <BadgeCheck className="w-8 h-8 text-blue-600" />,
    },
    {
      title: 'Licensed & Insured',
      description: 'Fully certified for all residential plumbing services.',
      icon: <Wrench className="w-8 h-8 text-blue-600" />,
    },
    {
      title: '24/7 Emergency Service',
      description: 'We’re always here when you need us, day or night.',
      icon: <Clock className="w-8 h-8 text-blue-600" />,
    },
    {
      title: 'Fair Pricing',
      description: 'Transparent pricing with no surprise fees.',
      icon: <DollarSign className="w-8 h-8 text-blue-600" />,
    },
  ]

  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-3xl font-bold mb-6">Why Choose ABC Plumber?</h2>
        <p className="text-gray-600 max-w-2xl mx-auto mb-12">
          We're trusted by hundreds of homeowners across Austin thanks to our fast response, expert service, and customer-first attitude.
        </p>
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
          {features.map((feature, index) => (
            <div key={index} className="bg-white rounded-2xl shadow p-6 text-left hover:shadow-md transition">
              <div className="mb-4">{feature.icon}</div>
              <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
              <p className="text-gray-600 text-sm">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
