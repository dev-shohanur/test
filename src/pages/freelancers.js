import { graphql } from 'gatsby';
import React from 'react';
// import '../../node_modules/react-modal-video/scss/modal-video.scss';
import ClintLogo from '../components/ClintLogo/ClintLogo';
import FeatureProfile from '../components/FeatureProfile/FeatureProfile';
import FreelancerHero from '../components/FreelancerHero/FreelancerHero';
import FreelancerList from '../components/FreelancerList/FreelancerList';
import Layout from '../layout/layout';

export default function Freelancers({ data }) {
  return (
    <Layout>
      <div>
        <FreelancerHero data={data} />
        <div className="-mt-[220px]">
          <FeatureProfile data={data} />
        </div>
        <FreelancerList data={data} />
        <ClintLogo />
      </div>
    </Layout>
  )
}


export const query = graphql`
query Freelancers {

  freelancersHero: allMarkdownRemark(
    sort: {id: DESC}
    filter: {frontmatter: {section: {in: "Freelancers Hero"}}}
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
        background
      }
    }
  }

  FreelancersInfo:  allMarkdownRemark(
    sort: {id: DESC}
    filter: {frontmatter: {freelancer: {in: true}}}
  ) {
      nodes {
        frontmatter {
          id
          rate
          profile
          profession
          onlineStatus
          name
          rating
          member
          location
          lastReview
        }
      }
    }
    featuredprofile: allMarkdownRemark(
      filter: {frontmatter: {section: {in: "Featured profile this week"}}}
    ) {
      nodes {
        frontmatter {
          id
          section
          subTitle
          featuredprofile {
            id
            image
            price
            prof
            rating
            username
          }
        }
      }
    }
  }
`