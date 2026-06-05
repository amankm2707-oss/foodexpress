export interface MenuItem {
  id: number;
  name: string;
  category: string;
  diet: 'veg' | 'non-veg';
  price: number;
  rating: number;
  reviews: number;
  time: number;
  image: string;
  desc: string;
}

export interface CartItem extends MenuItem {
  quantity: number;
}
