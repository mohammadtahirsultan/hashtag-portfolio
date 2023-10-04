import './App.css'
import { BrowserRouter as Router,Routes, Route } from 'react-router-dom';
import DesignServicePage from './pages/Design Service Page/DesignServicePage';
import WebDevelopmentService from './pages/WebDevelopmentService/WebDevelopmentService';
import MarkeetingServicePage from './pages/Markeeting Service Page/MarkeetingServicePage'
import LandingPage from './pages/Landing Page/LandingPage'
import EComServicePage from './pages/Ecommerce Service Page/EComServicePage';
import NotFoundPage from './pages/Page Not Found/NotFoundPage';
import Blogs from './sections/Blogs Section/Blogs';
import BlogPage from './sections/Blogs Section/BlogPage';
import Careers from './sections/Careers/Careers';
import JobDetails from './sections/Careers/JobDetails';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/design-service" element={<DesignServicePage />} />
        <Route path="/web-development-service" element={<WebDevelopmentService />} />
        <Route path="/marketing-service" element={<MarkeetingServicePage />} />
        <Route path="/ecommerce-service" element={<EComServicePage />} />
        <Route path="/blogs" element={<Blogs />} />
        <Route path="/careers" element={<Careers />} />
        <Route path="/job/frontend" element={<JobDetails />} />
        <Route path="/blog/:id" element={<BlogPage />} />
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </Router>
  );
}

export default App;