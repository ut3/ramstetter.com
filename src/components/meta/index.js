import React from 'react'
import Helmet from 'react-helmet'
import get from 'lodash/get'

class Meta extends React.Component {
  render() {
    const { site, title, location } = this.props
    const siteTitle = get(site, 'title')
    title = title ? `${title} | ${siteTitle}` : siteTitle
    return (
      <Helmet
        title={title}
        meta={[
          { property: 'og:title', content: title },
          { property: 'og:locale', content: 'en_US' },
          { property: 'og:type', content: 'website' },
          {
            property: 'og:description',
            content: get(site, 'description'),
          },
          {
            property: 'og:url',
            content: `${get(site, 'siteUrl')}/`,
          },
          {
            property: 'og:image',
            content: `${get(site, 'siteUrl')}/rick-ramstetter.jpg`,
          },
        ]}
      />
    )
  }
}
export default Meta


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

