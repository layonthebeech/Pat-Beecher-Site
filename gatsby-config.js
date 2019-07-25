/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.org/docs/gatsby-config/
 */
const path = require(`path`)

module.exports = {
  /* Your site config here */
  siteMetadata: {
    title: `Pat Beecher - Voice Actor`,
    siteSections: [
      {
        title: "Pat Beecher",
        id: "profile",
      },
      {
        title: "Who am I",
        id: "who-am-i",
      },
      {
        title: "Who I've Worked For",
        id: "sponsors",
      },
      {
        title: "Contact Me",
        id: "contact",
      },
    ],
    audioFiles: [
      {
        title: "Commercial Demo 2019",
        url:
          "/static/Patrick Beecher comm demo 2019-e31e8ae9b36785bf4655a0a39019ed42.mp3",
      },
      {
        title: "Explainer",
        url: "/static/marathonpetroleum-215495205782348fb3f841cbb5a41c0f.mp3",
      },
      {
        title: "IVR",
        url: "/static/IVR-b15f7eb1b8b2b990a4d00155491e7587.mp3",
      },
    ],
  },
  plugins: [
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `audio`,
        path: `${__dirname}/src/audio/`,
        ignore: [`**/\.*`], // ignore files starting with a dot
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: path.join(__dirname, `src`, `images`),
      },
    },
    `gatsby-plugin-sass`,
    `gatsby-plugin-react-helmet`,
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
  ],
}
