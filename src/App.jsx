import React, { useState } from "react";
import { Routes, Route, useNavigate } from "react-router-dom";
import Header from "./components/header";
import Footer from "./components/footer";
import BioPage from "./screens/BioPage";
import ToursPage from "./screens/TourPage";
import HomePage from "./screens/Homepage";
import ContactPage from "./screens/ContactPage";
import PerformancesPage from "./screens/Performance";

const App = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const navigate = useNavigate();

  const navigateToPage = (path) => {
    setMobileMenuOpen(false);
    navigate(path);
  };

  return (
    <div className="min-h-screen wally">
      <Header
        navigateToPage={navigateToPage}
        mobileMenuOpen={mobileMenuOpen}
        setMobileMenuOpen={setMobileMenuOpen}
      />

      <div className="pt-[80px]">
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/home" element={<HomePage />} />
          <Route path="/bio" element={<BioPage />} />
          <Route path="/tour" element={<ToursPage />} />
          <Route path="/myperformances" element={<PerformancesPage />} />
          <Route path="/contact" element={<ContactPage />} />
        </Routes>
      </div>

      <Footer />
    </div>
  );
};

export default App;
