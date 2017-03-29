import React, { Component } from 'react';
import Card from './Card';

class Done extends Component {
  // constructor(props) {
  //   super(props);
  // }

  render() {
    return (
      <div className="Completed-Column">
        <h3>Completed</h3>
        {
          this.props.cards
          .filter( card => card.status === 'Completed')
          .map( ({ Title, Priority, CreatedBy, AssignedTo}) =>
            <Card Title={ Title } Priority={ Priority } CreatedBy={ CreatedBy } AssignedTo={ AssignedTo } />
          )
      }
      </div>
    );
  }
}

export default Done;