import { Link, useLocation } from 'react-router';
import { motion } from 'framer-motion';
import {
  LayoutDashboard,
  Package,
  Tags,
  BarChart3,
  Settings,
  ChevronLeft,
} from 'lucide-react';
import { cn } from '../../utils/cn';
import { useDispatch, useSelector } from 'react-redux';
import { setSidebarOpen } from '../../store/uiSlice';

const navItems = [
  { label: 'Dashboard', href: '/admin', icon: LayoutDashboard },
  { label: 'Products', href: '/admin/products', icon: Package },
  { label: 'Categories', href: '/admin/categories', icon: Tags },
  { label: 'Analytics', href: '/admin/analytics', icon: BarChart3 },
];

export default function Sidebar() {
  const location = useLocation();
  const dispatch = useDispatch();
  const { sidebarOpen } = useSelector((state) => state.ui);

  return (
    <>
      {/* Mobile overlay */}
      {sidebarOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-40 bg-black/50 lg:hidden"
          onClick={() => dispatch(setSidebarOpen(false))}
        />
      )}

      {/* Sidebar */}
      <aside
        className={cn(
          'fixed left-0 top-0 z-50 h-full',
          'bg-surface-primary dark:bg-dark-surface-primary',
          'border-r border-border-light dark:border-dark-border-light',
          'transition-all duration-300 ease-smooth',
          'lg:sticky lg:top-0',
          sidebarOpen ? 'w-64' : 'w-0 lg:w-20',
          'overflow-hidden'
        )}
      >
        <div className="flex flex-col h-full">
          {/* Header */}
          <div className="h-16 flex items-center justify-between px-4 border-b border-border-light dark:border-dark-border-light">
            {sidebarOpen && (
              <Link
                to="/admin"
                className="flex items-center gap-2 font-semibold text-text-primary dark:text-dark-text-primary"
              >
                <span className="w-8 h-8 rounded-lg bg-zinc-900 dark:bg-zinc-100 flex items-center justify-center">
                  <span className="text-white dark:text-zinc-900 text-sm font-bold">
                    E
                  </span>
                </span>
                <span>Admin</span>
              </Link>
            )}
            <button
              onClick={() => dispatch(setSidebarOpen(!sidebarOpen))}
              className={cn(
                'p-2 rounded-lg',
                'text-text-tertiary dark:text-dark-text-tertiary',
                'hover:bg-zinc-100 dark:hover:bg-zinc-800',
                'transition-colors duration-200',
                !sidebarOpen && 'mx-auto'
              )}
            >
              <ChevronLeft
                className={cn(
                  'w-5 h-5 transition-transform duration-300',
                  !sidebarOpen && 'rotate-180'
                )}
              />
            </button>
          </div>

          {/* Navigation */}
          <nav className="flex-1 p-3 space-y-1">
            {navItems.map((item) => {
              const isActive =
                location.pathname === item.href ||
                (item.href !== '/admin' &&
                  location.pathname.startsWith(item.href));

              return (
                <Link
                  key={item.href}
                  to={item.href}
                  className={cn(
                    'flex items-center gap-3 px-3 py-2.5 rounded-xl',
                    'transition-all duration-200',
                    'group',
                    isActive
                      ? 'bg-zinc-900 dark:bg-zinc-100 text-white dark:text-zinc-900'
                      : 'text-text-secondary dark:text-dark-text-secondary hover:bg-zinc-100 dark:hover:bg-zinc-800 hover:text-text-primary dark:hover:text-dark-text-primary'
                  )}
                >
                  <item.icon
                    className={cn(
                      'w-5 h-5 shrink-0',
                      !sidebarOpen && 'mx-auto'
                    )}
                  />
                  {sidebarOpen && (
                    <span className="text-sm font-medium">{item.label}</span>
                  )}
                </Link>
              );
            })}
          </nav>

          {/* Footer */}
          <div className="p-3 border-t border-border-light dark:border-dark-border-light">
            <Link
              to="/"
              className={cn(
                'flex items-center gap-3 px-3 py-2.5 rounded-xl',
                'text-text-tertiary dark:text-dark-text-tertiary',
                'hover:bg-zinc-100 dark:hover:bg-zinc-800',
                'hover:text-text-primary dark:hover:text-dark-text-primary',
                'transition-all duration-200'
              )}
            >
              <Settings className={cn('w-5 h-5', !sidebarOpen && 'mx-auto')} />
              {sidebarOpen && (
                <span className="text-sm font-medium">Back to Store</span>
              )}
            </Link>
          </div>
        </div>
      </aside>
    </>
  );
}