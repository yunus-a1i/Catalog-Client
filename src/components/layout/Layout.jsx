import { Outlet } from 'react-router';
import Header from './Header';
import Footer from './Footer';
import CartDrawer from '../cart/CartDrawer';
import SearchModal from '../products/ProductSearch';

export default function Layout() {
  return (
    <div className="min-h-screen flex flex-col bg-surface-primary dark:bg-dark-surface-primary">
      <Header />
      <main className="flex-1">
        <Outlet />
      </main>
      <Footer />
      <CartDrawer />
      <SearchModal />
    </div>
  );
}