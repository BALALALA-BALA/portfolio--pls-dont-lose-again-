import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Navbar from './component/navbar';
import Home from './pages/home';
import About from './pages/about';
import Portfolio from './pages/portfolio';

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/portfolio" element={<Portfolio />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
