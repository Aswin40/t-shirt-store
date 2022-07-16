export interface TShirt {
  id: number | string;
  name: string;
  availableColors?: string[];
  src: string;
  alt: string;
  price: number | string;
}
