import classes from "./Faq.module.css"

import video from '../../assets/video.mp4'
import { useState } from "react"
import FAQDropdown from "../../Components/FAQDropdown/FAQDropdown"

const Faq = () => {
  const [isDrop, setIsDrop] = useState(false)

  return (
    <div className="section--dark"> 
      <div className="container">

        <div className="content">
          <h2 className="h2 line-light-text">FAQ</h2>

          <ul className={classes.list}>
            <FAQDropdown
              title="Какой у вас опыт работы ?"
              body="более 7 лет опыта и 1000-и отремонтированной техники от телефонов до телевизоров"
            />

            <FAQDropdown
              title="Сколько длится ремонт ?"
              body="ремонт делаем быстро, даже в сложных случаях. Сроки зависят от сложности от часа до нескольких дней"
            />

            <FAQDropdown
              title="Есть ли гарантия ?"
              body="да, гарантия есть. От 1 до 12 месяцев в зависимости от типа ремонта и оборудования"
            />            

            <FAQDropdown
              title="Запчасти имеются ?"
              body="да, у нас все запчасти оригинальные. Если под ваш запрос нет - сделаем заказ и предупредим вас"
            />         

            <FAQDropdown
              title="Всё ли ремонтируете ?"
              body="мы ремонтируем почти любую технику. Если сомневаетесь можете набрать и уточнить"
            />         

            <FAQDropdown
              title="Выезжаете ли на дом ?"
              body="нет, мы работает без выезда. Вы всегда можете привезти технику нам или отправить Яндекс доставкой"
            />         
          </ul>
        </div>
        
      </div>
    </div>
  )
}

export default Faq;