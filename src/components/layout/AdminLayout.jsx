import { Outlet, Navigate } from 'react-router';
import { useMe } from '../../auth/useAuth';
import Sidebar from './Sidebar';
import Spinner from '../common/Spinner';
import { cn } from '../../utils/cn';
import { useSelector } from 'react-redux';

export default function AdminLayout() {
  const { data: user, isLoading } = useMe();
  const { sidebarOpen } = useSelector((state) => state.ui);

  if (isLoading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-surface-primary dark:bg-dark-surface-primary">
        <Spinner size="lg" />
      </div>
    );
  }

  if (!user?.data || user.data.role !== 'admin') {
    return <Navigate to="/login" replace />;
  }

  return (
    <div className="min-h-screen flex bg-surface-secondary dark:bg-dark-surface-primary">
      <Sidebar />
      <main
        className={cn(
          'flex-1 transition-all duration-300',
          sidebarOpen ? 'lg:ml-0' : 'lg:ml-0'
        )}
      >
        <div className="min-h-screen p-6 lg:p-8">
          <Outlet />
        </div>
      </main>
    </div>
  );
}