export interface Product {
  asin: string; 
  product_photo: string;
  product_title: string;
  product_price: string;
  product_original_price?: string;
  product_star_rating: string | null;
  product_url: string;
}