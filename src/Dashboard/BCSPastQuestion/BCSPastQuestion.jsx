import React, { useEffect, useState } from 'react';
import { toast } from 'react-toastify';
import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';

const BCSPastQuestion = () => {
    const [modal, setModal] = useState('hidden');
    const [category, setCategory] = useState([])
    const [modal2, setModal2] = useState('hidden');
    const [editQuestion, setEditQuestion] = useState({});
    const [ans, setAns] = useState('');
    const [question, setQuestion] = useState([])
    let index = 1;
    let indexTwo = 1;


    const handleShowExplain = (id) => {
        const element = document.getElementById(id);
        if (element.classList[0] === 'hidden') {
            element.classList.remove('hidden');
        } else {
            element.classList.add('hidden');
        }
    };



    const handleAddQuestion = (e) => {
        e.preventDefault();
        const question = e.target.question.value;
        const category = e.target.category.value;
        const opA = e.target.opA.value;
        const opB = e.target.opB.value;
        const opC = e.target.opC.value;
        const opD = e.target.opD.value;
        const explain = e.target.explain.value;
        const question_id = 'pastbcsquestion101'
        const data = { question, opA, opB, opC, opD, explain, ans, question_id, category }
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
                setModal('hidden');
                e.target.reset();
            })
    };



    const handleEditQuestion = (e) => {
        e.preventDefault();
        const id = editQuestion._id;
        const category = e.target.category.value;
        const question = e.target.question.value;
        const opA = e.target.opA.value;
        const opB = e.target.opB.value;
        const opC = e.target.opC.value;
        const opD = e.target.opD.value;
        const explain = e.target.explain.value;
        const question_id = 'pastbcsquestion101'
        const data = { id, opA, opB, opC, opD, explain, ans, question, category, question_id }
        // console.log(data);
        fetch(`http://localhost:5000/update-question-pastJob`, {
            method: "PUT",
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(data)
        })
            .then(res => res.json())
            .then(data => {
                toast.success('প্রশ্ন আপডেট করা হয়েছে');
                setModal2("hidden")
            })
    }

    const handleGetEdit = (questionGet) => {
        setEditQuestion(questionGet)
        setModal2("")
    }




    const handleDeleteQuestion = (_id) => {
        const url = `http://localhost:5000/delete-question?_id=${_id}`;
        fetch(url, {
            method: 'DELETE'
        })
            .then(res => res.json())
            .then(data => {
                if (data) {
                    toast.success('মুছে ফেলা হয়েছে');
                }
            });

    }


    const handleAddCategory = (e) => {
        e.preventDefault();
        const category = e.target.category.value;
        const data = { category };
        fetch('http://localhost:5000/bcs-past-category-add', {
            method: "POST",
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(data)
        })
            .then(res => res.json())
            .then(data => {
                if (data) {
                    toast.success('Added Successfull');
                    e.target.reset();
                }
            })
    };


    const handleDeletecategory = (_id) => {
        const url = `http://localhost:5000/bcs-past-category-delete?_id=${_id}`;
        fetch(url, {
            method: "DELETE"
        })
            .then(res => res.json())
            .then(data => {
                if (data) {
                    toast.success('Delete Successfull')
                }
            })
    }


    useEffect(() => {
        fetch('http://localhost:5000/bcs-past-category-get')
            .then(res => res.json())
            .then(data => setCategory(data))
    }, [])

    useEffect(() => {
        const url = `http://localhost:5000/get-question?question_id=pastbcsquestion101`;
        fetch(url)
            .then(res => res.json())
            .then(data => setQuestion(data))
    }, [])


    return (
        <div className='p-5'>
            <h1 className='text-center my-5'>বিগত বিগত বিসিএস</h1>
            <div className='flex justify-between items-center mt-10'>
                <button onClick={() => setModal('')} className='px-5 py-1 bg-slate-700 text-white rounded-3xl'>Add Question</button>
                <div className='flex gap-3'>
                    <input type="text" placeholder='প্রশ্ন খুঁজুন' className='border rounded-full px-5 py-2 focus:outline-none' />
                </div>
            </div>



            <hr className='my-5' />

            <section>
                <p>মোট প্রশ্নঃ {question.length} টি</p>

                <section className='flex justify-between gap-5'>
                    <div className='w-2/3'>
                        {
                            question.map(questions => {
                                return (
                                    <div className='p-5 rounded shadow-lg '>
                                        <h4>{index++})  {questions.question}</h4>
                                        <div className=''>
                                            <p className={`${'a' === questions.ans ? 'text-green-500 font-extrabold' : ''}`}>ক) {questions.opA}</p>
                                            <p className={`${'b' === questions.ans ? 'text-green-500 font-extrabold' : ''}`}>খ) {questions.opB}</p>
                                            <p className={`${'c' === questions.ans ? 'text-green-500 font-extrabold' : ''}`}>গ) {questions.opC}</p>
                                            <p className={`${'d' === questions.ans ? 'text-green-500 font-extrabold' : ''}`}>ঘ) {questions.opD}</p>
                                            <button onClick={() => handleShowExplain(questions._id)} className='my-3 bg-slate-700 text-sm px-3 py-1 rounded-3xl shadow-2xl text-white '>ব্যাখ্যা</button> <button onClick={() => handleDeleteQuestion(questions._id)} className='my-3 bg-slate-700 text-sm px-3 py-[2px] rounded-3xl shadow-2xl text-white'><DeleteIcon className='p-1' ></DeleteIcon></button>
                                            <button onClick={() => { handleGetEdit(questions) }} className='my-3 bg-slate-700 text-sm px-3 py-[2px] rounded-3xl shadow-2xl text-white'>
                                                <EditIcon className='p-1' ></EditIcon>
                                            </button>
                                            <p className='hidden' id={questions._id}>{questions.explain}</p>
                                        </div>
                                    </div>
                                )
                            })
                        }
                    </div>
                    <div className='w-1/3 shadow-lg p-3'>
                        <h1 className='text-center '>Question Category</h1>
                        <div className='mt-5'>
                            {
                                category.map(cate => <div className='py-2 px-4 flex justify-between border-b'><p>{indexTwo++} {cate.category}</p> <button onClick={() => handleDeletecategory(cate._id)} className='bg-red-400 px-2 rounded-xl text-white'>Delete</button></div>)
                            }
                        </div>
                        <form onSubmit={handleAddCategory} className='mt-5 flex'>
                            <input name='category' type="text" placeholder='Category Name' className='p-2 block w-full border focus:outline-none ' />
                            <button className='px-5 text-white font-bold py-2 bg-teal-500'>Add</button>
                        </form>
                    </div>
                </section>

            </section>



            {/* modal  */}
            <div class={`relative z-10 ${modal}`} aria-labelledby="modal-title" role="dialog" aria-modal="true">
                <div class="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity"></div>
                <div class="fixed inset-0 z-10 overflow-y-auto">
                    <div class="flex min-h-full items-end justify-center p-4 text-center sm:items-center sm:p-0">
                        <div class="relative transform overflow-hidden rounded-lg bg-white text-left shadow-xl transition-all sm:my-8 sm:w-full sm:max-w-5xl">
                            <div class="bg-white px-4 pb-4 pt-5 sm:p-6 sm:pb-4">
                                <div>
                                    <p className='flex justify-start items-center gap-4'>বিগত বিসিএস প্রশ্ন যোগ করুণ</p>
                                    <form onSubmit={handleAddQuestion} className='my-5'>
                                        <select name="category" className='p-2 border  block focus:outline-none w-full'>
                                            <option>--Select Category--</option>
                                            {
                                                category.map(cate => <option>{cate.category}</option>)
                                            }
                                        </select>
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
                                        <textarea name="explain" placeholder='ব্যাখ্যা করুণ' className='p-2 border block focus:outline-none h-24 w-full'></textarea>
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

            {/* Upgrade Modal */}
            <div class={`relative z-10 ${modal2}`} aria-labelledby="modal-title" role="dialog" aria-modal="true">
                <div class="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity"></div>
                <div class="fixed inset-0 z-10 overflow-y-auto">
                    <div class="flex min-h-full items-end justify-center p-4 text-center sm:items-center sm:p-0">
                        <div class="relative transform overflow-hidden rounded-lg bg-white text-left shadow-xl transition-all sm:my-8 sm:w-full sm:max-w-5xl">
                            <div class="bg-white px-4 pb-4 pt-5 sm:p-6 sm:pb-4">
                                <div>
                                    <p className='flex justify-start items-center gap-4'>বিগত বিগত বিসিএস প্রশ্ন আপডেট করুন </p>
                                    <form onSubmit={handleEditQuestion} className='my-5'>
                                        <div className='grid grid-cols-3 gap-4 mb-2'>
                                            <select name="category" className='p-2 border  block focus:outline-none w-full mt-2'>
                                                <option>--Select Category --</option>
                                                {
                                                    category?.map(cate => <option>{cate.category}</option>)
                                                }
                                            </select>
                                        </div>
                                        <input type="text" name='question' defaultValue={editQuestion.question} placeholder='প্রশ্ন প্রবেশ করান' className='p-2 border  block focus:outline-none w-full' />
                                        <div className='my-4 grid grid-cols-2 gap-4'>
                                            <label className='flex items-center mt-2'>
                                                <p className='p-2 border  block focus:outline-none w-10'><span className='bg-black w-6 h-6  flex items-center justify-center rounded-full text-white'>ক</span></p> <input type="text" name='opA' defaultValue={editQuestion.opA} className='p-2 border  block focus:outline-none w-full' placeholder='অপশন' />  <label onClick={() => setAns('a')} htmlFor='a' className='p-2 border  block focus:outline-none w-10 cursor-pointer'><input type="radio" name="ans" id='a' /></label>
                                            </label>
                                            <label className='flex items-center mt-2'>
                                                <p className='p-2 border  block focus:outline-none w-10'><span className='bg-black w-6 h-6  flex items-center justify-center rounded-full text-white'>খ</span></p> <input type="text" name='opB' defaultValue={editQuestion.opB} className='p-2 border  block focus:outline-none w-full' placeholder='অপশন' /> <label onClick={() => setAns('b')} htmlFor='b' className='p-2 border  block focus:outline-none w-10 cursor-pointer'><input type="radio" name="ans" id='b' /></label>
                                            </label>
                                            <label className='flex items-center mt-2'>
                                                <p className='p-2 border  block focus:outline-none w-10'><span className='bg-black w-6 h-6  flex items-center justify-center rounded-full text-white'>গ</span></p> <input type="text" name='opC' defaultValue={editQuestion.opC} className='p-2 border  block focus:outline-none w-full' placeholder='অপশন' /> <label onClick={() => setAns('c')} htmlFor='c' className='p-2 border  block focus:outline-none w-10 cursor-pointer'><input type="radio" name="ans" id='c' /></label>
                                            </label>
                                            <label className='flex items-center mt-2'>
                                                <p className='p-2 border  block focus:outline-none w-10'><span className='bg-black w-6 h-6  flex items-center justify-center rounded-full text-white'>ঘ</span></p> <input type="text" name='opD' defaultValue={editQuestion.opD} className='p-2 border  block focus:outline-none w-full' placeholder='অপশন' /> <label onClick={() => setAns('d')} htmlFor='d' className='p-2 border  block focus:outline-none w-10 cursor-pointer'><input type="radio" name="ans" id='d' /></label>
                                            </label>
                                        </div>
                                        <p>Note : লাইন আলাদা করতে ব্যাকের পর " {'<br />'} "  ব্যাবহার করুণ । </p>
                                        <textarea name="explain" placeholder='ব্যাখ্যা করুণ' defaultValue={editQuestion.explain} className='p-2 border  block focus:outline-none h-24 w-full'></textarea>
                                        <div className='flex justify-end items-center gap-5 mt-5'>
                                            <label onClick={() => setModal2('hidden')} className='px-4 py-1 text-white uppercase rounded-sm bg-red-500 cursor-pointer'>Cancel</label>
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

export default BCSPastQuestion;