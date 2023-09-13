import React, { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import PeopleIcon from '@mui/icons-material/People';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import MilitaryTechIcon from '@mui/icons-material/MilitaryTech';
import RadarIcon from '@mui/icons-material/Radar';
import AssignmentIcon from '@mui/icons-material/Assignment';
import ContentCutIcon from '@mui/icons-material/ContentCut';

const FreeWeaklyResultSingleView = () => {
    const [result, setResult] = useState({});
    const [position, setPosition] = useState([]);
    const [pashed, setPashed] = useState([]);
    const { _id } = useParams();

    useEffect(() => {
        fetch(`http://localhost:5000/get-single-free-result?_id=${_id}`)
            .then(res => res.json())
            .then(data => setResult(data))
    }, [_id])

    useEffect(() => {
        fetch(`http://localhost:5000/free-weakly-merit-list?examDate=${result.examDate}`)
            .then(res => res.json())
            .then(data => setPosition(data))
    }, [result])

    useEffect(() => {
        fetch(`http://localhost:5000/free-weakly-passhed?examDate=${result.examDate}&cuts=${result.cutsark}`)
            .then(res => res.json())
            .then(data => setPashed(data))
    }, [result])


    const targetEmail = result.userEmail;
    const targetIndex = position.findIndex(item => item.userEmail === targetEmail);

    return (
        <div className='md:p-5'>
            <div className='max-w-xl mx-auto '>
                <div className='grid grid-cols-2 gap-2'>
                    <div className='bg-teal-100 py-4 text-center'>
                        <p>মোট পরীক্ষার্থীর সংখ্যা</p>
                        <span className='flex justify-center items-center gap-3'><PeopleIcon className='text-teal-600'></PeopleIcon>{position.length}</span>
                    </div>
                    <div className='bg-teal-200 py-4 text-center'>
                        <p>উত্তীর্ণ শিক্ষার্থীর সংখ্যা</p>
                        <span className='flex justify-center items-center gap-3'><CheckCircleIcon className='text-teal-500' />{pashed.length}</span>
                    </div>
                </div>
            </div>
            <div className='max-w-xl mx-auto my-2'>
                <div className='grid grid-cols-2 gap-2'>
                    <div className='bg-pink-200 py-4 text-center'>
                        <p>কাট মার্ক</p>
                        <span className='flex justify-center items-center gap-3'><ContentCutIcon className='text-teal-600'></ContentCutIcon>{result.cutsark}</span>
                    </div>
                    <div className='bg-pink-100 py-4 text-center'>
                        <p>আপনার মার্কস</p>
                        <span className='flex justify-center items-center gap-3'><RadarIcon className='text-teal-500' />{parseFloat(result.totalCorrectAns) - parseInt(result.totalWrong) * parseFloat(result.negativeMark)}</span>
                    </div>
                </div>
            </div>
            <div className='max-w-xl mx-auto my-2'>
                <div className='grid grid-cols-2 gap-2'>
                    <div className='bg-orange-100 py-4 text-center'>
                        <p>মার্কস অনুযায়ী আপনার অবস্থান</p>
                        <span className='flex justify-center items-center gap-3'><AssignmentIcon className='text-teal-600'></AssignmentIcon>{targetIndex + 1}</span>
                    </div>
                    <div className='bg-orange-100 py-4 text-center'>
                        <p>স্ট্যাটাস</p>
                        <span className='flex justify-center items-center gap-3'><MilitaryTechIcon className='text-teal-600'></MilitaryTechIcon>{parseInt(result.cutsark) <= parseInt(result.totalCorrectAns) ? 'Pashed' : 'Failed'}</span>
                    </div>
                </div>
            </div>


            <h2 className='my-5 text-center'>Mark sheet</h2>
            <div className='max-w-xl mx-auto '>
                <table>
                    <tr>
                        <th>বিষয়</th>
                        <th>মোট নাম্বার</th>
                        <th>সঠিক উত্তর</th>
                        <th>ভুল</th>
                        <th>unanswered</th>
                        <th>প্রাপ্ত নাম্বার</th>
                    </tr>
                    <tr>
                        <td>ফ্রী পরীক্ষা</td>
                        <td className='text-center'>{result.totalQuestion}</td>
                        <td className='text-center'>{result.totalCorrectAns}</td>
                        <td className='text-center'>{result.totalWrong}</td>
                        <td className='text-center'>{result.totalQuestion - (result.totalCorrectAns + result.totalWrong)}</td>
                        <td className='text-center'>{parseFloat(result.totalCorrectAns) - parseInt(result.totalWrong) * parseFloat(result.negativeMark)}</td>
                    </tr>
                </table>
            </div>

            <div className='text-center mt-10'>
                <Link className='bg-teal-500 px-5 text-white my-2 rounded-sm'>উত্তরপত্র দেখুন</Link>
                <br />
                <br />
                <Link to={`/free-weakly-meritlist-single/${result.examDate}`} className='bg-teal-500 px-5 text-white my-2 rounded-sm'>মেধা তালিকা দেখুন</Link>
                <br />
                <br />
                <Link to={`/free-weakly-model-test/rutin`} className='bg-teal-500 px-5 text-white my-2 rounded-sm'>পরবর্তী পরীক্ষার রুটিন ও সিলেবাস দেখুন</Link>
            </div>
        </div>
    );
};

export default FreeWeaklyResultSingleView;