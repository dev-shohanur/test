import React from 'react';
import { FaHeart } from 'react-icons/fa';

const Events = ({ data }) => {

  console.log(data);

  const sectionData = data.EventList.nodes[0].frontmatter

  return (
    <div className='border-t-[1px] border-t-[#DFDFDF] pt-14'>
      <div className="container">
        <div className="flex items-center justify-between">
          <h2 className='text-[32px] leading-[48px] text-[#363848] font-semibold'>{sectionData.title}</h2>
          <div className="">
            <select className="select select-bordered w-full rounded-full">
              <option disabled selected>Newest</option>
              <option>Han Solo</option>
              <option>Greedo</option>
            </select>
          </div>
        </div>

        <div className="grid xl:grid-cols-3 md:grid-cols-2 grid-cols-1 my-12 gap-[46px]">
          {
            sectionData.events.slice(3).map(event => <div className="">
              <div className="card card-compact bg-base-100 shadow-xl">
                <figure><img className='w-full' src={event.image} alt="Shoes" /></figure>
                <div className="card-body relative">
                  <div className="flex items-end gap-[20px]">
                    <div className="blog-bg transition-all duration-500 rounded-[60px] text-center p-4 -mt-[16%]">
                      <h2 className='text-[34px] leading-[28px] font-bold text-[#FFF] my-2'>{event.day}</h2>
                      <p className='text-[18px] leading-[28px] font-semibold text-[#ffffff70] mb-[20px]'>{event.month}</p>
                      <div className="transition-all duration-700 flex items-center justify-center rounded-full w-14 h-14 cursor-pointer">
                        <FaHeart className='text-[24px] transition-all duration-700  cursor-pointer m-2' />
                      </div>
                    </div>
                    <div className="">
                      <p className='text-[#FE8D4D] text-[18px] leading-[24px] tracking-[2px]'>{event.category}</p>
                      <h2 className="card-title text-[20px] leading-[30px]">{event.title}</h2>
                    </div>
                  </div>
                  <p className='text-[16px] leading-[28px] font-normal'>
                    {event.details}
                  </p>
                </div>
              </div>
            </div>)
          }
        </div>
        <div className="text-center w-full flex justify-center mt-10">
          <button className='btn bg-[#5F4BDB] border-none rounded-full font-semibold capitalize 2xl:px-14 px-8 py-[18px] text-[16px] text-[#ffffff] '>View More</button>
        </div>
      </div>
    </div>
  );
};

export default Events;