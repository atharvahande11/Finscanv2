import React from 'react'
import "../css/Homegraphcard.css"

const Homegraphcard = (props) => {
  return (
    <div className="cardmain">
        <div className="cardcontent">
            <p>{props.name}</p>
            <p>{props.value}</p>
            <p>{props.percent}%</p>
        </div>
    </div>
  )
}

export default Homegraphcard
