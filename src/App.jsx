import { BrowserRouter, Route, Routes } from "react-router-dom";
import Wholesale from "./components/Wholesale";
import ForFarms from "./components/ForFarms";
import MainBody from "./components/MainBody";
import ForMarketers from "./components/ForMarketers";
import Pricing from "./components/Pricing";
import Agritourism from "./components/Agritourism";
import LocalSourcing from "./components/LocalSourcing";

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
          <Route path="/wholesale" element={<Wholesale />} />
          <Route path="/localsourcing" element={<LocalSourcing />}>
            <Route path="test" element={<h1>TEST PAGE</h1>} />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
