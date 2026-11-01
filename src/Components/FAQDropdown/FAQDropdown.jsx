import { useState } from "react";
import classes from "./FAQDropdown.module.css";

const FAQDropdown = ({title, body}) => {
  const [isDrop, setIsDrop] = useState(false)
  const setArrowClass = isDrop ? `${classes.arrow} ${classes.arrowRotate}` : `${classes.arrow}`
  const setBodyClass = isDrop ? `${classes.dropHide}` : `${classes.drop}`

  return (
    <div>
      <div className={`${classes.content} text-base`}>
        <p>{title}</p>
        <div className={`${setArrowClass} text-sm`} onClick={() => setIsDrop(!isDrop)}>
          <span></span>
          <span></span>
        </div>
      </div>
      <p className={`${classes.body} ${setBodyClass} text-sm`}>
        {body}
      </p>
    </div>

  )
}

export default FAQDropdown;