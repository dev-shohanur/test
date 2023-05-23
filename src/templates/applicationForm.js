import { graphql } from 'gatsby';
import React from 'react';
import ClintLogo from '../components/ClintLogo/ClintLogo';
import JobApplyFrom from '../components/JobApplyFrom/JobApplyFrom';
import Layout from '../layout/layout';

export default function ApplicationForm({ data }) {
  return (
    <Layout>
      <div>
        <JobApplyFrom data={data} />
        <ClintLogo />
      </div>
    </Layout>
  )
}

export const query = graphql`
query Job($id: Int) {
    markdownRemark(frontmatter: {id: {eq: $id}}) {
      html
      frontmatter {
        aboutCompany
        admin
        employ
        experience
        id
        location
        locationArea
        member
        price
        publishData
        rating
        salaryClass
        team
        title
        tittleImg
      }
    }

    JobApplyFrom: allMarkdownRemark(
      sort: {id: DESC}
      filter: {frontmatter: {section: {in: "Job Apply From"}}}
    ) {
      nodes {
        frontmatter {
          id
          title
          backBtnLink
          backgroundImage
          breadcrumb {
            link
            title
          }
        }
      }
    }
  }
`

