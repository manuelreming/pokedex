import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import { Route, Routes } from "react-router-dom";
import HomePage from "./pages/HomePage";
import PokedexPage from "./pages/PokedexPage";
import PokeDetailPage from "./pages/PokeDetailPage";
import ProtectedRoutes from "./pages/ProtectedRoutes";

function App() {



  return (
    <div className="app">
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route element = {<ProtectedRoutes/>}>
          <Route path="/pokedex" element={<PokedexPage  />} />
          <Route path="/pokedex/:name" element={<PokeDetailPage />} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
