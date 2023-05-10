import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./components/Home/Home";
import Cart from "./components/Cart/Cart";
import Navbar from "./components/Navbar/Navbar";
// import ContextProvider from "./components/Context/ContextProvider";
import DogsPage from "./components/Dogs/DogsPage";
import axios from "axios";
import { useEffect } from "react";

function App() {
  useEffect(() => {
    async function getData() {
      const res = await axios.get("/v1/dogs");
      return res;
    }
    getData().then((res) => {
      console.log("res:", res);
    });
    // getData().catch((err) => {
    //   console.log("err:", err);
    // });
  }, []);
  return (
    // <ContextProvider>
    <Router>
      <Navbar />
      <div className="page-container">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/dogs" element={<DogsPage />} />
          <Route path="/cart" element={<Cart />} />
        </Routes>
      </div>
    </Router>
    // </ContextProvider>
  );
}

export default App;
