import React from 'react'
import Avatar from './Avatar'

const CardAvatar = () => {
  return (
    <div className="card w-96 bg-base-100 shadow-xl ">
  <figure className="px-10 pt-10">
    <Avatar/>
  </figure>
  <div className="card-body items-center text-center">
    <h2 className="card-title">Nickolas Piraino</h2>
    <p>Software Engineer</p>
    <p>React/NextJS/MongoDB</p>
    <div className="card-actions">
      <button className="btn btn-primary">Resume</button>
    </div>
  </div>
</div>
  )
}

export default CardAvatar