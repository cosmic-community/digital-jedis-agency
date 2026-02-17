import Link from 'next/link'
import { Service } from '@/types'

interface ServiceCardProps {
  service: Service
}

export default function ServiceCard({ service }: ServiceCardProps) {
  const { title, slug, metadata } = service
  const { description, icon_emoji, featured_image } = metadata

  return (
    <Link
      href={`/services/${slug}`}
      className="group glass-card rounded-2xl overflow-hidden hover:bg-white/[0.08] transition-all duration-500 hover:shadow-xl hover:shadow-electric-500/5 hover:-translate-y-1"
    >
      {/* Image */}
      {featured_image && (
        <div className="relative h-48 overflow-hidden">
          <img
            src={`${featured_image.imgix_url}?w=800&h=400&fit=crop&auto=format,compress`}
            alt={title}
            width={400}
            height={200}
            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-navy-900/80 to-transparent" />
        </div>
      )}

      {/* Content */}
      <div className="p-6">
        {/* Emoji Icon */}
        {icon_emoji && (
          <div className="w-12 h-12 glass-card rounded-xl flex items-center justify-center text-2xl mb-4 group-hover:scale-110 transition-transform duration-300">
            {icon_emoji}
          </div>
        )}

        <h3 className="text-xl font-bold text-white mb-3 group-hover:text-electric-400 transition-colors duration-300">
          {title}
        </h3>

        <p className="text-gray-400 text-sm leading-relaxed line-clamp-3">
          {description}
        </p>

        {/* Arrow indicator */}
        <div className="mt-5 flex items-center gap-2 text-electric-400 text-sm font-medium opacity-0 group-hover:opacity-100 transition-opacity duration-300">
          Learn more
          <svg
            width="16"
            height="16"
            viewBox="0 0 16 16"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="transition-transform group-hover:translate-x-1"
          >
            <line x1="0" y1="8" x2="14" y2="8" />
            <polyline points="8,2 14,8 8,14" />
          </svg>
        </div>
      </div>
    </Link>
  )
}