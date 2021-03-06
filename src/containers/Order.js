import React from 'react'
import { withRouteData, Link } from 'react-static'

export default withRouteData(({product}) => {
  function getOrdered() {
    let orderedStickers = '';
    let stickerOptions=document.getElementsByClassName("sticker-chooser_checkbox");
    for (let i=0; i < stickerOptions.length; i++) {
      if (stickerOptions[i].checked) {
        orderedStickers += stickerOptions[i].value + " ";
      }
    }
    document.getElementById("orderedStickers").value = orderedStickers;
  }
  if (product.category === "tshirt") {
    return(
      <div className="orderpage">
        <h1>Супер, эта крутая штуковина уже почти у тебя!</h1>
        <form className="order-form" action="//flipmail.co/api/hY3rKbbe3EnZZPwkbniY"
              method="POST">
          <div>
            <span className="size-chooser">Размер майки:
              <select className="product_size" name="size">
                <option value="S">S</option>
                <option value="M">M</option>
                <option value="L">L</option>
                <option value="XL">XL</option>
                <option value="XXL">XXL</option>
            </select></span>
            <span>Твоё имя:  <input type="text" name="name"/></span>
            <span>Email:     <input type="text" name="_replyto"/></span>
            <span>Телефон:   <input type="text" name="phone"/></span>
            <span>Адрес:     <input type="text" name="address"/></span>
            <span>Пожелания: <textarea rows="4" name="additional"/></span>
            <input type="hidden" name="product" value={product.id} />
            <input type="hidden" name="_after" value="http://devshop.by/thanks" />
          </div>
          <button className="order-button" type="submit">Оформить заказ</button>
        </form>
      </div>
    )} else if (product.category === "stickers") {
      let stickers = ["GitHub logo", "GitHub octocat", "Git", "Docker", "Golang", "JavaScript", "React", "Angular", "Vue", "Google", "Software Developer", "C#", "C++", "Java", "Python", "PHP", "HTML", "CSS", "JS Promise", "Emacs", "Haskell", "Bash", "Kubernetes"]
      return(
        <div className="orderpage">
          <h1>Супер, эта крутая штуковина уже почти у тебя!</h1>
        <form className="order-form" action="//flipmail.co/api/hY3rKbbe3EnZZPwkbniY"
                method="POST">
            <div>
              <span>Выбери стикеры:
                <div className="sticker-chooser">
                  {stickers.map((sticker, i) => (
                    <div key={i} className="sticker-chooser_option">
                      <input type="checkbox" name="stickers" id={i} value={sticker} className="sticker-chooser_checkbox"/><label for={i}>{sticker}</label>
                    </div>
                  ))}
                </div>
              </span>
              <span>Твоё имя:  <input type="text" name="name"/></span>
              <span>Email:     <input type="text" name="_replyto"/></span>
              <span>Телефон:   <input type="text" name="phone"/></span>
              <span>Адрес:     <input type="text" name="address"/></span>
              <span>Пожелания: <textarea rows="4" name="additional"/></span>
          <input type="hidden" name="product" value={product.id} />
          <input type="hidden" name="orderedStickers" id="orderedStickers"/>

              <input type="hidden" name="_after" value="http://devshop.by/thanks" />
            </div>
          <button className="order-button" type="submit" onClick={getOrdered}>Оформить заказ</button>
          </form>
        </div>
      )
    } else return(
      <div className="orderpage">
        <h1>Супер, эта крутая штуковина уже почти у тебя!</h1>
        <form className="order-form" action="//flipmail.co/api/hY3rKbbe3EnZZPwkbniY"
              method="POST">
          <div>
            <span>Твоё имя:  <input type="text" name="name"/></span>
            <span>Email:     <input type="text" name="_replyto"/></span>
            <span>Телефон:   <input type="text" name="phone"/></span>
            <span>Адрес:     <input type="text" name="address"/></span>
            <span>Пожелания: <textarea rows="4" name="additional"/></span>
            <input type="hidden" name="product" value={product.id} />
            <input type="hidden" name="_after" value="http://devshop.by/thanks" />
          </div>
          <button className="order-button" type="submit">Оформить заказ</button>
        </form>
      </div>
    )
})
