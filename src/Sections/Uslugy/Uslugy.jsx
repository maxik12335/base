import classes from "./Uslugy.module.css"

import img_1 from "../../assets/img_1.png"
import img_2 from "../../assets/img_2.png"
import img_3 from "../../assets/img_3.png"
import img_4 from "../../assets/img_4.png"
import img_5 from "../../assets/img_5.png"

const Uslugy = () => {
  return (
    <div className="section--dark line-light-section" id="uslugy"> 
      <div className="container">
        
        <div className="content" style={{gap: "100px"}}>
          <h2 className="h2 line-light-text">Услуги</h2>  

          <ul className={classes.listImg}>
            <li className={classes.imgItem}>
              <img className={classes.img} src={img_1} alt="" />
            </li>
            <li className={classes.imgItem}>
              <img className={classes.img} src={img_2} alt="" />
            </li>
            <li className={classes.imgItem}>
              <img className={classes.img} src={img_3} alt="" />
            </li>
            <li className={classes.imgItem}>
              <img className={classes.img} src={img_4} alt="" />
            </li>
            <li className={classes.imgItem}>
              <img className={classes.img} src={img_5} alt="" />
            </li>
          </ul>

          <ul className={classes.listUlsugy}>
            <li className={`${classes.uslugyItem} text-base`}>ремонт телефонов и планшетов</li>
            <li className={`${classes.uslugyItem} text-base`}>настройка компьютеров и ноутбуков</li>
            <li className={`${classes.uslugyItem} text-base`}>замена подсветки на телевизорах</li>
            <li className={`${classes.uslugyItem} text-base`}>восстановление iPhone</li>
            <li className={`${classes.uslugyItem} text-base`}>большой ассортиент запчастей в наличии</li>
            <li className={`${classes.uslugyItem} text-base`}>сборка игровых компьютеров</li>
          </ul>
        </div>
        
      </div>
    </div>
  )
}

export default Uslugy;