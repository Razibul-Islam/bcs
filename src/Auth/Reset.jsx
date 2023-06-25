import React from 'react';

const Reset = () => {
    return (
        <div className='banner-bg flex justify-center items-center'>
            <div className='w-96 mx-auto p-10 rounded-lg shadow form-bg bg-[#34728153] mt-14'>
                <p className='text-white'>আপনার ইমেইল প্রবেশ করান</p>
                <input type="email"  className='p-2 block w-full rounded border border-[#7310c3] focus:outline-none mt-5' />
                <button className='px-5 py-2  bg-gradient-to-tr from-[#87ABDB] mt-4 to-[#346F7F] text-white font-bold'>পাঠান</button>
            </div>
            
        </div>
    );
};

export default Reset;