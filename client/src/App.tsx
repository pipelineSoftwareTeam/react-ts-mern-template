import { BrowserRouter, Route, Routes } from 'react-router-dom';

// Page Imports
import { Home, NotFound } from '@/pages';

export const App = () => (
  <Routes>
    <Route path="/" element={<Home />} />
    <Route path="*" element={<NotFound />} />
  </Routes>
);

export const WrappedApp = () => (
  <BrowserRouter>
    <App />
  </BrowserRouter>
);
