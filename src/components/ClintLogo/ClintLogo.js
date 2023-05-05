import React from 'react';

const ClintLogo = ({ data }) => {
  const sectionData = data.clintLogo.nodes[0].frontmatter;
  console.log(sectionData);
  return (
    <div className='container my-[84px]'>
      <div className="grid lg:grid-cols-5 md:grid-cols-4 grid-cols-2">
        {sectionData.Logos.map(image => <img className='lg:mb-0 mb-4' src={image.logo} alt="" srcset="" />)}
      </div>
    </div>
  );
};

export default ClintLogo;