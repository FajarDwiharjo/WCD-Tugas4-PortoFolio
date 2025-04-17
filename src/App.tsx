import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from "./page/home/home"
import Contact from "./page/Contact/contact"


function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </Router>
  );
}

export default App;