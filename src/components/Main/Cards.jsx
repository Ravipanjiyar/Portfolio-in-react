import React from 'react'
import IonIcon from '@reacticons/ionicons';
import '../../App.css'

function Cards({ img, rf, head, para }) {
    return (
        <a href={rf}>
            <figure className='fig'>
                <div className="project-item-icon-box">
                <IonIcon name="eye-outline" />
                </div>
                <img src={img} alt="no img" loading='lazy' />
            </figure>
            <h3 className="names">{head}</h3>
            <p className="hh">{para}</p>

        </a>
    )
}

export default Cards
