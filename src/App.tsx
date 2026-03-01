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
import PrimebrookEstate from './pages/properties/PrimebrookEstate';

// About pages
import AboutUs from './pages/about/AboutUs';
import OurTeam from './pages/about/OurTeam';
import OurServices from './pages/about/OurServices';
// new dynamic/search pages
import SearchResults from './pages/SearchResults';
import PropertyDetails from './pages/PropertyDetails';
import AgentProfile from './pages/AgentProfile';

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
          {/*
            The first five routes below correspond to "real" hard-coded pages.
            Any additional sample-only properties are handled by the dynamic
            /properties/:slug route which appears afterwards. This keeps the
            main listings special while still allowing easy expansion.
          */}
          <Route path="/properties" element={<AllProperties />} />
          <Route path="/properties/beulah-layout" element={<BeulahLayout />} />
          <Route path="/properties/olive-estate" element={<OliveEstate />} />
          <Route path="/properties/oakridge-city" element={<OakridgeCity />} />
          <Route path="/properties/army-range" element={<ArmyRange />} />
          <Route path="/properties/villa-alora" element={<VillaAlora />} />
          <Route path="/properties/primebrook-estate" element={<PrimebrookEstate />} />
          {/* dynamic fallback for sample-only properties */}
          <Route path="/properties/:slug" element={<PropertyDetails />} />
          
          {/* Search route */}
          <Route path="/search" element={<SearchResults />} />
          
          {/* About routes */}
          <Route path="/about" element={<AboutUs />} />
          <Route path="/about/team" element={<OurTeam />} />
          <Route path="/about/services" element={<OurServices />} />
          {/* Agent profiles (chairman, agent-1 etc) */}
          {/* using dynamic route allows adding agents without touching routes */}          <Route path="/team/:slug" element={<AgentProfile />} />
        </Routes>
      </Layout>
    </Router>
  );
}

export default App;