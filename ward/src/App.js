import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import OptionsPage from "./pages/options";
import Create from "./pages/create";
import ClothesCategoriesPage from "./pages/ClothCategories";
import HomeWearPage from "./pages/category-pages/HomeWearPage";
import CasualWearPage from "./pages/category-pages/CasualWearPage";
import PartyWearPage from "./pages/category-pages/PartyWearPage";
import TraditionalWearPage from "./pages/category-pages/TraditionalWearPage";
import Header from "./Header";
import WardrobeSidebar from "./pages/WardrobeSidebar";
import RemoveCloth from "./RemoveCloth";
import SwiftCloth from "./SwiftCloth";
import AddCloth from "./pages/AddCloth";
import ClothDetails from "./pages/ClothDetails";

const App = () => {

  
  return (
    <>
      <Header />
      <Routes>
        {/* Main Routes */}
        <Route path="/" element={<Home />} />
        <Route path="/options" element={<OptionsPage />} />
        <Route path="/create" element={<Create />} />

       {/* Wardrobe Management Routes */}
       <Route path="/wardrobesidebar" element={<WardrobeSidebar />}>
          {/* Default Page */}
          <Route
            index
            element={<AddCloth />}
          />
          <Route path="add-clothes" element={<AddCloth />} />
          <Route path="remove-clothes" element={<RemoveCloth />} />
          <Route path="swift-clothes" element={<SwiftCloth />} />
        </Route>

        {/* Clothes Categories Routes */}
        <Route path="/cloth-category" element={<ClothesCategoriesPage />}>
          <Route path="home-wear" element={<HomeWearPage />} />
          <Route path="casual-wear" element={<CasualWearPage />} />
          <Route path="party-wear" element={<PartyWearPage />} />
          <Route path="traditional-wear" element={<TraditionalWearPage />} />
        </Route>
        <Route path="/clothes/:id" element={<ClothDetails/>} />
      </Routes>
    </>
  );
};

export default App;
