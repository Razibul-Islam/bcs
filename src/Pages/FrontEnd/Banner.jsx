import React from 'react';

const Banner = () => {
    return (
        <div className='banner-bg'>
            <div className='flex justify-between items-center h-full pt-10 max-w-6xl  mx-auto'>
                <div>
                    <h2 className='text-4xl font-bold text-[#fff]'>BCS Pioneer . . .</h2>
                    <h1 className='text-4xl mt-3 font-bold text-[#fff]'>সমস্ত <span className='text-[#ff42c0]'>প্রস্তুতি</span> ঘরে বসে এক অ্যাপে</h1>
                    <button className='mt-5 px-5 py-2 bg-[white] font-bold'>আরো জানুন</button>
                </div>
                <img className='w-1/2 mt-12' src="https://pngimg.com/d/student_PNG104.png" alt="" />

            </div>
        </div>
    );
};

export default Banner;