import classes from "./Price.module.css"

const Price = () => {
  return (
    <div className="section--dark line-light-section" id="price"> 
      <div className="container">

        <div className="content">
          <h2 className="h2 line-light-text">Цены</h2>

          <div className={classes.text}>
            <p className="text-base">
              Мы ценим ваше время. И чтобы не тратить его на дорогу, просто позвоните по телефону <a className="text-base hover bold" href="tel:+79606009131">8 960 600 91 31</a> и мы скажем примерную цену по вашему запросу и сроки за которые готовы сделать
            </p>
          </div>
        </div>

      </div>
    </div>
  )
}

export default Price;