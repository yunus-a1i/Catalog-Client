import { useState } from 'react';
import { Link, useNavigate } from 'react-router';
import { useDispatch, useSelector } from 'react-redux';
import { motion, AnimatePresence } from 'framer-motion';
import {
  Search,
  ShoppingBag,
  Menu,
  X,
  User,
  Sun,
  Moon,
  LogOut,
} from 'lucide-react';
import { cn } from '../../utils/cn';
import { toggleTheme } from '../../store/themeSlice';
import { openCart, selectCartCount } from '../../store/cartSlice';
import { setMobileMenuOpen, setSearchOpen } from '../../store/uiSlice';
import { useMe, logout } from '../../auth/useAuth';
import { useQueryClient } from '@tanstack/react-query';
import Button from '../common/Button';
import Avatar from '../common/Avatar';

export default function Header() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const qc = useQueryClient();
  const { theme } = useSelector((state) => state.theme);
  const { mobileMenuOpen } = useSelector((state) => state.ui);
  const cartCount = useSelector(selectCartCount);
  const { data: user } = useMe({ enabled: !!localStorage.getItem('access_token') });

  const [userMenuOpen, setUserMenuOpen] = useState(false);

  console.log(user)

  const handleLogout = () => {
    logout(qc);
    navigate('/');
    setUserMenuOpen(false);
  };

  const navLinks = [
    { label: 'Home', href: '/' },
    { label: 'Products', href: '/products' },
    { label: 'Categories', href: '/categories' },
  ];

  return (
    <header
      className={cn(
        'sticky top-0 z-40',
        'bg-surface-primary/80 dark:bg-dark-surface-primary/80',
        'backdrop-blur-xl',
        'border-b border-border-light dark:border-dark-border-light'
      )}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link
            to="/"
            className="flex items-center gap-2 font-semibold text-xl text-text-primary dark:text-dark-text-primary"
          >
            <span className="w-8 h-8 rounded-lg bg-zinc-900 dark:bg-zinc-100 flex items-center justify-center">
              <span className="text-white dark:text-zinc-900 text-sm font-bold">
                E
              </span>
            </span>
            <span className="hidden sm:block">Catalog</span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-1">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                to={link.href}
                className={cn(
                  'px-4 py-2 text-sm font-medium rounded-full',
                  'text-text-secondary dark:text-dark-text-secondary',
                  'hover:text-text-primary dark:hover:text-dark-text-primary',
                  'hover:bg-zinc-100 dark:hover:bg-zinc-800',
                  'transition-all duration-200'
                )}
              >
                {link.label}
              </Link>
            ))}
          </nav>

          {/* Actions */}
          <div className="flex items-center gap-2">
            {/* Search */}
            <button
              onClick={() => dispatch(setSearchOpen(true))}
              className={cn(
                'p-2.5 rounded-full',
                'text-text-secondary dark:text-dark-text-secondary',
                'hover:text-text-primary dark:hover:text-dark-text-primary',
                'hover:bg-zinc-100 dark:hover:bg-zinc-800',
                'transition-all duration-200'
              )}
            >
              <Search className="w-5 h-5" />
            </button>

            {/* Theme Toggle */}
            <button
              onClick={() => dispatch(toggleTheme())}
              className={cn(
                'p-2.5 rounded-full',
                'text-text-secondary dark:text-dark-text-secondary',
                'hover:text-text-primary dark:hover:text-dark-text-primary',
                'hover:bg-zinc-100 dark:hover:bg-zinc-800',
                'transition-all duration-200'
              )}
            >
              {theme === 'dark' ? (
                <Sun className="w-5 h-5" />
              ) : (
                <Moon className="w-5 h-5" />
              )}
            </button>

            {/* Cart */}
            <button
              onClick={() => dispatch(openCart())}
              className={cn(
                'relative p-2.5 rounded-full',
                'text-text-secondary dark:text-dark-text-secondary',
                'hover:text-text-primary dark:hover:text-dark-text-primary',
                'hover:bg-zinc-100 dark:hover:bg-zinc-800',
                'transition-all duration-200'
              )}
            >
              <ShoppingBag className="w-5 h-5" />
              {cartCount > 0 && (
                <span
                  className={cn(
                    'absolute -top-0.5 -right-0.5',
                    'min-w-[18px] h-[18px] px-1',
                    'bg-zinc-900 dark:bg-zinc-100',
                    'text-white dark:text-zinc-900',
                    'text-[10px] font-semibold',
                    'rounded-full',
                    'flex items-center justify-center'
                  )}
                >
                  {cartCount > 99 ? '99+' : cartCount}
                </span>
              )}
            </button>

            {/* User Menu */}
            {user?.data ? (
              <div className="relative">
                <button
                  onClick={() => setUserMenuOpen(!userMenuOpen)}
                  className="focus:outline-none"
                >
                  <Avatar
                    src={user.data?.picture}
                    name={user.data?.name}
                    size="sm"
                    className="ring-2 ring-transparent hover:ring-zinc-300 dark:hover:ring-zinc-600 transition-all duration-200"
                  />
                </button>

                <AnimatePresence>
                  {userMenuOpen && (
                    <motion.div
                      initial={{ opacity: 0, y: 10, scale: 0.95 }}
                      animate={{ opacity: 1, y: 0, scale: 1 }}
                      exit={{ opacity: 0, y: 10, scale: 0.95 }}
                      transition={{ duration: 0.15 }}
                      className={cn(
                        'absolute right-0 mt-2 w-56',
                        'bg-surface-primary dark:bg-dark-surface-secondary',
                        'border border-border-DEFAULT dark:border-dark-border-DEFAULT',
                        'rounded-xl shadow-elevated',
                        'py-1 overflow-hidden'
                      )}
                    >
                      <div className="px-4 py-3 border-b border-border-light dark:border-dark-border-light">
                        <p className="text-sm font-medium text-text-primary dark:text-dark-text-primary">
                          {user.data.name}
                        </p>
                        <p className="text-xs text-text-tertiary dark:text-dark-text-tertiary truncate">
                          {user.data.email}
                        </p>
                      </div>

                      {user.data.role === 'admin' && (
                        <Link
                          to="/admin"
                          onClick={() => setUserMenuOpen(false)}
                          className={cn(
                            'flex items-center gap-3 px-4 py-2.5 text-sm',
                            'text-text-secondary dark:text-dark-text-secondary',
                            'hover:bg-zinc-50 dark:hover:bg-zinc-800',
                            'transition-colors duration-150'
                          )}
                        >
                          <User className="w-4 h-4" />
                          Admin Dashboard
                        </Link>
                      )}

                      <button
                        onClick={handleLogout}
                        className={cn(
                          'w-full flex items-center gap-3 px-4 py-2.5 text-sm',
                          'text-red-600 dark:text-red-400',
                          'hover:bg-red-50 dark:hover:bg-red-900/20',
                          'transition-colors duration-150'
                        )}
                      >
                        <LogOut className="w-4 h-4" />
                        Log out
                      </button>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            ) : (
              <div className="hidden sm:flex items-center gap-2">
                <Button variant="ghost" size="sm" onClick={() => navigate('/login')}>
                  Log in
                </Button>
                <Button size="sm" onClick={() => navigate('/register')}>
                  Sign up
                </Button>
              </div>
            )}

            {/* Mobile Menu Toggle */}
            <button
              onClick={() => dispatch(setMobileMenuOpen(!mobileMenuOpen))}
              className={cn(
                'md:hidden p-2.5 rounded-full',
                'text-text-secondary dark:text-dark-text-secondary',
                'hover:text-text-primary dark:hover:text-dark-text-primary',
                'hover:bg-zinc-100 dark:hover:bg-zinc-800',
                'transition-all duration-200'
              )}
            >
              {mobileMenuOpen ? (
                <X className="w-5 h-5" />
              ) : (
                <Menu className="w-5 h-5" />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.2 }}
            className="md:hidden border-t border-border-light dark:border-dark-border-light overflow-hidden"
          >
            <nav className="px-4 py-4 space-y-1">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  to={link.href}
                  onClick={() => dispatch(setMobileMenuOpen(false))}
                  className={cn(
                    'block px-4 py-3 text-sm font-medium rounded-xl',
                    'text-text-secondary dark:text-dark-text-secondary',
                    'hover:text-text-primary dark:hover:text-dark-text-primary',
                    'hover:bg-zinc-100 dark:hover:bg-zinc-800',
                    'transition-all duration-200'
                  )}
                >
                  {link.label}
                </Link>
              ))}

              {!user?.data && (
                <div className="pt-4 space-y-2 border-t border-border-light dark:border-dark-border-light mt-4">
                  <Button
                    variant="outline"
                    className="w-full"
                    onClick={() => {
                      navigate('/login');
                      dispatch(setMobileMenuOpen(false));
                    }}
                  >
                    Log in
                  </Button>
                  <Button
                    className="w-full"
                    onClick={() => {
                      navigate('/register');
                      dispatch(setMobileMenuOpen(false));
                    }}
                  >
                    Sign up
                  </Button>
                </div>
              )}
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}