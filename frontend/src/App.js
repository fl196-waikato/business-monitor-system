import logo from './logo.svg';
import './App.css';
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import LoginPage from './pages/Login';
import RegisterAccountPage from './pages/RegisterAccount';
import ResetPasswordPage from './pages/ResetPassword';
import HomePage from './pages/Homepage';
import ProductManagement from './pages/ProductManagement';
import ClientManagement from './pages/ClientManagement';
import ProductClientManagement from './pages/ProductClientManagement';
import MyProfile from './pages/Myprofile';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element= {<LoginPage />} />
        <Route path="/register" element= {<RegisterAccountPage />} />
        <Route path="/reset-password" element= {<ResetPasswordPage />} />
        {/*
        <Route path="/home" element= {<HomePage />} />
        <Route path="/product-management" element= {<ProductManagement />} />
        <Route path="/client-management" element= {<ClientManagement />} />
        <Route path="/product-client-management" element= {<ProductClientManagement />} />
        <Route path="/profile" element= {<MyProfile />} />
        */}
      </Routes>
    </BrowserRouter>
  );
}

export default App;
