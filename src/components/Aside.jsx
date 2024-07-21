import React from 'react'
import Info from './Infor'
import '../App.css'
// import { mailOutline } from 'ionicons/icons';
// import { IoMailOutline } from 'react-icons/io5';
import IonIcon from '@reacticons/ionicons';
import Leetcode from './Leetcode';


function Aside() {
  // const mailOutline = 'ion-md-mail';
  return (
    <aside>
      <div className='bg1'>
        <img src="src\components\images\my-avatar.png" alt="" />

      </div>

      <h2 className='name'>Ravi Kumar</h2>
      <p className='p'>Web developer</p>

      <hr className='white' />





      <Info
        imga="mail-outline"
        cc="EMAIL"
        hre="ravikumapaniyar23@gmail.com"
        lin="ravikumapaniyar23@gmail.com"
      />

      <Info
        imga="call-outline"
        cc="PHONE"
        lin="1234567890"
      />

      <Info
        imga="calendar-outline"
        cc="BIRTHDAY"
        lin="23-OCT-2002"
      />

      <Info
        imga="location-outline"
        cc="LOCATION"
        lin="XYZ-22- DELHI INDIA"
      />


      <div className="logos">
        <a href="https://leetcode.com/u/ravipanjiyar23/" className='l1'>
          <Leetcode />
        </a>
        <a href="https://www.linkedin.com/in/ravi-kumar-5b6840215/" className='l2'>

          <IonIcon name="logo-linkedin" />
        </a>

        <a href="https://github.com/Ravipanjiyar" className='l3'>

        <IonIcon name="logo-github" />
        </a>
      </div>



    </aside>
  )
}

export default Aside
