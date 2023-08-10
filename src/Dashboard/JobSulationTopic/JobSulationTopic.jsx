import React, { useEffect, useState } from 'react';
import { toast } from 'react-toastify';
import DeleteIcon from '@mui/icons-material/Delete';

const JobSulationTopic = () => {
    const [modal, setModal] = useState('hidden');
    const [ans, setAns] = useState('');
    const [question, setQuestion] = useState([])
    let index = 1;


    const handleShowExplain = (id) => {
        const element = document.getElementById(id);
        if (element.classList[0] === 'hidden') {
            element.classList.remove('hidden');
        } else {
            element.classList.add('hidden');
        }
    };

    const topicsArray = [
        "বাংলা সাহিত্যের প্রাচীন যুগ",
        "বাংলা সাহিত্যের মধ্যযুগ",
        "বাংলা সাহিত্যের আধুনিক যুগ",
        "বাংলা ভাষা",
        "ধ্বনিতত্ত্ব",
        "শব্দ প্রকরণ",
        "পদ-প্রকরণ",
        "বাক্য প্রকরণ",
        "Old and Middle English Period",
        "The Renaissance Period",
        "The Neo-Classical Perion",
        "The Romantic Period",
        "The Victorian Period",
        "Modern Period",
        "Post Modern Period",
        "Literary Terms and Genres",
        "Characters and Quotations",
        "Other Country's Literature",
        "Literary ages and Periods",
        "Poetry",
        "Drama/Play",
        "Novel",
        "Parts of Speech",
        "Idioms and Phrases",
        "Tense",
        "Vocabulary or Words",
        "Clause",
        "Voice",
        "Narration and Degree",
        "Fill in the Blanks and Sentence Correction",
        "Sentence and Transformation",
        "Composition",
        "বাংলাদেশের জাতীয় বিষয়াবলি",
        "বাংলাদেশের কৃষিজ সম্পদ",
        "বাংলাদেশের অর্থনীতি",
        "বাংলাদেশের শিল্প ও বাণিজ্য ",
        "বাংলাদেশের জনমিতিক বিষয়াবলি ",
        "বাংলাদেশের সংবিধান",
        "বাংলাদেশের রাজনৈতিক ব্যবস্থা",
        "বাংলাদেশের সরকার ব্যবস্থা",
        "বাংলাদেশের জাতীয় অর্জন ও অন্যান্য",
        "সাম্প্রতিক বাংলাদেশ বিষয়াবলি ",
        "বৈশ্বিক ইতিহাস",
        "আঞ্চলিক ও আন্তর্জাতিক ব্যবস্থা",
        "ভূ-রাজনীতি",
        "আন্তর্জাতিক নিরাপত্তা ও আন্তঃরাষ্ট্রীয় ক্ষমতা সম্পর্ক",
        "আন্তর্জাতিক পরিবেশগত ইস্যু ও কূটনীতি",
        "আন্তর্জাতিক সংগঠন এবং বৈশ্বিক অর্থনৈতিক প্রতিষ্ঠান",
        "বিশ্বের সাম্প্রতিক ও চলমান ঘটনা প্রবাহ",
        "বাংলাদেশ ও বৈশ্বিক ভৌগোলিক অঞ্চল",
        "সীমানা",
        "পারিবেশিক",
        "আর্থ-সামাজিক",
        "ভূ-রাজনীতির গুরুত্ব",
        "অঞ্চলভিত্তিক ভৌত পরিবেশ",
        "সম্পদের বন্টন ও গুরুত্ব",
        "বাংলাদেশ ও বৈশ্বিক পরিবেশ: প্রকৃতি ও সম্পদ",
        "বন্টনের প্রধান চ্যালেঞ্জ সমূহ",
        "আবহাওয়া ও জলবায়ু নিয়ামকসমূহ",
        "দুর্যোগের ধরন, প্রকৃতি ও ব্যবস্থাপনা",
        "নৈতিকতা",
        "মূল্যবোধ",
        "সুশাসন",
        "ভৌত বিজ্ঞান",
        "জীব বিজ্ঞান",
        "আধুনিক বিজ্ঞান",
        "কম্পিউটার",
        "তথ্য ও যোগাযোগ প্রযুক্তি",
        "পাটিগণিত",
        "বীজগণিত",
        "জ্যামিতি",
        "ভাষাগত যৌক্তিক বিচার ",
        "সমস্যা সমাধান ",
        "বানান ও ভাষা ",
        "যান্ত্রিক দক্ষতা ",
        "স্থানাঙ্ক সম্পর্ক ",
        "সংখ্যাগত ক্ষমতা ",
        "Average and Mean",
        "Problems on Ages",
        "Percentage and Profit & Loss",
        "Partnership and Discount",
        "(Ratio & Proportion, Allegation or Mixture)",
        "(Time & Work, Chain Rule)",
        "Probability",
        "Permutation and Combination",
        "Time and Speed - Train and Boat",
        "Pipes & Cisterns",
        "(Geometry-Mensuration, Trigonometry)",
        "(Simple and Compound Interest, Stock)",
        "Algebra",
        "(Surds, Indices and Logarithm)",
        "Analytical Ability",
        "Analogy",
        "One Word Substitution",
        "Odd One Out",
        "Pin Point Error",
        "Conditional Sentence",
        "Comprehension"
    ];

    const handleAddQuestion = (e) => {
        e.preventDefault();
        const topic = e.target.topic.value;
        const subTopic = e.target.subTopic.value;
        const question = e.target.question.value;
        const opA = e.target.opA.value;
        const opB = e.target.opB.value;
        const opC = e.target.opC.value;
        const opD = e.target.opD.value;
        const explain = e.target.explain.value;
        const question_id = 'jst101'
        const data = { topic, subTopic, question, opA, opB, opC, opD, explain, ans, question_id }
        console.log(data);
        fetch('http://localhost:5000/add-question', {
            method: "POST",
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(data)
        })
            .then(res => res.json())
            .then(data => {
                toast.success('প্রশ্ন যোগ করা হয়েছে');
                // setModal('hidden');
                // e.target.reset();
            })
    };


    const filterByTopic = () => {
        const topic = document.getElementById('filter_topic').value;
        const url = `http://localhost:5000/get-question-topic-job-sulation?topic=${topic}&question_id=jst101`;
        fetch(url)
            .then(res => res.json())
            .then(data => setQuestion(data))
    }

    const handleAll = () => {
        const url = `http://localhost:5000/get-question?question_id=jst101`;
        fetch(url)
            .then(res => res.json())
            .then(data => setQuestion(data))
    }



    const handleDeleteQuestion = (_id)=>{
        const url = `http://localhost:5000/delete-question?_id=${_id}`;
        fetch(url, {
            method: 'DELETE'
        })
        .then(res => res.json())
        .then(data => {
            if(data){
                toast.success('মুছে ফেলা হয়েছে');
            }
        });

    }

    useEffect(() => {
        const url = `http://localhost:5000/get-question?question_id=jst101`;
        fetch(url)
            .then(res => res.json())
            .then(data => setQuestion(data))
    }, [])


    return (
        <div className='p-5'>
            <h1 className='text-center my-5'>জব সলিউশন টপিক ভিত্তিক</h1>
            <div className='flex justify-between items-center mt-10'>
                <button onClick={() => setModal('')} className='px-5 py-1 bg-slate-700 text-white rounded-3xl'>Add Question</button>
                <div className='flex gap-3'>
                    <button className='px-5 py-1 bg-slate-700 text-white rounded-3xl' onClick={handleAll}>All</button>
                    <select onChange={filterByTopic} id="filter_topic" className='px-5 py-1 bg-slate-700 text-white rounded-3xl'>
                        <option value="">--Filter by Topics--</option>
                        <option value="বাংলা সাহিত্য">বাংলা সাহিত্য</option>
                        <option value="বাংলা ভাষা ও ব্যাকরণ">বাংলা ভাষা ও ব্যাকরণ</option>
                        <option value="English Literature">English Literature</option>
                        <option value="বাংলাদেশ বিষয়াবলি">বাংলাদেশ বিষয়াবলি</option>
                        <option value="আন্তর্জাতিক বিষয়াবলি">আন্তর্জাতিক বিষয়াবলি</option>
                        <option value="ভূগোল ও দুর্যোগ ব্যবস্থাপনা">ভূগোল ও দুর্যোগ ব্যবস্থাপনা</option>
                        <option value="নৈতিকতা ,মূল্যবোধ ও সুশাসন">নৈতিকতা ,মূল্যবোধ ও সুশাসন</option>
                        <option value="সাধারণ বিজ্ঞান">সাধারণ বিজ্ঞান</option>
                        <option value="কম্পিউটার ও তথ্যপ্রযুক্তি">কম্পিউটার ও তথ্যপ্রযুক্তি</option>
                        <option value="সাধারণ গণিত">সাধারণ গণিত</option>
                        <option value="মানসিক দক্ষতা">মানসিক দক্ষতা</option>
                        <option value="Bank Math">Bank Math</option>
                        <option value="Bank English">Bank English</option>
                        <option value="Bank Science and ICT">Bank Science and ICT</option>
                        <option value="Bank BD Affairs">Bank BD Affairs</option>
                        <option value="Bank International Affairs">Bank International Affairs</option>
                        <option value="জাতীয় ও আন্তর্জাতিক দিবস ও প্রতিপাদ্য">জাতীয় ও আন্তর্জাতিক দিবস ও প্রতিপাদ্য</option>
                        <option value="পরিবর্তনশীল তথ্য">পরিবর্তনশীল তথ্য</option>
                    </select>
                </div>
            </div>



            <hr className='my-5' />

            <section>
                <p>মোট প্রশ্নঃ {question.length} টি</p>

                <div className='grid grid-cols-3 gap-5'>
                    {
                        question.map(questions => {
                            return (
                                <div className='p-5 rounded shadow-lg '>
                                    <h4>{index++})  {questions.question}</h4>
                                    <div>
                                        <p className={`${'a' === questions.ans ? 'text-green-500 font-extrabold' : ''}`}>ক) {questions.opA}</p>
                                        <p className={`${'b' === questions.ans ? 'text-green-500 font-extrabold' : ''}`}>খ) {questions.opB}</p>
                                        <p className={`${'c' === questions.ans ? 'text-green-500 font-extrabold' : ''}`}>গ) {questions.opC}</p>
                                        <p className={`${'d' === questions.ans ? 'text-green-500 font-extrabold' : ''}`}>ঘ) {questions.opD}</p>
                                        <button onClick={() => handleShowExplain(questions._id)} className='my-3 bg-slate-700 text-sm px-3 py-1 rounded-3xl shadow-2xl text-white'>ব্যাখ্যা</button> <button onClick={()=> handleDeleteQuestion(questions._id)} className='my-3 bg-slate-700 text-sm px-3 py-[2px] rounded-3xl shadow-2xl text-white'><DeleteIcon className='p-1' ></DeleteIcon></button> 
                                        <p className='hidden' id={questions._id}>{questions.explain}</p>
                                        
                                    </div>
                                </div>
                            )
                        })
                    }
                </div>
            </section>



            {/* modal  */}
            <div class={`relative z-10 ${modal}`} aria-labelledby="modal-title" role="dialog" aria-modal="true">
                <div class="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity"></div>
                <div class="fixed inset-0 z-10 overflow-y-auto">
                    <div class="flex min-h-full items-end justify-center p-4 text-center sm:items-center sm:p-0">
                        <div class="relative transform overflow-hidden rounded-lg bg-white text-left shadow-xl transition-all sm:my-8 sm:w-full sm:max-w-5xl">
                            <div class="bg-white px-4 pb-4 pt-5 sm:p-6 sm:pb-4">
                                <div>
                                    <p className='flex justify-start items-center gap-4'>জব সলিউশন টপিক ভিত্তিক প্রশ্ন যোগ করুণ</p>
                                    <form onSubmit={handleAddQuestion} className='my-5'>
                                        <div className='grid grid-cols-2 gap-4 mb-2'>
                                            <select name="topic" className='p-2 border  block focus:outline-none w-full'>
                                                <option value="--টপিক নির্বাচন করুণ --">--টপিক নির্বাচন করুণ --</option>
                                                <option value="">--Filter by Topics--</option>
                                                <option value="বাংলা সাহিত্য">বাংলা সাহিত্য</option>
                                                <option value="বাংলা ভাষা ও ব্যাকরণ">বাংলা ভাষা ও ব্যাকরণ</option>
                                                <option value="English Literature">English Literature</option>
                                                <option value="বাংলাদেশ বিষয়াবলি">বাংলাদেশ বিষয়াবলি</option>
                                                <option value="আন্তর্জাতিক বিষয়াবলি">আন্তর্জাতিক বিষয়াবলি</option>
                                                <option value="ভূগোল ও দুর্যোগ ব্যবস্থাপনা">ভূগোল ও দুর্যোগ ব্যবস্থাপনা</option>
                                                <option value="নৈতিকতা ,মূল্যবোধ ও সুশাসন">নৈতিকতা ,মূল্যবোধ ও সুশাসন</option>
                                                <option value="সাধারণ বিজ্ঞান">সাধারণ বিজ্ঞান</option>
                                                <option value="কম্পিউটার ও তথ্যপ্রযুক্তি">কম্পিউটার ও তথ্যপ্রযুক্তি</option>
                                                <option value="সাধারণ গণিত">সাধারণ গণিত</option>
                                                <option value="মানসিক দক্ষতা">মানসিক দক্ষতা</option>
                                                <option value="Bank Math">Bank Math</option>
                                                <option value="Bank English">Bank English</option>
                                                <option value="Bank Science and ICT">Bank Science and ICT</option>
                                                <option value="Bank BD Affairs">Bank BD Affairs</option>
                                                <option value="Bank International Affairs">Bank International Affairs</option>
                                                <option value="জাতীয় ও আন্তর্জাতিক দিবস ও প্রতিপাদ্য">জাতীয় ও আন্তর্জাতিক দিবস ও প্রতিপাদ্য</option>
                                                <option value="পরিবর্তনশীল তথ্য">পরিবর্তনশীল তথ্য</option>
                                            </select>
                                            <select name="subTopic" className='p-2 border  block focus:outline-none w-full'>
                                                <option value="--টপিক নির্বাচন করুণ --">--সাব টপিক নির্বাচন করুণ --</option>
                                                {
                                                    topicsArray.map(op => <option value={op}>{op}</option>)
                                                }
                                            </select>
                                        </div>
                                        <input type="text" name='question' placeholder='প্রশ্ন প্রবেশ করান' className='p-2 border  block focus:outline-none w-full' />
                                        <div className='my-4 grid grid-cols-2 gap-4'>
                                            <label className='flex items-center mt-2'>
                                                <p className='p-2 border  block focus:outline-none w-10'><span className='bg-black w-6 h-6  flex items-center justify-center rounded-full text-white'>ক</span></p> <input type="text" name='opA' className='p-2 border  block focus:outline-none w-full' placeholder='অপশন' />  <label onClick={() => setAns('a')} htmlFor='a' className='p-2 border  block focus:outline-none w-10 cursor-pointer'><input type="radio" name="ans" id='a' /></label>
                                            </label>
                                            <label className='flex items-center mt-2'>
                                                <p className='p-2 border  block focus:outline-none w-10'><span className='bg-black w-6 h-6  flex items-center justify-center rounded-full text-white'>খ</span></p> <input type="text" name='opB' className='p-2 border  block focus:outline-none w-full' placeholder='অপশন' /> <label onClick={() => setAns('b')} htmlFor='b' className='p-2 border  block focus:outline-none w-10 cursor-pointer'><input type="radio" name="ans" id='b' /></label>
                                            </label>
                                            <label className='flex items-center mt-2'>
                                                <p className='p-2 border  block focus:outline-none w-10'><span className='bg-black w-6 h-6  flex items-center justify-center rounded-full text-white'>গ</span></p> <input type="text" name='opC' className='p-2 border  block focus:outline-none w-full' placeholder='অপশন' /> <label onClick={() => setAns('c')} htmlFor='c' className='p-2 border  block focus:outline-none w-10 cursor-pointer'><input type="radio" name="ans" id='c' /></label>
                                            </label>
                                            <label className='flex items-center mt-2'>
                                                <p className='p-2 border  block focus:outline-none w-10'><span className='bg-black w-6 h-6  flex items-center justify-center rounded-full text-white'>ঘ</span></p> <input type="text" name='opD' className='p-2 border  block focus:outline-none w-full' placeholder='অপশন' /> <label onClick={() => setAns('d')} htmlFor='d' className='p-2 border  block focus:outline-none w-10 cursor-pointer'><input type="radio" name="ans" id='d' /></label>
                                            </label>
                                        </div>
                                        <p>Note : লাইন আলাদা করতে ব্যাকের পর " {'<br />'} "  ব্যাবহার করুণ । </p>
                                        <textarea name="explain" placeholder='ব্যাখ্যা করুণ' className='p-2 border  block focus:outline-none h-24 w-full'></textarea>
                                        <div className='flex justify-end items-center gap-5 mt-5'>
                                            <label onClick={() => setModal('hidden')} className='px-4 py-1 text-white uppercase rounded-sm bg-red-500 cursor-pointer'>Cancel</label>
                                            <button className='px-4 py-1 text-white uppercase rounded-sm bg-green-500'>Submit</button>
                                        </div>
                                    </form>
                                </div>
                            </div>

                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default JobSulationTopic;