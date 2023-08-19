import React from "react";
import { Link, useNavigate } from "react-router-dom";
import auth from "./Firebase.int";
import {
  useAuthState,
  useCreateUserWithEmailAndPassword,
  useUpdateProfile,
} from "react-firebase-hooks/auth";
import { useState } from "react";
import { toast } from "react-toastify";

const SignUP = () => {
  const [createUserWithEmailAndPassword, user, loading, error] =
    useCreateUserWithEmailAndPassword(auth);
  const [updateProfile, updating, err] = useUpdateProfile(auth);
  const [displayName, setDisplayName] = useState("");
  const [photoURL, setphotoURL] = useState("");
  const [users, load, er] = useAuthState(auth);
  const navigate = useNavigate();

  const handleCreateAccount = (e) => {
    e.preventDefault();
    const email = e.target.email.value;
    const password = e.target.password.value;
    const displayName = e.target.name.value;
    const img = e.target.photo.files[0];
    var formData = new FormData();
    formData.append("file", img);

    fetch("https://upload.rainbosoft.com/", {
      method: "POST",
      body: formData,
    })
      .then((response) => response.json())
      .then((data) => {
        if (data) {
          const photoURL = data.url;
          createUserWithEmailAndPassword(email, password);
          setDisplayName(displayName);
          setphotoURL(photoURL);
        }
      });
  };

  if (loading || updating) {
    return <>Loading ...........</>;
  }

  if (error) {
    toast.error(err.message);
  }

  if (user) {
    updateProfile({ displayName, photoURL });
    navigate("/");
  }

  console.log(users);

  return (
    <div className="banner-bg flex justify-center items-center">
      <div className="w-96 mx-auto p-10 rounded-lg shadow form-bg bg-[#ffffff2d] mt-14">
        <h1 className="text-2xl font-bold text-[#FFC000]">
          নতুন একাউন্ট তৈরি করুন
        </h1>

        <form onSubmit={handleCreateAccount} className="mt-5">
          <input
            type="text"
            className="p-2 block w-full rounded-sm border border-[#7310c3] focus:outline-none mt-5"
            name="name"
            placeholder="আপনার নাম প্রবেশ করান"
          />
          <input
            type="email"
            className="p-2 block w-full rounded-sm border border-[#7310c3] focus:outline-none mt-5"
            name="email"
            placeholder="আপনার ইমেইল করান"
          />
          <input
            type="file"
            className="p-2 block w-full rounded-sm border border-[#7310c3] focus:outline-none mt-5"
            name="photo"
            placeholder="আপনার ছবি করান"
          />
          <input
            type="password"
            className="p-2 block w-full rounded-sm border border-[#7310c3] focus:outline-none mt-5"
            name="password"
            placeholder="গোপন নাম্বার প্রবেশ করান"
          />

          <div className="mt-3 flex justify-between items-center">
            <span className="flex gap-2 text-black">
              <input type="checkbox" name="" id="" />
              <label htmlFor="check">আমাকে মনে রাখুন </label>
            </span>
          </div>
          <div className="flex justify-between items-center mt-5">
            <button className="px-5 p-2 bg-[#FFC000]  text-[#484646]  font-bold">
              একাউন্ট তৈরি করুন
            </button>
            <Link to="/login" className="text-[#000000] text-sm ">
              লগইন করুন
            </Link>
          </div>
        </form>
      </div>
    </div>
  );
};

export default SignUP;
