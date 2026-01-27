import { useState, useEffect } from 'react';
import { useSearchParams } from 'react-router';
import { motion } from 'framer-motion';
import { cn } from '../utils/cn';
import { useProductsQuery } from '../api/queries/products';
import ProductGrid from '../components/products/ProductGrid';
import ProductFilters from '../components/products/ProductFilters';
import CategoryNav from '../components/categories/CategoryNav';

export default function Products() {
  const [searchParams, setSearchParams] = useSearchParams();

  const [filters, setFilters] = useState({
    category: searchParams.get('category') || '',
    priceRange: searchParams.get('price') || '',
    sort: searchParams.get('sort') || 'newest',
    page: parseInt(searchParams.get('page') || '1'),
  });

  const { data: products, isLoading } = useProductsQuery({
    category: filters.category,
    sort: filters.sort,
    page: filters.page,
    limit: 12,
  });

  const handleFilterChange = (key, value) => {
    setFilters((prev) => ({ ...prev, [key]: value, page: 1 }));
  };

  const handleClearFilters = () => {
    setFilters({
      category: '',
      priceRange: '',
      sort: 'newest',
      page: 1,
    });
  };

  useEffect(() => {
    const params = new URLSearchParams();
    if (filters.category) params.set('category', filters.category);
    if (filters.priceRange) params.set('price', filters.priceRange);
    if (filters.sort !== 'newest') params.set('sort', filters.sort);
    if (filters.page > 1) params.set('page', filters.page.toString());
    setSearchParams(params);
  }, [filters, setSearchParams]);

  return (
    <div className="min-h-screen">
      {/* Header */}
      <div className="border-b border-border-light dark:border-dark-border-light">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 lg:py-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4 }}
          >
            <h1 className="text-3xl lg:text-4xl font-bold text-text-primary dark:text-dark-text-primary">
              All Products
            </h1>
            <p className="mt-2 text-text-tertiary dark:text-dark-text-tertiary">
              Discover our complete collection of handcrafted items
            </p>
          </motion.div>
        </div>
      </div>

      {/* Category Nav */}
      <div className="border-b border-border-light dark:border-dark-border-light">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <CategoryNav />
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Filters */}
        <ProductFilters
          filters={filters}
          onFilterChange={handleFilterChange}
          onClear={handleClearFilters}
          className="mb-8"
        />

        {/* Products Grid */}
        <ProductGrid products={products} isLoading={isLoading} columns={4} />

        {/* Load More */}
        {products?.length >= 12 && (
          <div className="mt-12 text-center">
            <button
              onClick={() =>
                setFilters((prev) => ({ ...prev, page: prev.page + 1 }))
              }
              className={cn(
                'px-8 py-3 text-sm font-medium rounded-full',
                'border border-border-DEFAULT dark:border-dark-border-DEFAULT',
                'text-text-primary dark:text-dark-text-primary',
                'hover:bg-zinc-50 dark:hover:bg-zinc-800',
                'transition-colors duration-200'
              )}
            >
              Load More
            </button>
          </div>
        )}
      </div>
    </div>
  );
}