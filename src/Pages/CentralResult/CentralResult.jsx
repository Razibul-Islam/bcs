import React, { useEffect, useState } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { Link } from "react-router-dom";
import auth from "../../Auth/Firebase.int";

const CentralResult = () => {
  const [result, setResult] = useState([])
const [user, loading , error] = useAuthState(auth);




  useEffect(()=>{
    const url = `http://localhost:5000/get-all-result?email=${user?.email}`;
    fetch(url)
    .then(res => res.json())
    .then(data => setResult(data))
  }, [user?.email])

  console.log(result);


  if(loading){
    return <div>Loading ......</div>
  }

  return (
    <div className="mt-5 p-5">
          <h1 className="text-center">Central Result</h1>

          <div className="mt-10 w-72 mx-auto ">
              {
                result.map(res => <Link to={`/centrul-result/${res._id}`} className="block py-1 bg-teal-500 mt-3 text-center text-white rounded-3xl">{res.examDate} ({res.examName})</Link>)
              }
          </div>
    </div>
  );
};

export default CentralResult;
