import React from 'react'
import { withRouteData, Link } from 'react-static'
import Header from './Header.js';
//

export default withRouteData(({ products }) => (
  <div className="store">
    <Header />
    <div className="options">
      <h2>Привет! У нас можно выбрать что-нибудь из каталога,</h2>
      <h2>а можно удовлетворить свои самые грязные фантазии,</h2>
      <h2>прислав свой макет нам на ящик ;)</h2>
    </div>
    <ul>
    {products.map(product => (
      <li
        className="product"
        key={product.id}
        >
        <Link to={`/product/${product.id}/`}>
          <img
            src={require(`../../public/images/${product.image}`)}
            />
        </Link>
        <h3>
          <Link to={`/product/${product.id}/`}>{product.title}</Link>
        </h3>
        <p>{product.price}</p>
        </li>
    ))}
  </ul>
  </div>
))
