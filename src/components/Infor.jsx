import React from 'react'
// import { IonIcon } from 'react-ion-icon';
import IonIcon from '@reacticons/ionicons';



function Infor({imga,cc,hre,lin}) {
    return (
        <div className='flex'>
            <li className="contact-item">

                <div className="icon-box">
                <IonIcon name={imga} />
                </div>

                <div className="contact-info">
                    <p className="contact-title">{cc}</p>

                    <a href={`mailto:${hre}`} className="contact-link">{lin}</a>
                </div>

            </li>
        </div>
    )
}

export default Infor