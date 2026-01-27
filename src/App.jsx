import { Route, Routes } from "react-router";
import Layout from "./components/layout/Layout";
import Home from "./pages/Home";
import Products from "./pages/Products";
import ProductDetailPage from "./pages/ProductDetail";
import Categories from "./pages/Categories";
import CategoryProducts from "./pages/CategoryProducts";
import Login from "./pages/Login";
import Register from "./pages/Register";
import NotFound from "./pages/NotFound";
import ProtectedRoute from "./components/ProtectedRoute";
import AdminLayout from "./pages/admin/AdminLayout";
import Dashboard from "./pages/admin/Dashboard";
import ProductList from "./pages/admin/products/ProductList";
import CategoryList from "./pages/admin/categories/CategoryList";
import Analytics from "./pages/admin/analytics/Analytics";
import ProductEdit from "./pages/admin/products/ProductEdit";
import ProductCreate from "./pages/admin/products/ProductCreate";
import CategoryEdit from "./pages/admin/categories/CategoryEdit";
import CategoryCreate from "./pages/admin/categories/CategoryCreate";
// Auth
import OAuthCallback from "./auth/OAuthCallback";
import { useSelector } from "react-redux";
import { useEffect } from "react";

function App() {
  const { theme } = useSelector((state) => state.theme);

  useEffect(() => {
    if (theme === "dark") {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [theme]);
  return (
        <Routes>
          {/* Public Routes */}
          <Route path="/" element={<Layout />}>
            <Route index element={<Home />} />
            <Route path="products" element={<Products />} />
            <Route path="products/:slug" element={<ProductDetailPage />} />
            <Route path="categories" element={<Categories />} />
            <Route path="categories/:slug" element={<CategoryProducts />} />
          </Route>

          {/* Auth Routes */}
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/oauth-callback" element={<OAuthCallback />} />

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
          <Route path="*" element={<NotFound />} />
        </Routes>
  );
}

export default App;
