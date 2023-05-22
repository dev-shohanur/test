import { graphql } from 'gatsby';
import React from 'react';
// import '../../node_modules/react-modal-video/scss/modal-video.scss';
import AllJobs from '../components/AllJobs/AllJobs';
import ClintLogo from '../components/ClintLogo/ClintLogo';
import Events from '../components/Events/Events';
import JobListHero from '../components/JobListHero/JobListHero';
import Layout from '../layout/layout';

export default function JobList({ data }) {
  return (
    <Layout>
      <div className='bg-white'>
        <JobListHero data={data} />
        <AllJobs data={data} />
        <Events data={data} />
        <ClintLogo />
      </div>
    </Layout>
  )
}

export const query = graphql`
query JobsList {
 jobLists: allMarkdownRemark(sort: {id: DESC}, filter: {frontmatter: {}, html: {ne: ""}})  {
    nodes {
      frontmatter {
        id
        title
        tittleImg
        price
        locationArea
        team
        logo
      }
    }
  }
  jobListHero: allMarkdownRemark(
    sort: {id: DESC}
    filter: {frontmatter: {section: {in: "Job List Hero"}}}
  ) {
    nodes {
      frontmatter {
        id
        firstTitle
        secondTitle
        thradTitle
        jobTag {
          btn
        }
        searchBtn
        heroImage
      }
    }
  }
  EventList: allMarkdownRemark(
    sort: {id: DESC}
    filter: {frontmatter: {section: {in: "Upcoming Events"}}}
  ) {
    nodes {
      frontmatter {
        id
        title
        events {
          id
          day
          month
          image
          category
          title
          details
        }
      }
    }
  }
}
`