import React from 'react';
import { Link } from 'react-router-dom';

const BcsForExprienced = () => {
    return (
        <div>

            <h1 className='my-5 text-center text-xl '>অভিজ্ঞদের বিসিএস প্রস্তুতি</h1>

            <div>
                <Link to='/FreeWeaklyModelTestForExprienced' className='px-5 block w-96 mx-auto rounded-2xl py-1 text-black text-center my-3 bg-[#FFC000]'>ফ্রি সাপ্তাহিক মডেল টেস্ট</Link>
                <Link to='/ExpriencedSubjectMixPrepratioinOneFourty' className='px-5 block w-96 mx-auto rounded-2xl py-1 text-black text-center my-3 bg-[#FFC000]'>বিষয়ভিত্তিক মিক্সড প্রস্তুতি - ১৪০ দিনে সম্পূর্ণ সিলেবাস</Link>
                <Link className='px-5 block w-96 mx-auto rounded-2xl py-1 text-black text-center my-3 bg-[#FFC000]'>বিষয়ভিত্তিক বিসিএস প্রস্তুতি - ১০০ দিনে সম্পূর্ণ সিলেবাস</Link>
                <Link className='px-5 block w-96 mx-auto rounded-2xl py-1 text-black text-center my-3 bg-[#FFC000]'>৪৫তম বিসিএস ফাইনাল মডেল টেস্ট ও রিভিশন</Link>
                <Link className='px-5 block w-96 mx-auto rounded-2xl py-1 text-black text-center my-3 bg-[#FFC000]'>৪৫তম বিসিএস প্রস্তুতি - গুরুত্বপূর্ণ টপিকের উপর পরীক্ষা</Link>
                <Link className='px-5 block w-96 mx-auto rounded-2xl py-1 text-black text-center my-3 bg-[#FFC000]'>৪৫তম বিসিএস সমন্বিত প্রস্তুতি - ৭৫ দিনে সম্পূর্ণ সিলেবাস</Link>
                <Link className='px-5 block w-96 mx-auto rounded-2xl py-1 text-black text-center my-3 bg-[#FFC000]'>৪৫তম বিসিএস সমন্বিত প্রস্তুতি - ৭৫ দিনে সম্পূর্ণ সিলেবাস</Link>
                <Link className='px-5 block w-96 mx-auto rounded-2xl py-1 text-black text-center my-3 bg-[#FFC000]'>Live Written লিখিত প্রস্তুতি</Link>
            </div>
        </div>
    );
};

export default BcsForExprienced;