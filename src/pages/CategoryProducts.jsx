import { useParams, Link } from 'react-router';
import { motion } from 'framer-motion';
import { ChevronRight } from 'lucide-react';
import { cn } from '../utils/cn';
import { useCategoryQuery } from '../api/queries/categories';
import { useProductsQuery } from '../api/queries/products';
import ProductGrid from '../components/products/ProductGrid';
import Skeleton from '../components/common/Skeleton';

export default function CategoryProducts() {
  const { slug } = useParams();
  const { data: category, isLoading: categoryLoading } = useCategoryQuery(slug);
  const { data: products, isLoading: productsLoading } = useProductsQuery({
    category: slug,
  });

  if (categoryLoading) {
    return (
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <Skeleton className="h-12 w-1/3 mb-4" />
        <Skeleton className="h-6 w-1/2 mb-8" />
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-6">
          {Array.from({ length: 8 }).map((_, i) => (
            <Skeleton key={i} className="aspect-square" />
          ))}
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen">
      {/* Header */}
      <div className="border-b border-border-light dark:border-dark-border-light">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <nav className="flex items-center gap-2 text-sm mb-6">
            <Link
              to="/"
              className="text-text-tertiary dark:text-dark-text-tertiary hover:text-text-primary dark:hover:text-dark-text-primary transition-colors"
            >
              Home
            </Link>
            <ChevronRight className="w-4 h-4 text-text-muted dark:text-dark-text-muted" />
            <Link
              to="/categories"
              className="text-text-tertiary dark:text-dark-text-tertiary hover:text-text-primary dark:hover:text-dark-text-primary transition-colors"
            >
              Categories
            </Link>
            <ChevronRight className="w-4 h-4 text-text-muted dark:text-dark-text-muted" />
            <span className="text-text-primary dark:text-dark-text-primary font-medium">
              {category?.name}
            </span>
          </nav>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4 }}
          >
            <h1 className="text-3xl lg:text-4xl font-bold text-text-primary dark:text-dark-text-primary">
              {category?.name}
            </h1>
            {category?.description && (
              <p className="mt-2 text-text-tertiary dark:text-dark-text-tertiary">
                {category.description}
              </p>
            )}
          </motion.div>
        </div>
      </div>

      {/* Products */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 lg:py-12">
        <ProductGrid products={products} isLoading={productsLoading} columns={4} />
      </div>
    </div>
  );
}