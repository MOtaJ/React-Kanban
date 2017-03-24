import React, { Component } from 'react';
import Card from './Card';

class Queue extends Component {
  constructor(props){
    super(props);

    this.state={
      cards: []
    }
  }

  render(){
    return(
    <div className = "Queue-Column">
      <h3>Queue</h3>
      {
        this.props.cards.map( ({Title, Priority, CreatedBy, AssignedTo}) => {
          <Card Title={this.props.Title}
                Priority={this.props.Priority}
                CreatedBy={this.props.CreatedBy}
                AssignedTo={this.props.AssignedTo}
          />
        })
      }
    </div>
    )
  }

}

export default Queue