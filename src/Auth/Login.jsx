import React from 'react';
import { Link } from 'react-router-dom';

const Login = () => {
    return (
        <div className='banner-bg flex justify-center items-center'>
            <div className='w-96 mx-auto p-10 rounded-lg shadow form-bg bg-[#34728153]'>
                <h1 className='text-2xl font-bold text-white'>লগইন করুন</h1>

                <div className='mt-5'>
                    <input type="email" className='p-2 block w-full rounded-sm border border-[#7310c3] focus:outline-none mt-5' placeholder='আপনার ইমেইল প্রবেশ করান' />
                    <input type="password" className='p-2 block w-full rounded-sm border border-[#7310c3] focus:outline-none mt-5' placeholder='গোপন নাম্বার প্রবেশ করান' />
                    <div className='mt-3 flex justify-between items-center'>
                        <span className='flex gap-2 text-white'>
                            <input type="checkbox" name="" id="" />
                            <label htmlFor="check">আমাকে মনে রাখুন </label>
                        </span>
                        <Link to='/reset' className='text-[#ff45ff] text-sm underline'>পাসওয়ার্ড ভুলে গেছেন ?</Link>
                    </div>
                    <div className='flex justify-between items-center mt-5'>
                        <button className='px-5 p-2 bg-white  text-[#013646]  font-bold'>লগইন</button>
                        <Link to='/sign-up' className='text-[#ffffff] text-sm '>নতুন একাউন্ট তৈরি করুন</Link>
                    </div>
                </div>

                <div className='flex  gap-4'>
                    <button className='bg-white mt-5 rounded  justify-around items-center p-2 w-full flex'>
                        <img className='h-8' src="https://cdn-icons-png.flaticon.com/256/2875/2875404.png" alt="" />
                        <p> গুগল লগইন </p>
                    </button>
                    <button className='bg-white mt-5 rounded  justify-around items-center p-2 w-full flex'>
                        <img className='h-8' src="https://cdn.iconscout.com/icon/free/png-256/free-facebook-logo-2019-1597680-1350125.png" alt="" />
                        <p> ফেসবুক লগইন </p>
                    </button>
                </div>
            </div>
        </div>
    );
};

export default Login;