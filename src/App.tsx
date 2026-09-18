import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { TooltipProvider } from "@/components/ui/tooltip";
import { SiteLayout } from "@/components/lexhy/SiteLayout";
import Index from "./pages/Index";
import PrivateWealth from "./pages/PrivateWealth";
import HowItWorksPage from "./pages/HowItWorksPage";
import MemberFirms from "./pages/MemberFirms";
import Contact from "./pages/Contact";
import Invitation from "./pages/Invitation";
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
              <Route path="/private-wealth" element={<PrivateWealth />} />
              <Route path="/how-it-works" element={<HowItWorksPage />} />
              <Route path="/member-firms" element={<MemberFirms />} />
              <Route path="/contact" element={<Contact />} />
              <Route path="/invitation" element={<Invitation />} />
              <Route path="*" element={<NotFound />} />
            </Routes>
          </SiteLayout>
        </BrowserRouter>
      </TooltipProvider>
    </QueryClientProvider>
  );
}
