// import { useEffect, useState } from "react";
import classes from "./Navbar.module.css"
import { useNavColor } from "../../utils/navbar";
import { useState } from "react";


// const Navbar = ({navColor, textColor}) => {
const Navbar = () => {

  const [isOpen, setIsOpen] = useState(false)

  const navColor = "#131313"
  const textColor = "#f7f7f7"
  const borderColor = `1px solid color-mix(in srgb, ${textColor} 8%, transparent)`

  return (
    <div className={classes.navbar} style={{ backgroundColor: "transparent", borderBottom: borderColor }}>
      <div className="container-navbar">

        {/* ======= меню desctop ======= */}
        <div className={classes.desctopMenu}>
          <p className="text-base" style={{ color: textColor }}>Алексин</p>

          <div className={classes.menu}>
            <a className="text-base hover" style={{ color: textColor }} href="#uslugy">услуги</a>
            <a className="text-base hover" style={{ color: textColor }} href="#price">цены</a>
            <a className="text-base hover" style={{ color: textColor }} href="#contacts">контакты</a>
          </div>

          <a className="text-base hover" style={{ color: textColor }} href="tel:+79606009131">8 960 600 91 31</a>
        </div>

        {/* ======= burger ======= */}
        <div className={classes.burger} onClick={() => setIsOpen(true)}>
          <span style={{ backgroundColor: textColor }}></span>
          <span style={{ backgroundColor: textColor }}></span>
          <span style={{ backgroundColor: textColor }}></span>
        </div>

        {/* ======= меню mobyle ======= */}
        <div 
          className={`${classes.mobyleMenu} ${isOpen ? classes.isOpen : ''}`}
          style={{ backgroundColor: navColor }}
        >
          <div className={classes.top}>
            <p className="h3" style={{color: textColor}} >Алексин</p>

            <div className={classes.close} onClick={() => setIsOpen(false)}>
              <span style={{ backgroundColor: textColor }}></span>
              <span style={{ backgroundColor: textColor }}></span>
            </div>
          </div>

          <div className={classes.menu}>
            <a 
              className={`${classes.link} text-base`}
              style={{ color: textColor,  borderBottom: borderColor }}
              href="#uslugy"
              onClick={() => setIsOpen(false)}>услуги</a>
            <a 
              className={`${classes.link} text-base`}
              style={{ color: textColor,  borderBottom: borderColor }}
              href="#price"
              onClick={() => setIsOpen(false)}>цены</a>
            <a 
              className={`${classes.link} text-base`}
              style={{ color: textColor,  borderBottom: borderColor }}
              href="#contacts"
              onClick={() => setIsOpen(false)}>контакты</a>
          </div>

          <a className="text-sm bold" style={{ color: textColor }} href="tel:+79606009131">8 960 600 91 31</a>
        </div>

      </div>
    </div>
  )
}

export default Navbar;