import React, { useState } from 'react';
import TextSnippetIcon from '@mui/icons-material/TextSnippet';
import AddIcon from '@mui/icons-material/Add';
import { toast } from 'react-toastify';

const Rutin = () => {

    const [modal, setModal] = useState('hidden');
    const [rutin, setRutin] = useState([])

    const handleAddRutine = (e) => {
        e.preventDefault();
        const title = e.target.title.value;
        const date = e.target.date.value;
        const topics = e.target.topics.value;
        const descripetion = e.target.descripetion.value;
        const time = Date.now();
        const data = { title, date, topics, descripetion, time };
        console.log(data);

        fetch('http://localhost:5000/add-video-rutine', {
            method: "POSt",
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(data)
        })
            .then(res => res.json())
            .then(data => {
                if (data.acknowledged) {
                    toast.success('রুটিন যোগ করা হয়েছে');
                    e.target.reset();
                    setModal('hidden');
                }
            });
    };

    useState(() => {
        const url = `http://localhost:5000/get-video-rutin`
        fetch(url)
            .then(res => res.json())
            .then(data => setRutin(data))
    }, [])


    return (
        <div className='p-5'>
            <h1 className='mt-5 flex items-center gap-5 '><TextSnippetIcon className='' /> Rutin List</h1>
            <hr className='my-2' />

            <div className='text-end mt-5'>
                <button onClick={() => setModal('')} className='bg-slate-700 text-white px-5 py-1 rounded-2xl'>Add Rutine</button>
            </div>


            <section className='my-5 grid grid-cols-3 gap-5'>
                {
                    rutin.map(rutine => {
                        return(
                            <div className="text-white shadow-sm shadow-white rounded-md p-4 bg-slate-700">
                            <h2 className="text-center text-xl font-semibold">{rutine.date}</h2>
                            <h1 className="text-xl font-semibold text-center my-3">
                                {rutine.title}
                            </h1>
                            <p className="text-sm text-center">
                                {rutine.topics}
                            </p>
                            <p className="text-sm text-center mt-3">
                                {rutine.descripetion}
                            </p>
                        </div>
                        )
                    })
                }
               
            </section>


            {/* modal  */}
            <div class={`relative z-10 ${modal}`} aria-labelledby="modal-title" role="dialog" aria-modal="true">
                <div class="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity"></div>

                <div class="fixed inset-0 z-10 overflow-y-auto">
                    <div class="flex min-h-full items-end justify-center p-4 text-center sm:items-center sm:p-0">
                        <div class="relative transform overflow-hidden rounded-lg bg-white text-left shadow-xl transition-all sm:my-8 sm:w-full sm:max-w-xl">
                            <div class="bg-white px-4 pb-4 pt-5 sm:p-6 sm:pb-4">
                                <div>
                                    <p className='flex justify-start items-center gap-4'><AddIcon className='bg-slate-800 rounded-full p-1 text-white' /> Add Rutine</p>
                                    <form onSubmit={handleAddRutine} className='my-3'>
                                        <div className='grid grid-cols-2 gap-4'>
                                            <input type="text" name='title' placeholder='Enter Tittle' className='p-2 border  block focus:outline-none w-full' />
                                            <input type="text" name='date' placeholder='Enter Date' className='p-2 border  block focus:outline-none w-full' />
                                        </div>
                                        <textarea name="topics" placeholder='Topics' className='p-2 my-2 border  block focus:outline-none w-full h-20'></textarea>
                                        <textarea name="descripetion" placeholder='Descripetion' className='p-2 my-2 border  block focus:outline-none w-full h-20'></textarea>
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

export default Rutin;