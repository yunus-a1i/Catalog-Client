import { useParams, Link } from 'react-router';
import { motion } from 'framer-motion';
import { ChevronRight } from 'lucide-react';
import { cn } from '../utils/cn';
import { useProductQuery, useProductsQuery } from '../api/queries/products';
import ProductDetail from '../components/products/ProductDetail';
import ProductGrid from '../components/products/ProductGrid';
import Skeleton from '../components/common/Skeleton';

export default function ProductDetailPage() {
  const { slug } = useParams();
  const { data: product, isLoading } = useProductQuery(slug);
  const { data: relatedProducts } = useProductsQuery({
    category: product?.categoryId,
    limit: 4,
    exclude: product?.id,
  });

  if (isLoading) {
    return (
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="grid lg:grid-cols-2 gap-12">
          <Skeleton className="aspect-square" />
          <div className="space-y-4">
            <Skeleton className="h-8 w-1/3" />
            <Skeleton className="h-12 w-2/3" />
            <Skeleton className="h-6 w-1/4" />
            <Skeleton className="h-24" />
          </div>
        </div>
      </div>
    );
  }

  if (!product) {
    return (
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 text-center">
        <h1 className="text-2xl font-semibold text-text-primary dark:text-dark-text-primary">
          Product not found
        </h1>
        <Link
          to="/products"
          className="mt-4 inline-block text-text-secondary dark:text-dark-text-secondary hover:underline"
        >
          Back to products
        </Link>
      </div>
    );
  }

  return (
    <div>
      {/* Breadcrumbs */}
      <div className="border-b border-border-light dark:border-dark-border-light">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <nav className="flex items-center gap-2 text-sm">
            <Link
              to="/"
              className="text-text-tertiary dark:text-dark-text-tertiary hover:text-text-primary dark:hover:text-dark-text-primary transition-colors"
            >
              Home
            </Link>
            <ChevronRight className="w-4 h-4 text-text-muted dark:text-dark-text-muted" />
            <Link
              to="/products"
              className="text-text-tertiary dark:text-dark-text-tertiary hover:text-text-primary dark:hover:text-dark-text-primary transition-colors"
            >
              Products
            </Link>
            <ChevronRight className="w-4 h-4 text-text-muted dark:text-dark-text-muted" />
            <span className="text-text-primary dark:text-dark-text-primary font-medium truncate max-w-xs">
              {product.name}
            </span>
          </nav>
        </div>
      </div>

      {/* Product Detail */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.4 }}
        className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 lg:py-12"
      >
        <ProductDetail product={product} />
      </motion.div>

      {/* Related Products */}
      {relatedProducts?.length > 0 && (
        <section className="border-t border-border-light dark:border-dark-border-light">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
            <h2 className="text-xl font-semibold text-text-primary dark:text-dark-text-primary mb-8">
              You might also like
            </h2>
            <ProductGrid
              products={relatedProducts.filter((p) => p.id !== product.id)}
              columns={4}
            />
          </div>
        </section>
      )}
    </div>
  );
}