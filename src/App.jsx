import ForFarms from "./components/ForFarms";
import MainBody from "./components/MainBody";
import ForMarketers from "./components/ForMarketers";
import Pricing from "./components/Pricing";
import Agritourism from "./components/Agritourism";

import { BrowserRouter, Route, Routes } from "react-router-dom";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<MainBody />} />
          <Route path="/forfarms" element={<ForFarms />} />
          <Route path="/for farmersmarket" element={<ForMarketers />} />
          <Route path="/agritourism" element={<Agritourism />} />
          <Route path="/pricing" element={<Pricing />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
