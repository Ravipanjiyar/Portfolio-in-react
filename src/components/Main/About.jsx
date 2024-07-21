import React from 'react'
import TypingEffect from './TypingEffect';
import '../../App.css'


function About() {

    return (
        <div className='cnt'>
            <h2 className='abt'>About Me</h2>

            <hr className='yellow' />

            <h1 className='h1'>Hi I'm Ravi Kumar</h1>

            <h3 className="animated-text">
                I'm <TypingEffect />
            </h3>
            <p className='about'>
                I'm Creative Web Developer  from Delhi, India, working on myself and improving my skills in different field like web development and Data structures and algorithms. I enjoy turning complex problems into simple, beautiful and intuitive designs.
                <br />
                <br />
                In my four journey of college i have worked on myself and developed so many skills by learning Data structures and different different algos also i have developed my skills in web development field ans still improving myself in these fields. And I have created some kind of Projects by using what I have learned in those years.
            </p>


            <h2 className="doing">My skills</h2>
            <hr className='yellow' />

            <div className="skills">
                <p className="skl">C++</p>
                <div className="bars">
                    <div className="amount" id='id1'></div>
                </div>
                
                <p className="skl">C</p>
                <div className="bars">
                    <div className="amount" id='id2'></div>
                </div>
                
                <p className="skl">Data Structures & Algo</p>
                <div className="bars">
                    <div className="amount" id='id3'></div>
                </div>
                
                <p className="skl">HTML</p>
                <div className="bars">
                    <div className="amount" id='id4'></div>
                </div>
                
                <p className="skl">CSS</p>
                <div className="bars">
                    <div className="amount" id='id5'></div>
                </div>
                
                <p className="skl">Javascript</p>
                <div className="bars">
                    <div className="amount" id='id6'></div>
                </div>
                
                <p className="skl">Reactjs</p>
                <div className="bars">
                    <div className="amount" id='id7'></div>
                </div>
                
            </div>
        </div>
        // <div className='cnt'>
        //     this is about
        // </div>
    )
}

export default About
