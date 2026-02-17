import Hero from '@/components/Hero'
import ServiceCard from '@/components/ServiceCard'
import TeamCard from '@/components/TeamCard'
import TestimonialCard from '@/components/TestimonialCard'
import { getServices, getTeamMembers, getTestimonials } from '@/lib/cosmic'

export const revalidate = 60

export default async function HomePage() {
  const [services, team, testimonials] = await Promise.all([
    getServices(),
    getTeamMembers(),
    getTestimonials(),
  ])

  return (
    <>
      {/* Hero */}
      <Hero />

      {/* Services Section */}
      <section id="services" className="py-24 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Section Header */}
          <div className="text-center max-w-2xl mx-auto mb-16">
            <span className="text-electric-400 text-sm font-semibold uppercase tracking-widest">
              What We Do
            </span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white mt-3 mb-4">
              Our Services
            </h2>
            <p className="text-gray-400 text-lg leading-relaxed">
              From concept to launch, we deliver end-to-end digital solutions
              that make an impact.
            </p>
          </div>

          {/* Services Grid */}
          {services.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {services.map((service) => (
                <ServiceCard key={service.id} service={service} />
              ))}
            </div>
          ) : (
            <p className="text-gray-500 text-center">
              No services available at the moment.
            </p>
          )}
        </div>
      </section>

      {/* Team Section */}
      <section id="team" className="py-24 relative">
        {/* Background accent */}
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-electric-500/[0.02] to-transparent" />

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Section Header */}
          <div className="text-center max-w-2xl mx-auto mb-16">
            <span className="text-electric-400 text-sm font-semibold uppercase tracking-widest">
              The People
            </span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white mt-3 mb-4">
              Meet Our Team
            </h2>
            <p className="text-gray-400 text-lg leading-relaxed">
              Talented individuals who bring passion, expertise, and creativity to
              every project.
            </p>
          </div>

          {/* Team Grid */}
          {team.length > 0 ? (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
              {team.map((member) => (
                <TeamCard key={member.id} member={member} />
              ))}
            </div>
          ) : (
            <p className="text-gray-500 text-center">
              No team members to display.
            </p>
          )}
        </div>
      </section>

      {/* Testimonials Section */}
      <section id="testimonials" className="py-24 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Section Header */}
          <div className="text-center max-w-2xl mx-auto mb-16">
            <span className="text-electric-400 text-sm font-semibold uppercase tracking-widest">
              Client Love
            </span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white mt-3 mb-4">
              What They Say
            </h2>
            <p className="text-gray-400 text-lg leading-relaxed">
              Don&apos;t take our word for it — hear from the clients who&apos;ve
              experienced the difference.
            </p>
          </div>

          {/* Testimonials Grid */}
          {testimonials.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {testimonials.map((testimonial) => (
                <TestimonialCard
                  key={testimonial.id}
                  testimonial={testimonial}
                />
              ))}
            </div>
          ) : (
            <p className="text-gray-500 text-center">
              No testimonials available yet.
            </p>
          )}
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 relative">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="glass-card gradient-border rounded-3xl p-12 sm:p-16">
            <h2 className="text-3xl sm:text-4xl font-extrabold text-white mb-4">
              Ready to start your project?
            </h2>
            <p className="text-gray-400 text-lg mb-8 max-w-xl mx-auto">
              Let&apos;s build something amazing together. Reach out and we&apos;ll
              get back to you within 24 hours.
            </p>
            <a
              href="mailto:hello@digitaljedis.com"
              className="inline-block bg-gradient-to-r from-electric-500 to-purple-500 text-white font-semibold px-10 py-4 rounded-full hover:shadow-xl hover:shadow-electric-500/25 transition-all duration-300 hover:scale-105 text-base"
            >
              Start a Conversation
            </a>
          </div>
        </div>
      </section>
    </>
  )
}