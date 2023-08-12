import React, { useEffect, useState } from "react";
import RemoveRedEyeIcon from "@mui/icons-material/RemoveRedEye";
import VisibilityOffIcon from "@mui/icons-material/VisibilityOff";
import SearchIcon from '@mui/icons-material/Search';

const Search = () => {
  const [eyeon, setEyeon] = useState(false);
  const [question, setQuestion] = useState([]);
  const [loading, setLoading] = useState(false);
  let index= 1;



  const handleShowExplain = (id) => {
    const element = document.getElementById(id);
    if (element.classList[0] === 'hidden') {
      element.classList.remove('hidden');
    } else {
      element.classList.add('hidden');
    }
  };

  const handleShowQuestion = (ans) => {
    const option = document.getElementById(ans);
    option.style.color = '#22C55E'
    console.log(option);
  }


  const handleSearch = () => {
    setLoading(true)
    const keyword = document.getElementById('search-box').value;
    const url = `http://localhost:5000/smart-search?keyword=${keyword}`
    fetch(url)
      .then(res => res.json())
      .then(data => {
        if (data) {
          setQuestion(data);
          setLoading(false);
        }
      })
    console.log(keyword);
  }

  // console.log(question);

  const itemsPerPage = 20;
  const totalPages = Math.ceil(question.length / itemsPerPage);

  const [currentPage, setCurrentPage] = useState(1);
  // let index = currentPage * itemsPerPage

  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;
  const itemsToDisplay = question.slice(startIndex, endIndex);

  const handlePageChange = newPage => {
    if (newPage >= 1 && newPage <= totalPages) {
      setCurrentPage(newPage);
    }
  };





  return (
    <div className="max-w-6xl mx-auto px-5">
      <h1 className="text-center mt-5 text-lg">প্রশ্ন সার্চ করুন</h1>
      <div className="flex justify-center mt-14 items-center">
        <input
          id="search-box"
          onChange={handleSearch}
          className="border border-teal-500 outline-none w-96 px-4 py-1 rounded-full"
          type="search"
          placeholder="Search..."
        />
        <button className="bg-teal-500 px-4 border border-teal-500 rounded-full py-1 ml-[-50px] text-white">
          <SearchIcon></SearchIcon>
        </button>
        <div className="ml-5">
          {eyeon ? (
            <RemoveRedEyeIcon onClick={() => setEyeon(!eyeon)} />
          ) : (
            <VisibilityOffIcon onClick={() => setEyeon(!eyeon)} />
          )}
        </div>
      </div>


      {
        loading ? <div className="w-full mt-20 text-center flex justify-center"><img className="w-20" src="https://usagif.com/wp-content/uploads/loading-25.gif" alt="" /></div> :
          <div className="w-full mt-20">


            {
              itemsToDisplay.map(questions => {
                if (questions.staus === false) {
                  return <p className="text-center">কোন তথ্য পাওয়া যায়নি </p>
                }
                return (
                  <div className='p-5 rounded shadow-lg '>
                    <h4>{index++})  {questions.question}</h4>
                    <div>
                      <p className={`${eyeon && 'a' === questions.ans ? 'text-green-500 font-extrabold' : ''}`} id={`${questions._id + 'a'}`}>ক) {questions.opA}</p>
                      <p className={`${eyeon && 'b' === questions.ans ? 'text-green-500 font-extrabold' : ''}`} id={`${questions._id + 'b'}`}>খ) {questions.opB}</p>
                      <p className={`${eyeon && 'c' === questions.ans ? 'text-green-500 font-extrabold' : ''}`} id={`${questions._id + "c"}`}>গ) {questions.opC}</p>
                      <p className={`${eyeon && 'd' === questions.ans ? 'text-green-500 font-extrabold' : ''}`} id={`${questions._id + 'd'}`}>ঘ) {questions.opD}</p>
                      <button onClick={() => handleShowExplain(questions._id)} className='my-3 bg-slate-700 text-sm px-3 py-1 rounded-3xl shadow-2xl text-white'>ব্যাখ্যা</button>
                      <button onClick={() => handleShowQuestion(questions._id + questions.ans)} className='my-3 mx-4 bg-slate-700 text-sm px-3 py-1 rounded-3xl shadow-2xl text-white'>Ans</button>
                      <p className='hidden' id={questions._id}>{questions.explain}</p>
                    </div>
                  </div>
                )
              })
            }
          </div>
      }


      <div className="pagination">
        <button className="bg-teal-400 px-4 rounded-sm py-1 text-white" onClick={() => handlePageChange(currentPage - 1)}  disabled={currentPage === 1}>
          Previous
        </button>
        <span className="bg-teal-400 px-4 rounded-sm py-1 text-white">{currentPage} / {totalPages}</span>
        <button className="bg-teal-400 px-4 rounded-sm py-1 text-white" onClick={() => handlePageChange(currentPage + 1)} disabled={currentPage === totalPages}>
          Next
        </button>
      </div>


    </div>
  );
};

export default Search;
