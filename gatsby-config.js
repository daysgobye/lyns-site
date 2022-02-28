module.exports = {
  siteMetadata: {
    title: `We Were Smiths: Falling From Grace`,
    description: `We Were Smiths:Falling From Grace.`,
    author: `Lyn Gregory`
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`
      }
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `gatsby-starter-default`,
        short_name: `starter`,
        start_url: `/`,
        background_color: `#ffffff`,
        theme_color: `#404040`,
        display: `minimal-ui`,
        icon: `src/images/favicon-32x32.png` // This path is relative to the root of the site.
      }
    },
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.app/offline
    // 'gatsby-plugin-offline',
    `gatsby-plugin-sass`,
    {
      resolve: `gatsby-source-contentful`,
      options: {
        spaceId: `buawi7gya7qk`,
        // Learn about environment variables: https://gatsby.app/env-vars
        accessToken: `2ce71a65ff3afeafc7bc94dd0b2679379d10b56892d83970d62b529b3be250c1`
      }
    },
    {
      resolve: `gatsby-plugin-google-analytics`,
      options: {
        trackingId: "UA-135931953-1",
        head: false
      }
    },
    `@contentful/gatsby-transformer-contentful-richtext`,
    `gatsby-plugin-sharp`,
    `gatsby-transformer-sharp`,
    `gatsby-plugin-offline`
  ]
};
