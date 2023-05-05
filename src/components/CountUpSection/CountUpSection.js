import React from 'react';
import CountUp from 'react-countup';

const CountUpSection = ({ data }) => {
  const sectionData = data.counter.nodes[0].frontmatter;
  return (
    <div className="container block bg-[url('https://i.ibb.co/hMvCgBF/counter.png')] bg-no-react	bg-center my-[160px]" style={{ backgroundSize: '100% 100%' }}>
      <div className="grid lg:grid-cols-4 sm:grid-cols-2 grid-cols-1 pt-[85px] pb-[95px]">
        {sectionData.counterData.map(counter => <div className="text-center md:mt-0 mt-4">
          <h2 className='text-[60px] leading-[90px] font-semibold text-[#FFFFFF]'>
            <CountUp start={0} end={counter.number} enableScrollSpy />+
          </h2>
          <p className='text-[18px] text-[#FFFFFF] font-normal mt-4'>{counter.title}</p>
        </div>)}
      </div>
    </div>
  );
};

export default CountUpSection;