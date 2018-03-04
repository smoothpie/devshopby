import React from 'react'
import { withRouteData, Link } from 'react-static'

export default withRouteData(({ product }) => {
    if (product.id == 1 || product.id == 2) {
    return (
      <div className="product-page">
        <div className="product_images">
          <img src={require(`../../public/images/products/forkfront.jpg`)}/>
          <img src={require(`../../public/images/products/forkback.jpg`)}/>
        </div>
        <div className="product_description">
          <h1>{product.title}</h1>
          <p>Стоимость: {product.price}</p>
          <p>Размерный ряд: S - XXL.</p>
          <Link to={`/product/${product.id}/order`} style={{ fontFamily: 'Comfortaa' }}>
            <button className="order-button">Заказать</button>
          </Link>
        </div>
      </div>
    )} else {

  if (product.category === "tshirt") {
    return (
      <div className="product-page">
        <div className="product_images">
          <img src={require(`../../public/images/products/${product.image}`)} />
        </div>
        <div className="product_description">
          <h1>{product.title}</h1>
          <p>Стоимость: {product.price}</p>
          <p>Размерный ряд: S - XXL.</p>
          <Link to={`/product/${product.id}/order`} style={{ fontFamily: 'Comfortaa' }}>
            <button className="order-button">Заказать</button>
          </Link>
        </div>
      </div>
    )
  } else {
    return (
      <div className="product-page">
        <div className="product_images">
          <img src={require(`../../public/images/products/${product.image}`)}/>
        </div>
        <div className="product_description">
          <h1>{product.title}</h1>
          <p>Стоимость: {product.price}</p>
          <Link to={`/product/${product.id}/order`} style={{ fontFamily: 'Comfortaa' }}>
            <button className="order-button">Заказать</button>
          </Link>
        </div>
      </div>
    )
  }}
})
