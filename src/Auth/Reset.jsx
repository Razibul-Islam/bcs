import React from "react";

const Reset = () => {
  return (
    <div className="banner-bg flex justify-center items-center">
      <div className="w-96 mx-auto p-10 rounded-lg shadow form-bg bg-[#ffffff53] mt-14">
        <p className="text-[#FFC000]">আপনার ইমেইল প্রবেশ করান</p>
        <input
          type="email"
          className="p-2 block w-full rounded border border-[#7310c3] focus:outline-none mt-5"
        />
        <button className="px-5 py-2  bg-[#FFC000] mt-4  text-white font-bold">
          পাঠান
        </button>
      </div>
    </div>
  );
};

export default Reset;
