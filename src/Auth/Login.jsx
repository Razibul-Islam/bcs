import React from "react";
import { useAuthState, useSignInWithGoogle } from "react-firebase-hooks/auth";
import { Link, useNavigate } from "react-router-dom";
import auth from "./Firebase.int";
import { toast } from "react-toastify";
import Loading from "../Loader/Loading";

const Login = () => {
  const [signInWithGoogle, user, loading, error] = useSignInWithGoogle(auth);
  const [us, lo, er] = useAuthState(auth);
  const nvigate = useNavigate()

  if (lo) {
    return <Loading></Loading>
  }

  if (us) {
    nvigate('/')
  }



  if (user) {
    const UserEmail = user.user.email;
    const Address = "";
    const Mobile = "";
    const Package = "";
    const PackageEndDate = "";
    const PackageStartDate = "";
    const PackageType = "";
    const Role = "user";
    const UserName = user.user.displayName;
    const UserStatus = "";
    const data = {
      UserEmail,
      Address,
      Mobile,
      Package,
      PackageEndDate,
      PackageStartDate,
      PackageType,
      Role,
      UserName,
      UserStatus,
    };

    fetch(`http://localhost:5000/user-update?email=${UserEmail}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
      });
  }

  return (
    <div className="banner-bg flex justify-center items-center">
      <div className="w-96 mx-auto p-10 rounded-lg shadow form-bg bg-[#ffffff53]">
        <h1 className="text-2xl font-bold text-teal-500">লগইন করুন</h1>

        <div className="mt-5">
          <input
            type="email"
            className="p-2 block w-full rounded-sm border border-[#7310c3] focus:outline-none mt-5"
            placeholder="আপনার ইমেইল প্রবেশ করান"
          />
          <input
            type="password"
            className="p-2 block w-full rounded-sm border border-[#7310c3] focus:outline-none mt-5"
            placeholder="গোপন নাম্বার প্রবেশ করান"
          />
          <div className="mt-3 flex justify-between items-center">
            <span className="flex gap-2 text-[#000000]">
              <input type="checkbox" name="" id="" />
              <label htmlFor="check">আমাকে মনে রাখুন </label>
            </span>
            <Link to="/reset" className="text-[#000000] text-sm underline">
              পাসওয়ার্ড ভুলে গেছেন ?
            </Link>
          </div>
          <div className="flex justify-between items-center mt-5">
            <button className="px-5 p-2 bg-teal-500  text-[#ffffff]  font-bold">
              লগইন
            </button>
            <Link to="/sign-up" className="text-[#000000] text-sm ">
              নতুন একাউন্ট তৈরি করুন
            </Link>
          </div>
        </div>

        <p className="my-4">সরাসরি লগইন করতে গুগল লগইন বাটন এ ক্লিক করুন. </p>
        <div className="flex  gap-4">
          <button
            onClick={() => signInWithGoogle()}
            className="bg-[#46e0db89] mt-5 rounded space-x-2 justify-center items-center p-2 w-full flex"
          >
            <img
              className="h-8"
              src="https://cdn-icons-png.flaticon.com/256/2875/2875404.png"
              alt=""
            />
            <p> গুগল লগইন </p>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Login;
