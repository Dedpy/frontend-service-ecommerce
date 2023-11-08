import React, { useContext, useEffect } from "react";
import PanierDetails from "../../components/panier/panier";
import UserContext from "../../context/userContext";
import { useNavigate } from "react-router-dom";

function Panier() {
  const auth = useContext(UserContext);
  const navigate = useNavigate();

  useEffect(() => {
    if (!auth.auth) {
      navigate("/signin");
    }
  }, []);
  return (
    <div className="flex flex-col  h-fit gap-4 p-6">
      <p className="text-blue-900 text-xl font-extrabold">Panier</p>
      <PanierDetails />
    </div>
  );
}

export default Panier;
