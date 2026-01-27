import { useState } from 'react';
import { Link, useNavigate } from 'react-router';
import { motion } from 'framer-motion';
import { Eye, EyeOff } from 'lucide-react';
import { cn } from '../utils/cn';
import { useLoginMutation } from '../auth/useAuth';
import Button from '../components/common/Button';
import Input from '../components/common/Input';
import { toast } from 'react-toastify';

export default function Login() {
  const navigate = useNavigate();
  const [showPassword, setShowPassword] = useState(false);
  const [formData, setFormData] = useState({
    email: '',
    password: '',
  });

  const loginMutation = useLoginMutation({
    onError: (error) => {
      toast.error(error.response?.data?.message || 'Login failed');
    },
  });

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await loginMutation.mutateAsync(formData);
      toast.success('Welcome back!');
      navigate('/');
    } catch {
      // Error handled by mutation
    }
  };

  const handleGoogleLogin = () => {
    window.location.href = `${import.meta.env.VITE_API_BASE_URL || '/api'}/auth/google`;
  };

  return (
    <div
      className={cn(
        'min-h-screen flex items-center justify-center',
        'bg-surface-secondary dark:bg-dark-surface-primary',
        'px-4 py-12'
      )}
    >
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4 }}
        className={cn(
          'w-full max-w-md',
          'bg-surface-primary dark:bg-dark-surface-secondary',
          'border border-border-light dark:border-dark-border-light',
          'rounded-2xl shadow-soft',
          'p-8'
        )}
      >
        {/* Header */}
        <div className="text-center mb-8">
          <Link
            to="/"
            className="inline-flex items-center gap-2 font-semibold text-xl text-text-primary dark:text-dark-text-primary mb-6"
          >
            <span className="w-8 h-8 rounded-lg bg-zinc-900 dark:bg-zinc-100 flex items-center justify-center">
              <span className="text-white dark:text-zinc-900 text-sm font-bold">
                E
              </span>
            </span>
            Catalog
          </Link>
          <h1 className="text-2xl font-bold text-text-primary dark:text-dark-text-primary">
            Welcome back
          </h1>
          <p className="mt-2 text-text-tertiary dark:text-dark-text-tertiary">
            Sign in to your account to continue
          </p>
        </div>

        {/* Google Login */}
        <button
          type="button"
          onClick={handleGoogleLogin}
          className={cn(
            'w-full h-11 flex items-center justify-center gap-3',
            'border border-border-DEFAULT dark:border-dark-border-DEFAULT',
            'rounded-xl',
            'text-sm font-medium text-text-primary dark:text-dark-text-primary',
            'hover:bg-zinc-50 dark:hover:bg-zinc-800',
            'transition-colors duration-200'
          )}
        >
          <svg className="w-5 h-5" viewBox="0 0 24 24">
            <path
              fill="currentColor"
              d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"
            />
            <path
              fill="currentColor"
              d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
            />
            <path
              fill="currentColor"
              d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"
            />
            <path
              fill="currentColor"
              d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"
            />
          </svg>
          Continue with Google
        </button>

        {/* Divider */}
        <div className="relative my-8">
          <div className="absolute inset-0 flex items-center">
            <div className="w-full border-t border-border-light dark:border-dark-border-light" />
          </div>
          <div className="relative flex justify-center text-sm">
            <span className="px-4 bg-surface-primary dark:bg-dark-surface-secondary text-text-muted dark:text-dark-text-muted">
              or continue with email
            </span>
          </div>
        </div>

        {/* Form */}
        <form onSubmit={handleSubmit} className="space-y-4">
          <Input
            label="Email"
            type="email"
            value={formData.email}
            onChange={(e) =>
              setFormData({ ...formData, email: e.target.value })
            }
            placeholder="you@example.com"
            required
          />

          <Input
            label="Password"
            type={showPassword ? 'text' : 'password'}
            value={formData.password}
            onChange={(e) =>
              setFormData({ ...formData, password: e.target.value })
            }
            placeholder="••••••••"
            required
            rightIcon={
              <button
                type="button"
                onClick={() => setShowPassword(!showPassword)}
                className="focus:outline-none"
              >
                {showPassword ? (
                  <EyeOff className="w-4 h-4" />
                ) : (
                  <Eye className="w-4 h-4" />
                )}
              </button>
            }
          />

          <div className="flex items-center justify-between">
            <label className="flex items-center gap-2">
              <input
                type="checkbox"
                className="rounded border-border-DEFAULT dark:border-dark-border-DEFAULT"
              />
              <span className="text-sm text-text-secondary dark:text-dark-text-secondary">
                Remember me
              </span>
            </label>
            <Link
              to="/forgot-password"
              className="text-sm text-text-secondary dark:text-dark-text-secondary hover:text-text-primary dark:hover:text-dark-text-primary"
            >
              Forgot password?
            </Link>
          </div>

          <Button
            type="submit"
            className="w-full"
            size="lg"
            isLoading={loginMutation.isPending}
          >
            Sign in
          </Button>
        </form>

        {/* Footer */}
        <p className="mt-8 text-center text-sm text-text-tertiary dark:text-dark-text-tertiary">
          Don't have an account?{' '}
          <Link
            to="/register"
            className="font-medium text-text-primary dark:text-dark-text-primary hover:underline"
          >
            Sign up
          </Link>
        </p>
      </motion.div>
    </div>
  );
}