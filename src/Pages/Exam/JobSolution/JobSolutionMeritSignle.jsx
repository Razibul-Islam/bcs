import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import jsPDF from "jspdf";
import html2canvas from "html2canvas";
import FileDownloadIcon from "@mui/icons-material/FileDownload";

const JobSolutionMeritSignle = () => {
    const [position, setPosition] = useState([]);
    const { date } = useParams();
    let index = 1;
    const [totalMark, setTolatMark] = useState(0);

    function generatePDF() {
        const pdf = new jsPDF();

        const element = document.querySelector(".tab");
        html2canvas(element).then((canvas) => {
            const imgData = canvas.toDataURL("image/png");
            pdf.addImage(imgData, "PNG", 10, 10, 190, 0);
            pdf.save("downloaded_component.pdf");
        });
    }

    useEffect(() => {
        fetch(`https://bcspioneer.vercel.app/Job-Solution-merit-list?examDate=${date}`)
            .then((res) => res.json())
            .then((data) => setPosition(data));
    }, []);
    return (
        <div>
            <h1 className="text-center my-5">Merit List</h1>
            <div className="max-w-xl mx-auto">
                <table>
                    <tr>
                        <th>নাম</th>
                        <th>অবস্থান</th>
                        <th>প্রাপ্ত নাম্বার</th>
                    </tr>
                    {position.map((result) => {
                        return (
                            <tr>
                                <td>{result.userName}</td>
                                <td>{index++}</td>
                                <td>{result.totalCorrectAns}</td>
                            </tr>
                        );
                    })}
                </table>
                <button
                    onClick={() => generatePDF()}
                    className="bg-green-500 mt-5 px-5 py-1 text-white font-bold"
                >
                    Download <FileDownloadIcon />
                </button>
            </div>
            <div className="max-w-xl mx-auto mt-[-5000px] tab ">
                <div className="text-center  py-5">
                    <h2 className="my-2 text-xl font-bold">
                        পরীক্ষার নাম: ফ্রি উইকলি মডেল টেস্ট
                    </h2>
                    <h4 className="my-2">তারিখ: {date}</h4>
                    <h4 className="my-2">পূর্ণমান: {position[0]?.totalQuestion}</h4>
                    <h4 className="my-2 text-teal-500 text-xl">
                        পরিচালনায় বিসিএস পাইওনিয়ার
                    </h4>
                </div>

                <table className="relative">
                    <h1 className="text-2xl opacity-10 absolute top-[50%] left-[40%] ] rotate-45">
                        BCS Pioneer
                    </h1>
                    <tr>
                        <th>নাম</th>
                        <th>অবস্থান</th>
                        <th>প্রাপ্ত নাম্বার</th>
                    </tr>
                    {position.map((result) => {
                        return (
                            <tr>
                                <td>{result.userName}</td>
                                <td>{index++}</td>
                                <td>{result.totalCorrectAns}</td>
                            </tr>
                        );
                    })}
                </table>
            </div>
        </div>
    );
};

export default JobSolutionMeritSignle;