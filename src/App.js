import React from 'react'
import { Router, Link } from 'react-static'
import styled, { injectGlobal } from 'styled-components'
import { hot } from 'react-hot-loader'
import Routes from 'react-static-routes'

injectGlobal`
  body {
    font-family: Ubuntu, sans-serif;
    font-weight: 300;
    font-size: 100%;
    margin: 0;
    padding: 0;
    border: border-box;
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    min-height: 100vh;
  }
`

const AppStyles = styled.div`
  .bg {
    background: url(/static/blurreddocker.58cad9d6.png) no-repeat right;
    background-size: contain;
    padding: 20px;
    position: absolute;
    height: 100%;
    width: 100%;
    z-index: -1;
    opacity: 0.3;
    right: 0;
    top: 0;
    position: fixed;
  }

  .main {
    position: relative;
    z-index: 1;
    display: flex;
    flex-direction: column;
    min-height: 100vh
  }

  .content {
    flex: 1;
    display: flex
  }

  a {
    text-decoration: none;
    color: #4c5e76;
  }

  a:hover {
    color: grey
  }

  nav {
    display: flex;
    justify-content: space-between;
    align-items: center;
    background: #fff;
    padding: 2px 12px;
    box-shadow: 0 3px 12px rgba(0,0,0,0.12);

    a {
      color: #4c5e76;
      display: flex;
      padding: 0;
      align-items: center;
    }

    a:hover {
      color: grey
    }

    .links {
      display: flex;
      width: 40%;
      justify-content: space-around;
      margin: 0 10px;
    }

    .social-links {
      display: flex;
    }

    .social-links a {
      padding: 0;
      margin: 0 5px
    }

    .social-links img {
    }
  }

  .logo {
    width: 173px;
    height: auto;
  }

  .nav_contacts {
    display: flex;
    align-items: center;
    align-self: center;
    text-align: right;
    padding: 0 12px;
  }

  .nav_contacts a {
    padding: 0;
    font-weight: bold;
  }

  .phonemail {
    flex-direction: column
  }

  .header {
    height: 100vh;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding-left: 80px;
    margin-top: -45px;
  }

  .header_description h1 {
    font-size: 3.125em;
    line-height: 0.8;
    color: #4c5e76;
  }

  .header_description span {
    font-size: 1.75em;
    color: #292727;
  }

  .dockerlogo {
    display: none;
    margin-top: 30px;
    width: 600px;
    height: 450px;
    max-width: 100%;
  }

  .store ul {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    padding: 0;
    margin: 0 auto;
    width: 90%;
  }

  .options {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    margin-bottom: 80px;
  }

  .options h2 {
    line-height: 0.6;
    text-align: center;
    color: #4c5e76;
    font-size: 1.75em;
    font-weight: 300;
    margin: 15px 0;
  }

  .product {
    width: 28%;
    margin: 10px;
    list-style-type: none;
    display: flex;
    flex-direction: column;
  }

  .product a {
    display: flex;
    flex-direction: column;
    align-items: center
  }

  .product h3 {
    text-align: center;
    text-transform: uppercase;
    font-size: 1.5em;
  }

  .product p {
    text-align: center;
    font-size: 1.75em;
    font-weight: bold;
    margin-top: -10px;
    color: #333;
  }

  .product img {
    max-width: 100%;
    width: 350px;
    height: 350px;
    object-fit: cover;
    object-position: center;
    border-radius: 2px;
  }

  .product img:hover {
    box-shadow: 0 14px 28px rgba(0,0,0,0.25), 0 10px 10px rgba(0,0,0,0.22);
  }

  .product-page {
    width: 100%;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-around;
    margin: 30px;
  }

  .product_images {
    width: 40%;
  }

  .product_images img {
    object-fit: cover;
    width: 100%;
    height: auto;
    margin: 10px;
    box-shadow: 0 1px 3px rgba(0,0,0,0.12), 0 1px 2px rgba(0,0,0,0.24);
  }

  .product_description {
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 45%;
  }

  .product_description h1 {
    font-size: 2.75em;
    max-width: 500px;
    color: #4c5e76;
    text-align: center;
  }

  .product_description p {
    font-size: 1.5em;
    margin-top: 0
  }

  .product_size {
    height: 35px;
    background-color: #ececec;
    border: none;
    border-radius: 10px;
    margin: 10px;
    width: 95%;
    color: #4c5e76;
    padding: 0 10px;
  }

  .contacts {
    display: flex;
    flex-direction: column;
    justify-content: center;
    width: 70%;
    padding-left: 80px;
  }

  .contacts h1 {
    font-size: 2.75em;
    line-height: 1.2;
    color: #4c5e76;
  }

  .contacts span {
    font-size: 26px;
    line-height: 1.5;
    color: #292727;
    margin: 15px 0;
  }

  .orderpage, .thankyoupage {
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 20px 0;
  }

  .orderpage h1, .thankyoupage h1 {
    font-size: 2.75em;
    color: #4c5e76;
    text-align: center;
    max-width: 85%;
  }

  .orderpage p, .thankyoupage p {
    font-size: 1.375em;
    color: #292727;
  }

  .order-form {
    display: flex;
    flex-direction: column;
    align-items: center;
    border-radius: 20px;
    padding: 20px;
    width: 30%
  }

  .order-form span {
    font-size: 1.5625em;
    color: #4c5e76;
    margin: 15px;
  }

  input, textarea {
    background-color: #ececec;
    border: none;
    border-radius: 10px;
    margin: 10px;
    width: 90%;
    font-size: 0.8em;
    color: #4c5e76;
    padding: 0 10px;
  };

  input {
    height: 35px;
  }

  .sticker-chooser {
    display: flex;
    flex-wrap: wrap;
    flex-direction: row;
    justify-content: center;
  }

  .sticker-chooser_option {
    width: 40%;
    display: flex;
    align-items: center;
    margin: 10px 5px;
  }

  .sticker-chooser input {
    width: 20px;
    height: auto
  }

  .sticker-chooser_option label {
    font-size: 0.6em
  }

  .order-button {
    width: 200px;
    height: 50px;
    background-color: #117bca;
    border: none;
    border-radius: 10px;
    margin: 10px 0;
    color: #fff;
    text-transform: uppercase;
    font-size: 1.1875em
  }

  .order-button:hover {
    box-shadow: 0 14px 28px rgba(0,0,0,0.25), 0 10px 10px rgba(0,0,0,0.22);
    cursor: pointer;
  }

  .thankyoupage {
    width: 100%
  }

  .footer {
    border-top: 1px solid #eee;
    background: #f5f5f5;
    height: 50px;
    flex-shrink: 0
  }

  .footer p {
    color: #a6a6a6;
    margin-left: 50px
  }

  @media (max-width: 1024px) {
    .header {
      justify-content: center;
      padding: 0
    }
    .header_description {
      text-align: center;
    }
    .dockerlogo {
      width: 40%;
      height: 55%
    }
    .options h2 {
      line-height: 1.4;
      margin: 0
    }
    .product {
      width: 40%
    }
    .order-form {
      width: 40%
    }
  }

  @media (max-width: 700px) {
    nav {
      flex-wrap: wrap;
      justify-content: space-around
    }
    nav .links {
      width: 100%;
      order: 2;
      justify-content: center;
      padding: 10px 0
    }
    .header_description h1, .product_description h1, .orderpage h1, .contacts h1 {
      font-size: 2.25em
    }
    .header_description span, .contacts span {
      font-size: 1.5em
    }
    .options h2 {
      margin: 0;
      font-size: 1.5em;
      line-height: 1.4;
      font-weight: 300;
    }
    .product {
      width: 100%
    }
    .product_description h1 {
      font-size: 2.25em
    }
    .product_description p {
      font-size: 1.25em
    }
    .order-form {
      width: 80%;
    }
  }

  @media (max-width: 500px) {
    .header {
      margin-top: -120px
    }
    .product-page {
      margin-top: -5px
    }
    .product_images {
      width: 100%;
      order: 1
    }
    .product_images img {
      margin: 10px 0
    }
    .product_description {
      width: 100%;
      order: 0
    }
    .contacts {
      padding-top: 20px;
    }
  }

  @media (max-width: 400px) {
    .phonemail {
      display: none
    }
    .header {
      padding: 0;
      margin-top: -85px
    }
    .header_description {
      width: 100%;
      margin: 0;
      text-align: center;
    }
    .header_description h1 {
      font-size: 1.25em;
      line-height: 0.8;
    }
    .header_description span {
      font-size: 100%;
    }
    .dockerlogo {
      width: 150px;
      height: 120px;
      margin: 0 auto;
    }
    .options {
      margin-bottom: 0;
      width: 80%;
      margin: 0 auto;
      margin-bottom: 30px
    }
    .options h2 {
      margin: 0;
      font-size: 1em;
      line-height: 1.4;
      font-weight: 300;
    }
    .product h3 {
      font-size: 1.25em
    }
    .product p {
      font-size: 1.25em
    }
    .product_description {
      padding: 20px 0;
    }
    .product_description h1 {
      font-size: 1.5em
    }
    .product_description p {
      font-size: 1em
    }
    .order-button {
      width: 165px;
      height: 40px;
      font-size: 1em
    }
    .contacts {
      width: 90%;
      margin: 30px auto;
      padding: 0;
      justify-content: center;
      align-items: center;
    }
    .contacts h1 {
      font-size: 1.25em;
      line-height: 1.2;
      text-align: center;
    }
    .contacts span {
      font-size: 100%;
      text-align: center;
    }
    .orderpage h1, .thankyoupage h1 {
      font-size: 1.25em;
    }
    .orderpage span {
      font-size: 1.25em
    }
    .thankyoupage p {
      font-size: 1em
    }
    input {
      font-size: 0.8em;
    }
  }
`

const App = () => (
  <Router>
    <AppStyles>
      <div className="bg">
      </div>
      <div className="main">
        <nav>
          <Link to="/" style={{ padding: 0, alignSelf: 'center' }}>
            <img
              className="logo"
              href="/"
              src={require('../public/images/logo.jpg')}
              />
          </Link>
          <div className="links">
            <Link style={{ fontWeight: 'bold', fontFamily: 'Ubuntu Light', margin: '0 5px' }} to="/">КАТАЛОГ</Link>
            <Link style={{ fontWeight: 'bold', fontFamily: 'Ubuntu Light', margin: '0 5px'}} to="/contacts">КОНТАКТЫ</Link>
          </div>
          <div className="nav_contacts">
            <div className="phonemail">
              <a href="mailto:devshopby@gmail.com" target="_top">devshopby@gmail.com</a>
            </div>
            <div className="social-links">
              <a href="https://instagram.com/devshop.by"><img src={require('../public/images/icons/instagram.png')} /></a>
              <a href="https://vk.com/devshop.by"><img src={require('../public/images/icons/vk.png')} /></a>
            </div>
          </div>
        </nav>
        <div className="content">
          <Routes />
        </div>
        <footer className="footer">
          <p>2018 devshop.by</p>
        </footer>
      </div>
    </AppStyles>
  </Router>
)

export default hot(module)(App)
