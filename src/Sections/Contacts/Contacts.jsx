import classes from "./Contacts.module.css"

const Contacts = () => {
  return (
    <div className="section--dark" id="contacts"> 
      <div className="container">
        
        <div className="content">
          <h2 className="h2 line-light-text">контакты</h2>
          <div className={classes.contentBox}>
            <p className="text-base">2-ой этаж, офис 214</p>
            <iframe className={classes.map} src="https://yandex.ru/map-widget/v1/?ll=37.067193%2C54.506872&mode=whatshere&whatshere%5Bpoint%5D=37.067193%2C54.506873&whatshere%5Bzoom%5D=17&z=16"  frameborder="1" allowfullscreen="true"></iframe>
          </div>
        </div>
        
      </div>
    </div>
  )
}

export default Contacts;