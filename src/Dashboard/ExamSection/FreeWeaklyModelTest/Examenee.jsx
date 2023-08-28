import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

const FreeWeaklyExamenee = () => {
    const [question, setQuestion] = useState([]);

    useEffect(()=>{
        const url = `http://localhost:5000/get-free-weaklly-eaxma-all`;
        fetch(url)
        .then(res=> res.json())
        .then(data => setQuestion(data))
    },[])

    console.log(question);

    return (
        <div>
           <h1 className='text-center my-10'>Exam Liat</h1>

           <section className='grid grid-cols-4 gap-5'>
                {
                    question.map(qsn => {
                        return(
                            <div className='p-5 text-center border border-dashed rounded'>
                                <h4>ফ্রি সাপ্তাহিক মডেল টেস্ট</h4>
                                <h5 className='my-2'>{qsn.startDate}</h5>
                                <div>
                                    <Link to={`/dashboard/free-weakly-examenee/${qsn._id}`} className='px-3 bg-green-400 rounded-3xl text-white text-sm'>view</Link>
                                </div>
                            </div>
                        )
                    })
                }
            </section>

        </div>
    );
};

export default FreeWeaklyExamenee;