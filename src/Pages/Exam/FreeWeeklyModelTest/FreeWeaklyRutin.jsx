import React, { useEffect, useState } from 'react';

const FreeWeaklyRutin = () => {
    const [rutin, setRutin] = useState([]);



    useEffect(() => {
        const url = `http://localhost:5000/free-weakly-test-rutin`;
        fetch(url)
            .then(res => res.json())
            .then(data => setRutin(data))
    }, [])
    return (
        <div>
            <h1 className='text-center my-5 '>Free weakly Model Test Rutine</h1>

            <div className='grid grid-cols-3 gap-5 max-w-6xl mx-auto'>
                {
                    rutin.map(rutins => {
                        return (
                            <div className='text-center p-5 border border-dashed h-40 rounded'>
                                <h5>{rutins.footer}</h5>
                                <h4 className='text-sm'>{rutins.title}</h4>
                                {rutins.descripetion?.split('...').map(p => <h4 className='text-sm'>{p}</h4>)}

                                <small>ফ্রি সাপ্তাহিক মডেল টেস্ট প্রতি শুক্রবার সকলের জন্য</small>
                            </div>
                        )
                    })
                }
            </div>
        </div>
    );
};

export default FreeWeaklyRutin;