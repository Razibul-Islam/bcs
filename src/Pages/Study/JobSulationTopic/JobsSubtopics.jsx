import React, { useState } from 'react';
import { Link, useParams } from 'react-router-dom';

const JobsSubtopics = () => {
    const [subtopic, setSubTopic] = useState([]);
    const {topic} = useParams();

    useState(()=>{
        const url =   `http://localhost:5000/get-jobs-subtopic?topic=${topic}`;
        fetch(url)
        .then(res => res.json())
        .then(data => setSubTopic(data))
    },[])


    console.log(subtopic);

    return (
        <div>
            <h1 className='text-center my-10'>{topic}</h1>
            <div className='max-w-6xl mx-auto grid grid-cols-3'>
                {
                    subtopic.map(topics => {
                        return(
                            <div className='p-5 text-center shadow-lg rounded-sm'>
                                <h4 className='my-4'>{topics.subtopic}</h4>
                                <div className='flex justify-center gap-3'>
                                    <Link to={`/jobs-question-subtopic/${topics.subtopic}`} className='bg-teal-500 px-4 py-1 rounded-full text-white text-sm'>View Question</Link>
                
                                </div>
                            </div>
                        )
                    })
                }
            </div>
        </div>
    );
};

export default JobsSubtopics;