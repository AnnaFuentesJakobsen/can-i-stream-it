import React from 'react'

function StreamingService({image, active}) {
  return (
    <div className="service">
      <img
        src={image}
        alt="Service logo"
        className="service-logo"
      />
    </div>
  )
}

export default StreamingService
