import React from "react";
import CardMaker from "../components/mentor-component/CardMaker";
import "./mentor-dash.css";

const MentorDashboard = () => {
  return (
    <div className="flex flex-col items-center justify-center h-screen">
      <header>
        <h2 className="title">MAKE YOUR MENTOR ID-CARD</h2>
      </header>
      <CardMaker />
    </div>
  );
};

export default MentorDashboard;
