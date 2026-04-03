import type { Specialist } from "@/lib/types";
import { beautyMedia } from "@/data/media";

export const specialists: Specialist[] = [
  {
    slug: "amelia-ruskaite",
    name: "Amelia Ruskaitė",
    role: "Founder & Skin Ritual Specialist",
    experience: "10 years in premium facial care",
    quote:
      "The best results feel refined, rested, and unmistakably like you.",
    specialties: ["Hydration facials", "Bridal prep", "Skin mapping"],
    imageTone: "champagne",
    image: beautyMedia.portraitAmelia,
    bio: "Amelia founded Maison de Lueur with a simple belief: beauty treatments should feel restorative, not transactional. With over a decade of experience spanning high-end clinical esthetics and holistic spa environments across Europe, she developed the studio's signature rituals to bridge the gap between effective, results-driven skin care and deeply relaxing, tension-melting touch. Her focus is always on the 'slow beauty' movement.",
    signatureServices: ["radiance-facial", "bridal-preview-glow", "restorative-massage"],
    recentWorkImages: [
      {
        title: "Radiance Before Event",
        aspect: "portrait",
        tone: "champagne",
        image: beautyMedia.heroSpa,
      },
      {
        title: "Bridal Skin Prep",
        aspect: "square",
        tone: "pearl",
        image: beautyMedia.portraitSofia,
      }
    ]
  },
  {
    slug: "eva-mont",
    name: "Eva Mont",
    role: "Senior Brow & Lash Artist",
    experience: "8 years shaping natural definition",
    quote:
      "I focus on subtle balance so brows and lashes elevate the whole face.",
    specialties: ["Soft brow sculpt", "Lash lifts", "Tint refinement"],
    imageTone: "taupe",
    image: beautyMedia.portraitEva,
    bio: "Eva approaches brow and lash styling like a subtle art form. Her philosophy is rooted in natural enhancement—working with your existing features rather than fighting them with heavy trends. She is known for her meticulous mapping techniques and her ability to create the perfect, bespoke tint color that complements your skin undertone perfectly. She believes the eyes are the architecture of the face.",
    signatureServices: ["signature-brow-sculpt", "lash-lift-veil", "sculpted-eye-lift"],
    recentWorkImages: [
      {
        title: "Soft Brow Sculpting",
        aspect: "landscape",
        tone: "taupe",
        image: beautyMedia.detailLash,
      },
      {
        title: "Lash Lift Veil Effect",
        aspect: "square",
        tone: "blush",
        image: beautyMedia.detailSkinTexture,
      }
    ]
  },
  {
    slug: "sofia-larsen",
    name: "Sofia Larsen",
    role: "Beauty Stylist",
    experience: "Editorial polish with salon warmth",
    quote:
      "Luxury should feel calm and personal, never intimidating or overdone.",
    specialties: ["Occasion beauty", "Finishing touches", "Consult-led care"],
    imageTone: "blush",
    image: beautyMedia.portraitSofia,
    bio: "Sofia joined the studio bringing her extensive background in editorial and occasion beauty. She excels at listening to what clients truly want, ensuring that the final result feels undeniably like them, only a more polished version. Sofia is the specialist to see when you are navigating an important event and need a calm, steady hand. She treats every consultation as a personal collaboration.",
    signatureServices: ["bridal-preview-glow"],
    recentWorkImages: [
      {
        title: "Polished Occasion Look",
        aspect: "portrait",
        tone: "blush",
        image: beautyMedia.portraitSofia,
      }
    ]
  },
  {
    slug: "monika-vy",
    name: "Monika Vy",
    role: "Texture & Tone Specialist",
    experience: "6 years clinical esthetics",
    quote: "True glow comes from deep nourishment and precise technique.",
    specialties: ["Cellular renewal", "Texture mapping", "Pigment correction"],
    imageTone: "pearl",
    image: beautyMedia.portraitMonika,
    bio: "Monika specializes in transforming dull, congested, or uneven skin. Combining a deep understanding of cosmetic chemistry with an incredibly soothing touch, she tailors active peels and resurfacing treatments to be effective without unnecessary downtime. Her goal is to give every client back their confidence without irritation, building a journey towards resilient, healthy skin.",
    signatureServices: ["radiance-facial", "cellular-renewal", "restorative-massage", "lueur-brightening-glow"],
    recentWorkImages: [
      {
        title: "Texture Refining Peel Result",
        aspect: "square",
        tone: "mocha",
        image: beautyMedia.detailMaskProcess,
      },
      {
        title: "Pigmentation Evening",
        aspect: "landscape",
        tone: "champagne",
        image: beautyMedia.productSerum,
      }
    ]
  },
];
