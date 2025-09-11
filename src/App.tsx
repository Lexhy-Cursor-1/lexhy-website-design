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
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
