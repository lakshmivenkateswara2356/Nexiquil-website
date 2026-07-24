import { BrowserRouter, Routes, Route } from 'react-router-dom'

import MainLayout from '../layouts/MainLayout'
import Home from '../pages/Home/Home'
import About from '../pages/About/About'
import Services from '../pages/Services/Services'
import Products from '../pages/Products/Products'
import Directors from '../pages/Directors/Directors'
import Careers from '../pages/Careers/Careers'
import Blog from '../pages/Blog/Blog'
import Contact from '../pages/Contact/Contact'
import PrivacyPolicy from '../pages/PrivacyPolicy/PrivacyPolicy'
import Terms from '../pages/Terms/Terms'
import RefundPolicy from '../pages/RefundPolicy/RefundPolicy'

const AppRoutes = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<MainLayout />}>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/services" element={<Services />} />
          <Route path="/products" element={<Products />} />
          <Route path="/directors" element={<Directors />} />
          <Route path="/careers" element={<Careers />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/privacy-policy" element={<PrivacyPolicy />} />
          <Route path="/terms" element={<Terms />} />
          <Route path="/refund-policy" element={<RefundPolicy />} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default AppRoutes
