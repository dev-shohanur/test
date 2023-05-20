

/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.com/docs/reference/config-files/gatsby-config/
 */

/**
 * @type {import('gatsby').GatsbyConfig}
 */
module.exports = {
  plugins: [
    'gatsby-plugin-postcss',
    "gatsby-transformer-remark",
    `gatsby-plugin-netlify-cms`,
    'gatsby-plugin-postcss',
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        // The unique name for each instance
        name: `jobs`,
        // Path to the directory
        path: `${__dirname}/src/jobs/`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        // The unique name for each instance
        name: `freelancersInfo`,
        // Path to the directory
        path: `${__dirname}/src/freelancersInfo/`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        // The unique name for each instance
        name: `whyChooseUs`,
        // Path to the directory
        path: `${__dirname}/src/whyChooseUs/`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        // The unique name for each instance
        name: `testimonial`,
        // Path to the directory
        path: `${__dirname}/src/testimonial/`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        // The unique name for each instance
        name: `counter`,
        // Path to the directory
        path: `${__dirname}/src/counter/`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        // The unique name for each instance
        name: `pricingPlan`,
        // Path to the directory
        path: `${__dirname}/src/pricingPlan/`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        // The unique name for each instance
        name: `logoSection`,
        // Path to the directory
        path: `${__dirname}/src/logoSection/`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        // The unique name for each instance
        name: `howItWorks`,
        // Path to the directory
        path: `${__dirname}/src/howItWorks/`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        // The unique name for each instance
        name: `hero`,
        // Path to the directory
        path: `${__dirname}/src/hero/`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        // The unique name for each instance
        name: `latestBlog`,
        // Path to the directory
        path: `${__dirname}/src/latestBlog/`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        // The unique name for each instance
        name: `featureProfile`,
        // Path to the directory
        path: `${__dirname}/src/featureProfile/`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        // The unique name for each instance
        name: `jobListPageHero`,
        // Path to the directory
        path: `${__dirname}/src/jobListPageHero/`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        // The unique name for each instance
        name: `freelancers`,
        // Path to the directory
        path: `${__dirname}/src/freelancers/`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        // The unique name for each instance
        name: `EventListHero`,
        // Path to the directory
        path: `${__dirname}/src/EventListHero/`,
      },
    },
  ],
  siteMetadata: {
    title: "Gatsby",
    description: "This is Dev Portfolio website",
    copyright: "This website is copyright 2023 Gatsby",
    contact: "md.shohanur192@gmail.com"
  },
};
