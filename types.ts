export interface CosmicObject {
  id: string;
  slug: string;
  title: string;
  content?: string;
  metadata: Record<string, unknown>;
  type?: string;
  created_at?: string;
  modified_at?: string;
}

export interface CosmicImage {
  url: string;
  imgix_url: string;
}

export interface Service extends CosmicObject {
  metadata: {
    description: string;
    icon_emoji?: string;
    featured_image?: CosmicImage;
  };
}

export interface TeamMember extends CosmicObject {
  metadata: {
    role: string;
    bio?: string;
    photo?: CosmicImage;
    linkedin_url?: string;
    twitter_url?: string;
  };
}

export interface Testimonial extends CosmicObject {
  metadata: {
    client_name: string;
    company?: string;
    quote: string;
    rating?: number;
    avatar?: CosmicImage;
  };
}