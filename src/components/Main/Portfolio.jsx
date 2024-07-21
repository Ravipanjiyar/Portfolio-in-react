import React from 'react'
import IonIcon from '@reacticons/ionicons';
import Cards from './Cards';
import '../../App.css'

function Portfolio() {
  return (
    <div className="cnt">
      <h2 className='abt'>Portfolio</h2>

      <hr className='yellow' />


      <p className="heading">Projects</p>

      <section className="all">
        <Cards  
          img="src\components\images\project2.png"
          rf="https://github.com/Ravipanjiyar/Ecommerce-web"
          head = "E-Commenrce"
          para="Web Development"
        />
      <Cards  
        img="src\components\images\project5.png"
        rf="https://github.com/Ravipanjiyar/Todo_Using_Redux"
        head = "To-do"
        para="Web Development"
      />
      <Cards  
        img="src\components\images\project4.png"
        rf="https://github.com/Ravipanjiyar/currency-changer"
        head = "Currency changer"
        para="Web Development"
      />
      <Cards  
        img="src\components\images\project1.png"
        rf="https://github.com/Ravipanjiyar/weather_reports"
        head = "Weather-App"
        para="Web Development"
      />
      <Cards  
        img="src\components\images\project3.png"
        rf="https://github.com/Ravipanjiyar/Game1"
        head = "Tic-tac-toe"
        para="Web Development"
      />
      </section>
    </div>
  )
}

export default Portfolio
