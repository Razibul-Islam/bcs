import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

const FreeWeaklyExamQuestion = () => {
    const [question, setAllQuestion] = useState({})
    const {_id} = useParams();
    

    useEffect(()=>{
        const url = `https://bcspioneer.vercel.app/get-free-weaklly-single-exam`
    }, [])

    return (
        <div>
            FreeWeaklyExamQuestion
        </div>
    );
};

export default FreeWeaklyExamQuestion;