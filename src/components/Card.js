import React, {Component} from 'react'

class Card extends Component {
  constructor(props) {
    super(props);

    this.statusHandler=this.statusHandler.bind(this)
  }

  statusHandler(event) {
    event.preventDefault();

  }
  render(){
    return(
      <div className="Card-Box">
        <p> Title = { this.props.Title } </p>
        <p> Priority = { this.props.Priority } </p>
        <p> AssignedTo = { this.props.AssignedTo } </p>
        <p> CreatedBy = { this.props.CreatedBy } </p>
        <p> Status = {this.props.Status} </p>
  </div>
      )
  }

}


export default Card;