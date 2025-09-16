import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import StartBusiness from "./pages/StartBusiness";
import AIDocuments from "./pages/AIDocuments";
import HireLawyer from "./pages/HireLawyer";
import Compliance from "./pages/Compliance";
import Platform from "./pages/Platform";
import Pricing from "./pages/Pricing";

import AboutUs from "./pages/AboutUs";
import MasterVibeDrafting from "./pages/MasterVibeDrafting";
import LegalAdvicePlan from "./pages/LegalAdvicePlan";
import Reviews from "./pages/Reviews";
import Blog from "./pages/Blog";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/start-business" element={<StartBusiness />} />
          <Route path="/ai-documents" element={<AIDocuments />} />
          <Route path="/hire-lawyer" element={<HireLawyer />} />
          <Route path="/compliance" element={<Compliance />} />
          <Route path="/platform" element={<Platform />} />
          <Route path="/pricing" element={<Pricing />} />
          
          <Route path="/about-us" element={<AboutUs />} />
          <Route path="/workshops" element={<MasterVibeDrafting />} />
          <Route path="/legal-advice-plan" element={<LegalAdvicePlan />} />
          <Route path="/reviews" element={<Reviews />} />
          <Route path="/blog" element={<Blog />} />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
