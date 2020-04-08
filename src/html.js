import React from 'react'

export default class HTML extends React.Component {
  render() {
    return (
      <html lang="en">
        <head>
          <meta charSet="utf-8" />
          <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
          <meta
            name="viewport"
            content="width=device-width, initial-scale=1.0"
          />
          {this.props.headComponents}
          <link
            href="/img/apple-touch-icon.png"
            rel="apple-touch-icon"
            sizes="180x180"
          />
          <link href="/img/favicon.ico" rel="icon" type="image/x-icon" />

          <script
            type="application/ld+json"
            dangerouslySetInnerHTML={{
              __html: `
{
  "@context": "http://schema.org/",
  "@type": "Person",
  "givenName": "J Rick",
  "familyName": "Ramstetter",
  "name" : "J. Rick Ramstetter",
  "jobTitle": "Systems software engineer",
  "description": "Systems software engineer",
  "email" : "rick@anteaterllc.com",
  "url": "https://ramstetter.com",
  "image" : "https://ramstetter.com/rick-ramstetter.jpg",

  "address": {
    "@type": "PostalAddress",
    "addressLocality": "Vancouver, WA",
    "postalCode": "98683",
    "streetAddress": "305 SE Chkalov Dr Suite 111 PMB 414"
  },
}
`,
            }}
          />
        </head>
        <body>
          <div
            id="___gatsby"
            dangerouslySetInnerHTML={{ __html: this.props.body }}
          />
          {this.props.postBodyComponents}
          {/*  rramstetter         <script
            async
            src="//pagead2.googlesyndication.com/pagead/js/adsbygoogle.js"
         /> 
*/}
        </body>
      </html>
    )
  }
}
