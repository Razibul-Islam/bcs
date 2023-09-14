import React, { useState } from "react";
import { Link } from "react-router-dom";
const BankCentralArcive = () => {
    const [archiveBank, setArchiveBank] = useState([]);

    const currentDate = new Date();
    const day = currentDate.getDate();
    const month = currentDate.getMonth() + 1;
    const year = currentDate.getFullYear();
    const date = `${year}-${month.toString().padStart(2, '0')}-${day.toString().padStart(2, '0')}`

    useState(() => {
        const url = `http://localhost:5000/get-all-archive-bank?date=${date}`
        console.log(url);
        fetch(url)
            .then(res => res.json())
            .then(data => setArchiveBank(data))
    }, [])


    // console.log(archive);

    return (
        <div>
            <div className="w-96 mx-auto mt-10">
                {
                    archiveBank.map(qs => <Link to={`/centralArcive/bank/${qs._id}`} className="bg-teal-500 block mt-3 text-center py-1 text-white rounded-3xl">{qs.startDate} ({qs.exam})</Link>)
                }
            </div>
        </div>
    );
};

export default BankCentralArcive;
