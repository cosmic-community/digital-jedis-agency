import { Testimonial } from '@/types'
import StarRating from '@/components/StarRating'

interface TestimonialCardProps {
  testimonial: Testimonial
}

export default function TestimonialCard({ testimonial }: TestimonialCardProps) {
  const { metadata } = testimonial
  const { client_name, company, quote, rating, avatar } = metadata

  return (
    <div className="glass-card rounded-2xl p-8 hover:bg-white/[0.08] transition-all duration-500 flex flex-col h-full">
      {/* Quote icon */}
      <div className="text-electric-400/30 mb-4">
        <svg width="40" height="40" viewBox="0 0 24 24" fill="currentColor">
          <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z"/>
        </svg>
      </div>

      {/* Quote text */}
      <p className="text-gray-300 leading-relaxed text-base flex-1 mb-6">
        &ldquo;{quote}&rdquo;
      </p>

      {/* Rating */}
      {typeof rating === 'number' && rating > 0 && (
        <div className="mb-5">
          <StarRating rating={rating} />
        </div>
      )}

      {/* Client info */}
      <div className="flex items-center gap-4 pt-5 border-t border-white/5">
        {avatar ? (
          <img
            src={`${avatar.imgix_url}?w=96&h=96&fit=crop&auto=format,compress`}
            alt={client_name}
            width={48}
            height={48}
            className="w-12 h-12 rounded-full object-cover ring-2 ring-white/10"
          />
        ) : (
          <div className="w-12 h-12 rounded-full bg-navy-600 flex items-center justify-center ring-2 ring-white/10">
            <span className="text-lg font-bold text-gray-400">
              {client_name.charAt(0)}
            </span>
          </div>
        )}
        <div>
          <p className="text-white font-semibold text-sm">{client_name}</p>
          {company && (
            <p className="text-gray-500 text-sm">{company}</p>
          )}
        </div>
      </div>
    </div>
  )
}