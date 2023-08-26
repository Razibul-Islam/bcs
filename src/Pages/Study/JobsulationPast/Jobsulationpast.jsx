import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

const Jobsulationpast = () => {

  const [category, setCategory] = useState([]);


  useEffect(()=>{
    const url = `https://bcspioneer.vercel.app/jobs-past-category-get`;
    fetch(url)
    .then(res=> res.json())
    .then(data => setCategory(data))
  },[])
  

  return (
    <div className='p-5'>
      <h1 className='my-5 text-center'>বিগত জব সলিউশন প্রশ্ন</h1>

      <div className='max-w-6xl mx-auto mt-10'>
        {
          category.map(cate => {
            return(
              <div>
                <Link to={`/past-jobs-question/${cate.category}`} className='bg-teal-500 py-1 my-3 block w-72 mx-auto text-center text-white rounded-full px-5'>{cate.category}</Link>
              </div>
            )
          })
        }
      </div>

    </div>
  );
};

export default Jobsulationpast;