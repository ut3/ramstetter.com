import { StaticQuery, graphql } from 'gatsby'
import React from 'react'
import Helmet from 'react-helmet'
import get from 'lodash/get'

class Meta extends React.Component {
  render() {
    const { aTitle, location, meta } = this.props
    const siteTitle = get(meta, 'title')
    var title = aTitle ? `${aTitle} | ${siteTitle}` : siteTitle
    return (
      <Helmet encodeSpecialCharacters={false}>
        <title>{title}</title>
        <meta name="author" content="J Rick Ramstetter" />
        <meta name="description" content={get(meta, 'description')} />
        <meta property="og:type" content="website" />
        <meta property="og:title" content={title} />
        <meta property="og:description" content={get(meta, 'description')} />
        <meta property="og:locale" content="en_US" />
        <meta
          property="og:url"
          content={get(meta, 'siteUrl') + location.pathname}
        />
        <meta
          property="og:image"
          content={get(meta, 'siteUrl') + '/rick-ramstetter.jpg'}
        />
        <script type="application/ld+json">
          {JSON.stringify({
            '@context': 'http://schema.org/',
            '@type': 'Website',
            headline: title,
            name: title,
            description: get(meta, 'description'),
            url: get(meta, 'siteUrl'),
            image: '//ramstetter.com/rick-ramstetter.jpg',
            about: {
              '@type': 'Person',
              '@id': 'https://ramstetter.com/#rick',
            },
            mainEntity: {
              '@type': 'Person',
              '@id': 'https://ramstetter.com/#rick',
            },
          })}
        </script>
      </Helmet>
    )
  }
}

export default ({ title, location }) => (
  <StaticQuery
    query={graphql`
      query MetaQuery {
        site {
          meta: siteMetadata {
            title
            description
            siteUrl
            author
          }
        }
      }
    `}
    render={data => (
      <Meta meta={data.site.meta} aTitle={title} location={location} />
    )}
  />
)
