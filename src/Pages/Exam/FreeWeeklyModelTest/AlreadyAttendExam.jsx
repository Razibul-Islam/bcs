import React from 'react';
import { Link } from 'react-router-dom';

const AlreadyAttendExam = () => {
    return (
        <div className='text-center p-5 mt-10'>
            <p className='my-3'>আপনি ইতিমধ্যে পরীক্ষায় অংশগ্রহণ করেছেন ।</p>
            <p className='my-3'>পরবর্তী পরীক্ষার রুটিন ও সিলেবাস জানতে "রুটিনে" ক্লিক করুন ।</p>
            <p className='my-3'>আপনার পরীক্ষার ফলাফল জানতে "ফলাফল" বাটনে ক্লিক করুন ।</p>
            <p className='mt-3 mb-10'>পরীক্ষায় আপনার অবস্থান জানতে "মেরিট লিস্ট" বাটনে ক্লিক করুন ।</p>

            <Link to='/' className='bg-pink-500 px-5 py-1 text-white'>Back</Link>
        </div> 
    );
};

export default AlreadyAttendExam;