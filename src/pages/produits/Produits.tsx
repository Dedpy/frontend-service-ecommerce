import React, { useContext, useEffect, useState } from "react";
import PanierDetails from "../../components/panier/panier";
import ListProduit from "../../components/produits/listProduit";
import UserContext from "../../context/userContext";
import { useNavigate } from "react-router-dom";

function Produits() {
  const auth = useContext(UserContext);
  const navigate = useNavigate();

  useEffect(() => {
    if (!auth.auth) {
      navigate("/signin");
    }
    fetch("http://localhost:3001/products", {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${auth.token}`,
      },
    })
      .then((response) => {
        if (!response.ok) {
          throw new Error("Failed to fetch data");
        }
        return response.json();
      })
      .then((data) => {
        // Update the state with the fetched data
        auth.setProducts(data);
      })
      .catch((error) => {
        console.error(error);
      });
  }, []);
  return (
    <div className="flex flex-col md:flex-row  h-full p-14">
      <div className="w-full flex flex-col h-fit gap-4 p-4 ">
        <p className="text-blue-900 text-xl font-extrabold">Produits</p>
        <ListProduit produits={auth.products} />
      </div>
      <div className="flex flex-col w-full md:w-2/3 h-fit gap-4 p-4">
        <p className="text-blue-900 text-xl font-extrabold">Panier</p>
        <PanierDetails />
      </div>
    </div>
  );
}

export default Produits;
