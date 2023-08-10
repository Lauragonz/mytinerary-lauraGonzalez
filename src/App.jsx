import './App.css';
import MainLayout from './components/MainLayout';
import Home from './pages/Home';
import { Routes, Route, BrowserRouter } from 'react-router-dom';
import Cities from './pages/Cities';
import NotFound404 from './pages/NotFound404';

const App = () => {
  return (
    <BrowserRouter>
      <MainLayout>
        <Routes>
          <Route  >
            <Route path="/" element={<Home />} />
            <Route path="cities" element={<Cities />} />
            <Route path="*" element={<NotFound404 />} />
          </Route>
        </Routes>
      </MainLayout>

    </BrowserRouter>
  );
};

export default App;
