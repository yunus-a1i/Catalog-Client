import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Filter, X, ChevronDown } from 'lucide-react';
import { cn } from '../../utils/cn';
import Button from '../common/Button';
import Dropdown from '../common/Dropdown';
import { PRODUCT_SORT_OPTIONS } from '../../utils/constants';
import { useCategoriesQuery } from '../../api/queries/categories';

export default function ProductFilters({
  filters,
  onFilterChange,
  onClear,
  className,
}) {
  const [isOpen, setIsOpen] = useState(false);
  const { data: categories } = useCategoriesQuery();

  const categoryOptions = [
    { value: '', label: 'All Categories' },
    ...(categories?.map((cat) => ({
      value: cat.id || cat.slug,
      label: cat.name,
    })) || []),
  ];

  const priceRanges = [
    { value: '', label: 'Any Price' },
    { value: '0-25', label: 'Under $25' },
    { value: '25-50', label: '$25 - $50' },
    { value: '50-100', label: '$50 - $100' },
    { value: '100-', label: '$100+' },
  ];

  const hasActiveFilters = filters.category || filters.priceRange;

  return (
    <div className={cn('space-y-4', className)}>
      {/* Mobile Toggle */}
      <div className="flex items-center justify-between lg:hidden">
        <Button
          variant="outline"
          size="sm"
          leftIcon={<Filter className="w-4 h-4" />}
          onClick={() => setIsOpen(!isOpen)}
        >
          Filters
          {hasActiveFilters && (
            <span className="ml-1.5 w-5 h-5 rounded-full bg-zinc-900 text-white text-xs flex items-center justify-center">
              !
            </span>
          )}
        </Button>
        <Dropdown
          options={PRODUCT_SORT_OPTIONS}
          value={filters.sort}
          onChange={(value) => onFilterChange('sort', value)}
          className="w-40"
        />
      </div>

      {/* Desktop Filters */}
      <div className="hidden lg:flex items-center gap-4">
        <Dropdown
          options={categoryOptions}
          value={filters.category}
          onChange={(value) => onFilterChange('category', value)}
          placeholder="Category"
          className="w-48"
        />
        <Dropdown
          options={priceRanges}
          value={filters.priceRange}
          onChange={(value) => onFilterChange('priceRange', value)}
          placeholder="Price"
          className="w-40"
        />
        <Dropdown
          options={PRODUCT_SORT_OPTIONS}
          value={filters.sort}
          onChange={(value) => onFilterChange('sort', value)}
          placeholder="Sort by"
          className="w-44"
        />
        {hasActiveFilters && (
          <Button variant="ghost" size="sm" onClick={onClear}>
            Clear all
          </Button>
        )}
      </div>

      {/* Mobile Filters Panel */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="lg:hidden overflow-hidden"
          >
            <div
              className={cn(
                'p-4 rounded-xl space-y-4',
                'bg-surface-tertiary dark:bg-dark-surface-tertiary',
                'border border-border-light dark:border-dark-border-light'
              )}
            >
              <div className="space-y-2">
                <label className="text-xs font-medium text-text-tertiary dark:text-dark-text-tertiary uppercase tracking-wider">
                  Category
                </label>
                <Dropdown
                  options={categoryOptions}
                  value={filters.category}
                  onChange={(value) => onFilterChange('category', value)}
                  className="w-full"
                />
              </div>
              <div className="space-y-2">
                <label className="text-xs font-medium text-text-tertiary dark:text-dark-text-tertiary uppercase tracking-wider">
                  Price
                </label>
                <Dropdown
                  options={priceRanges}
                  value={filters.priceRange}
                  onChange={(value) => onFilterChange('priceRange', value)}
                  className="w-full"
                />
              </div>
              {hasActiveFilters && (
                <Button
                  variant="outline"
                  size="sm"
                  className="w-full"
                  onClick={() => {
                    onClear();
                    setIsOpen(false);
                  }}
                >
                  Clear Filters
                </Button>
              )}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}