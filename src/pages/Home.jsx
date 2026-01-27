import { Link } from 'react-router';
import { motion } from 'framer-motion';
import { ArrowRight, Sparkles, Truck, Shield } from 'lucide-react';
import { cn } from '../utils/cn';
import Button from '../components/common/Button';
import FeaturedProducts from '../components/products/FeaturedProducts';
import CategoryList from '../components/categories/CategoryList';
import { useCategoriesQuery } from '../api/queries/categories';

export default function Home() {
  const { data: categories, isLoading: categoriesLoading } = useCategoriesQuery();

  return (
    <div>
      {/* Hero Section */}
      <section className="relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 lg:py-32">
          <div className="max-w-3xl">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <span
                className={cn(
                  'inline-flex items-center gap-2 px-4 py-2 rounded-full',
                  'bg-zinc-100 dark:bg-zinc-800',
                  'text-sm font-medium text-text-secondary dark:text-dark-text-secondary',
                  'mb-6'
                )}
              >
                <Sparkles className="w-4 h-4" />
                Handcrafted with love
              </span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className={cn(
                'text-4xl sm:text-5xl lg:text-6xl font-bold',
                'text-text-primary dark:text-dark-text-primary',
                'leading-tight tracking-tight'
              )}
            >
              Discover unique
              <br />
              <span className="text-text-tertiary dark:text-dark-text-tertiary">
                handcrafted treasures
              </span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className={cn(
                'mt-6 text-lg',
                'text-text-secondary dark:text-dark-text-secondary',
                'max-w-xl'
              )}
            >
              Explore our curated collection of artisan products from independent
              creators around the world. Every piece tells a story.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="mt-8 flex flex-wrap gap-4"
            >
              <Link to="/products">
                <Button size="lg" rightIcon={<ArrowRight className="w-5 h-5" />}>
                  Shop Now
                </Button>
              </Link>
              <Link to="/categories">
                <Button variant="outline" size="lg">
                  Browse Categories
                </Button>
              </Link>
            </motion.div>
          </div>
        </div>

        {/* Background decoration */}
        <div
          className={cn(
            'absolute top-0 right-0 w-1/2 h-full',
            'bg-gradient-to-l from-zinc-100 dark:from-zinc-900 to-transparent',
            'pointer-events-none',
            '-z-10'
          )}
        />
      </section>

      {/* Features */}
      <section className="border-y border-border-light dark:border-dark-border-light">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                icon: Truck,
                title: 'Free Shipping',
                description: 'On orders over $100',
              },
              {
                icon: Shield,
                title: 'Secure Payment',
                description: '100% secure checkout',
              },
              {
                icon: Sparkles,
                title: 'Handcrafted',
                description: 'By independent artists',
              },
            ].map((feature, index) => (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                className="flex items-center gap-4"
              >
                <div
                  className={cn(
                    'p-3 rounded-xl',
                    'bg-zinc-100 dark:bg-zinc-800'
                  )}
                >
                  <feature.icon className="w-6 h-6 text-text-primary dark:text-dark-text-primary" />
                </div>
                <div>
                  <h3 className="font-semibold text-text-primary dark:text-dark-text-primary">
                    {feature.title}
                  </h3>
                  <p className="text-sm text-text-tertiary dark:text-dark-text-tertiary">
                    {feature.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Products */}
      <FeaturedProducts />

      {/* Categories */}
      <section className="py-16 lg:py-24 bg-surface-secondary dark:bg-dark-surface-secondary">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-end justify-between mb-8 lg:mb-12">
            <div>
              <h2 className="text-2xl lg:text-3xl font-semibold text-text-primary dark:text-dark-text-primary">
                Shop by Category
              </h2>
              <p className="mt-2 text-text-tertiary dark:text-dark-text-tertiary">
                Find exactly what you're looking for
              </p>
            </div>
            <Link to="/categories">
              <Button
                variant="ghost"
                rightIcon={<ArrowRight className="w-4 h-4" />}
              >
                View all
              </Button>
            </Link>
          </div>

          <CategoryList
            categories={categories?.slice(0, 6)}
            isLoading={categoriesLoading}
          />
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 lg:py-32">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div
            className={cn(
              'relative overflow-hidden rounded-3xl',
              'bg-zinc-900 dark:bg-zinc-100',
              'px-8 py-16 lg:px-16 lg:py-24',
              'text-center'
            )}
          >
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h2
                className={cn(
                  'text-3xl lg:text-4xl font-bold',
                  'text-white dark:text-zinc-900',
                  'max-w-2xl mx-auto'
                )}
              >
                Join our community of makers and collectors
              </h2>
              <p
                className={cn(
                  'mt-4 text-lg',
                  'text-zinc-400 dark:text-zinc-600',
                  'max-w-xl mx-auto'
                )}
              >
                Get exclusive access to new arrivals, special offers, and
                behind-the-scenes content.
              </p>
              <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-4">
                <input
                  type="email"
                  placeholder="Enter your email"
                  className={cn(
                    'w-full sm:w-80 h-12 px-5',
                    'bg-white/10 dark:bg-zinc-900/10',
                    'border border-white/20 dark:border-zinc-900/20',
                    'rounded-full',
                    'text-white dark:text-zinc-900',
                    'placeholder:text-zinc-400 dark:placeholder:text-zinc-600',
                    'focus:outline-none focus:ring-2 focus:ring-white/50 dark:focus:ring-zinc-900/50'
                  )}
                />
                <Button
                  size="lg"
                  className={cn(
                    'bg-white text-zinc-900 hover:bg-zinc-100',
                    'dark:bg-zinc-900 dark:text-white dark:hover:bg-zinc-800'
                  )}
                >
                  Subscribe
                </Button>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
}