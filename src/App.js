import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./components/Home";
import Cart from "./components/Cart";
import LoginSignup from "./components/LoginSignup/LoginSignup";

function App() {
  return (
    <BrowserRouter>
      <Routes className="App">
        <Route exact path="/" element={<LoginSignup />} />
        <Route exact path="/Home" element={<Home />} />
        <Route exact path="/cart" element={<Cart />}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
