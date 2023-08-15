import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

const JobSulationPastQuestion = () => {

    const [question, setQuestion] = useState([]);
    const {category} = useParams();
    let index =1;


    useEffect(()=>{
        const url = `http://localhost:5000/jobs-past-question?category=${category}&question_id=pastQ101`;
        fetch(url)
        .then(res=> res.json())
        .then(data => setQuestion(data));
        console.log(url);
    },[])


    console.log(question);

    return (
        <div>
            <h1 className='text-center my-5'>{category}</h1>

            <div className="my-20  max-w-6xl mx-auto">
            {
                    question.map(qs=> {
                        return(
                            <div className='p-3 border border-dashed my-5'>
                                <h4>{index++}) {qs.question}</h4>
                                <div className='mt-3'>
                                    <p className='flex  items-center gap-3 my-2'><p className='bg-black rounded-full h-5 text-white flex justify-center items-center w-5'>ক</p> {qs.opA}</p>
                                    <p className='flex  items-center gap-3 my-2'><p className='bg-black rounded-full h-5 text-white flex justify-center items-center w-5'>খ</p> {qs.opB}</p>
                                    <p className='flex  items-center gap-3 my-2'><p className='bg-black rounded-full h-5 text-white flex justify-center items-center w-5'>গ</p> {qs.opC}</p>
                                    <p className='flex  items-center gap-3 my-2'><p className='bg-black rounded-full h-5 text-white flex justify-center items-center w-5'>ঘ</p> {qs.opD}</p>
                                </div>
                            </div>
                        )
                    })
                }
      </div>
        </div>
    );
};

export default JobSulationPastQuestion;