import React, {Component} from 'react'

const Card = (props) => (
  <div className="Card-Box">
    <ul>
      <li>
        <p> key/id = { props.id } </p>
        <p> Title = { props.Title } </p>
        <p> Priority = { props.Priority } </p>
        <p> AssignedTo = { props.AssignedTo } </p>
        <p> CreatedBy = { props.CreatedBy } </p>
      </li>
    </ul>
  </div>

)

export default Card;