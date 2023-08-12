import React, { useState } from "react";
import FilterListIcon from "@mui/icons-material/FilterList";

const CentralArchive = () => {
  const [modal, setModal] = useState("hidden");
  return (
    <div className="max-w-6xl mx-auto px-5">
      <h1 className="text-center mt-5 text-lg">Central Archive</h1>
      <div className="flex justify-center mt-14 items-center">
        <input
          className="border border-teal-700 outline-none w-72 p-2 rounded-md"
          type="search"
          placeholder="Search..."
        />
        <button className="ml-3 bg-teal-300 px-4 rounded-md py-2">
          Search
        </button>
        <div className="ml-5">
          <FilterListIcon onClick={() => setModal("block")} />
        </div>
      </div>
      {/* modal  */}
      <div
        className={`relative z-10 ${modal}`}
        aria-labelledby="modal-title"
        role="dialog"
        aria-modal="true"
      >
        <div className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity"></div>

        <div className="fixed inset-0 z-10 overflow-y-auto">
          <div className="flex min-h-full items-end justify-center p-4 text-center sm:items-center sm:p-0">
            <div className="relative transform overflow-hidden rounded-lg bg-white text-left shadow-xl transition-all sm:my-8 sm:w-full sm:max-w-xl max-h-[450px] overflow-y-auto">
              <div className="bg-white px-4 pb-4 pt-5 sm:p-6 sm:pb-4">
                <div>
                  <p className="flex justify-start items-center gap-4">
                    Add Bangladesh Affairs
                  </p>
                  <form className="my-5 space-y-2">
                    <div>
                      <input id="BengaliLiterature" type="checkbox" />
                      <label htmlFor="BengaliLiterature" className="ml-1">
                        বাংলা সাহিত্য
                      </label>
                    </div>
                    <div>
                      <input id="BanglaGrammar" type="checkbox" />
                      <label htmlFor="BanglaGrammar" className="ml-1">
                        বাংলা ব্যাকরণ
                      </label>
                    </div>
                    <div>
                      <input id="EnglishLiterature" type="checkbox" />
                      <label htmlFor="EnglishLiterature" className="ml-1">
                        English Literature
                      </label>
                    </div>
                    <div>
                      <input id="EnglishGrammar" type="checkbox" />
                      <label htmlFor="EnglishGrammar" className="ml-1">
                        English Grammar
                      </label>
                    </div>
                    <div>
                      <input
                        id="BengaliLanguageAndLiterature"
                        type="checkbox"
                      />
                      <label
                        htmlFor="BengaliLanguageAndLiterature"
                        className="ml-1"
                      >
                        বাংলা ভাষা ও সাহিত্য
                      </label>
                    </div>
                    <div>
                      <input
                        id="EnglishLanguageAndLiterature"
                        type="checkbox"
                      />
                      <label
                        htmlFor="EnglishLanguageAndLiterature"
                        className="ml-1"
                      >
                        English Language And Literature
                      </label>
                    </div>
                    <div>
                      <input id="BangladeshAffairs" type="checkbox" />
                      <label htmlFor="BangladeshAffairs" className="ml-1">
                        বাংলাদেশ বিষয়াবলি
                      </label>
                    </div>
                    <div>
                      <input id="InternationalAffairs" type="checkbox" />
                      <label htmlFor="InternationalAffairs" className="ml-1">
                        আন্তর্জাতিক বিষয়াবলি
                      </label>
                    </div>
                    <div>
                      <input id="MathematicalReasoning" type="checkbox" />
                      <label htmlFor="MathematicalReasoning" className="ml-1">
                        গাণিতিক যুক্তি
                      </label>
                    </div>
                    <div>
                      <input id="MentalSkills" type="checkbox" />
                      <label htmlFor="MentalSkills" className="ml-1">
                        মানসিক দক্ষতা
                      </label>
                    </div>
                    <div>
                      <input id="GeneralScience" type="checkbox" />
                      <label htmlFor="GeneralScience" className="ml-1">
                        সাধারণ বিজ্ঞান
                      </label>
                    </div>
                    <div>
                      <input id="RecentAffairs" type="checkbox" />
                      <label htmlFor="RecentAffairs" className="ml-1">
                        সাম্প্রতিক বিষয়াবলি
                      </label>
                    </div>
                    <div>
                      <input id="MathematicsAndMentalSkills" type="checkbox" />
                      <label
                        htmlFor="MathematicsAndMentalSkills"
                        className="ml-1"
                      >
                        গণিত ও মানসিক দক্ষতা
                      </label>
                    </div>
                    <div>
                      <input id="ScienceAndComputers" type="checkbox" />
                      <label htmlFor="ScienceAndComputers" className="ml-1">
                        বিজ্ঞান ও কম্পিউটার
                      </label>
                    </div>
                    <div>
                      <input id="GeographyAndEthics" type="checkbox" />
                      <label htmlFor="GeographyAndEthics" className="ml-1">
                        ভূগোল ও নৈতিকতা
                      </label>
                    </div>
                    <div>
                      <input id="BCSVocabulary" type="checkbox" />
                      <label htmlFor="BCSVocabulary" className="ml-1">
                        বিসিএস ভোকাবুলারি
                      </label>
                    </div>
                    <div className="flex justify-end items-center gap-5 mt-5">
                      <label
                        onClick={() => setModal("hidden")}
                        className="px-4 py-1 text-white uppercase rounded-sm bg-red-500 cursor-pointer"
                      >
                        Cancel
                      </label>
                      <label className="px-4 py-1 text-white uppercase rounded-sm bg-red-500 cursor-pointer">
                        Clear
                      </label>

                      <button className="px-4 py-1 text-white uppercase rounded-sm bg-green-500">
                        Apply
                      </button>
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

export default CentralArchive;
