import React, { useEffect, useState } from 'react';
import { toast } from 'react-toastify';

const FreeModelRutin = () => {

    const [rutin, setRutin] = useState([]);
    const handleAddRutine = (e)=>{
        e.preventDefault();
        const title = e.target.title.value;
        const descripetion = e.target.descripetion.value;
        const footer = e.target.footer.value;
        const time = Date.now();

        const data = {title, descripetion, footer, time};
        fetch('http://localhost:5000/free-weakly-test-rutin', {
            method: "POST",
            headers: {
                'content-type':'application/json'
            },
            body: JSON.stringify(data)
        })
        .then(res => res.json())
        .then(data => {
            if(data){
                toast.success('Rutin Added Successfull');
                e.target.reset();
            }
        })
    };


    useEffect(()=>{
        const url = `http://localhost:5000/free-weakly-test-rutin`;
        fetch(url)
        .then(res => res.json())
        .then(data => setRutin(data))
    },[])

    return (
        <div>
            <h1 className='text-center my-5 '>Free weakly Model Test Rutine</h1>
            <div className='my-10 p-5 '>
                
            </div>
            <div className='flex justify-between gap-5 p-5'>
                <div className='w-2/3 shadow-lg p-5 grid grid-cols-2 gap-5 '>
                {
                    rutin.map(rutins => {
                        return(
                            <div className='text-center p-5 border border-dashed h-40 rounded'>
                                <h5>{rutins.footer}</h5>
                                <h4 className='text-sm'>{rutins.title}</h4>
                                {rutins.descripetion.split('...').map(p=> <h4 className='text-sm'>{p}</h4> )}

                                <small>ফ্রি সাপ্তাহিক মডেল টেস্ট প্রতি শুক্রবার সকলের জন্য</small>
                            </div>
                        )
                    })
                }
                </div>
                <form onSubmit={handleAddRutine} className='w-1/3 shadow-lg p-5'>
                    <h4 className='text-center'>Add a Rutin</h4>
                    <input type="text" name="title" placeholder='Title' className='p-2 block w-full my-5 focus:outline-none border rounded-sm' />
                    <small>লাইন আলাদা করতে "..." ব্যাবহার করুণ ।</small>
                    <textarea name="descripetion" className='p-2 block w-full mt-২ focus:outline-none border rounded-sm h-20' placeholder='Describetion'></textarea>
                    <input type="text" name="footer" placeholder='Date' className='p-2 block w-full mt-5 focus:outline-none border rounded-sm' />
                    <button className='bg-teal-500 mt-5 px-5 py-1 text-white rounded-sm shadow-lg'>Add Rutine</button>
                </form>
            </div>
        </div>
    );
};

export default FreeModelRutin;