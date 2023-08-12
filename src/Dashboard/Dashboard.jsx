import { DashboardOutlined } from '@mui/icons-material';
import React, { useState } from 'react';
import { Link, Outlet } from 'react-router-dom';
import HomeIcon from '@mui/icons-material/Home';
import ImportContactsIcon from '@mui/icons-material/ImportContacts';
import OndemandVideoIcon from '@mui/icons-material/OndemandVideo';
import PictureAsPdfIcon from '@mui/icons-material/PictureAsPdf';
import HelpIcon from '@mui/icons-material/Help';
import CreditScoreIcon from '@mui/icons-material/CreditScore';

const Dashboard = () => {

    const [study, setStudy] = useState(false)



    return (
        <div>
            <div className='bg-[#1F2937] w-full p-5 flex justify-between'>
                <Link className='text-white w-[270px]' >BCS Pioneer</Link>
                <div className='flex justify-between items-center w-full'>
                    <Link className='text-white flex items-center gap-2'> <HomeIcon /> / Home </Link>
                    <button className='bg-slate-700 px-5 py-1 text-white '>Log Out</button>
                </div>
            </div>
            <section className='flex justify-between gap-5'>
                <div className='bg-[#1F2937] w-[250px] min-h-screen'>
                    <Link to='/dashboard' className='text-slate-100  px-8 py-2 flex items-center gap-4 hover:bg-slate-900'><DashboardOutlined /> Dashboard</Link>
                    <button onClick={() => setStudy(!study)} to='/dashboard' className='text-slate-100  w-full px-8 py-2 flex items-center gap-4 hover:bg-slate-900'><ImportContactsIcon /> Study Section</button>
                    <div className={`${study ? 'text-sm' : 'hidden'}`}>
                        <Link to='/dashboard/video-section' className='text-slate-100  px-8 py-2 flex items-center gap-4 hover:bg-slate-900'><OndemandVideoIcon /> Video</Link>
                        <Link to='/dashboard/pdf-section' className='text-slate-100  px-8 py-2 flex items-center gap-4 hover:bg-slate-900'><PictureAsPdfIcon /> PDF</Link>
                        <Link to='/dashboard/job-solution-topically' className='text-slate-100  px-8 py-2 flex items-center gap-4 hover:bg-slate-900 '><CreditScoreIcon />Job Solution Topically</Link>
                        <Link to='/dashboard/past-jobs-question' className='text-slate-100  px-8 py-2 flex items-center gap-4 hover:bg-slate-900'><HelpIcon />Past Jobs Questions</Link>
                        <Link to='/dashboard/read-topicaly' className='text-slate-100  px-8 py-2 flex items-center gap-4 hover:bg-slate-900'><CreditScoreIcon />Read Topically</Link>
                        
                        <Link to='/dashboard/past-bcs-question' className='text-slate-100  px-8 py-2 flex items-center gap-4 hover:bg-slate-900 '><CreditScoreIcon />BCS Past Questions</Link>
                    </div>
                </div>
                <div className='w-[calc(100%-250px)]'>
                    <Outlet/>
                </div>
            </section>

        </div>
    );
};

export default Dashboard;