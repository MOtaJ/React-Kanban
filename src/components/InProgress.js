import React, { Component } from 'react';
import Card from './Card';

class InProgress extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="InProgress-Column">
        <h3>In Progress</h3>
        {
          this.props.cards
          .filter( card => card.status === 'InProgress')
          .map( ({ Title, Priority, CreatedBy, AssignedTo}) =>
            <Card Title={ Title } Priority={ Priority } CreatedBy={ CreatedBy } AssignedTo={ AssignedTo } />
          )
      }
      </div>
    );
  }
}

export default InProgress;