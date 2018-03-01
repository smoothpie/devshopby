import React from 'react'

export default () => (
  <div style={{ display: 'flex', justifyContent: 'space-between' }}>
    <div className="contacts">
      <h1>Мы доставляем по Минску или отправляем по почте.</h1>
      <span>Стоимость доставки: 4 рубля.</span>
      <span>По всем вопросам писать на: <strong>devshopby@gmail.com</strong><br />
        Или звонить по номеру: <strong>+375293910278</strong></span>
    </div>
    <img className="dockerlogo" src={require(`../../public/images/dockerlogo.png`)} />
  </div>
)
