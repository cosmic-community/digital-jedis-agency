import type { Metadata } from 'next'
import ContactForm from '@/components/ContactForm'

export const metadata: Metadata = {
  title: 'Contact Us — DigitalJedis',
  description:
    'Get in touch with DigitalJedis. Tell us about your project and we\'ll get back to you within 24 hours.',
}

export default function ContactPage() {
  return (
    <section className="py-32 relative min-h-screen">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-12">
          <span className="text-electric-400 text-sm font-semibold uppercase tracking-widest">
            Contact
          </span>
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white mt-3 mb-4">
            Get in Touch
          </h1>
          <p className="text-gray-400 text-lg leading-relaxed">
            Have a project in mind? Fill out the form below and we&apos;ll get back to
            you within 24 hours.
          </p>
        </div>

        {/* Contact Form */}
        <ContactForm />

        {/* Contact Info */}
        <div className="mt-16 grid grid-cols-1 sm:grid-cols-3 gap-8 text-center">
          <div>
            <div className="text-2xl mb-2">📧</div>
            <h4 className="text-white font-semibold text-sm mb-1">Email</h4>
            <p className="text-gray-400 text-sm">hello@digitaljedis.com</p>
          </div>
          <div>
            <div className="text-2xl mb-2">📞</div>
            <h4 className="text-white font-semibold text-sm mb-1">Phone</h4>
            <p className="text-gray-400 text-sm">+1 (555) 123-4567</p>
          </div>
          <div>
            <div className="text-2xl mb-2">📍</div>
            <h4 className="text-white font-semibold text-sm mb-1">Location</h4>
            <p className="text-gray-400 text-sm">San Francisco, CA</p>
          </div>
        </div>
      </div>
    </section>
  )
}