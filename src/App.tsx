import { ToastContainer } from 'react-toastify';
import { Routes } from './routes';

function App() {
  return (
    <div className="flex flex-col w-full h-full overflow-hidden">
      <Routes />
      <ToastContainer />
    </div>
  );
}

export default App;
