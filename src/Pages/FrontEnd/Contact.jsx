import React from "react";
import { Link } from "react-router-dom";

const Contact = () => {
  return (
    <div className="bg-[#ffffff] h-full">
      <div className="h-72 w-full flex justify-center items-center bg-[#ffffff] mt-[-100px] text-slate-400">
        <h5 className="flex justify-center gap-5 mt-10">
          <Link>হোম -</Link>|<Link>যোগাযোগ</Link>
        </h5>
      </div>
      <div className="p-5">
        <button className="bg-[#fff1a9] flex items-center px-5 py-2 w-60 mx-auto rounded gap-5 text-[black] my-3">
          <img
            className="h-8 "
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/b/be/Facebook_Messenger_logo_2020.svg/2048px-Facebook_Messenger_logo_2020.svg.png"
            alt=""
          />{" "}
          Messanger
        </button>
        <button className="bg-[#fff1a9] flex items-center px-5 py-2 w-60 mx-auto rounded gap-5 text-[black] my-3">
          <img
            className="h-8 "
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/6/6b/WhatsApp.svg/2044px-WhatsApp.svg.png"
            alt=""
          />{" "}
          WhatsApp
        </button>
        <button className="bg-[#fff1a9] flex items-center px-5 py-2 w-60 mx-auto rounded gap-5 text-[black] my-3">
          <img
            className="h-8 "
            src="https://cdn4.iconfinder.com/data/icons/social-media-logos-6/512/112-gmail_email_mail-512.png"
            alt=""
          />{" "}
          Email
        </button>
        <button className="bg-[#fff1a9] flex items-center px-5 py-2 w-60 mx-auto rounded gap-5 text-[black] my-3">
          <img
            className="h-8 "
            src="https://i.pinimg.com/originals/84/4e/8c/844e8cd4ab26c82286238471f0e5a901.png"
            alt=""
          />{" "}
          Phone
        </button>

        <p className="text-center text-[#000000]  p-3">
          {" "}
          আমাদের কল করুন সকাল ৯ ট থেকে রাত <p className="font-serif">
            ১০ টা
          </p>{" "}
          পর্যন্ত
        </p>

        <p className="text-center text-[#201f1d]  p-3">
          আমাদের সার্ভিস ও একাডেমিক বিষয় সম্পর্কে যে কোনো আলোচনার জন্য. আমাদের
          ফেসবুক গ্রুপ এ জয়েন করুন
        </p>
        <button className="bg-[#FFC000] flex items-center px-5 py-2 w-60 mx-auto rounded gap-5 b-5 text-[#000000] my-3">
          <img
            className="h-8 "
            src="https://cdn-icons-png.flaticon.com/512/5968/5968764.png"
            alt=""
          />{" "}
          Facebook Group
        </button>
      </div>
    </div>
  );
};

export default Contact;
