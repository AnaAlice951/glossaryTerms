import { BrowserRouter, Route, Routes as ReactRoutes } from 'react-router-dom';
import { Home } from './pages';

export const Routes = () => {
  return (
    <BrowserRouter>
      <ReactRoutes>
        <Route path="/" element={<Home />} />
      </ReactRoutes>
    </BrowserRouter>
  );
};
