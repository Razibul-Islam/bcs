import React from 'react';
import MenuBookIcon from '@mui/icons-material/MenuBook';
import EditIcon from '@mui/icons-material/Edit';
import TextSnippetIcon from '@mui/icons-material/TextSnippet';
import DescriptionIcon from '@mui/icons-material/Description';
import DrawIcon from '@mui/icons-material/Draw';
import BatchPredictionIcon from '@mui/icons-material/BatchPrediction';

const ExamSection = () => {
    return (
        <div className='bg-[#000000] pt-20'>
            <section className='max-w-7xl mx-auto   pt-10 rounded-md '>
                <h1 className='text-center my-5 text-[#9f9e9e] text-xl mt-20'>Exam Section</h1>

                <section className='flex justify-between items-center'>
                    <div>
                        <img className='w-96 ' src="https://cdni.iconscout.com/illustration/premium/thumb/online-learning-2245537-1889500.png" alt="" />
                    </div>

                    <div className=' grid grid-cols-2 w-1/2 mt-5 py-10 px-5 gap-5'>
                        <div class="info_item">
                            <span class="info_item_img">
                            <MenuBookIcon/>
                            </span>
                            <span class="info_item_content"><span>ফ্রি সাপ্তাহিক মডেল টেস্ট</span></span>
                        </div>
                        <div class="info_item">
                            <span class="info_item_img">
                               <MenuBookIcon/>
                            </span>
                            <span class="info_item_content"><span>নতুনদের জন্য বিসিএস প্রস্তুতি</span></span>
                        </div>
                        <div class="info_item">
                            <span class="info_item_img">
                                <EditIcon/>
                            </span>
                            <span class="info_item_content"><span>অভিজ্ঞদের বিসিএস প্রস্তুতি</span></span>
                        </div>
                        <div class="info_item">
                            <span class="info_item_img">
                                <TextSnippetIcon/>
                            </span>
                            <span class="info_item_content"><span>Subject Care</span></span>
                        </div>
                        <div class="info_item">
                            <span class="info_item_img">
                                <DescriptionIcon/>
                            </span>
                            <span class="info_item_content"><span>জব সল্যুশন</span></span>
                        </div>
                        <div class="info_item">
                            <span class="info_item_img">
                               <DrawIcon/>
                            </span>
                            <span class="info_item_content"><span>ব্যাংক নিয়োগ প্রস্তুতি</span></span>
                        </div>
                        <div class="info_item">
                            <span class="info_item_img">
                                <BatchPredictionIcon/>
                            </span>
                            <span class="info_item_content"><span>শিক্ষক নিয়োগ ও নিবন্ধন</span></span>
                        </div>
                        <div class="info_item">
                            <span class="info_item_img">
                            <MenuBookIcon/>
                            </span>
                            <span class="info_item_content"><span>৯ম - ২০ তম গ্রেডের প্রস্তুতি</span></span>
                        </div>
                    </div>
                </section>
            </section>
        </div>
    );
};

export default ExamSection;