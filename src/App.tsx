import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Layout from '@/components/Layout';
import Home from '@/pages/Home';
import Bewerbung from '@/pages/Bewerbung';
import Lebenslauf from '@/pages/Lebenslauf';
import Qualifikationen from '@/pages/Qualifikationen';
import Zertifikate from '@/pages/Zertifikate';
import Lehrabschluss from '@/pages/Lehrabschluss';
import Zeugnisse from '@/pages/Zeugnisse';
import Kontakt from '@/pages/Kontakt';
import Impressum from '@/pages/Impressum';
import Datenschutz from '@/pages/Datenschutz';

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Layout />}>
          <Route path="/" element={<Home />} />
          <Route path="/bewerbung" element={<Bewerbung />} />
          <Route path="/lebenslauf" element={<Lebenslauf />} />
          <Route path="/qualifikationen" element={<Qualifikationen />} />
          <Route path="/zertifikate" element={<Zertifikate />} />
          <Route path="/lehrabschluss" element={<Lehrabschluss />} />
          <Route path="/zeugnisse" element={<Zeugnisse />} />
          <Route path="/kontakt" element={<Kontakt />} />
          <Route path="/impressum" element={<Impressum />} />
          <Route path="/datenschutz" element={<Datenschutz />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
