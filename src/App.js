import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import ServicesLandingPage from './ServicesLandingPage';
import AboutPage from './AboutPage';
import MediaLandingPage from './MediaLandingPage';
import Navbar from './Navbar';
import HeroSection from './HeroSection';
import ServicesSection from './ServicesSection';
import TestimonialsSection from './TestimonialsSection';
import WhyChooseSection from './WhyChooseSection';
import NewsletterSection from './NewsletterSection';
import FooterSection from './FooterSection';
import SellPage from './SellPage';
import BuyPage from './BuyPage';
import LeasePage from './LeasePage';
import TenantRepresentationPage from './TenantRepresentationPage';
import PropertyManagementPage from './PropertyManagementPage';
import BrokersOpinionPage from './BrokersOpinionPage';


// Add these imports for new pages (create them if they don't exist yet)
import SuccessStoriesPage from './SuccessStoriesPage';
import InsightPage from './InsightPage';
import PressPage from './PressPage';
import RecognitionPage from './RecognitionPage';
import PodcastPage from './PodcastPage';

function Home() {
  return (
    <>
      <HeroSection />
      <ServicesSection />
      <TestimonialsSection />
      <WhyChooseSection />
      <NewsletterSection />
      <FooterSection />
    </>
  );
}

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
         <Route path="/services" element={<ServicesLandingPage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/media" element={<MediaLandingPage />} />
        <Route path="/services/sell" element={<SellPage />} />
        <Route path="/services/buy" element={<BuyPage />} />
        <Route path="/services/lease" element={<LeasePage />} />
        <Route path="/services/tenant-representation" element={<TenantRepresentationPage />} />
        <Route path="/services/property-management" element={<PropertyManagementPage />} />
        <Route path="/services/brokers-opinion-of-value" element={<BrokersOpinionPage />} />
        {/* Add new routes for About, Success Stories, and Media */}
        <Route path="/testimonials" element={<TestimonialsSection />} />
        <Route path="/success-stories" element={<SuccessStoriesPage />} />
        <Route path="/media/insights" element={<InsightPage />} />
        <Route path="/media/press" element={<PressPage />} />
        <Route path="/media/recognitions" element={<RecognitionPage />} />
        <Route path="/media/podcast" element={<PodcastPage />} />
      </Routes>
    </Router>
  );
}

export default App;