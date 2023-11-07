import React from "react";
import { Product } from "../../types/produits";
import Produit from "./produit";
interface ListProduitProps {
  produits: Product[];
}

function ListProduit({ produits }: ListProduitProps) {
  return (
    <div>
      {produits.map((produit) => (
        <Produit key={produit.id} produit={produit} />
      ))}
    </div>
  );
}

export default ListProduit;
