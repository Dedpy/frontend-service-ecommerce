import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Navbar } from "./components/navbar";
import Produits from "./pages/produits/Produits";
import Panier from "./pages/panier/Panier";
import Payment from "./pages/payment/payment";
import SignIn from "./pages/auth/signin/signin";
import SignUp from "./pages/auth/signup/signup";
import Home from "./pages/Home";
import { Toaster } from "react-hot-toast";

function App() {
  const [token, setToken] = useState();
  return (
    <main className="min-h-screen text-center bg-background text-primary ">
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/signin" element={<SignIn setToken={setToken} />} />
          <Route path="/signup" element={<SignUp />} />
          <Route path="/produits" element={<Produits />} />
          <Route path="/panier" element={<Panier />} />
          <Route path="/payment" element={<Payment />} />
        </Routes>
        <Toaster position="bottom-center" reverseOrder={false} />
      </Router>
    </main>
  );
}

export default App;
