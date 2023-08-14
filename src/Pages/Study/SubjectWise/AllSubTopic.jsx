import React, { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';

const AllSubTopic = () => {

    const { topic } = useParams();
    const [subTopic, setSubTopic] = useState([]);


    useEffect(() => {
        const url = `http://localhost:5000/get-subtopic-topically?topic=${topic}`;
        fetch(url)
            .then(res => res.json())
            .then(data => setSubTopic(data))
    }, [])

    return (
        <div>
            <h1 className='text-center mt-5'>{topic}</h1>
            <section className='grid grid-cols-3 max-w-6xl mx-auto mt-10'>
            {
                subTopic?.map(topics => {
                    return (
                        <div className="shadow-xl p-5 text-center">
                            <h3 className="my-3">{topics.subtopic}</h3>
                            <div>
                                <Link to={`/sub-topics-wise-question/${topics.subtopic}`} className="px-2 py-1 bg-teal-500 text-sm mx-2 rounded-full text-white">View Question</Link>
                            </div>
                        </div>
                    )
                })
            }
            </section>
        </div>
    );
};

export default AllSubTopic;