import React from 'react'
import IonIcon from '@reacticons/ionicons';
import Cards from './Cards';
import '../../App.css'
import project4 from '../images/project1.png'
import project1 from '../images/project2.png'
import project3 from '../images/project3.png'
import project2 from '../images/project4.png'
import project5 from '../images/project5.png'


function Portfolio() {
  return (
    <div className="cnt">
      <h2 className='abt'>Portfolio</h2>

      <hr className='yellow' />


      <p className="heading">Projects</p>

      <section className="all">
        <Cards  
          img={project1}
          rf="https://github.com/Ravipanjiyar/Ecommerce-web"
          head = "E-Commenrce"
          para="Web Development"
        />
      <Cards  
        img={project5}
        rf="https://github.com/Ravipanjiyar/Todo_Using_Redux"
        head = "To-do"
        para="Web Development"
      />
      <Cards  
        img={project2}
        rf="https://github.com/Ravipanjiyar/currency-changer"
        head = "Currency changer"
        para="Web Development"
      />
      <Cards  
        img={project4}
        rf="https://github.com/Ravipanjiyar/weather_reports"
        head = "Weather-App"
        para="Web Development"
      />
      <Cards  
        img={project3}
        rf="https://github.com/Ravipanjiyar/Game1"
        head = "Tic-tac-toe"
        para="Web Development"
      />
      </section>
    </div>
  )
}

export default Portfolio
