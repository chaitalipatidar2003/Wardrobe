import React from "react";
import CardGrid from "./card-items/CardGrid";

function HomeWearPage() {
  return (
    <div className="p-6 text-center">
      <h1 className="text-3xl font-bold text-indigo-600 mb-4 ">Home Wear</h1>
      <p className="text-lg text-gray-700 m-6">
      <b>
        Manage all your home wear clothes here.
        </b>
      </p>

      <CardGrid category="Home Wear"/>
      <div>
   
      </div>
    </div>
  );
}

export default HomeWearPage;
