import React from "react";
import PanierDetails from "../../components/panier/panier";
import ListProduit from "../../components/produits/listProduit";

function Produits() {
  return (
    <div className="flex flex-col md:flex-row w-screen h-full px-14 py-7">
      <div className="w-full flex flex-col h-fit gap-4 p-4 ">
        <p className="text-blue-900 text-xl font-extrabold">Produits</p>
        <ListProduit />
      </div>
      <div className="flex flex-col w-full md:w-2/3 h-fit gap-4 p-4">
        <p className="text-blue-900 text-xl font-extrabold">Panier</p>
        <PanierDetails />
      </div>
    </div>
  );
}

export default Produits;
