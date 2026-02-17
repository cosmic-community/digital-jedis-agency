// app/services/[slug]/page.tsx
import { notFound } from 'next/navigation'
import Link from 'next/link'
import { getServiceBySlug, getServices } from '@/lib/cosmic'
import type { Metadata } from 'next'

export const revalidate = 60

export async function generateStaticParams() {
  const services = await getServices()
  return services.map((service) => ({
    slug: service.slug,
  }))
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>
}): Promise<Metadata> {
  const { slug } = await params
  const service = await getServiceBySlug(slug)

  if (!service) {
    return { title: 'Service Not Found' }
  }

  return {
    title: `${service.title} — DigitalJedis`,
    description: service.metadata.description,
  }
}

export default async function ServicePage({
  params,
}: {
  params: Promise<{ slug: string }>
}) {
  const { slug } = await params
  const service = await getServiceBySlug(slug)

  if (!service) {
    notFound()
  }

  const { title, metadata } = service
  const { description, icon_emoji, featured_image } = metadata

  return (
    <div className="min-h-screen pt-20">
      {/* Hero Image */}
      {featured_image && (
        <div className="relative h-72 sm:h-96 overflow-hidden">
          <img
            src={`${featured_image.imgix_url}?w=1600&h=800&fit=crop&auto=format,compress`}
            alt={title}
            width={1600}
            height={800}
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-navy-900 via-navy-900/60 to-navy-900/20" />
        </div>
      )}

      {/* Content */}
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {/* Breadcrumb */}
        <nav className="mb-8">
          <Link
            href="/#services"
            className="inline-flex items-center gap-2 text-electric-400 hover:text-electric-300 text-sm font-medium transition-colors group"
          >
            <svg
              width="16"
              height="16"
              viewBox="0 0 16 16"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="transition-transform group-hover:-translate-x-1"
            >
              <line x1="14" y1="8" x2="2" y2="8" />
              <polyline points="8,2 2,8 8,14" />
            </svg>
            Back to Services
          </Link>
        </nav>

        {/* Emoji */}
        {icon_emoji && (
          <div className="w-16 h-16 glass-card rounded-2xl flex items-center justify-center text-4xl mb-6">
            {icon_emoji}
          </div>
        )}

        {/* Title */}
        <h1 className="text-4xl sm:text-5xl font-extrabold text-white mb-6 leading-tight">
          {title}
        </h1>

        {/* Description */}
        <div className="text-gray-300 text-lg leading-relaxed whitespace-pre-line">
          {description}
        </div>

        {/* CTA */}
        <div className="mt-12 glass-card gradient-border rounded-2xl p-8 text-center">
          <h3 className="text-xl font-bold text-white mb-3">
            Interested in {title}?
          </h3>
          <p className="text-gray-400 mb-6">
            Let&apos;s discuss how we can help your business grow.
          </p>
          <a
            href="mailto:hello@digitaljedis.com"
            className="inline-block bg-gradient-to-r from-electric-500 to-purple-500 text-white font-semibold px-8 py-3 rounded-full hover:shadow-lg hover:shadow-electric-500/25 transition-all duration-300 hover:scale-105 text-sm"
          >
            Get Started
          </a>
        </div>
      </div>
    </div>
  )
}