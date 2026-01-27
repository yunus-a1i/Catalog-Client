import { Link } from 'react-router';
import { motion } from 'framer-motion';
import { Home, ArrowLeft } from 'lucide-react';
import { cn } from '../utils/cn';
import Button from '../components/common/Button';

export default function NotFound() {
  return (
    <div
      className={cn(
        'min-h-screen flex items-center justify-center',
        'bg-surface-primary dark:bg-dark-surface-primary',
        'px-4'
      )}
    >
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4 }}
        className="text-center"
      >
        <p className="text-8xl font-bold text-zinc-200 dark:text-zinc-800">
          404
        </p>
        <h1 className="mt-4 text-2xl font-bold text-text-primary dark:text-dark-text-primary">
          Page not found
        </h1>
        <p className="mt-2 text-text-tertiary dark:text-dark-text-tertiary max-w-md">
          Sorry, we couldn't find the page you're looking for. It might have been
          moved or deleted.
        </p>
        <div className="mt-8 flex items-center justify-center gap-4">
          <Button
            variant="outline"
            leftIcon={<ArrowLeft className="w-4 h-4" />}
            onClick={() => window.history.back()}
          >
            Go back
          </Button>
          <Link to="/">
            <Button leftIcon={<Home className="w-4 h-4" />}>
              Home
            </Button>
          </Link>
        </div>
      </motion.div>
    </div>
  );
}