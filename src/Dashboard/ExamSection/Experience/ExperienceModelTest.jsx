import React from "react";
import { Link } from "react-router-dom";

const ExperienceModelTest = () => {
  return (
    <div>
      <Link
        to="/dashboard/experience/routine"
        className="bg-orange-500 px-5 py-1 text-white rounded-sm shadow-lg"
      >
        Rutine
      </Link>
    </div>
  );
};

export default ExperienceModelTest;
