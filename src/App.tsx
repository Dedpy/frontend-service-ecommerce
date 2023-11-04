import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Navbar } from "./components/navbar";
import Produits from "./pages/produits/Produits";
import Panier from "./pages/panier/Panier";

function App() {
  return (
    <main className="text-center ">
      <Router>
        <Navbar />
        <Routes>
          <Route path="/produits" element={<Produits />} />
          <Route path="/panier" element={<Panier />} />
        </Routes>
      </Router>
    </main>
  );
}

export default App;
