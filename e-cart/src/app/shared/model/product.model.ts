export class Product {
  name: string;
  price: number;
  description: string;
  id: string;
  image: string;
  isAvailable: boolean;
  isAdded: boolean;

  constructor(
    name: string,
    price: number,
    description: string,
    image: string,
    id?: string,
    isAvailable?: boolean,
    isAdded?: boolean) {
        this.name = name;
        this.price = price;
        this.description = description;
        this.id = id;
        this.image = image;
        this.isAvailable = isAvailable;
        this.isAdded = isAdded;
  }
}
