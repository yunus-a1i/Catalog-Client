import { BrowserRouter, Route, Routes } from "react-router";
import OAuthCallback from "./auth/oauthCallback";
import LoginPage from "./features/LoginPage";
import RegisterPage from "./features/RegisterPage";
import ContactSection from "./sections/ContactSection";
import CraftsmanshipSection from "./sections/CraftsmanshipSection";
import Footer from "./sections/Footer";
import Header from "./sections/Header";
import TestimonialsSection from "./sections/TestimonialsSection";
import TopProductsSection from "./sections/TopProductsSections";
import CategoriesSection from "./sections/CategoriesSection";
import Home from "./page/Home";
import ProtectedRoute from "./components/ProtectedRoute";
import AdminLayout from "./page/admin/AdminLayout";
import Dashboard from "./page/admin/Dashboard";
import ProductList from "./page/admin/products/ProductList";
import CategoryList from "./page/admin/categories/CategoryList";
import Analytics from "./page/admin/analytics/Analytics";
import ProductEdit from "./page/admin/products/ProductEdit";
import ProductCreate from "./page/admin/products/ProductCreate";
import CategoryEdit from "./page/admin/categories/CategoryEdit";
import CategoryCreate from "./page/admin/categories/CategoryCreate";

function App() {
  return (
    <>
      {/* <Header />
      <Hero />
      <TopProductsSection />
      <CraftsmanshipSection />
      <TestimonialsSection />
      <ContactSection />
      <Footer /> */}
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/categories" element={<CategoriesSection />} />
          {/* <Route path="/product/:id" element={<ProductDetailsPage />} /> */}

          {/* auth */}
          <Route path="/login" element={<LoginPage />} />
          <Route path="/oauth-callback" element={<OAuthCallback />} />

          {/* admin protected route example */}
          {/* <Route path="/admin/products" element={
            <ProtectedRoute requireAdmin={true}>
              <AdminProductsPage />
            </ProtectedRoute>
          } /> */}

          <Route
            path="/admin"
            element={
              <ProtectedRoute>
                <AdminLayout />
              </ProtectedRoute>
            }
          >
            <Route path="" element={<Dashboard />} />
            {/* Products */}
            <Route path="products" element={<ProductList />} />
            <Route path="products/:id/edit" element={<ProductEdit />} />
            <Route path="products/create" element={<ProductCreate />} />

            {/* Categories */}
            <Route path="categories" element={<CategoryList />} />
            <Route path="categories/:id/edit" element={<CategoryEdit />} />
            <Route path="categories/create" element={<CategoryCreate />} />

            <Route path="analytics" element={<Analytics />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
