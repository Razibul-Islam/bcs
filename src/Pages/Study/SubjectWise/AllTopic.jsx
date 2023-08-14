import React, { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';

const AllTopic = () => {

    const { subject } = useParams();
    const [topic, setTopic] = useState();


    useEffect(() => {
        const url = `http://localhost:5000/get-topic-topically?subject=${subject}`;
        fetch(url)
            .then(res => res.json())
            .then(data => setTopic(data))
    }, [])

    return (
        <div>
            <h1 className='text-center mt-5'>{subject}</h1>
            <section className='grid grid-cols-3 max-w-6xl mx-auto mt-10'>
            {
                topic?.map(topics => {
                    return (
                        <div className="shadow-xl p-5 text-center">
                            <h3 className="my-3">{topics.topic}</h3>
                            <div>
                                <Link to={`/TopicWiseReadQuestion/${topics.topic}`} className="px-2 py-1 bg-teal-500 text-sm mx-2 rounded-full text-white">View Question</Link>
                                <Link to={`/Topicread-topically/subtopic/${topics.topic}`} className="px-2 py-1 bg-teal-500 text-sm mx-2 rounded-full text-white">View Sub Topic</Link>
                            </div>
                        </div>
                    )
                })
            }
            </section>
        </div>
    );
};

export default AllTopic;