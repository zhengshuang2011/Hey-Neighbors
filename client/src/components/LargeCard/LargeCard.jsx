import React from 'react'
import './LargeCard.css'
import eventImg from "../../assets/event1.png"


function LargeCard() {
  return (
    <div className="cards">
      <div>
        <a href="" className="card">
          <img src={eventImg} className="card__image" alt="" />
          <div className="card__overlay">
            <div className="card__header">
              <svg className="card__arc" xmlns="http://www.w3.org/2000/svg"><path /></svg>
              <img className="card__thumb" src="https://i.imgur.com/7D7I6dI.png" alt="" />
              <div className="card__header-text">
                <h3 className="card__title">Event's title</h3>
                <label className='card_category'>Game</label>
                <span className="card__status">1 hour ago</span>
                <span className="card__status">1 hour ago</span>
              </div>
            </div>
            <p className="card__description">Lorem ipsum dolor sit amet consectetur adipisicing edivt. Asperiores, blanditiis?</p>
          </div>
        </a>
      </div>

    </div>
  )
}

export default LargeCard