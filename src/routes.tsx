import { BrowserRouter, Route, Routes as ReactRoutes } from 'react-router-dom';
import { Home, Word, Verbete } from './pages';

export const Routes = () => {
  return (
    <BrowserRouter>
      <ReactRoutes>
        <Route path="/" element={<Home />} />
        <Route path="/verbete" element={<Verbete />} />
        <Route path="/word" element={<Word />} />
      </ReactRoutes>
    </BrowserRouter>
  );
};
