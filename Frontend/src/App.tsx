import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import { LanguageProvider } from "./contexts/LanguageContext";
import { MainLayout } from "./components/Layouts/MainLayout";
import { HomePage } from "./pages/HomePage";
import { ProductsPage } from "./pages/ProductsPage";
import { FeaturesPage } from "./pages/FeaturesPage";
import { ContactPage } from "./pages/ContactPage";
import { SignInPage } from "./pages/SignInPage";
import { GetStartedPage } from "./pages/GetStartedPage";
import { BlogPage } from "./pages/BlogPage";
import { BlogDetailPage } from "./pages/BlogDetailPage";
import { PricingPage } from "./pages/PricingPage";

function App() {
  return (
    <LanguageProvider>
      <Router>
        <Routes>
          <Route element={<MainLayout />}>
            <Route path="/" element={<HomePage />} />
            <Route path="/products" element={<ProductsPage />} />
            {/* <Route path="/products" element={<Products />} /> */}
            <Route path="/features" element={<FeaturesPage />} />
            <Route path="/contact" element={<ContactPage />} />
            <Route path="pricing" element={<PricingPage />} />
            <Route path="blog" element={<BlogPage />} />
            <Route path="blog/:id" element={<BlogDetailPage />} />
            <Route path="/getstarted" element={<GetStartedPage />} />

            <Route path="*" element={<HomePage />} />
          </Route>

          <Route path="/signin" element={<SignInPage />} />
        </Routes>
      </Router>
    </LanguageProvider>
  );
}

export default App;

// import { useState } from "react";
// import { LanguageProvider } from "./contexts/LanguageContext";
// import { CreativeNav } from "./components/CreativeNav";
// import { HomePage } from "./pages/HomePage";
// import { ProductsPage } from "./pages/ProductsPage";
// import { FeaturesPage } from "./pages/FeaturesPage";
// import { ContactPage } from "./pages/ContactPage";
// import { SignInPage } from "./pages/SignInPage";
// import { GetStartedPage } from "./pages/GetStartedPage";
// import { BlogPage } from "./pages/BlogPage";
// import { BlogDetailPage } from "./pages/BlogDetailPage";
// import { PricingPage } from "./pages/PricingPage";
// import { ModernFooter } from "./components/ModernFooter";

// export type PageType = "home" | "products" | "features" | "contact" | "signin" | "getstarted" | "blog" | "blogdetail" | "pricing";

// export interface AppState {
//   currentPage: PageType;
//   blogPostId?: number;
//   selectedProduct?: "marketplace" | "analytics";
// }

// export default function App() {
//   const [appState, setAppState] = useState<AppState>({
//     currentPage: "home"
//   });

//   const navigate = (page: PageType, data?: { blogPostId?: number; selectedProduct?: "marketplace" | "analytics" }) => {
//     setAppState({
//       currentPage: page,
//       blogPostId: data?.blogPostId,
//       selectedProduct: data?.selectedProduct
//     });
//     window.scrollTo({ top: 0, behavior: "smooth" });
//   };

//   const renderPage = () => {
//     switch (appState.currentPage) {
//       case "home":
//         return <HomePage onNavigate={navigate} />;
//       case "products":
//         return <ProductsPage onNavigate={navigate} />;
//       case "features":
//         return <FeaturesPage onNavigate={navigate} />;
//       case "contact":
//         return <ContactPage />;
//       case "signin":
//         return <SignInPage />;
//       case "getstarted":
//         return <GetStartedPage selectedProduct={appState.selectedProduct} />;
//       case "blog":
//         return <BlogPage onNavigate={navigate} />;
//       case "blogdetail":
//         return <BlogDetailPage blogPostId={appState.blogPostId || 1} onNavigate={navigate} />;
//       case "pricing":
//         return <PricingPage onNavigate={navigate} />;
//       default:
//         return <HomePage onNavigate={navigate} />;
//     }
//   };

//   return (
//     <LanguageProvider>
//       <div className="min-h-screen bg-neutral-950 text-white overflow-x-hidden">
//         <CreativeNav currentPage={appState.currentPage} onNavigate={navigate} />
//         {renderPage()}
//         <ModernFooter onNavigate={navigate} />
//       </div>
//     </LanguageProvider>
//   );
// }
