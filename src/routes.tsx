import { BrowserRouter, Route, Routes as ReactRoutes } from 'react-router-dom';
import { Home, Menu, Verbete } from './pages';

export const Routes = () => {
  return (
    <BrowserRouter>
      <ReactRoutes>
        <Route path="/" element={<Home />} />
        <Route path="/verbete/:id" element={<Verbete />} />
        <Route path="/menu" element={<Menu />} />
      </ReactRoutes>
    </BrowserRouter>
  );
};
