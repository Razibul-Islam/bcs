import React from 'react';
import ExamSection from './FrontEnd/ExamSection';
import StudySection from './FrontEnd/StudySection';
import Banner from './FrontEnd/Banner';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <ExamSection></ExamSection>
            <StudySection></StudySection>
        </div>
    );
};

export default Home;