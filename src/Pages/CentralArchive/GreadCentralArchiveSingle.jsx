import React, { useState } from 'react';
import { useParams } from 'react-router-dom';

const GreadCentralArchiveSingle = () => {
    const { _id } = useParams();
    const [archive, setArchive] = useState([]);
    let index = 1;

    const currentDate = new Date();
    const day = currentDate.getDate();
    const month = currentDate.getMonth() + 1;
    const year = currentDate.getFullYear();
    const date = `${year}-${month.toString().padStart(2, '0')}-${day.toString().padStart(2, '0')}`
    useState(() => {
        const url = `http://localhost:5000/get-all-archive-GreadPreparation?date=${date}`
        console.log(url);
        fetch(url)
            .then(res => res.json())
            .then(data => setArchive(data))
    }, [])


    const qs = archive.find(item => item._id === _id);



    const showAns = (e) => {
        console.log(e);
        const element = document.getElementById(e);
        element.classList.add('text-green-500')
    }
    const showExplain = (e) => {
        console.log(e);
        const element = document.getElementById(e);
        element.classList.remove('hidden')
    }



    return (
        <div className='p-5'>
            <div className='max-w-xl mx-auto mt-5'>
                <h1 className='text-center text-xl'>{qs?.exam}</h1>

                <div className='mt-10'>
                    {
                        qs?.examQuestion.map(qsn => {
                            return (
                                <div className='mt-10 border border-dashed p-4'>
                                    <h4 className='font-bold my-3'>{index++}) {qsn.question}</h4>
                                    <div>
                                        <p id={qsn._id + 'a'}>ক) {qsn.opA}</p>
                                        <p id={qsn._id + 'b'}>খ) {qsn.opB}</p>
                                        <p id={qsn._id + 'c'}>গ) {qsn.opC}</p>
                                        <p id={qsn._id + 'd'}>ঘ) {qsn.opD}</p>
                                    </div>
                                    <div className='flex gap-4 items-center mt-3'>
                                        <button onClick={() => showAns(qsn._id + qsn.ans)} className='px-3 py-1 text-sm rounded-sm shadow-xl text-white bg-green-500'>উত্তর</button>
                                        <button onClick={() => showExplain(qsn._id)} className='px-3 py-1 text-sm rounded-sm shadow-xl text-white bg-pink-500'>ব্যাখ্যা</button>
                                    </div>
                                    <p id={qsn._id} className='mt-3 hidden'>ব্যাখ্যা:  {qsn.explain}</p>
                                </div>
                            )
                        })
                    }
                </div>
            </div>
        </div>
    );
};

export default GreadCentralArchiveSingle;