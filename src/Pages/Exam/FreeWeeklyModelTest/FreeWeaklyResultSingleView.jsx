import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

const FreeWeaklyResultSingleView = () => {
    const [result, setResult] = useState({});
    const { _id } = useParams();


    useEffect(() => {
        // const url =  ;
        fetch(`http://localhost:5000/get-single-free-result?_id=${_id}`)
            .then(res => res.json())
            .then(data => setResult(data))
    }, [_id])

    return (
        <div className='p-5'>
            <table className="min-w-full border border-gray-300">
                <thead>
                    <tr className="bg-teal-400">
                        <th className="py-2 px-4 border font-thin">Exam Type</th>
                        <th className="py-2 px-4 border font-thin">Exam Date</th>
                        <th className="py-2 px-4 border font-thin">Correct Ans</th>
                        <th className="py-2 px-4 border font-thin">Wrong Ans</th>
                        <th className="py-2 px-4 border font-thin">Unanswered</th>
                        <th className="py-2 px-4 border font-thin">Total Questions</th>
                    </tr>
                </thead>
                <tbody>
                   <tr>
                    <td className="py-2  px-4 font-thin border">Free Wrakly Model Test</td>
                    <td className="py-2  px-4 font-thin border">{result.examDate}</td>
                    <td className="py-2  px-4 font-thin border">{result.totalCorrectAns}</td>
                    <td className="py-2  px-4 font-thin border">{result.totalWrong}</td>
                    <td className="py-2  px-4 font-thin border">{result.totalQuestion - result.totalCorrectAns - result.totalWrong}</td>
                    <td className="py-2  px-4 font-thin border">{result.totalQuestion}</td>
                   </tr>
                </tbody>
            </table>
        </div>
    );
};

export default FreeWeaklyResultSingleView;