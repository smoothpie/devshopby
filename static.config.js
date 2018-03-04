import axios from 'axios'
import React, { Component } from 'react'
import { ServerStyleSheet } from 'styled-components'
const products = require('./products.json');

export default {
  getSiteData: () => ({
    title: 'Devshop.by',
  }),
  siteRoot: 'http://devshop.by',
  getRoutes: async () => {
    return [
      {
        path: '/',
        component: 'src/containers/Home',
        getData: () => ({
          products
        }),
        children: products.map(product => ({
          path: `/product/${product.id}`,
          component: 'src/containers/Product',
          getData: () => ({
            product
          }),
        })),
      },
      {
        path: '/contacts',
        component: 'src/containers/Contacts',
      },
      {
        path: `/thanks`,
        component: 'src/containers/Thanks'
      },
      {
        is404: true,
        component: 'src/containers/404',
      },
    ].concat(
          products.map(product => ({
            path: `/product/${product.id}/order`,
        component: 'src/containers/Order',
        getData: () => ({
          product
        })
      })),
)
  },
  renderToHtml: (render, Comp, meta) => {
    const sheet = new ServerStyleSheet()
    const html = render(sheet.collectStyles(<Comp />))
    meta.styleTags = sheet.getStyleElement()
    return html
  },
  Document: class CustomHtml extends Component {
    render () {
      const { Html, Head, Body, children, renderMeta } = this.props

      return (
        <Html>
          <Head>
            <meta charSet="UTF-8" />
            <meta name="viewport" content="width=device-width, initial-scale=1" />
            <link href="https://fonts.googleapis.com/css?family=Comfortaa:400,700&amp;subset=cyrillic" rel="stylesheet" />
            {renderMeta.styleTags}
          </Head>
          <Body>{children}</Body>
        </Html>
      )
    }
  },
}
