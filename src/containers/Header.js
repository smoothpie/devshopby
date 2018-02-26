import React from 'react'

export default () => (
  <div className="header">
    <div className="header_description">
      <h1>Первый в Беларуси магазин</h1>
      <h1>от разработчиков</h1>
      <h1>для разработчиков</h1>
      <span>Мы любим крутые майкосики, знаете ли</span>
    </div>
    <img className="dockerlogo" src={require(`../../public/images/dockerlogo.png`)} />
  </div>
)
