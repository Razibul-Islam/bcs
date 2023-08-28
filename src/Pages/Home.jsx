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
      {/* <h1 className="text-center my-10 text-2xl font-bold text-slate-400">The site is under development.</h1> */}
    </div>
  );
};

export default Home;
