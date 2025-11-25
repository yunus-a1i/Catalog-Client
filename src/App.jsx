import { BrowserRouter, Route, Routes } from "react-router";
import OAuthCallback from "./auth/oauthCallback";
import LoginPage from "./features/LoginPage";
import RegisterPage from "./features/RegisterPage";
import ContactSection from "./sections/ContactSection";
import CraftsmanshipSection from "./sections/CraftsmanshipSection";
import Footer from "./sections/Footer";
import Header from "./sections/Header";
import Hero from "./sections/Hero";
import TestimonialsSection from "./sections/TestimonialsSection";
import TopProductsSection from "./sections/TopProductsSections";

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
          <Route path="/" element={<Hero />} />
          {/* <Route path="/product/:id" element={<ProductDetailsPage />} /> */}

          {/* auth */}
          <Route path="/login" element={<LoginPage />} />
          <Route path="/register" element={<RegisterPage />} />
          <Route path="/oauth-callback" element={<OAuthCallback />} />

          {/* admin protected route example */}
          {/* <Route path="/admin/products" element={
            <ProtectedRoute requireAdmin={true}>
              <AdminProductsPage />
            </ProtectedRoute>
          } /> */}
        </Routes>
    </BrowserRouter>
    </>
  );
}

export default App;
