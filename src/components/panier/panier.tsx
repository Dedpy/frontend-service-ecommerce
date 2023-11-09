import React, { useContext } from "react";
import UserContext from "../../context/userContext";

function PanierDetails() {
  const auth = useContext(UserContext);
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
          <p className="text-end font-bold">
            $
            {auth.commandeDetails
              .reduce(
                (total, item) => total + item.product.price * item.quantite,
                0
              )
              .toFixed(2)}
          </p>
        </div>
      </div>
      <div className="flex items-center justify-center">
        <button className="transition-colors text-sm bg-blue-600  hover:bg-blue-700 p-2 rounded-sm w-1/3 text-white text-hover shadow-md">
          Pay now!
        </button>
      </div>
    </div>
  );
}

export default PanierDetails;
