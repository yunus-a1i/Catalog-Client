import { useState } from 'react';
import { motion } from 'framer-motion';
import { Heart, Minus, Plus, ShoppingBag, Share2, Truck } from 'lucide-react';
import { useDispatch } from 'react-redux';
import { cn } from '../../utils/cn';
import { formatPrice } from '../../utils/formatters';
import { addItem, openCart } from '../../store/cartSlice';
import Button from '../common/Button';
import Badge from '../common/Badge';
import { toast } from 'react-toastify';

export default function ProductDetail({ product }) {
  const dispatch = useDispatch();
  const [selectedImage, setSelectedImage] = useState(0);
  const [quantity, setQuantity] = useState(1);

  const images = product.images?.length
    ? product.images
    : [product.image || '/placeholder.jpg'];

    console.log(product)

  const handleAddToCart = () => {
    dispatch(
      addItem({
        id: product.id,
        name: product.name,
        price: product.price,
        image: images[0],
        quantity,
      })
    );
    toast.success('Added to cart');
    dispatch(openCart());
  };

  return (
    <div className="grid lg:grid-cols-2 gap-8 lg:gap-12">
      {/* Images */}
      <div className="space-y-4">
        <motion.div
          key={selectedImage}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className={cn(
            'aspect-square overflow-hidden rounded-2xl',
            'bg-surface-tertiary dark:bg-dark-surface-tertiary',
            'border border-border-light dark:border-dark-border-light'
          )}
        >
          <img
            src={images[selectedImage].url}
            alt={product.name}
            className="w-full h-full object-cover"
          />
        </motion.div>

        {images.length > 1 && (
          <div className="flex gap-3 overflow-x-auto pb-2">
            {images.map((image, index) => (
              <button
                key={index}
                onClick={() => setSelectedImage(index)}
                className={cn(
                  'w-20 h-20 shrink-0 rounded-xl overflow-hidden',
                  'border-2 transition-all duration-200',
                  selectedImage === index
                    ? 'border-zinc-900 dark:border-zinc-100'
                    : 'border-transparent hover:border-border-DEFAULT dark:hover:border-dark-border-DEFAULT'
                )}
              >
                <img
                  src={image.url}
                  alt={`${product.name} ${index + 1}`}
                  className="w-full h-full object-cover"
                />
              </button>
            ))}
          </div>
        )}
      </div>

      {/* Info */}
      <div className="space-y-6">
        {/* Header */}
        <div>
          {product.category && (
            <Badge variant="default" className="mb-3">
              {product.category.name || product.category}
            </Badge>
          )}
          <h1 className="text-2xl lg:text-3xl font-semibold text-text-primary dark:text-dark-text-primary">
            {product.name}
          </h1>
          <p className="mt-2 text-2xl font-bold text-text-primary dark:text-dark-text-primary">
            {formatPrice(product.price)}
          </p>
        </div>

        {/* Description */}
        {product.description && (
          <p className="text-text-secondary dark:text-dark-text-secondary leading-relaxed">
            {product.description}
          </p>
        )}

        {/* Quantity */}
        <div className="space-y-3">
          <label className="text-sm font-medium text-text-primary dark:text-dark-text-primary">
            Quantity
          </label>
          <div className="flex items-center gap-3">
            <div
              className={cn(
                'flex items-center',
                'border border-border-DEFAULT dark:border-dark-border-DEFAULT',
                'rounded-full overflow-hidden'
              )}
            >
              <button
                onClick={() => setQuantity(Math.max(1, quantity - 1))}
                className={cn(
                  'p-3',
                  'text-text-secondary dark:text-dark-text-secondary',
                  'hover:bg-zinc-100 dark:hover:bg-zinc-800',
                  'transition-colors duration-200',
                  'disabled:opacity-50'
                )}
                disabled={quantity <= 1}
              >
                <Minus className="w-4 h-4" />
              </button>
              <span className="w-12 text-center text-sm font-medium text-text-primary dark:text-dark-text-primary">
                {quantity}
              </span>
              <button
                onClick={() => setQuantity(quantity + 1)}
                className={cn(
                  'p-3',
                  'text-text-secondary dark:text-dark-text-secondary',
                  'hover:bg-zinc-100 dark:hover:bg-zinc-800',
                  'transition-colors duration-200'
                )}
              >
                <Plus className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>

        {/* Actions */}
        <div className="flex gap-3">
          <Button
            size="lg"
            className="flex-1"
            leftIcon={<ShoppingBag className="w-5 h-5" />}
            onClick={handleAddToCart}
          >
            Add to Cart
          </Button>
          <Button size="lg" variant="outline">
            <Heart className="w-5 h-5" />
          </Button>
          <Button size="lg" variant="outline">
            <Share2 className="w-5 h-5" />
          </Button>
        </div>

        {/* Shipping Info */}
        <div
          className={cn(
            'p-4 rounded-xl',
            'bg-surface-tertiary dark:bg-dark-surface-tertiary',
            'border border-border-light dark:border-dark-border-light'
          )}
        >
          <div className="flex items-start gap-3">
            <Truck className="w-5 h-5 text-text-tertiary dark:text-dark-text-tertiary mt-0.5" />
            <div>
              <p className="text-sm font-medium text-text-primary dark:text-dark-text-primary">
                Free Shipping
              </p>
              <p className="text-xs text-text-tertiary dark:text-dark-text-tertiary mt-0.5">
                Delivery in 5-7 business days
              </p>
            </div>
          </div>
        </div>

        {/* Details */}
        {product.details && (
          <div className="space-y-4 pt-6 border-t border-border-light dark:border-dark-border-light">
            <h3 className="text-sm font-semibold text-text-primary dark:text-dark-text-primary">
              Product Details
            </h3>
            <ul className="space-y-2 text-sm text-text-secondary dark:text-dark-text-secondary">
              {product.details.map((detail, index) => (
                <li key={index} className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-zinc-400" />
                  {detail}
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>
    </div>
  );
}