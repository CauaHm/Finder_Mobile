import styles from './styles.module.css';
import type { Product } from '../../Models/Product.tsx'; 
import { FaHeart } from 'react-icons/fa6';
import { generateStars } from '../../utils/starRating.tsx'; 

type ProductCardProps = {
  product: Product;
  isFavorite: boolean;
  onToggleFavorite: (asin: string) => void;
};

export function ProductCard({ product, isFavorite, onToggleFavorite }: ProductCardProps) {
  const rating = product.product_star_rating ? parseFloat(product.product_star_rating) : 0;

  return (
    <div className={styles.product}>
      <div 
        className={`${styles.productHeart} ${isFavorite ? styles.productHeartClick : ''}`}
        onClick={() => onToggleFavorite(product.asin)}
      >
        <FaHeart />
      </div>
      <div className={styles.productInfosImg}>
        <img src={product.product_photo} alt={product.product_title} />
        <h2>{product.product_title}</h2>
        {product.product_original_price && (
          <p className={styles.pPromotion}>{product.product_original_price}</p>
        )}
      </div>
      <div className={styles.productInfos}>
        <p className={styles.price}><strong>{product.product_price}</strong></p>
        <p>{generateStars(rating)} ({rating.toFixed(1)})</p>
        <a href={product.product_url} target="_blank" rel="noopener noreferrer">
          Ver na Amazon
        </a>
      </div>
    </div>
  );
}