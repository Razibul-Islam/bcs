import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
    return (
        <div className='bg-[#ffffff34] py-5 px-5 nav-bg flex justify-between items-center'>
            <div>
                <button className='bg-[#3c127c] py-3 px-4 text-white'>BCS</button>
                <button  className='bg-[#ffffff5f] py-3 px-4'>PIONNER</button>
            </div>
            <div className='flex justify-center gap-5 text-[#c3c3e1] uppercase font-light'>
                <Link to='/'>হোম</Link>
                <Link>প্যাকেজ</Link>
                <Link>আমাদের সম্পর্কে</Link>
                <Link>যোগাযোগ</Link>
            </div>
            <Link to='/login' className='bg-gradient-to-tr from-[#0000008d] to-[#000000] px-5 py-2 text-[#c3c3e1] font-bold rounded-sm'>লগইন</Link>
        </div>
    );
};

export default Navbar;