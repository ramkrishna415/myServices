import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { ThemeProvider } from '@/context/ThemeContext';
import Layout from '@/components/Layout';
import HomePage from '@/pages/HomePage';
import ServicesPage from '@/pages/ServicesPage';
import WebsiteDevelopmentPage from '@/pages/WebsiteDevelopmentPage';
import BugFixingPage from '@/pages/BugFixingPage';
import DocumentModificationPage from '@/pages/DocumentModificationPage';
import AIChatbotPage from '@/pages/AIChatbotPage';
import PortfolioPage from '@/pages/PortfolioPage';
import AboutPage from '@/pages/AboutPage';
import ContactPage from '@/pages/ContactPage';
import NotFoundPage from '@/pages/NotFoundPage';

export default function App() {
  return (
    <ThemeProvider>
      <BrowserRouter>
        <Layout>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/services" element={<ServicesPage />} />
            <Route path="/website-development" element={<WebsiteDevelopmentPage />} />
            <Route path="/bug-fixing" element={<BugFixingPage />} />
            <Route path="/document-modification" element={<DocumentModificationPage />} />
            <Route path="/ai-chatbot-development" element={<AIChatbotPage />} />
            <Route path="/portfolio" element={<PortfolioPage />} />
            <Route path="/about" element={<AboutPage />} />
            <Route path="/contact" element={<ContactPage />} />
            <Route path="*" element={<NotFoundPage />} />
          </Routes>
        </Layout>
      </BrowserRouter>
    </ThemeProvider>
  );
}
