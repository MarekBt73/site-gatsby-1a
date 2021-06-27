module.exports = {
  siteMetadata: {
    title: "blog1",
  },
  plugins: ["gatsby-plugin-styled-components", "gatsby-plugin-gatsby-cloud",

  {
    resolve: `gatsby-plugin-typography`,
    options: {
      pathToConfigModule: `src/utils/typography`,
    },
  },

],


};

