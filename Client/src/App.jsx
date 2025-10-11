import { Routes, Route } from 'react-router-dom';
import Navbar from "./components/navbar";
import Home from "./Pages/Home";
import About from "./Pages/AboutUs"
import Area from "./Pages/SelectArea"
import Form from "./Pages/CollectionForm"
import Success from "./components/SuccessScreen"
import Contact from "./components/ContactForm"
import SkipHire from "./Pages/SkipHire";
import Footer from "./components/Footer";

function App() {
  return (
    <div>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/skip-hire" element={<SkipHire />} />
        <Route path="/About-us" element={<About />} /> 
        <Route path="/success" element={<Success />} />
        <Route path="/Area" element={<Area />} />
        <Route path="/Contact" element={<Contact />} />
        <Route path="/Form" element={<Form />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;