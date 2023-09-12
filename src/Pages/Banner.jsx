import React from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import auth from "../Auth/Firebase.int";
import Loading from "../Loader/Loading";
import { useNavigate } from "react-router-dom";

const Banner = () => {

  const navigate = useNavigate()
  const [user, loading, error] = useAuthState(auth);

  if(loading){
    return <Loading/>
  }

  if(!user){
    navigate('/login')
  }

  return (
    <div className="banner-bg p-5 md:p-2 md:block hidden">
      <div className="md:flex justify-between items-center h-full pt-10 max-w-6xl  mx-auto">
        <div className="mt-20">
          <h2 className="text-4xl font-bold text-[#3ccbbf]">
            BCS Pioneer . . .
          </h2>
          <h1 className="text-4xl mt-3 font-bold text-[#3ccbbf]">
            সমস্ত <span className="text-teal-500">প্রস্তুতি</span> ঘরে বসে এক
            অ্যাপে
          </h1>
          <button className="mt-5 shadow-2xl px-5 py-2 card-1 text-white font-bold">
            আরো জানুন
          </button>
        </div>
        <img
          className="md:w-1/2 mt-12"
          src="https://cdni.iconscout.com/illustration/premium/thumb/online-study-2710520-2261196.png"
          alt=""
        />
      </div>
    </div>
  );
};

export default Banner;