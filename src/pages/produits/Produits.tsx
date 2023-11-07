import React, { useContext, useEffect, useState } from "react";
import PanierDetails from "../../components/panier/panier";
import ListProduit from "../../components/produits/listProduit";
import UserContext from "../../context/userContext";
import { useNavigate } from "react-router-dom";

function Produits() {
  const [produits, setProduits] = useState([]);
  const auth = useContext(UserContext);
  const navigate = useNavigate();

  useEffect(() => {
    if (!auth.auth) {
      navigate("/");
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
        setProduits(data);
      })
      .catch((error) => {
        console.error(error);
      });
  }, []);
  return (
    <div className="flex flex-col md:flex-row w-screen h-full px-14 py-7">
      <div className="w-full flex flex-col h-fit gap-4 p-4 ">
        <p className="text-blue-900 text-xl font-extrabold">Produits</p>
        <ListProduit produits={produits} />
      </div>
      <div className="flex flex-col w-full md:w-2/3 h-fit gap-4 p-4">
        <p className="text-blue-900 text-xl font-extrabold">Panier</p>
        <PanierDetails />
      </div>
    </div>
  );
}

export default Produits;
