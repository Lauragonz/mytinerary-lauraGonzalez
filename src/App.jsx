import './App.css';
import MainLayout from './components/MainLayout';
import Home from './pages/Home';
import { Routes, Route, BrowserRouter } from 'react-router-dom';
import Cities from './pages/Cities';
import NotFound404 from './pages/NotFound404';
import DetailsPage from './pages/DetailsPage';

const App = () => {
  return (
    <BrowserRouter>
      <MainLayout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="cities" element={<Cities />} />
          <Route path="/details/:cityId" element={<DetailsPage />} />
          <Route path="*" element={<NotFound404 />} />
        </Routes>
      </MainLayout>
    </BrowserRouter>
  );
};


export default App;
