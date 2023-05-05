import React from 'react';

export default function WhyChoose({ data }) {
  const sectionData = data.whyChooseUs.nodes[0].frontmatter
  return (
    <div>

      <div className='container my-[60px]'>
        <div className="text-center">
          <h2 className='text-[40px] leading-[60px] font-semibold text-[#363848]'>{sectionData.sectionTitle}</h2>

          <p className='text-[16px] font-normal text-[#11142D] leading-[24px] my-6'>{sectionData.sectionSubTitle}</p>
        </div>
        <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-[38px] mt-[60px]">
          {sectionData.sectionCards.map(card => <div className="card bg-white shadow-xl p-10 hover:shadow-2xl">
            <div className="">
              <img className='' src={card.cardImages} alt="" srcset="" />
            </div>
            {console.log(card)}
            <div className="mt-2">
              <h2 className='text-[30px] leading-[32px] font-semibold text-[#363848] my-5'>{card.title}</h2>
              <p className='text-[16px] font-normal text-[#11142D] leading-[24px] my-6'>{card.cardDetails}</p>
            </div>
          </div>)}

        </div>
      </div>

    </div>
  )
}



