import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import logo from '../../assets/logo.png'
import { useAuthState, useSignOut } from 'react-firebase-hooks/auth';
import auth from '../../Auth/Firebase.int';
import { useState } from 'react';
import MenuIcon from '@mui/icons-material/Menu';
import Loading from '../../Loader/Loading';

const Navbar = () => {

    const [open, setOpen] = useState(false)
    const [user, loading, error] = useAuthState(auth);
    const [signOut, load, err] = useSignOut(auth);
    const [userRole, setUserRole] = useState('')

    const currentUrl = window.location.href;

    const handleUser = () => {
        const url = `http://localhost:5000/get-user-email?email=${user?.email}`;
        fetch(url)
            .then(res => res.json())
            .then(data => setUserRole(data.Role))
    }




    if (loading) {
        return <Loading />
    }

    if (currentUrl.includes('/dashboard')) {
        return;
    }


    if (user) {
        handleUser()
    }

    return (
        <section>
            <div className='bg-teal-500 py-5 px-5 nav-bg flex justify-between items-center sticky top-0 z-50'>
                <div>
                    <Link>BCS Pionner</Link>
                </div>
                <div className='md:flex hidden md:block justify-center gap-5 text-[#c3c3e1] uppercase font-light'>
                    <Link className='text-[#0d0c0a]' to='/'>হোম</Link>
                    <Link className='text-[#0d0c0a]'>প্যাকেজ</Link>
                    <Link className='text-[#0d0c0a]'>আমাদের সম্পর্কে</Link>
                    <Link className='text-[#0d0c0a]' to='/contact'>যোগাযোগ</Link>
                    {
                        userRole == 'Admin' ? <Link className='text-[#0d0c0a]' to='/dashboard'>ড্যাশবোর্ড</Link> : ''
                    }
                </div>
                {
                    user ? <button onClick={() => signOut()} className='bg-[#ff4558]  hidden md:block px-5 py-2 text-[#ffffff] font-bold rounded-sm'>লগ আউট</button> : <Link to='/login' className='bg-[#0d0c0a]  hidden md:block px-5 py-2 text-[#ffffff] font-bold rounded-sm'>লগইন</Link>
                }
                <button onClick={() => setOpen(!open)} className='md:hidden bg-[#ffffff] px-2 rounded-sm text-teal-500'><MenuIcon /></button>
            </div>
            <div className={`${open ? 'block' : 'hidden'}`}>
                <Link onClick={() => setOpen(!open)} className='text-[#fff] block py-2 bg-teal-500 px-3' to='/'>হোম</Link>
                <Link onClick={() => setOpen(!open)} className='text-[#fff] block py-2 bg-teal-500 px-3'>প্যাকেজ</Link>
                <Link onClick={() => setOpen(!open)} className='text-[#fff] block py-2 bg-teal-500 px-3'>আমাদের সম্পর্কে</Link>
                <Link onClick={() => setOpen(!open)} className='text-[#fff] block py-2 bg-teal-500 px-3' to='/contact'>যোগাযোগ</Link>
                {
                    userRole == 'Admin' ? <Link className='text-[#fff] block py-2 bg-teal-500 px-3' onClick={() => setOpen(!open)} to='/dashboard'>ড্যাশবোর্ড</Link> : ''
                }
                {
                    user ? <button onClick={() => signOut()} className='bg-[#ff4558]   md:block px-5 py-2 text-[#ffffff] font-bold rounded-sm'>লগ আউট</button> : <Link to='/login' className='bg-[#0d0c0a]   md:block px-5 py-2 text-[#ffffff] font-bold rounded-sm'>লগইন</Link>
                }
            </div>
        </section>
    );
};

export default Navbar;