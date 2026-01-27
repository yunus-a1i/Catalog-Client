import { motion } from 'framer-motion';
import { useCategoriesQuery } from '../api/queries/categories';
import CategoryList from '../components/categories/CategoryList';

export default function Categories() {
  const { data: categories, isLoading } = useCategoriesQuery();

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
              Categories
            </h1>
            <p className="mt-2 text-text-tertiary dark:text-dark-text-tertiary">
              Browse our collections by category
            </p>
          </motion.div>
        </div>
      </div>

      {/* Categories Grid */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 lg:py-12">
        <CategoryList categories={categories} isLoading={isLoading} />
      </div>
    </div>
  );
}