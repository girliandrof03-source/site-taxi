import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { LandingPage } from './components/LandingPage';
import { TaxiPage } from './components/TaxiPage';
import { FederalPage } from './components/FederalPage';
import { TouristTransferPage } from './components/TouristTransferPage';

export default function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/taxi" element={<TaxiPage />} />
        <Route path="/federal" element={<FederalPage />} />
        <Route path="/traslados" element={<TouristTransferPage />} />
      </Routes>
    </Router>
  );
}