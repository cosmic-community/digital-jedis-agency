# Digital Jedis Agency

![Digital Jedis Agency](https://imgix.cosmicjs.com/69e76df0-0bca-11f1-9563-f7cc37f51ae9-photo-1558655146-9f40138edfeb-1771309939865.jpg?w=1200&h=300&fit=crop&auto=format,compress)

A premium digital agency website built with Next.js 16 and Cosmic. Features dynamic services, team members, and client testimonials — all managed through Cosmic CMS.

## Features

- 🎨 **Modern Dark Design** — Sophisticated UI with gradient accents and glass-morphism effects
- 💻 **Dynamic Content** — Services, team members, and testimonials managed via Cosmic
- 📱 **Fully Responsive** — Optimized for mobile, tablet, and desktop
- ⚡ **Server-Side Rendered** — Fast page loads with Next.js 16 App Router
- 🔍 **SEO Optimized** — Proper meta tags and semantic HTML structure
- 🧭 **Smooth Navigation** — Sticky header, mobile menu, and individual service pages
- ⭐ **Star Ratings** — Visual 5-star rating system for testimonials
- 🔗 **Social Links** — LinkedIn and Twitter integration for team members

## Clone this Project

Want to create your own version of this project with all the content and structure? Clone this Cosmic bucket and code repository to get started instantly:

[![Clone this Project](https://img.shields.io/badge/Clone%20this%20Project-29abe2?style=for-the-badge&logo=cosmic&logoColor=white)](http://localhost:3040/projects/new?clone_bucket=69940af127b81270d523aeec&clone_repository=69940c7d27b81270d523af11)

## Prompts

This application was built using the following prompts to generate the content structure and code:

### Content Model Prompt

> "A digital agency website with services, team members, and testimonials"

### Code Generation Prompt

> "Based on the content model I created for 'A digital agency website with services, team members, and testimonials', now build a complete web application that showcases this content. Include a modern, responsive design with proper navigation, content display, and user-friendly interface."

The app has been tailored to work with your existing Cosmic content structure and includes all the features requested above.

## Technologies

- [Next.js 16](https://nextjs.org/) — React framework with App Router
- [React 19](https://react.dev/) — UI library
- [Cosmic](https://www.cosmicjs.com/docs) — Headless CMS
- [Tailwind CSS 3](https://tailwindcss.com/) — Utility-first CSS framework
- [TypeScript 5](https://www.typescriptlang.org/) — Type safety

## Getting Started

### Prerequisites

- [Bun](https://bun.sh/) (or Node.js 18+)
- A [Cosmic](https://www.cosmicjs.com) account with the digital agency content model

### Installation

```bash
# Clone the repository
git clone <your-repo-url>
cd digital-jedis-agency

# Install dependencies
bun install

# Set up environment variables
cp .env.example .env.local
# Add your Cosmic credentials to .env.local

# Start the development server
bun dev
```

Open [http://localhost:3000](http://localhost:3000) to see the result.

## Cosmic SDK Examples

### Fetching Services

```typescript
import { cosmic } from '@/lib/cosmic'

const { objects: services } = await cosmic.objects
  .find({ type: 'services' })
  .props(['id', 'title', 'slug', 'metadata'])
  .depth(1)
```

### Fetching Team Members

```typescript
const { objects: team } = await cosmic.objects
  .find({ type: 'team-members' })
  .props(['id', 'title', 'slug', 'metadata'])
  .depth(1)
```

### Fetching Testimonials

```typescript
const { objects: testimonials } = await cosmic.objects
  .find({ type: 'testimonials' })
  .props(['id', 'title', 'slug', 'metadata'])
  .depth(1)
```

## Cosmic CMS Integration

This application uses three Cosmic object types:

| Object Type | Fields |
|---|---|
| **Services** | Description, Icon Emoji, Featured Image |
| **Team Members** | Role, Bio, Photo, LinkedIn URL, Twitter URL |
| **Testimonials** | Client Name, Company, Quote, Rating, Avatar |

All content is fetched server-side for optimal performance and SEO.

## Deployment Options

### Vercel (Recommended)

1. Push your code to GitHub
2. Import the project in [Vercel](https://vercel.com)
3. Add environment variables: `COSMIC_BUCKET_SLUG`, `COSMIC_READ_KEY`, `COSMIC_WRITE_KEY`
4. Deploy

### Netlify

1. Push your code to GitHub
2. Import in [Netlify](https://netlify.com)
3. Set build command: `bun run build`
4. Set publish directory: `.next`
5. Add environment variables
6. Deploy

<!-- README_END -->