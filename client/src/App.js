import './App.css';
import {Link} from "react-router-dom";
import Header from './Header.js';
import LandingPage from './Pages/LandingPage.js';
import Footer from './Footer';
import Navigation from './Pages/navbar';


function App() {
  return (
    <>
    <Navigation />
    <div className="container"></div>
    <main>
      
      <Header />
      <LandingPage />
      <Footer />
    </main>
    </>
  );
}

export default App;
