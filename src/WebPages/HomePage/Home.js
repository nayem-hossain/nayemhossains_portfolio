import React from "react";
import "./Home.css";
import Navbar from "../../SharedComponents/NavigationBar/Navbar";
import Profile from "./ProfileSection/Profile";
import Footer from "../../SharedComponents/Footer/Footer";
import ProfessionalResume from "./ProfessionalResume/ProfessionalResume";
import Profession from "./What_I_do/Profession";
import Portfolio from "./PortfolioSection/Portfolio";


const Home = () => {
  return (
    <div className="bg-darkBackground">
      <Navbar></Navbar>
      <Profile></Profile>
      <Profession></Profession>
      <ProfessionalResume></ProfessionalResume>
      <Portfolio></Portfolio>
      <Footer></Footer>
    </div>
  );
};

export default Home;
