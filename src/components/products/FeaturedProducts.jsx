import { Link } from 'react-router';
import { ArrowRight } from 'lucide-react';
import { cn } from '../../utils/cn';
import { useProductsQuery } from '../../api/queries/products';
import ProductGrid from './ProductGrid';
import Button from '../common/Button';

export default function FeaturedProducts({ title = 'Featured Products', limit = 8 }) {
  const { data: products, isLoading } = useProductsQuery({ limit, featured: true });

  return (
    <section className="py-16 lg:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="flex items-end justify-between mb-8 lg:mb-12">
          <div>
            <h2 className="text-2xl lg:text-3xl font-semibold text-text-primary dark:text-dark-text-primary">
              {title}
            </h2>
            <p className="mt-2 text-text-tertiary dark:text-dark-text-tertiary">
              Handpicked selections from our collection
            </p>
          </div>
          <Link to="/products">
            <Button
              variant="ghost"
              rightIcon={<ArrowRight className="w-4 h-4" />}
            >
              View all
            </Button>
          </Link>
        </div>

        {/* Grid */}
        <ProductGrid products={products} isLoading={isLoading} columns={4} />
      </div>
    </section>
  );
}