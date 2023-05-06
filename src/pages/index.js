import { graphql } from 'gatsby';
// import 'node_modules/react-modal-video/scss/modal-video.scss';
import React from "react";
import ClintLogo from '../components/ClintLogo/ClintLogo';
import CountUpSection from '../components/CountUpSection/CountUpSection';
import FeatureProfile from '../components/FeatureProfile/FeatureProfile';
import FeaturedJobs from '../components/FeaturedJobs/FeaturedJobs';
import Hero from '../components/Hero/Hero';
import HowItWork from '../components/HowItWork/HowItWork';
import LatestNews from '../components/LatestNews/LatestNews';
import Pricing from '../components/Pricing/Pricing';
import Testimonial from '../components/Testimonial/Testimonial';
import WhyChoose from '../components/WhyChoose/WhyChoose.js';
import Layout from '../layout/layout';

export default function Home({ data }) {
  console.log(data);
  return (
    <Layout>
      <div className="bg-white">
        <Hero />
        <ClintLogo />
        <HowItWork data={data} />
        <WhyChoose data={data} />
        <FeatureProfile />
        <FeaturedJobs data={data} />
        <Testimonial data={data} />
        <CountUpSection data={data} />
        <Pricing data={data} />
        <LatestNews />
      </div>
    </Layout>
  )
}

export const query = graphql`
query home {
 

  FeaturedJobs: allMarkdownRemark(sort: {id: DESC}, filter: {frontmatter: {}, html: {ne: ""}}) {
      nodes {
        frontmatter {
          id
          title
          tittleImg
          price
          locationArea
          team
        }
      }
    }
  whyChooseUs: allMarkdownRemark(
      sort: {id: DESC}
      filter: {frontmatter: {sectionTitle: {regex: ""}}}
    ) {
      nodes {
        frontmatter {
          id
          sectionTitle
          sectionSubTitle
          sectionCards {
            cardDetails
            cardImages
            title
          }
        }
      }
    }
    testimonial: allMarkdownRemark(
      sort: {id: DESC}
      filter: {frontmatter: {section: {in: "testimonial"}}}
    ) {
      nodes {
        frontmatter {
          id
          testimonial {
            details
            image
            name
            rating
            title
          }
          title
          subTitle
        }
      }
    }

    counter: allMarkdownRemark(
      filter: {frontmatter: {section: {in: "Counter Up"}}}
    ) {
      nodes {
        frontmatter {
          id
          section
          counterData {
            number
            title
          }
        }
      }
    }
    pricingPlan: allMarkdownRemark(
      filter: {frontmatter: {section: {in: "Pricing Plan"}}}
    ) {
      nodes {
        frontmatter {
          id
          section
          pricingPlan {
            duration
            price
            title
            pricingPlanItems {
              items
            }
          }
          subTitle
        }
      }
    }
    howItWork: allMarkdownRemark(
      filter: {frontmatter: {section: {in: "How it works"}}}
    ) {
      nodes {
        frontmatter {
          id
          section
          title
          sectionImage
          faq {
            answer
            question
            id
            idBGColor
            idColor
          }
        }
      }
    }
 
  }
  
  
`

