import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

const TopicWiseReadQuestion = () => {

    const {topic} = useParams();
    const [question, setQuestion] = useState([]);
    let index = 1;

    useEffect(()=> {
        const url = `http://localhost:5000/get-read-topically-question-by-topic?topic=${topic}&question_id=readtopicaly101`
        fetch(url)
        .then(res => res.json())
        .then(data => setQuestion(data))
    }, [])

    return (
        <div>
            <h1 className='my-10 text-center'>{topic}</h1>

            <div className='max-w-6xl mx-auto'>
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

export default TopicWiseReadQuestion;