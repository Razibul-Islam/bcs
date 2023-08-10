import React from "react";
import ExamSection from "./Home/ExamSection";
import StudySection from "./Home/StudySection";
import Banner from "./Home/Banner";
import PrimiumSectrion from "./Home/PrimiumSectrion";

const Home = () => {
  return (
    <div>
      <Banner></Banner>
      <ExamSection></ExamSection>
      <StudySection></StudySection>
      <PrimiumSectrion />
    </div>
  );
};

export default Home;
