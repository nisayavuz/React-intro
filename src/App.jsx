
import { BrowserRouter , Routes , Route } from "react-router-dom";
import "./App.css";
import Homepage from "./pages/Homepage/Homepage";
import About from "./pages/About/About";
import Navbar from "./components/Navbar/Navbar";
import ProductDetail from "./components/ProductDetail/ProductDetail";
import ProductAdd from "./components/ProductAdd/ProductAdd";

//Javascript xml
//JSX => Javascript + HTML
function App() {
  
  return (
    <>
    <Navbar/>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Homepage/>}>  </Route>
        <Route path="/about" element={<About/>}>  </Route>
        <Route path="*" element={<p>Not Found</p>}></Route>
        <Route path="/products/:id" element={<ProductDetail/>}></Route>
        <Route path="/addproduct" element={<ProductAdd/>}></Route>
      </Routes>
    </BrowserRouter>
    </>
  );
}

export default App;
