// import React from 'react';
// import PictureAsPdfIcon from '@mui/icons-material/PictureAsPdf';
// import { Link } from 'react-router-dom';

// const PDFSection = () => {
//     return (
//         <div className='p-5'>
//            <h1 className='mt-5 flex items-center gap-5 '><PictureAsPdfIcon className=''/> PDF section</h1>
//            <div className='my-10 grid grid-cols-4 text-center gap-5'>
//                 <Link to='/dashboard/pdf-section/rutin' className='border block border-dashed p-5'> <p>Rutine</p> </Link>
//                 <Link to='/dashboard/pdf-section/weekly-bulletin' className='border block border-dashed p-5'> <p>Weekly Bulletin</p> </Link>
//                 <Link to='/dashboard/pdf-section/english-literature' className='border block border-dashed p-5'> <p>English Literature</p> </Link>
//                 <Link to='/dashboard/pdf-section/math-master' className='border block border-dashed p-5'> <p>Math Master</p> </Link>
//                 <Link to='/dashboard/pdf-section/bangla-literature' className='border block border-dashed p-5'> <p>বাংলা সাহিত্য</p> </Link>
//                 <Link to='/dashboard/pdf-section/bangla-grammer' className='border block border-dashed p-5'> <p>বাংলা ব্যাকরণ</p> </Link>
//                 <Link to='/dashboard/pdf-section/science' className='border block border-dashed p-5'> <p>Science</p> </Link>
//                 <Link to='/dashboard/pdf-section/ict' className='border block border-dashed p-5'> <p>ICT</p> </Link>
//                 <Link to='/dashboard/pdf-section/international-affairs' className='border block border-dashed p-5'> <p>আন্তর্জাতিক বিষয়াবলী</p> </Link>
//                 <Link to='/dashboard/pdf-section/bangladesh-affairs' className='border block border-dashed p-5'> <p>বাংলাদেশ বিষয়াবলী</p> </Link>
//                 <Link to='/dashboard/pdf-section/suggation' className='border block border-dashed p-5'> <p>সাজেশন</p> </Link>
//                 <Link to='/dashboard/pdf-section/resent' className='border block border-dashed p-5'> <p>সাম্প্রতিক সমাচার</p> </Link>
//            </div>
//         </div>
//     );
// };

// export default PDFSection;


import React, { useEffect, useState } from 'react';
import PictureAsPdfIcon from '@mui/icons-material/PictureAsPdf';
import Loading from '../../Loader/Loading';
import { Link } from 'react-router-dom';
import { toast } from 'react-toastify';

const PDFSection = () => {


    const [modal, setModal] = useState('hidden');
    const [loading, setLoading] = useState(false);
    const [video, setVideo] = useState([]);




    const handleAddWeeklyBulletin = (e) => {
        e.preventDefault();
        setLoading(true);
        const title = e.target.title.value;
        const section = e.target.section.value;
        const category = e.target.category.value;
        const video = e.target.video.files[0];
        const epsode = e.target.epsode.value;
        const time = e.target.time.value;

        var formData = new FormData();
        formData.append("file", video);
        fetch("https://upload.rainbosoft.com/", {
            method: "POST",
            body: formData,
        })
            .then((response) => response.json())
            .then(data => {
                const _video = data.url;
                if (data.url) {
                    const info = { title, section, category, epsode, _video, time };
                    fetch('https://bcspioneer.vercel.app/add-study-pdf', {
                        method: "POST",
                        headers: {
                            'content-type': 'application/json'
                        },
                        body: JSON.stringify(info)
                    })
                        .then(res => res.json())
                        .then(data => {
                            setModal('hidden')
                            setLoading(false);
                        });
                };
            });
    };


    const handleFilter = () => {
        setLoading(true);
        const section = document.getElementById('section_id').value;
        const url = `https://bcspioneer.vercel.app/get-study-pdf?section=${section}`;
        fetch(url)
            .then(res => res.json())
            .then(data => setVideo(data))
        setLoading(false);
    }


    const viewAll = () => {
        setLoading(true);
        const url = `https://bcspioneer.vercel.app/get-study-pdf?section=all`;
        fetch(url)
            .then(res => res.json())
            .then(data => setVideo(data))
        setLoading(false);
    }


    const handleDeletePdf = (_id)=>{
        const url = `https://bcspioneer.vercel.app/delete-pdf?_id=${_id}`;
        fetch(url, {
            method: 'DELETE'
        })
        .then(res => res.json())
        .then(data => {
            if(data){
                toast.success('মুছে ফেলা হয়েছে');
            }
        });
    };



    useEffect(() => {
        setLoading(true);
        const url = `https://bcspioneer.vercel.app/get-study-pdf?section=all`;
        fetch(url)
            .then(res => res.json())
            .then(data => setVideo(data))
        setLoading(false);
    }, []);




    if (loading) {
        return <Loading />
    }


    return (
        <div className='p-5'>
            <h1 className='mt-5 flex items-center gap-5 '><PictureAsPdfIcon className='' /> PDF section</h1>


            <div className='flex justify-between gap-3 mt-10'>
                <div className='flex gap-3'>
                    <Link to='/dashboard/pdf-section/rutin' className='bg-slate-700 text-white px-5  py-[2px] rounded-3xl'> <p>Rutine</p> </Link>
                    <button onClick={() => setModal('')} className='bg-slate-700 text-white px-5  py-[2px] rounded-3xl'>Add PDF</button>
                </div>
                <div className='flex gap-3'>
                    <select id="section_id" onChange={handleFilter} className='bg-slate-700 text-white px-5  py-[2px] rounded-2xl'>
                        <option value="all">-- Filter by Section --</option>
                        <option value="Weekly Bulletin">Weekly Bulletin</option>
                        <option value="English Literature">English Literature</option>
                        <option value="Math Master">Math Master</option>
                        <option value="বাংলা সাহিত্য">বাংলা সাহিত্য</option>
                        <option value="বাংলা ব্যাকরণ">বাংলা ব্যাকরণ</option>
                        <option value="Science">Science</option>
                        <option value="ICT">ICT</option>
                        <option value="আন্তর্জাতিক বিষয়াবলী">আন্তর্জাতিক বিষয়াবলী</option>
                        <option value="বাংলাদেশ বিষয়াবলী">বাংলাদেশ বিষয়াবলী</option>
                        <option value="সাজেশন">সাজেশন</option>
                        <option value="সাম্প্রতিক সমাচার">সাম্প্রতিক সমাচার</option>
                    </select>
                    <button onClick={viewAll} className='bg-slate-700 text-white px-5 py-[2px] rounded-2xl'>All</button>
                </div>
            </div>

            <hr className='my-5' />


            <section>
                <p>মোট পিডিএফ এর সংখ্যা -  {video.length}</p>
            </section>
            <section className='grid md:grid-cols-3 gap-5 mt-5'>
                {
                    video.map(pdf => {
                        return (
                            <div className='p-5 text-center shadow-xl rounded-lg'>
                                <h5 className='text-xl mb-5'>{pdf.section}</h5>
                                <h5 className='text-teal-500 mb-5'>{pdf.title} - { new Date(pdf.time).toLocaleString()}</h5>
                                <a href={'https://'+pdf._video} className='bg-teal-500 px-5 py-1 mt-4 text-white rounded-full'>PDF Download</a>
                                <br />
                                <button className='bg-red-500 px-5 py-1 mt-4 text-white rounded-full' onClick={()=> handleDeletePdf(pdf._id)}>Delete</button>
                            </div>
                        )
                    })
                }
            </section>




            <div class={`relative z-10 ${modal}`} aria-labelledby="modal-title" role="dialog" aria-modal="true">
                <div class="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity"></div>

                <div class="fixed inset-0 z-10 overflow-y-auto">
                    <div class="flex min-h-full items-end justify-center p-4 text-center sm:items-center sm:p-0">
                        <div class="relative transform overflow-hidden rounded-lg bg-white text-left shadow-xl transition-all sm:my-8 sm:w-full sm:max-w-xl">
                            <div class="bg-white px-4 pb-4 pt-5 sm:p-6 sm:pb-4">
                                <div>
                                    <p className='flex justify-start items-center gap-4'>Add Video</p>
                                    <form onSubmit={handleAddWeeklyBulletin} className='my-5'>
                                        <input type="text" name='title' placeholder='Enter Tittle' className='p-2 border  block focus:outline-none w-full' />
                                        <select name="section" className='p-2 border mt-2  block focus:outline-none w-full'>
                                            <option value="Weekly Bulletin">--Select Section--</option>
                                            <option value="Weekly Bulletin">Weekly Bulletin</option>
                                            <option value="English Literature">English Literature</option>
                                            <option value="Math Master">Math Master</option>
                                            <option value="বাংলা সাহিত্য">বাংলা সাহিত্য</option>
                                            <option value="বাংলা ব্যাকরণ">বাংলা ব্যাকরণ</option>
                                            <option value="Science">Science</option>
                                            <option value="ICT">ICT</option>
                                            <option value="বাংলাদেশ বিষয়াবলী">বাংলাদেশ বিষয়াবলী</option>
                                            <option value="আন্তর্জাতিক বিষয়াবলী">আন্তর্জাতিক বিষয়াবলী</option>
                                            <option value="সাজেশন">সাজেশন</option>
                                            <option value="সাম্প্রতিক সমাচার">সাম্প্রতিক সমাচার</option>
                                        </select>
                                        <select name="category" className='p-2 border mt-2  block focus:outline-none w-full'>
                                            <option value="null">--Select Category--</option>
                                            <option value="Paid">Paid</option>
                                            <option value="Paid">Free</option>
                                        </select>
                                        <input type="number" placeholder='Epsode' name='epsode' className='p-2 border mt-2  block focus:outline-none w-full' />
                                        <input type="date" placeholder='Date' name='time' className='p-2 border mt-2  block focus:outline-none w-full' />
                                        <label className='mt-4 block'>
                                            <small className='ml-3'>Chose pdf</small>
                                            <input type="file" name='video' className='p-2 border  block focus:outline-none w-full' />
                                        </label>
                                        <div className='flex justify-end items-center gap-5 mt-5'>
                                            <label onClick={() => setModal('hidden')} className='px-4 py-1 text-white uppercase rounded-sm bg-red-500 cursor-pointer'>Cancel</label>
                                            <button className='px-4 py-1 text-white uppercase rounded-sm bg-green-500'>Submit</button>
                                        </div>
                                    </form>
                                </div>
                            </div>

                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default PDFSection;