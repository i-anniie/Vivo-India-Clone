import './App.css';
import Navbar from './nav-foot/Navbar/navbar';
import Footer from './nav-foot/Footer/footer';
import Home from './components/Pages/homepage';
import Products from './components/Pages/Productpage';
import Store from './components/Pages/Storepage';
import "../node_modules/bootstrap/dist/css/bootstrap-grid.min.css"




import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

function App() {
  return (
    <Router>
        <Navbar />
        <Routes>
        <Route path='/' exact element={<Home />} />
        <Route path='/src/components/HomePage/productpage.js' exact element={<Products />} />
        <Route path='/src/components/HomePage/Storepage.js' exact element={<Store />} />
        </Routes>
        <Footer />
      </Router>
    );
}

export default App;
