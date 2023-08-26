import React, { useEffect, useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useParams } from 'react-router-dom';
import auth from '../../Auth/Firebase.int';

const CenterlResultSingle = () => {
    const [result, setResult] = useState([]);
    const [user, loading , error] = useAuthState(auth);

    const {_id} = useParams();

    useEffect(()=>{
        const url = `https://bcspioneer.vercel.app/get-all-result?email=${user?.email}`;
        fetch(url)
        .then(res => res.json())
        .then(data => setResult(data))
      }, [user?.email])


      const myResult = result.find(item => item._id === _id);
      console.log(myResult);

    return (
        <div>
             <div className='max-w-xl mx-auto mt-10'>
                <table>
                    <tr>
                        <th>বিষয়</th>
                        <th>সঠিক</th>
                        <th>ভুল</th>
                        <th>মার্ক</th>
                        <th>মোট</th>
                    </tr>
                    <tr>
                        <td>ফ্রী সাপ্তাহিক মডেল টেস্ট</td>
                        <td>{myResult?.totalCorrectAns}</td>
                        <td>{myResult?.totalWrong}</td>
                        <td>{myResult?.totalCorrectAns}</td>
                        <td>{myResult?.totalQuestion}</td>
                    </tr>
                </table>
            </div>
        </div>
    );
};

export default CenterlResultSingle;