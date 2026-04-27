import agbadaBronze from "@/assets/products/agbada-bronze.jpg";
import agbadaCrimson from "@/assets/products/agbada-crimson.jpg";
import agbadaPearl from "@/assets/products/agbada-pearl.jpg";
import agbadaOnyx from "@/assets/products/agbada-onyx.jpg";
import agbadaChampagne from "@/assets/products/agbada-champagne.jpg";
import agbadaRoyalBlue from "@/assets/products/agbada-royal-blue.jpg";
import agbadaBurgundy from "@/assets/products/agbada-burgundy.jpg";
import agbadaForest from "@/assets/products/agbada-forest.jpg";
import kaftanCocoa from "@/assets/products/kaftan-cocoa.jpg";
import kaftanEmerald from "@/assets/products/kaftan-emerald.jpg";
import kaftanNavy from "@/assets/products/kaftan-navy.jpg";
import kaftanSand from "@/assets/products/kaftan-sand.jpg";
import kaftanOxblood from "@/assets/products/kaftan-oxblood.jpg";
import casualIvory from "@/assets/products/casual-ivory.jpg";
import casualStone from "@/assets/products/casual-stone.jpg";

import agbadaMidnight from "@/assets/products/agbada-midnight.jpg";
import agbadaWhite from "@/assets/products/agbada-white.jpg";
import kaftanCharcoal from "@/assets/products/kaftan-charcoal.jpg";
import kaftanTealMedallion from "@/assets/products/kaftan-teal-medallion.jpg";
import senatorNavyDuo from "@/assets/products/senator-navy-blue-duo.jpg";
import agbadaSandMosaic from "@/assets/products/agbada-sand-mosaic.jpg";
import agbadaCreamMedallion from "@/assets/products/agbada-cream-medallion.jpg";
import senatorRosePocket from "@/assets/products/senator-rose-pocket.jpg";

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
  {
    id: "agbada-bronze-regalia",
    name: "Bronze Regalia Agbada",
    category: "Agbada",
    image: agbadaBronze,
    priceFrom: 320000,
    priceTo: 450000,
    description:
      "A statement three-piece agbada in rich bronze damask, hand-embroidered with our signature gold motifs across the chest panel.",
    details: [
      "Premium imported damask fabric",
      "Hand embroidery — 40+ hours of craftsmanship",
      "Includes flowing robe, inner kaftan & matching trousers",
      "Bespoke fit — tailored to your measurements",
    ],
  },
  {
    id: "agbada-crimson-royale",
    name: "Crimson Royale Agbada",
    category: "Agbada",
    image: agbadaCrimson,
    priceFrom: 380000,
    priceTo: 520000,
    description:
      "Regal crimson agbada with intricate tonal embroidery and crystal-stoned panels — fit for kings and milestone celebrations.",
    details: [
      "Premium velvet & silk blend",
      "Crystal-stone embellished detailing",
      "Matching fila (cap) included",
      "Made-to-order in 3–4 weeks",
    ],
  },
  {
    id: "agbada-pearl-aristocrat",
    name: "Pearl Aristocrat Agbada",
    category: "Agbada",
    image: agbadaPearl,
    priceFrom: 420000,
    priceTo: 580000,
    description:
      "Pristine ivory agbada studded with golden floral appliqués — our most requested wedding piece.",
    details: [
      "Hand-applied gold floral appliqués",
      "Stoned full front panel",
      "Includes matching cap",
      "Bespoke groom-ready tailoring",
    ],
  },
  {
    id: "agbada-onyx-noir",
    name: "Onyx Noir Agbada",
    category: "Agbada",
    image: agbadaOnyx,
    priceFrom: 290000,
    priceTo: 410000,
    description:
      "Tonal black-on-black agbada with raised damask weave — quiet luxury at its finest.",
    details: [
      "All-black tonal damask",
      "Subtle textured embroidery",
      "Perfect for evening events",
      "Tailored from premium imported fabric",
    ],
  },
  {
    id: "agbada-champagne-ascot",
    name: "Champagne Ascot Agbada",
    category: "Agbada",
    image: agbadaChampagne,
    priceFrom: 340000,
    priceTo: 470000,
    description:
      "Soft champagne flowing agbada with a multi-tonal hand-embroidered crest — refined and unforgettable.",
    details: [
      "Champagne silk-touch fabric",
      "Multi-color hand embroidery",
      "Soft drape, structured shoulders",
      "Custom turban styling available",
    ],
  },
  {
    id: "agbada-royal-blue-empire",
    name: "Royal Blue Empire Agbada",
    category: "Agbada",
    image: agbadaRoyalBlue,
    priceFrom: 360000,
    priceTo: 490000,
    description:
      "Royal blue agbada with a striking baroque-gold front panel — commanding presence guaranteed.",
    details: [
      "Royal blue silk-blend fabric",
      "Baroque gold thread embroidery",
      "Three-piece set",
      "Bespoke measurements",
    ],
  },
  {
    id: "kaftan-cocoa-heritage",
    name: "Cocoa Heritage Kaftan",
    category: "Kaftan",
    image: kaftanCocoa,
    priceFrom: 145000,
    priceTo: 210000,
    description:
      "Modern slim-fit kaftan in deep cocoa with golden equestrian embroidery on the chest pocket.",
    details: [
      "Premium cashmere-blend fabric",
      "Gold thread chest emblem",
      "Two-piece (top + trouser)",
      "Slim contemporary cut",
    ],
  },
  {
    id: "kaftan-emerald-monogram",
    name: "Emerald Monogram Kaftan",
    category: "Kaftan",
    image: kaftanEmerald,
    priceFrom: 175000,
    priceTo: 240000,
    description:
      "Lustrous emerald kaftan with all-over signature monogram weave — modern luxury reimagined.",
    details: [
      "Silk-touch monogram jacquard",
      "Statement gold placket",
      "Relaxed regal silhouette",
      "Made-to-measure",
    ],
  },
  {
    id: "kaftan-navy-diplomat",
    name: "Navy Diplomat Kaftan",
    category: "Kaftan",
    image: kaftanNavy,
    priceFrom: 135000,
    priceTo: 195000,
    description:
      "Sharp navy kaftan with gold mandarin collar accent — refined for boardrooms and ceremonies alike.",
    details: [
      "Italian wool-blend",
      "Gold-trim mandarin collar",
      "Tailored slim fit",
      "Two-piece set",
    ],
  },
  {
    id: "casual-ivory-resort",
    name: "Ivory Resort Senator",
    category: "Casual Wear",
    image: casualIvory,
    priceFrom: 95000,
    priceTo: 140000,
    description:
      "Crisp ivory short-sleeve senator set — effortless luxury for daytime occasions and travel.",
    details: [
      "Breathable linen-cotton blend",
      "Subtle gold detail at chest",
      "Two-piece (shirt + trouser)",
      "Tailored relaxed fit",
    ],
  },
  {
    id: "agbada-burgundy-sovereign",
    name: "Burgundy Sovereign Agbada",
    category: "Agbada",
    image: agbadaBurgundy,
    priceFrom: 350000,
    priceTo: 480000,
    description:
      "Deep wine-toned agbada with cascading gold filigree across the chest panel — a sovereign statement piece.",
    details: [
      "Premium wine-toned damask",
      "Hand-stitched gold filigree",
      "Includes robe, kaftan & trousers",
      "Made-to-measure tailoring",
    ],
  },
  {
    id: "agbada-forest-heritage",
    name: "Forest Heritage Agbada",
    category: "Agbada",
    image: agbadaForest,
    priceFrom: 330000,
    priceTo: 460000,
    description:
      "Forest green agbada with antique-silver and gold thread embroidery — earthy regality, refined.",
    details: [
      "Forest green silk-blend damask",
      "Antique silver & gold embroidery",
      "Three-piece set",
      "Bespoke fit",
    ],
  },
  {
    id: "kaftan-sand-meridian",
    name: "Sand Meridian Kaftan",
    category: "Kaftan",
    image: kaftanSand,
    priceFrom: 125000,
    priceTo: 180000,
    description:
      "Warm sand-toned kaftan with tonal placket embroidery — a quiet, elevated everyday luxury.",
    details: [
      "Soft cashmere-touch fabric",
      "Tonal embroidered placket",
      "Slim modern silhouette",
      "Two-piece set",
    ],
  },
  {
    id: "kaftan-oxblood-prince",
    name: "Oxblood Prince Kaftan",
    category: "Kaftan",
    image: kaftanOxblood,
    priceFrom: 195000,
    priceTo: 270000,
    description:
      "Oxblood layered kaftan with gold mandarin collar and structured overlay — modern princely tailoring.",
    details: [
      "Oxblood jacquard fabric",
      "Gold-trim mandarin collar",
      "Layered overlay design",
      "Custom tailoring",
    ],
  },
  {
    id: "casual-stone-modernist",
    name: "Stone Modernist Senator",
    category: "Casual Wear",
    image: casualStone,
    priceFrom: 110000,
    priceTo: 160000,
    description:
      "Light stone gray short-sleeve senator suit — refined ease for daytime ceremonies.",
    details: ["Premium linen-wool blend", "Crisp tailored cut", "Two-piece set", "Made-to-measure"],
  },
  {
    id: "agbada-midnight-dynasty",
    name: "Midnight Dynasty Agbada",
    category: "Agbada",
    image: agbadaMidnight,
    priceFrom: 310000,
    priceTo: 440000,
    description:
      "Midnight blue agbada with intricate silver crystal embroidery and matching fila — twilight regality.",
    details: [
      "Midnight silk-blend damask",
      "Silver crystal embroidery",
      "Matching fila included",
      "Three-piece bespoke set",
    ],
  },
  {
    id: "agbada-white-celestial",
    name: "Celestial White Agbada",
    category: "Agbada",
    image: agbadaWhite,
    priceFrom: 460000,
    priceTo: 620000,
    description:
      "All-white groom agbada with cascading gold scrollwork and beaded chains — for the day that matters most.",
    details: [
      "Pure white silk damask",
      "Hand-stitched gold scrollwork",
      "Beaded chain accents",
      "Wedding-ready bespoke",
    ],
  },
  {
    id: "kaftan-charcoal-minimalist",
    name: "Charcoal Minimalist Kaftan",
    category: "Kaftan",
    image: kaftanCharcoal,
    priceFrom: 115000,
    priceTo: 165000,
    description: "Quiet luxury at its purest — a charcoal slim kaftan stripped to its essentials.",
    details: [
      "Premium silk-touch fabric",
      "Minimalist tonal placket",
      "Slim modern fit",
      "Two-piece set",
    ],
  },
  {
    id: "kaftan-teal-medallion",
    name: "Teal Medallion Kaftan Robe",
    category: "Kaftan",
    image: kaftanTealMedallion,
    priceFrom: 165000,
    priceTo: 230000,
    description:
      "Flowing teal kaftan robe with intricate ivory medallion embroidery across the chest and a signature crest at the waist.",
    details: [
      "Premium teal crepe fabric",
      "Hand-embroidered ivory medallions",
      "Flowing wide-sleeve silhouette",
      "Made-to-measure tailoring",
    ],
  },
  {
    id: "senator-navy-blue-duo",
    name: "Navy & Cobalt Senator Duo",
    category: "Casual Wear",
    image: senatorNavyDuo,
    priceFrom: 130000,
    priceTo: 185000,
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
    id: "agbada-sand-mosaic",
    name: "Sand Mosaic Agbada",
    category: "Agbada",
    image: agbadaSandMosaic,
    priceFrom: 340000,
    priceTo: 470000,
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
    priceFrom: 360000,
    priceTo: 490000,
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
    id: "senator-rose-pocket",
    name: "Rose Quartz Senator",
    category: "Casual Wear",
    image: senatorRosePocket,
    priceFrom: 115000,
    priceTo: 165000,
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
