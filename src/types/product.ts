export interface ProductPresentation {
  volume: number;
  unit: string;
  label: string;
}

export interface Product {
  id: string;
  slug: string;
  name: string;
  category: string;
  shortDescription: string;
  presentations: ProductPresentation[];
  benefits: string[];
  instructions: string[];
  precautions: string[];
  active: boolean;
  images: string[];
}
