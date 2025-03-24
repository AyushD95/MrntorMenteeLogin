import React from "react";
import CardMaker from "../components/mentee-component/CardMaker";
import "./mentee-dash.css";

const MenteeDashboard = () => {
  return (
    <div className="flex flex-col items-center justify-center h-screen">
      <header>
        <h2 className="title">MAKE YOUR MENTEE ID-CARD</h2>
      </header>
      <CardMaker />
    </div>
  );
};

export default MenteeDashboard;
