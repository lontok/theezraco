import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import SimbangGabi from "./pages/SimbangGabi";
import ChurchDetail from "./pages/ChurchDetail";
import ForChurches from "./pages/ForChurches";
import About from "./pages/About";
import Roadmap from "./pages/Roadmap";
import Contact from "./pages/Contact";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/simbang-gabi" element={<SimbangGabi />} />
          <Route path="/church/:slug" element={<ChurchDetail />} />
          <Route path="/for-churches" element={<ForChurches />} />
          <Route path="/about" element={<About />} />
          <Route path="/roadmap" element={<Roadmap />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
