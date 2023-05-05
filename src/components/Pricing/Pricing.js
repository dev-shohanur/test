import React from 'react';
import { FaCheck } from 'react-icons/fa';

const Pricing = ({ data }) => {
  const sectionData = data.pricingPlan.nodes[0].frontmatter;
  return (
    <div className='container py-[60px]'>
      <div className="text-center py-[90px]">
        <h2 className='text-[40px] leading-[60px] font-semibold text-[#363848]'>{sectionData.section}</h2>

        <p className='text-[16px] font-normal text-[#11142D] leading-[24px] my-6'>{sectionData.subTitle}</p>
      </div>
      <div className="grid xl:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-10">
        {sectionData.pricingPlan.map(plan => <div className="card shadow-xl hover:shadow-2xl px-[50px] pt-[45px] pb-[56px]">
          <h2 className='text-[28px] leading-[26px] font-bold #363848 text-center mb-[36px]'>{plan.title}</h2>
          <h2 className='text-[60px] leading-[90px] font-semibold #363848 text-center'>$ {plan.price}</h2>
          <p className='text-[18px] font-normal text-[#363848] leading-[26px] text-center'>{plan.duration}</p>

          <ul className=' my-[53px]'>
            {plan.pricingPlanItems.map(item => <li className=' flex items-center'>
              <FaCheck className='w-5 h-5 text-[#FFFFFF] bg-[#5F4BDB] rounded-full p-[2px] mr-[30px]' />
              <p className='text-[16px] font-normal text-[#363848] leading-[42px]'>{item.items}</p>
            </li>)}
          </ul>

          <button className='btn bg-[#F0EEFF] hover:bg-[#5F4BDB] transition-all duration-700 border-none rounded-full font-semibold capitalize 2xl:px-14 px-8 text-[16px] hover:text-[#ffffff] text-[#5F4BDB] w-full'>Apply Now</button>
        </div>)}

      </div>
    </div>
  );
};

export default Pricing;