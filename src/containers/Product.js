import React from 'react'
import { withRouteData, Link } from 'react-static'

export default withRouteData(({ product }) => {
  if (product.id == 1 || product.id == 2) {
    return (
      <div className="product-page">
        <div className="product_images">
          <img src={require(`../../public/images/forkfront.jpg`)}/>
          <img src={require(`../../public/images/forkback.jpg`)}/>
        </div>
        <div className="product_description">
          <h1>{product.title}</h1>
          <p>Стоимость: {product.price}</p>
          <p>Размер:
            <select className="product_size">
              <option value="S">S</option>
              <option value="M">M</option>
              <option value="L">L</option>
              <option value="XL">XL</option>
              <option value="XXL">XXL</option>
          </select></p>
          <Link to={`/order/`}>
            <button>Заказать</button>
          </Link>
        </div>
      </div>
    )} else {

  if (product.category === "tshirt") {
    return (
      <div className="product-page">
        <img src={require(`../../public/images/${product.image}`)} />
        <div className="product_description">
          <h1>{product.title}</h1>
          <p>Стоимость: {product.price}</p>
          <p>Размер:
            <select className="product_size">
              <option value="S">S</option>
              <option value="M">M</option>
              <option value="L">L</option>
              <option value="XL">XL</option>
              <option value="XXL">XXL</option>
          </select></p>
          <Link to="/order">
            <button>Заказать</button>
          </Link>
        </div>
      </div>
    )
  } else {
    return (
      <div className="product-page">
        <img src={require(`../../public/images/${product.image}`)}/>
        <div className="product_description">
          <h1>{product.title}</h1>
          <p>Стоимость: {product.price}</p>
          <Link to="/order">
            <button>Заказать</button>
          </Link>
        </div>
      </div>
    )
  }}
})
