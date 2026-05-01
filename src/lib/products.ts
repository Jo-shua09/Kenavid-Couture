import agbadaPearlArch from "@/assets/products/agbada-pearl-arch.jpg";
import agbadaSilverZigzag from "@/assets/products/agbada-silver-zigzag.jpg";
import agbadaOliveCircuit from "@/assets/products/agbada-olive-circuit.jpg";
import agbadaOlivePebble from "@/assets/products/agbada-olive-pebble.jpg";
import agbadaBurgundyImperial from "@/assets/products/agbada-burgundy-imperial.jpg";
import agbadaAmberProfile from "@/assets/products/agbada-amber-profile.jpg";
import agbadaIvoryNoir from "@/assets/products/agbada-ivory-noir.jpg";
import agbadaSandMosaic from "@/assets/products/agbada-sand-mosaic.jpg";
import agbadaCreamMedallion from "@/assets/products/agbada-cream-medallion.jpg";
import kaftanForestZigzag from "@/assets/products/kaftan-forest-zigzag.jpg";
import kaftanEspressoBraid from "@/assets/products/kaftan-espresso-braid.jpg";
import kaftanTealMedallion from "@/assets/products/kaftan-teal-medallion.jpg";
import casualEspressoMonogram from "@/assets/products/casual-espresso-monogram.jpg";
import senatorNavyDuo from "@/assets/products/senator-navy-blue-duo.jpg";
import senatorRosePocket from "@/assets/products/senator-rose-pocket.jpg";
import agbadaNoirVisage from "@/assets/products/agbada-noir-visage.jpg";
import kaftanNoirStar from "@/assets/products/kaftan-noir-star.jpg";

export type Category = "Agbada" | "Kaftan" | "Casual Wear";

export interface Product {
  id: string;
  name: string;
  category: Category;
  image: string;
  priceFrom: number;
  priceTo: number;
  description: string;
  details: string[];
}

export const products: Product[] = [
  // ============ AGBADA — From ₦150,000 ============
  {
    id: "agbada-pearl-arch",
    name: "Pearl Arch Agbada",
    category: "Agbada",
    image: agbadaPearlArch,
    priceFrom: 150000,
    priceTo: 150000,
    description:
      "Soft pearl-grey agbada with an elegant tonal arch motif embroidered across the chest panel — quiet, ceremonial luxury.",
    details: [
      "Premium pearl-grey crepe fabric",
      "Tonal arch embroidery",
      "Three-piece set (robe, kaftan, trousers)",
      "Bespoke made-to-measure tailoring",
    ],
  },
  {
    id: "agbada-silver-zigzag",
    name: "Silver Chevron Agbada",
    category: "Agbada",
    image: agbadaSilverZigzag,
    priceFrom: 150000,
    priceTo: 150000,
    description:
      "Silver-grey agbada with a bold tan chevron embroidered chest panel — modern geometry meets heritage tailoring.",
    details: [
      "Premium silver-grey fabric",
      "Hand-embroidered chevron crest",
      "Three-piece set",
      "Made-to-measure",
    ],
  },
  {
    id: "agbada-olive-circuit",
    name: "Olive Circuit Agbada",
    category: "Agbada",
    image: agbadaOliveCircuit,
    priceFrom: 150000,
    priceTo: 150000,
    description:
      "Earthy olive agbada anchored by a circular medallion crest with golden centerpiece — heritage craftsmanship reimagined.",
    details: [
      "Premium olive crepe fabric",
      "Circular medallion embroidery",
      "Three-piece set",
      "Bespoke fit",
    ],
  },
  {
    id: "agbada-olive-pebble",
    name: "Olive Pebble Agbada",
    category: "Agbada",
    image: agbadaOlivePebble,
    priceFrom: 150000,
    priceTo: 150000,
    description:
      "Olive agbada featuring a sculpted multi-tone pebble crest framed in fine gold thread — a distinctive signature piece.",
    details: [
      "Premium olive fabric",
      "Multi-tone pebble crest",
      "Gold-thread framing",
      "Three-piece bespoke set",
    ],
  },
  {
    id: "agbada-burgundy-imperial",
    name: "Burgundy Imperial Agbada",
    category: "Agbada",
    image: agbadaBurgundyImperial,
    priceFrom: 150000,
    priceTo: 150000,
    description:
      "Rich burgundy wool agbada with tonal embroidered crest and matching cap — imperial weight, refined drape.",
    details: [
      "Premium burgundy wool blend",
      "Tonal hand embroidery",
      "Matching cap included",
      "Three-piece set",
    ],
  },
  {
    id: "agbada-amber-profile",
    name: "Amber Heritage Agbada",
    category: "Agbada",
    image: agbadaAmberProfile,
    priceFrom: 150000,
    priceTo: 150000,
    description:
      "Warm amber agbada with a bold heritage crest panel embroidered in tonal gold — a true conversation piece.",
    details: [
      "Premium amber silk-blend",
      "Bold embroidered crest panel",
      "Three-piece set",
      "Bespoke tailoring",
    ],
  },
  {
    id: "agbada-ivory-noir",
    name: "Ivory Noir Agbada",
    category: "Agbada",
    image: agbadaIvoryNoir,
    priceFrom: 150000,
    priceTo: 150000,
    description:
      "Pristine ivory agbada with a striking black geometric panel — a contemporary monochrome statement.",
    details: [
      "Premium ivory crepe fabric",
      "Geometric noir embroidered panel",
      "Three-piece set",
      "Made-to-measure",
    ],
  },
  {
    id: "agbada-sand-mosaic",
    name: "Sand Mosaic Agbada",
    category: "Agbada",
    image: agbadaSandMosaic,
    priceFrom: 150000,
    priceTo: 150000,
    description:
      "Soft sand agbada anchored by a striking tonal mosaic crest — quiet luxury with statement craftsmanship.",
    details: [
      "Premium sand crepe fabric",
      "Hand-stitched mosaic crest",
      "Three-piece set",
      "Bespoke tailoring",
    ],
  },
  {
    id: "agbada-cream-medallion",
    name: "Cream Medallion Agbada",
    category: "Agbada",
    image: agbadaCreamMedallion,
    priceFrom: 150000,
    priceTo: 150000,
    description:
      "Cream agbada framed by an intricate geometric medallion in tonal gold thread — heritage craftsmanship reimagined.",
    details: [
      "Premium cream silk-blend",
      "Geometric medallion embroidery",
      "Three-piece set",
      "Bespoke fit",
    ],
  },
  {
    id: "agbada-noir-visage",
    name: "Noir Visage Agbada",
    category: "Agbada",
    image: agbadaNoirVisage,
    priceFrom: 150000,
    priceTo: 150000,
    description:
      "Bold black agbada featuring a dramatic embroidered visage crest in olive, ivory and charcoal — a true wearable artwork.",
    details: [
      "Premium black crepe fabric",
      "Hand-embroidered visage crest panel",
      "Three-piece set (robe, top, trousers)",
      "Bespoke made-to-measure tailoring",
    ],
  },

  // ============ KAFTAN — From ₦80,000 ============
  {
    id: "kaftan-forest-zigzag",
    name: "Forest Zigzag Kaftan",
    category: "Kaftan",
    image: kaftanForestZigzag,
    priceFrom: 80000,
    priceTo: 80000,
    description:
      "Deep forest-green kaftan with intricate gold zigzag embroidery running down the placket — refined and statement-making.",
    details: [
      "Premium forest-green fabric",
      "Hand-embroidered gold zigzag placket",
      "Slim modern silhouette",
      "Two-piece (top + trouser)",
    ],
  },
  {
    id: "kaftan-espresso-braid",
    name: "Espresso Braid Kaftan",
    category: "Kaftan",
    image: kaftanEspressoBraid,
    priceFrom: 80000,
    priceTo: 80000,
    description:
      "Rich espresso kaftan with an intricate braided gold placket — heritage detail in a sleek modern cut.",
    details: [
      "Premium espresso fabric",
      "Hand-stitched braided placket",
      "Tailored slim fit",
      "Two-piece set",
    ],
  },
  {
    id: "kaftan-teal-medallion",
    name: "Teal Medallion Agbada Robe",
    category: "Agbada",
    image: kaftanTealMedallion,
    priceFrom: 150000,
    priceTo: 150000,
    description:
      "Flowing teal Agbada robe with intricate ivory medallion embroidery across the chest and a signature crest at the waist.",
    details: [
      "Premium teal crepe fabric",
      "Hand-embroidered ivory medallions",
      "Flowing wide-sleeve silhouette",
      "Made-to-measure tailoring",
    ],
  },
  {
    id: "kaftan-noir-star",
    name: "Noir Star Kaftan",
    category: "Kaftan",
    image: kaftanNoirStar,
    priceFrom: 80000,
    priceTo: 80000,
    description:
      "Sleek all-black kaftan with a tonal star-medallion embroidered chest pocket — minimalist quiet luxury at its finest.",
    details: [
      "Premium black suiting fabric",
      "Tonal star-medallion pocket embroidery",
      "Tailored slim modern fit",
      "Two-piece (top + trouser)",
    ],
  },

  // ============ CASUAL WEAR — From ₦80,000 ============
  {
    id: "casual-espresso-monogram",
    name: "Espresso Monogram Senator",
    category: "Casual Wear",
    image: casualEspressoMonogram,
    priceFrom: 80000,
    priceTo: 80000,
    description:
      "Espresso-brown short-sleeve senator set with tonal monogram embroidery down the placket — refined ease for daytime occasions.",
    details: [
      "Premium suiting fabric",
      "Tonal monogram embroidery",
      "Two-piece (shirt + trouser)",
      "Tailored relaxed fit",
    ],
  },
  {
    id: "senator-navy-blue-duo",
    name: "Navy & Cobalt Senator Duo",
    category: "Casual Wear",
    image: senatorNavyDuo,
    priceFrom: 80000,
    priceTo: 80000,
    description:
      "Tailored senator set in deep navy with tonal placket embroidery and a structured chest pocket — refined everyday regality.",
    details: [
      "Premium suiting fabric",
      "Tonal embroidered placket",
      "Structured chest pocket",
      "Two-piece (top + trouser)",
    ],
  },
  {
    id: "senator-rose-pocket",
    name: "Rose Quartz Senator",
    category: "Casual Wear",
    image: senatorRosePocket,
    priceFrom: 80000,
    priceTo: 80000,
    description:
      "Soft rose quartz short-sleeve senator with linear tonal pocket detail — modern ease in a refined palette.",
    details: [
      "Breathable premium fabric",
      "Linear tonal pocket embroidery",
      "Tailored relaxed fit",
      "Two-piece set",
    ],
  },
];

export const categories: ("All" | Category)[] = ["All", "Agbada", "Kaftan", "Casual Wear"];

export const formatNaira = (n: number) =>
  new Intl.NumberFormat("en-NG", {
    style: "currency",
    currency: "NGN",
    maximumFractionDigits: 0,
  }).format(n);

export const getProduct = (id: string) => products.find((p) => p.id === id);
