import { useState } from 'react';
import { Link, useNavigate } from 'react-router';
import { motion } from 'framer-motion';
import { Eye, EyeOff } from 'lucide-react';
import { cn } from '../utils/cn';
import { useRegisterMutation } from '../auth/useAuth';
import Button from '../components/common/Button';
import Input from '../components/common/Input';
import { toast } from 'react-toastify';

export default function Register() {
  const navigate = useNavigate();
  const [showPassword, setShowPassword] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
    confirmPassword: '',
  });
  const [errors, setErrors] = useState({});

  const registerMutation = useRegisterMutation({
    onSuccess: () => {
      toast.success('Account created successfully!');
      navigate('/');
    },
    onError: (error) => {
      toast.error(error.response?.data?.message || 'Registration failed');
    },
  });

  const validate = () => {
    const newErrors = {};
    if (!formData.name.trim()) newErrors.name = 'Name is required';
    if (!formData.email.trim()) newErrors.email = 'Email is required';
    if (!formData.password) newErrors.password = 'Password is required';
    if (formData.password.length < 8) {
      newErrors.password = 'Password must be at least 8 characters';
    }
    if (formData.password !== formData.confirmPassword) {
      newErrors.confirmPassword = 'Passwords do not match';
    }
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!validate()) return;

    try {
      await registerMutation.mutateAsync({
        name: formData.name,
        email: formData.email,
        password: formData.password,
      });
    } catch {
      // Error handled by mutation
    }
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
            Create an account
          </h1>
          <p className="mt-2 text-text-tertiary dark:text-dark-text-tertiary">
            Join us and start exploring
          </p>
        </div>

        {/* Form */}
        <form onSubmit={handleSubmit} className="space-y-4">
          <Input
            label="Full Name"
            value={formData.name}
            onChange={(e) =>
              setFormData({ ...formData, name: e.target.value })
            }
            error={errors.name}
            placeholder="John Doe"
          />

          <Input
            label="Email"
            type="email"
            value={formData.email}
            onChange={(e) =>
              setFormData({ ...formData, email: e.target.value })
            }
            error={errors.email}
            placeholder="you@example.com"
          />

          <Input
            label="Password"
            type={showPassword ? 'text' : 'password'}
            value={formData.password}
            onChange={(e) =>
              setFormData({ ...formData, password: e.target.value })
            }
            error={errors.password}
            placeholder="••••••••"
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

          <Input
            label="Confirm Password"
            type={showPassword ? 'text' : 'password'}
            value={formData.confirmPassword}
            onChange={(e) =>
              setFormData({ ...formData, confirmPassword: e.target.value })
            }
            error={errors.confirmPassword}
            placeholder="••••••••"
          />

          <div className="pt-2">
            <label className="flex items-start gap-2">
              <input
                type="checkbox"
                required
                className="mt-1 rounded border-border-DEFAULT dark:border-dark-border-DEFAULT"
              />
              <span className="text-sm text-text-tertiary dark:text-dark-text-tertiary">
                I agree to the{' '}
                <Link to="/terms" className="text-text-primary dark:text-dark-text-primary hover:underline">
                  Terms of Service
                </Link>{' '}
                and{' '}
                <Link to="/privacy" className="text-text-primary dark:text-dark-text-primary hover:underline">
                  Privacy Policy
                </Link>
              </span>
            </label>
          </div>

          <Button
            type="submit"
            className="w-full"
            size="lg"
            isLoading={registerMutation.isPending}
          >
            Create account
          </Button>
        </form>

        {/* Footer */}
        <p className="mt-8 text-center text-sm text-text-tertiary dark:text-dark-text-tertiary">
          Already have an account?{' '}
          <Link
            to="/login"
            className="font-medium text-text-primary dark:text-dark-text-primary hover:underline"
          >
            Sign in
          </Link>
        </p>
      </motion.div>
    </div>
  );
}