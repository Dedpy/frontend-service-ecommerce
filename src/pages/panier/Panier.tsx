import React from "react";
import PanierDetails from "../../components/panier/panier";

function Panier() {
  return (
    <div className="flex flex-col  h-fit gap-4 p-6">
      <p className="text-blue-900 text-xl font-extrabold">Panier</p>
      <PanierDetails />
    </div>
  );
}

export default Panier;
