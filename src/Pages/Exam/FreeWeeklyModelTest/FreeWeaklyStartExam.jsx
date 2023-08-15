import React, { useEffect, useState } from 'react';

const FreeWeaklyStartExam = () => {


    const [question, setQuestion] = useState({});


    // Get the current date
    const currentDate = new Date();
    const day = currentDate.getDate();
    const month = currentDate.getMonth() + 1;
    const year = currentDate.getFullYear();
    // 2023-08-16
    // const formattedDate = `${month.toString().padStart(2, '0')}-${day.toString().padStart(2, '0')}-${year}`;
    const date = `${year}-${month.toString().padStart(2, '0')}-${day.toString().padStart(2, '0')}`

    console.log(date);

    useEffect(() => {
        const url = `http://localhost:5000/get-free-wakly-exam?startDate=${date}`;
        fetch(url)
            .then(res => res.json())
            .then(data => setQuestion(data))
    }, [])


    return (
        <div>

        </div>
    );
};

export default FreeWeaklyStartExam;