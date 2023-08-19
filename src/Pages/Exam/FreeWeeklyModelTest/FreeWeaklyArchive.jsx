import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

const FreeWeaklyArchive = () => {
    const [question, setQuestion] = useState({})
    const {_id} = useParams();
    let index = 1;


    const checkQuestion = (id, ans)=>{
        console.log(id+ans);
        const element = document.getElementById(id+ans);
        element.classList.add('bg-green-500')
    }


    useEffect(()=>{
        const url =    `http://localhost:5000/get-free-weakly-archive-single?_id=${_id}`;
        fetch(url)
        .then(res=> res.json())
        .then(data => setQuestion(data))
    },[])


    console.log(question);

    return (
        <div className='p-5'>
            <h1 className='text-center my-10'>{question.startDate} (ফ্রি সাপ্তাহিক মডেল টেস্ট)</h1>
            <div className='my-10 max-w-xl mx-auto '>
                {
                    question?.examQuestion?.map(qs =>{
                        return(
                            <div className='p-3 border border-dashed my-5'>
                                <h4>{index++}) {qs.question}</h4>
                                <div className='mt-3'>
                                    <p id={qs._id+'a'} className='flex  items-center gap-3 my-2'><p className='bg-black rounded-full h-5 text-white flex justify-center items-center w-5'>ক</p> {qs.opA}</p>
                                    <p id={qs._id+'b'} className='flex  items-center gap-3 my-2'><p className='bg-black rounded-full h-5 text-white flex justify-center items-center w-5'>খ</p> {qs.opB}</p>
                                    <p id={qs._id+'c'} className='flex  items-center gap-3 my-2'><p className='bg-black rounded-full h-5 text-white flex justify-center items-center w-5'>গ</p> {qs.opC}</p>
                                    <p id={qs._id+'d'} className='flex  items-center gap-3 my-2'><p className='bg-black rounded-full h-5 text-white flex justify-center items-center w-5'>ঘ</p> {qs.opD}</p>
                                </div>
                                <button onClick={()=> checkQuestion(qs._id, qs.ans)} className='bg-green-500 px-3  mt-5 rounded-full text-white '>Ans</button>
                            </div>
                        )
                    })
                }
            </div>
        </div>
    );
};

export default FreeWeaklyArchive;