export type Service = {
  id: string;
  name: string;
  description: string;
  price: number;
  duration: string;
  category: string;
  available: boolean;
};

export const services: Service[] = [
  {
    id: "1",
    name: "Classic Haircut",
    description: "Precision cut tailored to your face shape and style preference.",
    price: 1500,
    duration: "45 min",
    category: "Hair",
    available: true,
  },
  {
    id: "2",
    name: "Hair Coloring",
    description: "Full color treatment using premium, long-lasting dyes.",
    price: 4500,
    duration: "2 hrs",
    category: "Hair",
    available: true,
  },
  {
    id: "3",
    name: "Balayage",
    description: "Hand-painted highlights for a natural sun-kissed look.",
    price: 7000,
    duration: "3 hrs",
    category: "Hair",
    available: false,
  },
  {
    id: "4",
    name: "Manicure",
    description: "Nail shaping, cuticle care, and polish of your choice.",
    price: 800,
    duration: "30 min",
    category: "Nails",
    available: true,
  },
  {
    id: "5",
    name: "Pedicure",
    description: "Foot soak, scrub, nail trim, and polish treatment.",
    price: 1200,
    duration: "45 min",
    category: "Nails",
    available: true,
  },
  {
    id: "6",
    name: "Deep Cleanse Facial",
    description: "Pore-cleansing facial with steam, extraction, and mask.",
    price: 3500,
    duration: "1 hr",
    category: "Skin",
    available: true,
  },
  {
    id: "7",
    name: "Eyebrow Threading",
    description: "Precise shaping using traditional threading technique.",
    price: 500,
    duration: "15 min",
    category: "Brows & Lashes",
    available: false,
  },
  {
    id: "8",
    name: "Lash Lift & Tint",
    description: "Curl and darken your natural lashes for a mascara-free look.",
    price: 2500,
    duration: "1 hr",
    category: "Brows & Lashes",
    available: true,
  },
];