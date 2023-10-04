module.exports = function (eleventyConfig) {
  // Options to customise the appearance of your design history
  // https://x-govuk.github.io/govuk-eleventy-plugin/options/
  eleventyConfig.addPlugin(require('@x-govuk/govuk-eleventy-plugin'), {
    stylesheets: [
      '/styles/application.css'
    ],
    headingPermalinks: true,
    header: {
      organisationLogo: false,
      organisationName: 'Ofqual',
      productName: 'User-Centred Design Histories',
      search: {
        indexPath: '/search.json',
        sitemapPath: '/sitemap'
      }
    }
  })

  // Passthrough
  eleventyConfig.addPassthroughCopy({ './app/images': '.' })

  // Add collection for each design histories project
  eleventyConfig.addCollection('register', collection => {
    return collection.getFilteredByGlob('app/posts/register/*.md')
  })

  eleventyConfig.addCollection('specialists', collection => {
    return collection.getFilteredByGlob('app/posts/specialists/*.md')
  })

  eleventyConfig.addCollection('recognition', collection => {
    return collection.getFilteredByGlob('app/posts/recognition/*.md')
  })

  // Config
  return {
    dataTemplateEngine: 'njk',
    htmlTemplateEngine: 'njk',
    markdownTemplateEngine: 'njk',
    dir: {
      input: 'app',
      output: 'public',
      layouts: '_layouts',
      includes: '_components'
    }
  }



}
