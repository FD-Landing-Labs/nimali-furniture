// ============================================
// SITE CONFIGURATION
// ============================================
// Edit this file to customize all content, images, and settings for your site

export const siteConfig = {
  // ============================================
  // BRAND & BASIC INFO
  // ============================================
  brand: {
    name: "Koala",
    tagline: "Timeless Comfort & Endless Luxury",
    description: "Premium furniture design and room decorating agency",
  },

  // ============================================
  // THEME COLORS
  // ============================================
  colors: {
    primary: "rgb(141, 73, 58)", // Main brand color (rust/brown)
    primaryDark: "rgb(121, 63, 48)", // Darker variant for hovers
    cream: "rgb(248, 237, 227)", // Light cream color
    background: "rgb(235, 225, 215)", // Background beige
    white: "rgb(255, 255, 255)",
    textDark: "rgb(60, 60, 60)",
    textMedium: "rgb(80, 80, 80)",
    textLight: "rgb(100, 100, 100)",
  },

  // ============================================
  // TYPOGRAPHY
  // ============================================
  fonts: {
    primary: "Archivo, sans-serif",
  },

  // ============================================
  // CONTACT INFORMATION
  // ============================================
  contact: {
    email: "contact@troscan.com",
    phone: "+1 (555) 123-4567",
    address: "123 Design Street, Creative City, CC 12345",
  },

  // ============================================
  // NAVIGATION
  // ============================================
  navigation: {
    links: [
      { label: "About", href: "#about" },
      { label: "Projects", href: "#projects" },
      { label: "News", href: "#news" },
    ],
    contactButton: {
      label: "Contact us",
      href: "#contact",
    },
  },

  // ============================================
  // HERO SECTION
  // ============================================
  hero: {
    title: "Timeless Comfort &\nEndless Luxury",
    backgroundImage: "/hero-image.png",
    buttons: [
      {
        label: "Our Vision",
        href: "#about",
        variant: "primary" as const,
      },
      {
        label: "Explore Expertise",
        href: "#projects",
        variant: "outline" as const,
      },
    ],
  },

  // ============================================
  // ABOUT SECTION
  // ============================================
  about: {
    eyebrow: "About us",
    title: "Where Spaces Inspire, and Design Comes Alive",
    paragraphs: [
      "At Koala, we believe that every space has a story to tell. As a premier furniture design and room decorating agency.",
      "Our expert team blends timeless craftsmanship with innovative designs, ensuring each piece and layout reflects your unique taste and lifestyle. Whether you're looking to reimagine your living room.",
    ],
    button: {
      label: "More About us",
      href: "#about",
    },
    image: {
      src: "/about.jpeg",
      alt: "Classical wooden table",
    },
  },

  // ============================================
  // SHOWCASE SECTION
  // ============================================
  showcase: {
    eyebrow: "Showcases",
    title: "From Vision to\nReality",
    description: "Transforming spaces with style, through Koala's exquisite furniture design and room decoration expertise.",
    images: [
      { src: "/showcase6.jpeg", alt: "Dark Modern furniture" },
      { src: "/showcase5.jpeg", alt: "Minimal luxury sofa" },
      { src: "/showcase4.jpeg", alt: "Modern dining setup" },
      { src: "/showcase3.jpeg", alt: "Contemporary living space" },
      { src: "/showcase2.jpeg", alt: "Elegant bedroom design" },
      { src: "/showcase1.jpeg", alt: "Stylish furniture piece" },
    ],
  },

  // ============================================
  // PROJECTS SECTION
  // ============================================
  projects: [
    {
      id: "01",
      title: "Serene Urban Retreat",
      description: "Where modern comfort meets peaceful sophistication.",
      image: "/project1.jpeg",
      buttonLabel: "View Project",
    },
    {
      id: "02",
      title: "Luxurious Coastal Living",
      description: "Bringing the beauty of the shore into your home.",
      image: "/project2.jpeg",
      buttonLabel: "View Project",
    },
    {
      id: "03",
      title: "Modern Elegance in Every Room",
      description: "Redefining spaces with timeless style and innovation.",
      image: "/project3.jpeg",
      buttonLabel: "View Project",
    },
  ],

  // ============================================
  // TESTIMONIALS SECTION
  // ============================================
  testimonials: {
    eyebrow: "Testimonials",
    title: "Don't take our word for it!\nHear it from our partners.",
    items: [
      {
        id: 1,
        name: "Sarah Mitchell",
        title: "Homeowner",
        quote: "Koala completely transformed our living room into a warm, inviting space. Their custom furniture pieces are not only beautiful but incredibly comfortable. We couldn't be happier with the result.",
        image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=400&h=400&fit=crop",
      },
      {
        id: 2,
        name: "James Anderson",
        title: "Boutique Hotel Owner",
        quote: "The bespoke furniture and room designs Koala created for our hotel have elevated our guest experience tremendously. Every piece tells a story and adds character to our spaces.",
        image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=400&h=400&fit=crop",
      },
      {
        id: 3,
        name: "Emily Chen",
        title: "Interior Designer",
        quote: "Working with Koala has been a dream. Their attention to detail and understanding of both aesthetics and functionality is exceptional. They bring ideas to life beautifully.",
        image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=400&h=400&fit=crop",
      },
      {
        id: 4,
        name: "Michael Roberts",
        title: "Restaurant Owner",
        quote: "The dining furniture and ambiance Koala designed for our restaurant has become the talk of the town. Guests specifically mention how comfortable and stylish the space feels.",
        image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop",
      },
      {
        id: 5,
        name: "David Martinez",
        title: "Property Developer",
        quote: "Koala furnished multiple luxury apartments for our development. Their timeless designs and quality craftsmanship have significantly enhanced the appeal and value of our properties.",
        image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400&h=400&fit=crop",
      },
      {
        id: 6,
        name: "Rachel Thompson",
        title: "Homeowner",
        quote: "From concept to completion, Koala made our bedroom redesign effortless. The custom headboard and wardrobe are stunning pieces that we'll treasure for years to come.",
        image: "https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?w=400&h=400&fit=crop",
      },
      {
        id: 7,
        name: "Thomas Wilson",
        title: "Office Manager",
        quote: "Koala transformed our corporate office into a modern, productive workspace. The ergonomic furniture and thoughtful layout have improved both aesthetics and employee satisfaction.",
        image: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=400&h=400&fit=crop",
      },
      {
        id: 8,
        name: "Lisa Patterson",
        title: "Café Owner",
        quote: "The cozy, welcoming atmosphere Koala created with their furniture selection has made our café a favorite neighborhood spot. Their design perfectly captures our brand's essence.",
        image: "https://images.unsplash.com/photo-1519345182560-3f2917c472ef?w=400&h=400&fit=crop",
      },
    ],
  },

  // ============================================
  // CTA SECTION
  // ============================================
  cta: {
    backgroundImage: "/cta.jpeg",
    text: "Ready to reimagine your space? Connect with us at Koala to bring your vision to life with our expertise in design and decoration.",
    button: {
      label: "Get in Touch",
      href: "#contact",
    },
  },

  // ============================================
  // FAQ SECTION
  // ============================================
  faq: {
    title: "Questions?",
    category: "General questions",
    description: "If you have questions, we have answers for you here. In case we don't, please feel free to reach out to us at",
    items: [
      {
        id: 1,
        question: "What is Koala and how does it work?",
        answer: "Koala is a premium furniture design and room decorating agency that specializes in creating timeless, luxurious spaces. We work closely with you to understand your vision, then design and craft bespoke furniture pieces and complete room layouts that perfectly match your style and needs.",
      },
      {
        id: 2,
        question: "How can I start a project with Koala?",
        answer: "Starting a project with Koala is easy! Simply reach out to us through our contact page or email. We'll schedule an initial consultation to discuss your vision, preferences, and budget. From there, we'll create a tailored design proposal and guide you through every step of the process.",
      },
      {
        id: 3,
        question: "What types of projects does Koala take on?",
        answer: "We handle a wide range of projects including residential spaces (living rooms, bedrooms, dining areas), commercial spaces (offices, restaurants, hotels), and custom furniture pieces. Whether you need a single statement piece or a complete room transformation, we're here to help.",
      },
      {
        id: 4,
        question: "How long does a typical project take?",
        answer: "Project timelines vary depending on scope and complexity. A custom furniture piece typically takes 4-8 weeks, while a full room design and decoration can take 8-12 weeks. We'll provide you with a detailed timeline during our initial consultation.",
      },
      {
        id: 5,
        question: "Do you offer custom furniture design?",
        answer: "Absolutely! Custom furniture design is one of our specialties. We create bespoke pieces tailored to your exact specifications, ensuring they fit perfectly in your space and match your aesthetic preferences. Each piece is crafted with meticulous attention to detail and quality.",
      },
      {
        id: 6,
        question: "What is your design process?",
        answer: "Our process begins with a consultation to understand your needs and vision. We then create design concepts and 3D renderings for your approval. Once finalized, we source materials, craft furniture pieces, and coordinate the complete installation and styling of your space.",
      },
    ],
  },

  // ============================================
  // FOOTER
  // ============================================
  footer: {
    sitemap: [
      { label: "About", href: "#about" },
      { label: "Projects", href: "#projects" },
      { label: "News", href: "#news" },
      { label: "Contact", href: "#contact" },
    ],
    socials: [
      { label: "Facebook", href: "#" },
      { label: "Instagram", href: "#" },
      { label: "LinkedIn", href: "#" },
      { label: "Twitter", href: "#" },
    ],
    more: [
      { label: "License", href: "#" },
      { label: "Grainient", href: "#" },
      { label: "Inspirux", href: "#" },
      { label: "Store", href: "#" },
    ],
    copyright: "© 2025, All rights reserved",
  },
};

// ============================================
// TYPE EXPORTS (for TypeScript support)
// ============================================
export type SiteConfig = typeof siteConfig;
export type Project = typeof siteConfig.projects[0];
export type Testimonial = typeof siteConfig.testimonials.items[0];
export type FAQItem = typeof siteConfig.faq.items[0];
