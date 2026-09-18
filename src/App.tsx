import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import { TooltipProvider } from "@/components/ui/tooltip";
import { SiteLayout } from "@/components/lexhy/SiteLayout";
import Index from "./pages/Index";
import TheFile from "./pages/TheFile";
import ForFirms from "./pages/ForFirms";
import HowItWorksPage from "./pages/HowItWorksPage";
import Pedigree from "./pages/Pedigree";
import Contact from "./pages/Contact";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

export default function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <BrowserRouter>
          <SiteLayout>
            <Routes>
              <Route path="/" element={<Index />} />
              <Route path="/index" element={<Navigate to="/" replace />} />
              <Route path="/the-file" element={<TheFile />} />
              <Route path="/for-firms" element={<ForFirms />} />
              <Route path="/how-it-works" element={<HowItWorksPage />} />
              <Route path="/pedigree" element={<Pedigree />} />
              <Route path="/contact" element={<Contact />} />
              <Route path="*" element={<NotFound />} />
            </Routes>
          </SiteLayout>
        </BrowserRouter>
      </TooltipProvider>
    </QueryClientProvider>
  );
}
