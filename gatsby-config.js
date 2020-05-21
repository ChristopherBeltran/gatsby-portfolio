module.exports = {
  siteMetadata: {
    title: 'Christopher Beltran',
    author: 'Christopher Beltran',
    description: 'Portfolio Site',
  },
  plugins: [
    'gatsby-plugin-react-helmet',
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: 'Christopher Beltran',
        short_name: 'Christopher Beltran',
        start_url: '/',
        background_color: '#663399',
        theme_color: '#663399',
        display: 'minimal-ui',
        icon: 'public/static/images/favicon.png', // This path is relative to the root of the site.
      },
    },
    'gatsby-plugin-sass',
  ],
}