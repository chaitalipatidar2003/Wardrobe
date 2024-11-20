import React from "react";
import CardGrid from "./card-items/CardGrid";

function TraditionalWearPage() {
  return (
    <div className="p-6 text-center">
      <h1 className="text-3xl font-bold text-indigo-600 mb-4 ">Traditional Wear</h1>
      <p className="text-lg text-gray-700 m-6">
      <b>
        Manage all your Traditional wear clothes here.
        </b>
      </p>

      <CardGrid/>
      <div>
   
      </div>
    </div>
  );
}

export default TraditionalWearPage;
