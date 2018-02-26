import React from 'react'
import { Router, Link } from 'react-static'
import styled, { injectGlobal } from 'styled-components'
import { hot } from 'react-hot-loader'
//
import Routes from 'react-static-routes'

injectGlobal`
  body {
    font-family: Ubuntu, sans-serif;
    font-weight: 300;
    font-size: 16px;
    margin: 0;
    padding: 0;
    border: border-box;
    display: flex;
    flex-direction: column;
    height: 100%;
  }
  @media (max-width: 400px) {
    .description {
      display: none;
    }
  }
`

const AppStyles = styled.div`
  a {
    text-decoration: none;
    color: #4c5e76;
  }

  a:hover {
    color: grey
  }

  nav {
    width: 100%;
    display: flex;
    justify-content: space-around;
    background: #fff;
    padding: 30px 0;
    justify-content: space-around;

    p {
      font-weight: bold;
      margin: 5px;
    };

    span {
      max-width: 400px;
      paddingTop: 30px
    };

    a {
      color: #4c5e76;
      padding: 1rem;
      display: inline-block;
    }

    a:hover {
      color: grey
    }

    .links {
      display: flex;
      width: 500px;
      justify-content: space-around
    }
  }

  .logo {
    width: 200px;
    height: auto;
  }

  .nav_contacts {
    display: flex;
    flex-direction: column;
    text-align: right;
    align-self: center;
    padding: 0 12px;
  }

  .nav_contacts a {
    padding: 0;
    padding-top: 10px;
    font-weight: bold;
  }

  .header {
    height: 600px;
    display: flex;
    justify-content: space-between;
  }

  .header_description {
    margin: 100px 0 0 80px;
  }

  .header_description h1 {
    font-size: 44px;
    line-height: 36px;
    color: #4c5e76;
  }

  .header_description span {
    font-size: 28px;
    color: #292727;
  }

  .dockerlogo {
    margin-top: 30px;
    width: 600px;
    height: 450px;
    justifySelf: flex-end;

  }

  .store ul {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
  }

  .options {
    margin: 0px 80px 80px 80px;
  }

  .options h2 {
    line-height: 20px;
    text-align: center;
    color: #4c5e76;
    font-size: 30px;
  }

  .product {
    width: 28%;
    margin: 10px;
    list-style-type: none
  }

  .product h3 {
    text-align: center;
    text-transform: uppercase;
    font-size: 22px;
  }

  .product p {
    text-align: center;
    font-size: 22px;
    font-weight: bold;
    margin-top: -10px
  }

  .product img {
    object-fit: cover;
    width: 350px;
    height: 350px;
    box-shadow: 0 1px 3px rgba(0,0,0,0.12), 0 1px 2px rgba(0,0,0,0.24);
  }

  .product img:hover {
    box-shadow: 0 14px 28px rgba(0,0,0,0.25), 0 10px 10px rgba(0,0,0,0.22);
  }

  .product-page {
    display: flex;
    justify-content: space-around;
    margin: 30px;
  }

  .product_images {
    max-width: 500px
  }

  .product_images img {
    object-fit: cover;
    width: 500px;
    height: 500px;
    margin: 10px;
  }

  .product_description {
    display: flex;
    flex-direction: column;
  }

  .product_description h1 {
    font-size: 44px;
    max-width: 500px;
    color: #4c5e76;
  }

  .product_description p {
    font-size: 20px;
    margin-top: 0
  }

  .product_size {
    margin: 0 20px;
    width: 50px;
    height: 30px;
    border: none;
    border-radius: 5px;
  }

  .contacts {
    display: flex;
    flex-direction: column;
    margin: 20px 0 0 80px;
  }

  .contacts h1 {
    font-size: 44px;
    line-height: 50px;
    color: #4c5e76;
  }

  .contacts span {
    font-size: 26px;
    color: #292727;
    margin: 15px 0;
  }

  img {
    max-width: 100%;
  }

  .orderpage {
    display: flex;
    flex-direction: column;
    align-items: center
  }

  .orderpage h1 {
    font-size: 36px;
    color: #4c5e76;
  }

  .orderpage p {
    font-size: 23px;
    color: #292727;
  }

  form {
    display: flex;
    flex-direction: column;
    align-items: center;
    border-radius: 20px;
    padding: 20px;
    width: 500px
  }

  form span {
    font-size: 25px;
    color: #4c5e76;
    margin: 15px;
  }

  input {
    background-color: #ececec;
    border: none;
    border-radius: 10px;
    margin: 10px;
    width: 300px;
    height: 35px;
  };

  button {
    width: 200px;
    height: 50px;
    background-color: #117bca;
    border: none;
    border-radius: 10px;
    margin: 40px 0;
    color: #fff;
    text-transform: uppercase;
    font-size: 19px
  }

  button:hover {
    box-shadow: 0 14px 28px rgba(0,0,0,0.25), 0 10px 10px rgba(0,0,0,0.22);
    cursor: pointer;
  }

  .footer {
    border-top: 1px solid #a6a6a6;
    height: 50px;
    flex-shrink: 0
  }

  .footer p {
    color: #a6a6a6;
    margin-left: 50px
  }
`

const App = () => (
  <Router>
    <AppStyles>
      <nav>
        <Link to="/" style={{ padding: 0, alignSelf: 'center' }}>
          <img
            className="logo"
            href="/"
            src={require('../public/images/logo.jpg')}
            />
        </Link>
        <div className="links">
          <Link style={{ fontWeight: 'bold', fontFamily: 'Ubuntu Light' }} to="/">КАТАЛОГ</Link>
          <Link style={{ fontWeight: 'bold', fontFamily: 'Ubuntu Light' }} to="/contacts">КОНТАКТЫ</Link>
        </div>
        <div className="nav_contacts">
          <a href="tel:+375293910278">+375 29 391 02 78</a>
          <a href="mailto:devshopby@gmail.com?Subject=Hello%20again" target="_top">devshopby@gmail.com</a>
        </div>
      </nav>
      <div className="content">
        <Routes />
      </div>
      <footer className="footer">
        <p>2018 devshop.by</p>
      </footer>
    </AppStyles>
  </Router>
)

export default hot(module)(App)
