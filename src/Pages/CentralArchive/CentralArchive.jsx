import React, { useState } from "react";
import SearchIcon from "@mui/icons-material/Search";
import { Link } from "react-router-dom";
const CentralArchive = () => {
  const [archive, setArchive] = useState([]);

  const currentDate = new Date();
  const day = currentDate.getDate();
  const month = currentDate.getMonth() + 1;
  const year = currentDate.getFullYear();
  const date = `${year}-${month.toString().padStart(2, '0')}-${day.toString().padStart(2, '0')}`

  useState(() => {
    const url = `https://bcspioneer.vercel.app/get-all-archive?date=${date}`
    console.log(url);
    fetch(url)
      .then(res => res.json())
      .then(data => setArchive(data))
  }, [])


  console.log(archive);

  return (
    <div>
      {/* <div className="flex justify-center mt-14 items-center">
        <input
          id="search-box"

          className="border border-teal-500 outline-none w-96 px-4 py-1 rounded-full"
          type="search"
          placeholder="Search..."
        />
        <button className="bg-teal-500 px-4 border border-teal-500 rounded-full py-1 ml-[-50px] text-white">
          <SearchIcon></SearchIcon>
        </button>
      </div> */}
      <div className="w-96 mx-auto mt-10">
       {
        archive.map(qs => <Link to={`/archive/${qs._id}`} className="bg-teal-500 block mt-3 text-center py-1 text-white rounded-3xl">{qs.startDate} ({qs.exam})</Link>)
       }
      </div>
    </div>
  );
};

export default CentralArchive;
