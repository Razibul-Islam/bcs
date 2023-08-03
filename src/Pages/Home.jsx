import React from 'react';
import ExamSection from './FrontEnd/ExamSection';
import StudySection from './FrontEnd/StudySection';
import Banner from './FrontEnd/Banner';
import PrimiumSectrion from './FrontEnd/PrimiumSectrion';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <ExamSection></ExamSection>
            <StudySection></StudySection>
            <PrimiumSectrion/>
        </div>
    );
};

export default Home;