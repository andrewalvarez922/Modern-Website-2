
export interface Strain {
  id: string;
  name: string;
  thc: string;
  description: string;
  type: 'Sativa' | 'Indica' | 'Hybrid';
  imageUrl: string;
}

export interface Feature {
  id: string;
  title: string;
  description: string;
  icon: string;
  imageUrl: string;
}
