import React from "react";

function PanierDetails() {
  return (
    <div className="flex flex-col p-4 gap-4 text-lg font-semibold shadow-md border rounded-sm">
      <div className="flex flex-row justify-between">
        <p className="text-gray-600">item 1</p>
        <p className="text-end font-bold">$99.98</p>
      </div>

      <hr className="bg-gray-200 h-0.5" />
      <div className="flex flex-row justify-between">
        <p className="text-gray-600">Total</p>
        <div>
          <p className="text-end font-bold">$103.88</p>
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
