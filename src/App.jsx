import HomePage from "./pages/Home/Home";
import IndonesiaPage from "./pages/IndonesiaPage/Indonesia/Indonesia";
import Navbar from "./components/Navbar/Navbar";
import ProvinsiPage from "./pages/IndonesiaPage/Provinsi/Provinsi";
import FormPage from "./pages/Form/Form";
import Footer from "./components/Footer/Footer";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import GlobalPage from "./pages/GlobalPage/Global/Global";
import RegionPage from "./pages/GlobalPage/Wilayah/Wilayah";
import ProvinsiDataPage from "./pages/ProvinsiPage/Provinsi/ProvinsiData";

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/indonesia" element={<IndonesiaPage />} />
        <Route path="/provinsi" element={<ProvinsiPage />} />
        <Route path="/provinsidata" element={<ProvinsiDataPage />} />
        <Route path="/about" element={<FormPage />} />
        <Route path="/global" element={<GlobalPage />} />
        <Route path="/region" element={<RegionPage />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
