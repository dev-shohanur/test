import React from 'react';

const JobListHero = ({ data }) => {

  console.log(data);

  const sectionData = data.jobListHero.nodes[0].frontmatter

  return (
    <div>
      <div className="container">
        <div className="grid lg:grid-cols-2 grid-cols-1 items-center">
          <div className="lg:order-none order-last	">
            <h2 className='xl:text-[3.75rem] text-[3rem] leading-[80px] font-semibold text-[#363848]'>
              {sectionData.firstTitle} <span className="text-[#5F4BDB]">{sectionData.secondTitle}</span> {sectionData.thradTitle}
            </h2>

            <div className="mt-16">
              <div className="flex justify-between items-center shadow-lg bg-[#ffffff] rounded-full p-[10px]">
                <input type="email" name="email" className='input w-full bg-transparent' placeholder='Enter your email address...' id="" />
                <button className='btn bg-[#5F4BDB] hover:bg-[#5F4BDB] px-16 border-none rounded-full font-semibold py-[18px] text-[16px] text-[#ffffff] text-[#5F4BDB] capitalize'>{sectionData.searchBtn}</button>
              </div>
            </div>
            <div className="flex items-center gap-4 flex-wrap mt-10">
              {sectionData.jobTag.map(tag => <button className='btn bg-transparent hover:bg-transparent px-5 rounded-full font-normal py-[10px] text-[16px] border-[1px] border-[#E9E6FE] hover:border-[#5F4BDB] text-[#000] hover:text-[#5F4BDB] capitalize'>{tag.btn}</button>)}
            </div>
          </div>
          <div className="">
            <img className='w-full h-auto' src={sectionData.heroImage} alt="" srcset="" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default JobListHero;