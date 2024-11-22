import React from "react";
import CardGrid from "./card-items/CardGrid";

function CasualWearPage() {
  return (
    <div className="p-6 text-center">
      <h1 className="text-3xl font-bold text-indigo-600 mb-4 ">Casual Wear</h1>
      <p className="text-lg text-gray-700 m-6">
      <b>
        Manage all your casual wear clothes here.
        </b>
      </p>

      <CardGrid category="Casual Wear"/>
      <div>
   
      </div>
    </div>
  );
}

export default CasualWearPage;
