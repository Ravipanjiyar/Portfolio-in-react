import React from 'react'
import '../App.css'

function Profile({rf,comp , infor , image}) {

  const isLinkedIn = comp.props.name === 'logo-linkedin';
  return (
    <div className='cards'>
      <div className="front">
      <div className="logo">
      {React.cloneElement(comp, { style: isLinkedIn ? { color: '#0077B5' } : {} })}
      </div>

      <p className="inf" style={isLinkedIn ? { fontSize: '15px' } : {}}>{infor}</p>
      </div>
      <a href={rf}>

      <div className="back">
        <img src={image} alt="no img" />
      </div>
      </a>
    </div>
  )
}

export default Profile
