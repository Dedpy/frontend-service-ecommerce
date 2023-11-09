import React, { useContext, useState } from "react";
import { Product } from "../../types/produits";
import UserContext from "../../context/userContext";

function Produit({ produit }: { produit: Product }) {
  const [productQuantity, setProductQuantity] = useState(1);
  const auth = useContext(UserContext);
  return (
    <div className="flex flex-col p-4 text-lg font-semibold shadow-md border rounded-sm">
      <div className="flex flex-col md:flex-row gap-3 justify-between">
        <div className="flex flex-col  items-start gap-2">
          <p className="text-lg text-gray-800 font-semibold">{produit.name}</p>
          <p className="text-xs text-gray-600 font-semibold">
            Inventory:{" "}
            <span className="font-normal">
              {produit.inventory === 0 ? "Out of stock" : produit.inventory}
            </span>
          </p>
        </div>
        <div className="self-center text-center">
          <p className="text-gray-800 font-normal text-xl">
            {produit.price} Prices
          </p>
        </div>
        <div className="flex flex-row self-center gap-1">
          <button
            className="w-5 h-5 self-center rounded-full border border-gray-300"
            onClick={() => setProductQuantity(productQuantity - 1)}
            disabled={productQuantity === 1}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="none"
              stroke="#d1d5db"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
            >
              <path d="M5 12h14" />
            </svg>
          </button>
          <input
            type="text"
            value={productQuantity}
            className="w-8 h-8 text-center text-gray-900 text-sm outline-none border border-gray-300 rounded-sm"
          />
          <button
            className="w-5 h-5 self-center rounded-full border border-gray-300"
            onClick={() => setProductQuantity(productQuantity + 1)}
            disabled={productQuantity === produit.inventory}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill=""
              stroke="#9ca3af"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
            >
              <path d="M12 5v14M5 12h14" />
            </svg>
          </button>
        </div>
        <div className="self-center">
          <button
            disabled={auth.commandeDetails.some(
              (item) => item.product.id === produit.id
            )}
            onClick={() => {
              auth.setCommandeDetails([
                ...auth.commandeDetails,
                { product: produit, quantite: productQuantity },
              ]);
            }}
          >
            <svg
              viewBox="0 0 24 24"
              fill="currentColor"
              height="1em"
              width="1em"
            >
              <path d="M12 19.5 A1.5 1.5 0 0 1 10.5 21 A1.5 1.5 0 0 1 9 19.5 A1.5 1.5 0 0 1 12 19.5 z" />
              <path d="M19 19.5 A1.5 1.5 0 0 1 17.5 21 A1.5 1.5 0 0 1 16 19.5 A1.5 1.5 0 0 1 19 19.5 z" />
              <path d="M13 13h2v-2.99h2.99v-2H15V5.03h-2v2.98h-2.99v2H13V13z" />
              <path d="M10 17h8a1 1 0 00.93-.64L21.76 9h-2.14l-2.31 6h-6.64L6.18 4.23A2 2 0 004.33 3H2v2h2.33l4.75 11.38A1 1 0 0010 17z" />
            </svg>
          </button>
        </div>
      </div>
    </div>
  );
}

export default Produit;
