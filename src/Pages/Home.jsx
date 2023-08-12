import React from "react";
import Banner from "./Banner";
import ExamSection from "./ExamSection";
import StudySection from "./StudySection";
import PrimiumSectrion from "./PrimiumSectrion";

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
