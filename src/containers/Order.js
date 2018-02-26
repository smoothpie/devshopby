import React from 'react'
import { withRouteData, Link } from 'react-static'

export default () => (
  <div className="orderpage">
    <h1>Супер, эта крутая штуковина уже почти у тебя!</h1>
    <form>
      <div>
        <span>Твоё имя:  <input type="text"/></span>
        <span>Email:     <input type="text"/></span>
        <span>Телефон:   <input type="text"/></span>
        <span>Адрес:     <input type="text"/></span>
        <span>Пожелания: <input type="text"/></span>
      </div>
      <Link to="/order/complete/">
        <button type="submit">Оформить заказ</button>
      </Link>
    </form>
  </div>
)
