import React from 'react';
import { Link } from 'react-router-dom';

const SignUP = () => {
    return (
        <div className='banner-bg flex justify-center items-center'>
            <div className='w-96 mx-auto p-10 rounded-lg shadow form-bg bg-[#34728153] mt-14'>
                <h1 className='text-2xl font-bold text-white'>নতুন একাউন্ট তৈরি করুন</h1>

                <div className='mt-5'>
                <input type="text" className='p-2 block w-full rounded-sm border border-[#7310c3] focus:outline-none mt-5' placeholder='আপনার নাম প্রবেশ করান' />
                    <input type="email" className='p-2 block w-full rounded-sm border border-[#7310c3] focus:outline-none mt-5' placeholder='আপনার ইমেইল করান' />
                    <input type="file" className='p-2 block w-full rounded-sm border border-[#7310c3] focus:outline-none mt-5' placeholder='আপনার ছবি করান' />
                    <input type="password" className='p-2 block w-full rounded-sm border border-[#7310c3] focus:outline-none mt-5' placeholder='গোপন নাম্বার প্রবেশ করান' />
                    
                    <div className='mt-3 flex justify-between items-center'>
                        <span className='flex gap-2 text-white'>
                            <input type="checkbox" name="" id="" />
                            <label htmlFor="check">আমাকে মনে রাখুন </label>
                        </span>
                    </div>
                    <div className='flex justify-between items-center mt-5'>
                        <button className='px-5 p-2 bg-white  text-[#013646]  font-bold'>একাউন্ট তৈরি করুন</button>
                        <Link to='/login' className='text-[#ffffff] text-sm '>লগইন করুন</Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SignUP;