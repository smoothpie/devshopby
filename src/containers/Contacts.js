import React from 'react'

export default () => (
  <div style={{ display: 'flex', justifyContent: 'space-between' }}>
    <div className="contacts">
      <h1>Мы доставляем по Минску или отправляем по почте.</h1>
      <span>Стоимость доставки: 2 рубля.</span>
      <span>Если очень хочется, можно приехать по адресу<br /> <strong>г. Минск, 2-ой Сморговский переулок, д.31.</strong><br />Можно даже на чай.</span>
      <span>По всем вопросам писать на: <strong>devshopby@gmail.com</strong><br />
        Или звонить по номеру: <strong>+375 29 391 02 78</strong></span>
    </div>
    <img className="dockerlogo" src={require(`../../public/images/dockerlogo.png`)} />
  </div>
)
