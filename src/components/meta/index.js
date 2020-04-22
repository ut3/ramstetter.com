import { StaticQuery, graphql } from 'gatsby'
import React from 'react'
import Helmet from 'react-helmet'
import get from 'lodash/get'

class Meta extends React.Component {
  render() {
    const { aTitle, location, meta } = this.props
    const siteTitle = get(meta, 'title')
    var title = aTitle ? `${aTitle} | ${siteTitle}` : siteTitle
    console.log(title)
    console.log(meta)
    console.log(location)
    return (
      <Helmet
        title={title}
        meta={[
          { property: 'og:title', content: title },
          { property: 'og:locale', content: 'en_US' },
          { property: 'og:type', content: 'website' },
          {
            property: 'og:description',
            content: get(meta, 'description'),
          },
          {
            property: 'og:url',
            content: `${get(meta, 'siteUrl')}/${location.pathname}`,
          },
          {
            property: 'og:image',
            content: `${get(meta, 'siteUrl')}/rick-ramstetter.jpg`,
          },
        ]}
      />
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
      <Meta meta={data.site.meta} title={title} location={location} />
    )}
  />
)

// {
//   "@context": "http://schema.org/",
//   "@type": "Person",
//   "givenName": "J Rick",
//   "familyName": "Ramstetter",
//   "name" : "J. Rick Ramstetter",
//   "jobTitle": "Systems software engineer",
//   "description": "Systems software engineer",
//   "email" : "rick@anteaterllc.com",
//   "url": "https://ramstetter.com",
//   "image" : "https://ramstetter.com/rick-ramstetter.jpg",

//   "address": {
//     "@type": "PostalAddress",
//     "addressLocality": "Vancouver, WA",
//     "postalCode": "98683",
//     "streetAddress": "305 SE Chkalov Dr Suite 111 PMB 414"
//   }
// }
