import './App.css';
import {Route, Routes} from "react-router-dom";
import Header from './Header.js';
import LandingPage from './Pages/LandingPage.js';
import Footer from './Footer';
import Navigation from './Pages/navbar';
import Layout from './Layout';
import LoginPage from './Pages/LoginPage';
import Contact from './Pages/Contact';
import Portfolio from './Pages/Portfolio';


function App() {
  return (
    <>
    <Navigation />
    <div className="container"></div>
    <Routes>
      <Route path="/" element={ <Layout />}>
        <Route index element={ <LandingPage /> } />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/portfolio" element={<Portfolio />} />
      </Route>
    </Routes>
    </>
  );
}

export default App;
