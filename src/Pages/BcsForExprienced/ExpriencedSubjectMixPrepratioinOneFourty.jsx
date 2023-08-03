// ExpriencedSubjectMixPrepratioinOneFourty


import React from 'react';
import DateRangeIcon from '@mui/icons-material/DateRange';
import { Link } from 'react-router-dom';
import AssignmentIcon from '@mui/icons-material/Assignment';
import ArchiveIcon from '@mui/icons-material/Archive';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import AutoStoriesIcon from '@mui/icons-material/AutoStories';
import ListAltIcon from '@mui/icons-material/ListAlt';

const ExpriencedSubjectMixPrepratioinOneFourty = () => {
    return (
        <div className='p-5'>
            <h1 className='text-center my-4'>ফ্রি সাপ্তাহিক মডেল টেস্ট</h1>
            <button className='bg-[#ffae0b] text-center px-5 py-1 rounded-3xl w-60 mx-auto block text-white'>Start Live Exam </button>
            <div className='my-20  max-w-6xl mx-auto grid grid-cols-2 md:grid-cols-3 gap-5'>
                <Link className='text-center h-40 bg-[#010000] p-5 text-white  flex justify-center flex-col items-center rounded shadow-lg'>
                    <DateRangeIcon/>
                     <p className='mt-3 text-xl'>Routine</p>
                </Link>
                <Link className='text-center h-40 bg-[#000000] text-white p-5  flex justify-center flex-col items-center rounded shadow-lg'>
                    <AssignmentIcon/>
                     <p className='mt-3 text-xl'>Result</p>
                </Link>
                <Link className='text-center h-40 bg-[#000000] text-white p-5  flex justify-center flex-col items-center rounded shadow-lg'>
                    <ArchiveIcon/>
                     <p className='mt-3 text-xl'>Archive</p>
                </Link>
                <Link className='text-center h-40 bg-[#000000] text-white p-5  flex justify-center flex-col items-center rounded shadow-lg'>
                    <FavoriteBorderIcon/>
                     <p className='mt-3 text-xl'>Favorite</p>
                </Link>
                <Link className='text-center h-40 bg-[#000000] text-white p-5  flex justify-center flex-col items-center rounded shadow-lg'>
                    <AutoStoriesIcon/>
                     <p className='mt-3 text-xl'>Syllabus</p>
                </Link>
                <Link className='text-center h-40 bg-[#000000] p-5  text-white flex justify-center flex-col items-center rounded shadow-lg'>
                    <ListAltIcon/>
                     <p className='mt-3 text-xl'>Merit List</p>
                </Link>
            </div>
        </div>
    );
};

export default ExpriencedSubjectMixPrepratioinOneFourty;