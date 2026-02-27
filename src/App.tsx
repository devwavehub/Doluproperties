import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';

// Main pages
import Home from './pages/Home';
import Gallery from './pages/Gallery';
import Contact from './pages/Contact';

// Properties pages
import AllProperties from './pages/properties/AllProperties';
import BeulahLayout from './pages/properties/BeulahLayout';
import OliveEstate from './pages/properties/OliveEstate';
import OakridgeCity from './pages/properties/OakridgeCity';
import ArmyRange from './pages/properties/ArmyRange';
import VillaAlora from './pages/properties/VillaAlora';

// About pages
import AboutUs from './pages/about/AboutUs';
import OurTeam from './pages/about/OurTeam';
import OurServices from './pages/about/OurServices';

function App() {
  return (
    <Router>
      <Layout>
        <Routes>
          {/* Main routes */}
          <Route path="/" element={<Home />} />
          <Route path="/gallery" element={<Gallery />} />
          <Route path="/contact" element={<Contact />} />
          
          {/* Properties routes */}
          <Route path="/properties" element={<AllProperties />} />
          <Route path="/properties/beulah-layout" element={<BeulahLayout />} />
          <Route path="/properties/olive-estate" element={<OliveEstate />} />
          <Route path="/properties/oakridge-city" element={<OakridgeCity />} />
          <Route path="/properties/army-range" element={<ArmyRange />} />
          <Route path="/properties/villa-alora" element={<VillaAlora />} />
          
          {/* About routes */}
          <Route path="/about" element={<AboutUs />} />
          <Route path="/about/team" element={<OurTeam />} />
          <Route path="/about/services" element={<OurServices />} />
        </Routes>
      </Layout>
    </Router>
  );
}

export default App;