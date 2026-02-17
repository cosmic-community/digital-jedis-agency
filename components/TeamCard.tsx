import { TeamMember } from '@/types'

interface TeamCardProps {
  member: TeamMember
}

export default function TeamCard({ member }: TeamCardProps) {
  const { title, metadata } = member
  const { role, bio, photo, linkedin_url, twitter_url } = metadata

  return (
    <div className="group glass-card rounded-2xl overflow-hidden hover:bg-white/[0.08] transition-all duration-500 hover:-translate-y-1">
      {/* Photo */}
      <div className="relative h-72 overflow-hidden">
        {photo ? (
          <img
            src={`${photo.imgix_url}?w=600&h=600&fit=crop&auto=format,compress`}
            alt={title}
            width={300}
            height={300}
            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
          />
        ) : (
          <div className="w-full h-full bg-navy-700 flex items-center justify-center">
            <span className="text-5xl text-gray-500 font-bold">
              {title.charAt(0)}
            </span>
          </div>
        )}
        {/* Overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-navy-900 via-navy-900/40 to-transparent" />

        {/* Social Links - appear on hover */}
        <div className="absolute bottom-4 left-4 right-4 flex items-center gap-3 opacity-0 group-hover:opacity-100 transition-all duration-300 translate-y-4 group-hover:translate-y-0">
          {linkedin_url && (
            <a
              href={linkedin_url}
              target="_blank"
              rel="noopener noreferrer"
              className="w-10 h-10 glass-card rounded-full flex items-center justify-center text-white hover:bg-electric-500/30 transition-colors"
              aria-label={`${title} LinkedIn`}
            >
              <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
              </svg>
            </a>
          )}
          {twitter_url && (
            <a
              href={twitter_url}
              target="_blank"
              rel="noopener noreferrer"
              className="w-10 h-10 glass-card rounded-full flex items-center justify-center text-white hover:bg-electric-500/30 transition-colors"
              aria-label={`${title} Twitter`}
            >
              <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
              </svg>
            </a>
          )}
        </div>
      </div>

      {/* Info */}
      <div className="p-6">
        <h3 className="text-lg font-bold text-white mb-1">{title}</h3>
        <p className="text-electric-400 text-sm font-medium mb-3">{role}</p>
        {bio && (
          <p className="text-gray-400 text-sm leading-relaxed line-clamp-3">
            {bio}
          </p>
        )}
      </div>
    </div>
  )
}