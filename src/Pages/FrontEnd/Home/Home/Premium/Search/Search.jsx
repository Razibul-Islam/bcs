import React, { useState } from "react";
import RemoveRedEyeIcon from "@mui/icons-material/RemoveRedEye";
import VisibilityOffIcon from "@mui/icons-material/VisibilityOff";

const Search = () => {
  const [eyeon, setEyeon] = useState(false);
  return (
    <div className="max-w-6xl mx-auto px-5">
      <h1 className="text-center mt-5 text-lg">প্রশ্ন সার্চ করুন</h1>
      <div className="flex justify-center mt-14 items-center">
        <input
          className="border border-teal-700 outline-none w-72 p-2 rounded-md"
          type="search"
          placeholder="Search..."
        />
        <button className="ml-3 bg-teal-300 px-4 rounded-md py-2">
          Search
        </button>
        <div className="ml-5">
          {eyeon ? (
            <RemoveRedEyeIcon onClick={() => setEyeon(!eyeon)} />
          ) : (
            <VisibilityOffIcon onClick={() => setEyeon(!eyeon)} />
          )}
        </div>
      </div>
    </div>
  );
};

export default Search;
