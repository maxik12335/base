import classes from "./Main.module.css"
import video from '../../assets/video.mp4'

const Main = () => {
  return (
    <div className="section--dark line-light-section section-video"> 
      <div className="container">
        <video className="video-fon" autoPlay muted loop id="background-video" poster="poster.jpg">
          <source src={video} type="video/mp4" />
        </video>
        <div className={classes.content}>
          <h1 className="h1">СЕРВИСНЫЙ ЦЕНТР</h1>
          <h2 className="text-base">г. Алексин, ул. Ленина, д. 1Б, 2-ой этаж, офис 214</h2>
          {/* <a className={`${classes.button} hover`} href="tel:89292947270">8-929-294-72-70</a> */}
        </div>
      </div>
    </div>
  )
}

export default Main;