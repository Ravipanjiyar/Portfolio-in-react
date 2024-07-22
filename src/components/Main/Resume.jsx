import React from 'react'
// import { BookOutline } from 'react-ionicons'
import '../../App.css'
import IonIcon from '@reacticons/ionicons';
import Leetcode from '../Leetcode';
import Profile from '../Profile';
import leetcode from '../images/leetcode_profile.png';
import linkedin from '../images/Linkedin_profile.png';
import Github from '../images/github_profile.png';
// import ProfileFlow from '../ProfileFlow';

function Resume() {
    return (
        <div className='cnt'>
            <h2 className="abt">Resume</h2>
            <hr className='yellow' />

            <div className="xy">

                <div className="icons">

                    <IonIcon name="book-outline" />
                </div>

                <h2 className="head">Educations</h2>
            </div>


            <ol className="timeline-list">

                <li className="timeline-item">

                    <h4 className="h4 timeline-item-title">Netaji Subhas University of Technology</h4>

                    <span>2020-2024</span>

                    <p className="timeline-text">
                        B.Tech: Instrumentation and control engineering <span>Cgpa: 7.68</span>
                    </p>

                </li>

                <li className="timeline-item">

                    <h4 className="h4 timeline-item-title">Govt Sarvodaya co-ed Vidyalaya</h4>

                    <span >2019 — 2020</span>

                    <p className="timeline-text">
                        Class XII AISSCE - <span>Percentage - 89.6%</span>
                    </p>

                </li>

                <li className="timeline-item">

                    <h4 className="h4 timeline-item-title">Govt Sarvodaya co-ed Vidyalaya</h4>

                    <span>2017 — 2018</span>

                    <p className="timeline-text">
                        Class X AISSCE - <span>Percentage - 87.2%</span>
                    </p>

                </li>

            </ol>


            <div className="xy">

                <div className="icons">

                    <IonIcon name="book-outline" />
                </div>

                <h2 className="head">Projects</h2>
            </div>


            <ol className="timeline-list">

                <li className="timeline-item">

                    <h4 className="h4 timeline-item-title">Weather-App</h4>

                    <p className="timeline-text">
                        Developed a responsive weather web application and integrating with a weather API to deliver real-time weather forecasts and updates. Implemented user-friendly features such as location-based weather information, interactive UI elements, and dynamic data visualization. Enhanced application performance through efficient API data handling and responsive design principles, ensuring seamless user experience across devices.
                    </p>
                    <a href="https://ravipanjiyar.github.io/weather_reports/" className='aa'>Website Link</a>

                </li>

                <li className="timeline-item">

                    <h4 className="h4 timeline-item-title">E-Commerce</h4>


                    <p className="timeline-text">
                        Designed and developed a visually appealing e-commerce website using HTML and CSS, focusing on modern design principles and user interface enhancements. Implemented responsive layouts, custom CSS animations, and intuitive navigation features to optimize user engagement and shopping experience. Utilized CSS frameworks and best practices to ensure cross-browser compatibility and accessibility. Integrated product showcases, dynamic content updates, and secure checkout functionalities to enhance overall site usability and performance.
                    </p>

                    <a href="https://ravipanjiyar.github.io/Ecommerce-web/" className='aa'>Website Link</a>

                </li>

                <li className="timeline-item">

                    <h4 className="h4 timeline-item-title">Currency Changer</h4>

                    <p className="timeline-text">
                        Developed a dynamic currency converter application using ReactJS, integrating with a real-time exchange rate API to facilitate accurate currency conversions. Implemented user-friendly features such as input fields for amount selection, dropdown menus for currency selection, and instant conversion updates. Applied responsive design principles and CSS for a polished user interface, ensuring seamless functionality across devices. Enhanced the application with error handling mechanisms and robust API integration to deliver reliable performance.
                    </p>
                    <a href="https://github.com/Ravipanjiyar/currency-changer" className='aa'>Repo Link</a>

                </li>

            </ol>



            <div className="xy">

                <div className="icons">

                    <IonIcon name="book-outline" />
                </div>

                <h2 className="head">Profiles</h2>
            </div>

            <div className="outer">
                <div className="inner1">
                    <Profile rf="https://leetcode.com/u/ravipanjiyar23/" comp={<Leetcode />} infor="Explore my LeetCode profile to see my coding solutions and problem-solving capabilities. Regularly engage in coding challenges to sharpen my algorithm and data structure skills." image = {leetcode}/>
                    <Profile rf="https://github.com/Ravipanjiyar" comp={<IonIcon name="logo-github" />} infor="Welcome to my GitHub profile! Here you'll find a collection of my web dev projects. Let's connect and collaborate!" image = {Github}/>
                </div>
                <div className="inner2">

                <Profile rf="https://www.linkedin.com/in/ravi-kumar-5b6840215/" comp={<IonIcon name="logo-linkedin" />} infor="Welcome to my LinkedIn profile! I am a dedicated software developer with a passion for problem-solving and Web dev. My expertise spans web development, algorithms, and data structures. Connect with me to explore my journey in technology." image = {linkedin}/>

                </div>
            </div>

            {/* <ProfileFlow /> */}


        </div>
    )
}

export default Resume
