import { graphql, useStaticQuery } from 'gatsby';
import React from 'react';

const ClintLogo = () => {

  const logo = useStaticQuery(graphql`
  query { allMarkdownRemark(
      filter: {frontmatter: {section: {in: "Clint Logo"}}}
    ) {
      nodes {
        frontmatter {
          id
          section
          Logos {
            logo
          }
        }
      }
    }
  }
  `)

  console.log(logo.allMarkdownRemark.nodes[0].frontmatter);
  // const sectionData = data.clintLogoSection.nodes[0].frontmatter;
  return (
    <div className='container my-[84px]'>
      <div className="grid lg:grid-cols-5 md:grid-cols-4 grid-cols-2">
        {logo.allMarkdownRemark.nodes[0].frontmatter.Logos.map(clintLogo => <img className='lg:mb-0 mb-4' src={clintLogo.logo} alt="" srcset="" />)}
      </div>
    </div>
  );
};

export default ClintLogo;
