import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import { LanguageProvider } from "./contexts/LanguageContext";
import { MainLayout } from "./components/Layouts/MainLayout";
import { HomePage } from "./pages/HomePage";
import { ProductsPage } from "./pages/ProductsPage";
import { FeaturesPage } from "./pages/FeaturesPage";
import { ContactPage } from "./pages/ContactPage";
import { SignInPage } from "./pages/SignInPage";
import { GetStartedPage } from "./pages/GetStartedPage";
import { BlogPage } from "./pages/blog/BlogPage.tsx";
import { BlogDetailPage } from "./pages/blog/BlogDetailPage.tsx";
import { ScrollToTop } from "./components/ScrollToTop.tsx";
import { PricingPage } from "./pages/PricingPage";
import { UnderMaintenancePage } from "./pages/service/UnderMaintanance.tsx";
import { ComingSoonPage } from "./pages/service/ComingSoon.tsx";
import { Toaster } from "./components/ui/sonner";

function App() {
  return (
    <LanguageProvider>
      <Router>
        <ScrollToTop />
        <Routes>
          <Route element={<MainLayout />}>
            <Route path="/" element={<HomePage />} />
            <Route path="/products" element={<ProductsPage />} />
            {/* <Route path="/products" element={<Products />} /> */}
            <Route path="/features" element={<UnderMaintenancePage />} />
            <Route path="/contact" element={<ContactPage />} />
            <Route path="pricing" element={<UnderMaintenancePage />} />
            {/*<Route path="blog" element={<BlogPage />} />*/}
            {/*<Route path="blog/:id" element={<BlogDetailPage />} />*/}
            <Route path="/getstarted" element={<GetStartedPage />} />
            <Route path="*" element={<UnderMaintenancePage />} />
            <Route path="/coming-soon" element={<ComingSoonPage />} />
          </Route>

          <Route path="/signin" element={<SignInPage />} />
        </Routes>
        <Toaster />
      </Router>
    </LanguageProvider>
  );
}

export default App;
