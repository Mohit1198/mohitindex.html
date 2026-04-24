export interface Project {
  id: string;
  title: string;
  cat: string;
  img: string;
  desc: string;
  link: string;
  tools: string[];
  sub: string;
  featured?: boolean;
}

export const PROJECTS: Project[] = [
  {
    id: 'social2',
    title: 'Social Media Posts 2',
    cat: 'Social Media Design',
    img: 'https://mir-s3-cdn-cf.behance.net/projects/404/adcc36198378981.Y3JvcCwxMDYyLDgzMCwwLDA.png',
    desc: 'Social Media Grid for Scavin Eyewear — photographed, upscaled, and retouched product images with a minimalistic aesthetic and short taglines. Also includes work for Innexia (Home Automation), Airawat (Real Estate), and Nivaya Jewellery.',
    link: 'https://www.behance.net/gallery/198378981/Social-Media-Posts-2',
    tools: ['Adobe Photoshop', 'Adobe Illustrator'],
    sub: 'Scavin Eyewear · Innexia · Airawat · Nivaya Jewellery',
    featured: true
  },
  {
    id: 'logo',
    title: 'Logo Design',
    cat: 'Brand Identity',
    img: 'https://mir-s3-cdn-cf.behance.net/projects/404/e7e050167398395.Y3JvcCw4MDgsNjMyLDAsMA.jpg',
    desc: 'A curated collection of logo designs for various clients and industries, demonstrating versatility in creating strong brand identities.',
    link: 'https://www.behance.net/gallery/167398395/Logo-Design',
    tools: ['Adobe Illustrator'],
    sub: 'Multi-brand logo collection'
  },
  {
    id: 'social1',
    title: 'Social Media Post',
    cat: 'Social Media Design',
    img: 'https://mir-s3-cdn-cf.behance.net/projects/404/23137b178988357.Y3JvcCw4MDgsNjMyLDAsMA.jpg',
    desc: 'First series of social media design work showcasing brand-consistent posts with strong typography and visual hierarchy.',
    link: 'https://www.behance.net/gallery/178988357/Social-Media-Post',
    tools: ['Adobe Photoshop', 'Adobe Illustrator'],
    sub: 'Series 1 — Brand campaigns'
  },
  {
    id: 'menu',
    title: 'Menu Card',
    cat: 'Print Design',
    img: 'https://mir-s3-cdn-cf.behance.net/projects/404/a4f352172143067.Y3JvcCwzMDQ1LDIzODIsMTU4LDA.jpg',
    desc: 'Restaurant menu card design with a focus on readability, aesthetic layout, and brand tone.',
    link: 'https://www.behance.net/gallery/172143067/Menu-Card',
    tools: ['Adobe Illustrator', 'Adobe Photoshop'],
    sub: 'Restaurant branding & print'
  },
  {
    id: 'ui',
    title: 'UI Designs',
    cat: 'UI Design',
    img: 'https://mir-s3-cdn-cf.behance.net/projects/404/d55232163367101.Y3JvcCwxMTgzLDkyNSw0ODAsMjU3.jpg',
    desc: 'Web and interface UI concepts exploring layout, color, and modern design principles.',
    link: 'https://www.behance.net/gallery/163367101/UI-designs',
    tools: ['Adobe Photoshop', 'Figma'],
    sub: 'Website & interface concepts'
  },
  {
    id: 'portfolio',
    title: 'Graphic Design Portfolio',
    cat: 'Portfolio',
    img: 'https://mir-s3-cdn-cf.behance.net/projects/404/14010a157979857.Y3JvcCwxMzgwLDEwODAsMCww.jpg',
    desc: 'A broad portfolio piece showcasing diverse graphic design work across multiple categories and clients.',
    link: 'https://www.behance.net/gallery/157979857/Graphic-Design-Portfolio',
    tools: ['Adobe Illustrator', 'Adobe Photoshop'],
    sub: 'Assorted creative work'
  }
];

export const SKILLS = [
  { icon: 'https://cdn.jsdelivr.net/npm/simple-icons@11.0.0/icons/adobeillustrator.svg', name: 'Adobe Illustrator', width: 70, sub: 'Vector & Illustration' },
  { icon: 'https://cdn.jsdelivr.net/npm/simple-icons@11.0.0/icons/adobephotoshop.svg', name: 'Adobe Photoshop', width: 80, sub: 'Photo & Retouching' },
  { icon: 'https://cdn.jsdelivr.net/npm/simple-icons@11.0.0/icons/adobeaftereffects.svg', name: 'After Effects', width: 40, sub: 'Motion & Animation' },
  { icon: 'https://cdn.jsdelivr.net/npm/simple-icons@11.0.0/icons/canva.svg', name: 'Canva', width: 70, sub: 'Rapid Design' },
  { icon: 'https://cdn.jsdelivr.net/npm/simple-icons@11.0.0/icons/openai.svg', name: 'Chat GPT', width: 40, sub: 'For Image Generation' },
];

export const EXPERIENCE = [
  {
    role: 'Graphic Designer',
    company: 'Spark Eighteen',
    date: 'January 2025 — Present',
    desc: 'Currently contributing as a Graphic Designer, handling visual communication across digital and print mediums.',
    tags: ['Digital Design', 'Brand Assets'],
    current: true
  },
  {
    role: 'Executive Graphic Designer',
    company: 'Media F5',
    date: 'June 2023 — January 2025',
    desc: 'Led creative design work at a full-service media agency, delivering visual assets for multiple client campaigns across industries.',
    tags: ['Social Media', 'Campaign Design', 'Ahmedabad']
  },
  {
    role: 'Graphic Designer',
    company: 'Dcrea8',
    date: 'February 2021 — May 2023',
    desc: 'Designed for 10+ dermatologist clinics — brochures, booklets, logos, social media posts, LED boards, books, and website UIs, all under one creative umbrella.',
    tags: ['Brochures', 'Logo Design', 'LED Boards', 'Website UI']
  },
  {
    role: 'Freelancing',
    company: 'PHP Poets',
    date: 'Freelance',
    desc: 'Delivered freelance graphic design services including social media posts, branding, and visual content.',
    tags: ['Social Media', 'Freelance']
  },
  {
    role: 'Freelancing',
    company: 'Prathaniya Comfort Stay',
    date: 'Freelance',
    desc: 'Produced social media posts, invitation cards, and brochures for a hospitality brand.',
    tags: ['Invitations', 'Brochure', 'Hospitality']
  },
  {
    role: 'Graphic Design Intern',
    company: 'Rajasthan Blog',
    date: 'Internship',
    desc: 'Designed social media posts and posters as part of an internship, building foundational design skills.',
    tags: ['Social Media', 'Posters', 'Internship']
  }
];

export const EDUCATION = [
  {
    period: '2017 — 2021',
    institution: 'Techno India NJR Institute of Technology',
    degree: 'Engineering — Rajasthan, India'
  },
  {
    period: '2015 — 2017',
    institution: 'Guru Nanak Public Sr. Sc. School',
    degree: 'Senior Secondary Education'
  }
];
