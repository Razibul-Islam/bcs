import React, { useEffect, useState } from 'react';
import OndemandVideoIcon from '@mui/icons-material/OndemandVideo';
import Loading from '../../Loader/Loading';
import { Link } from 'react-router-dom';
import { toast } from 'react-toastify';

const VideoSection = () => {


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
        const time = Date.now();

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
                    fetch('http://localhost:5000/add-study-video', {
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
        const url = `http://localhost:5000/get-study-video?section=${section}`;
        fetch(url)
            .then(res => res.json())
            .then(data => setVideo(data))
        setLoading(false);
    }


    const viewAll = () => {
        setLoading(true);
        const url = `http://localhost:5000/get-study-video?section=all`;
        fetch(url)
            .then(res => res.json())
            .then(data => setVideo(data))
        setLoading(false);
    }



    const handleDeleteVideo = (_id)=>{
        const url = `http://localhost:5000/delete-video?_id=${_id}`;
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
        const url = `http://localhost:5000/get-study-video?section=all`;
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
            <h1 className='mt-5 flex items-center gap-5 '><OndemandVideoIcon className='' /> Video section</h1>


            <div className='flex justify-between gap-3 mt-10'>
                <div className='flex gap-3'>
                    <Link to='/dashboard/video-section/rutin' className='bg-slate-700 text-white px-5  py-[2px] rounded-3xl'> <p>Rutine</p> </Link>
                    <button onClick={() => setModal('')} className='bg-slate-700 text-white px-5  py-[2px] rounded-3xl'>Add Video</button>
                </div>
                <div className='flex gap-3'>
                    <select id="section_id" onChange={handleFilter} className='bg-slate-700 text-white px-5  py-[2px] rounded-3xl'>
                        <option value="all">-- Filter by Section --</option>
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
                    <button onClick={viewAll} className='bg-slate-700 text-white px-5  py-[2px] rounded-3xl'>All</button>
                </div>
            </div>

            <hr className='my-5' />
            <p className='my-5'>মোট ভিডিও  {video.length} টী</p>




            <section className='grid grid-cols-3 gap-10'>
                {/* <p>{video.length}</p> */}
                {
                    video.map(videos => {
                        return (
                            <div className="shadow-md p-4">
                                <div className="text-xs space-x-1">
                                    <span className="px-2 py-1 bg-teal-800/30 rounded-full">
                                        {videos.category}
                                    </span>
                                    <span className="px-2 py-1 bg-teal-800/30 rounded-full">
                                        {videos.section}
                                    </span>
                                    <span className="px-2 py-1 bg-teal-800/30 rounded-full">30:30</span>
                                </div>
                                <div className="flex mt-4 mb-2 gap-3 items-start flex-col">
                                    <div className="w-full">
                                        <video src={'http://'+videos._video} className="rounded" controls></video>
                                    </div>
                                    <div>
                                        <h1>
                                            {videos.title}
                                        </h1>
                                        <p className="text-sm">Episode -{videos.epsode}</p>
                                        <div className='flex justify-center gap-5 items-center'>
                                        <p className="text-sm">তারিখ : { new Date(videos.time).toLocaleString()}</p>
                                        <button onClick={()=> handleDeleteVideo(videos._id)} className='bg-red-500 px-5 py-1 mt-4 text-white rounded-full'>Delete</button> 
                                        </div>
                                    </div>
                                </div>
                            </div>
                        )
                    })
                }
            </section>




            <div className={`relative z-10 ${modal}`} aria-labelledby="modal-title" role="dialog" aria-modal="true">
                <div className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity"></div>

                <div className="fixed inset-0 z-10 overflow-y-auto">
                    <div className="flex min-h-full items-end justify-center p-4 text-center sm:items-center sm:p-0">
                        <div className="relative transform overflow-hidden rounded-lg bg-white text-left shadow-xl transition-all sm:my-8 sm:w-full sm:max-w-xl">
                            <div className="bg-white px-4 pb-4 pt-5 sm:p-6 sm:pb-4">
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
                                            <option value="আন্তর্জাতিক বিষয়াবলী">আন্তর্জাতিক বিষয়াবলী</option>
                                            <option value="বাংলাদেশ বিষয়াবলী">বাংলাদেশ বিষয়াবলী</option>
                                            <option value="সাজেশন">সাজেশন</option>
                                            <option value="সাম্প্রতিক সমাচার">সাম্প্রতিক সমাচার</option>
                                        </select>
                                        <select name="category" className='p-2 border mt-2  block focus:outline-none w-full'>
                                            <option value="null">--Select Category--</option>
                                            <option value="Paid">Paid</option>
                                            <option value="Paid">Free</option>
                                        </select>
                                        <input type="number" placeholder='Epsode' name='epsode' className='p-2 border mt-2  block focus:outline-none w-full' />
                                        <label className='mt-4 block'>
                                            <small className='ml-3'>Chose Video</small>
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

export default VideoSection;