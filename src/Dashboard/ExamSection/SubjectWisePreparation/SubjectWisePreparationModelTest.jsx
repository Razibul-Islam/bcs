import React from "react";
import { Link } from "react-router-dom";

const SubjectWisePreparationModelTest = () => {
  return (
    <div>
      <Link
        to="/dashboard/subject-wise/routine"
        className="bg-orange-500 px-5 py-1 text-white rounded-sm shadow-lg"
      >
        Rutine
      </Link>
    </div>
  );
};

export default SubjectWisePreparationModelTest;
