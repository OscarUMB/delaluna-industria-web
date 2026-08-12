import type { Product } from "@/types/product";

const pendingTechnicalValidation = "[PENDIENTE DE VALIDACIÓN TÉCNICA]";

export const productCatalog: Product[] = [
  {
    id: "producto-plantilla",
    slug: "producto-plantilla",
    name: pendingTechnicalValidation,
    category: pendingTechnicalValidation,
    shortDescription: pendingTechnicalValidation,
    presentations: [
      {
        volume: 0,
        unit: pendingTechnicalValidation,
        label: pendingTechnicalValidation,
      },
    ],
    benefits: [pendingTechnicalValidation],
    instructions: [pendingTechnicalValidation],
    precautions: [pendingTechnicalValidation],
    active: false,
    images: [],
  },
];
