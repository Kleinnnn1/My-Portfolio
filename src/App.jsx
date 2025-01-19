import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Sidebar from "./components/Sidebar";
import Home from "./pages/home/Home";
import AboutMe from "./pages/about/AboutMe";
import Services from "./pages/services/Services";
import Portfolio from "./pages/portfolio/MyPortfolio";
import ContactMe from "./pages/contact/ContactMe";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Sidebar />}>
          {/* Nested Routes */}
          <Route index element={<Home />} />
          <Route path="about" element={<AboutMe />} />
          <Route path="services" element={<Services />} />
          <Route path="portfolio" element={<Portfolio />} />
          <Route path="contact" element={<ContactMe />} />
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
