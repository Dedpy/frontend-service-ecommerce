import React, { useContext } from "react";
import UserContext from "../../context/userContext";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";

function PanierDetails() {
  const auth = useContext(UserContext);
  const navigate = useNavigate();
  const totalPrice = auth.commandeDetails.reduce(
    (total, item) => total + item.product.price * item.quantite,
    0
  );
  const handlePayment = () => {
    fetch(`${process.env.API_URL}/commandes`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${auth.token}`,
      },
      body: JSON.stringify({
        prix: totalPrice,
        user: auth.currentUser.id,
        commandeDetails: auth.commandeDetails,
      }),
    })
      .then((response) => {
        if (!response.ok) {
          throw new Error("Failed to fetch data");
        }
        return response.json();
      })
      .then((data) => {
        auth.setCommandeDetails([]);
        auth.commandeDetails.forEach((item) => {
          fetch(`${process.env.API_URL}/products/${item.product.id}`, {
            method: "PATCH",
            headers: {
              "Content-Type": "application/json",
              Authorization: `Bearer ${auth.token}`,
            },
            body: JSON.stringify({
              ...item.product,
              inventory: item.product.inventory - item.quantite,
            }),
          })
            .then((response) => {
              if (!response.ok) {
                throw new Error("Failed to update product inventory");
              }
              return response.json();
            })
            .then((updatedProduct) => {
              auth.setProducts((prevProducts) =>
                prevProducts.map((product) =>
                  product.id === updatedProduct.id ? updatedProduct : product
                )
              );
            })
            .catch((error) => {
              console.error(error);
            });
        });
        toast.success("Congrats! Your order has been placed ");
        navigate("/payment");
      })
      .catch((error) => {
        console.error(error);
      });
  };
  return (
    <div className="flex flex-col p-4 gap-4 text-lg font-semibold shadow-md border rounded-sm">
      {auth.commandeDetails.map((item, index) => (
        <div key={index} className="flex flex-row justify-between">
          <p className="text-gray-600">{item.product.name}</p>
          <p className="text-end font-bold">
            ${(item.product.price * item.quantite).toFixed(2)}{" "}
          </p>
          <button
            onClick={() => {
              auth.setCommandeDetails(
                auth.commandeDetails.filter((item, i) => i !== index)
              );
            }}
          >
            <svg
              viewBox="0 0 1024 1024"
              fill="currentColor"
              height="1em"
              width="1em"
            >
              <path d="M360 184h-8c4.4 0 8-3.6 8-8v8h304v-8c0 4.4 3.6 8 8 8h-8v72h72v-80c0-35.3-28.7-64-64-64H352c-35.3 0-64 28.7-64 64v80h72v-72zm504 72H160c-17.7 0-32 14.3-32 32v32c0 4.4 3.6 8 8 8h60.4l24.7 523c1.6 34.1 29.8 61 63.9 61h454c34.2 0 62.3-26.8 63.9-61l24.7-523H888c4.4 0 8-3.6 8-8v-32c0-17.7-14.3-32-32-32zM731.3 840H292.7l-24.2-512h487l-24.2 512z" />
            </svg>
          </button>
        </div>
      ))}

      <hr className="bg-gray-200 h-0.5" />
      <div className="flex flex-row justify-between">
        <p className="text-gray-600">Total</p>
        <div>
          <p className="text-end font-bold">${totalPrice.toFixed(2)}</p>
        </div>
      </div>
      <div className="flex items-center justify-center">
        <button
          className="transition-colors text-sm bg-blue-600  hover:bg-blue-700 p-2 rounded-sm w-1/3 text-white text-hover shadow-md"
          onClick={handlePayment}
        >
          Pay now!
        </button>
      </div>
    </div>
  );
}

export default PanierDetails;
