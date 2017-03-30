import React, { Component } from 'react';
import Card from './Card';
import { addCard, updateCards } from '../actions';
import { connect } from 'react-redux';

class Queue extends Component {
  constructor(props){
    super(props);

    this.state={
      cards: []
    }
  }

  getQueueCards(card){
    return new Promise(function(resolve, reject){
      console.log(card)
      function reqListener(){
        console.log(this.responseText)
        resolve(this.responseText)
      }

      const oReq = new XMLHttpRequest();
      oReq.addEventListener('load', reqListener)
      oReq.open("GET", "/cards/queueCards", true);
      oReq.setRequestHeader("Content-type", "application/json")
      oReq.send();
    })
  }

  componentWillMount(){
    this.getQueueCards()
    .then((data)=>{
      JSON.parse(data).forEach( card => {
        this.props.onAddCard(card.Title, card.Priority, card.CreatedBy, card.AssignedTo, card.Status)
      })
    })
    .catch(function(err){
      console.log(err)
    })
  }

  render(){
    return(

    <div className = "Queue-Column">
      <h3>Queue</h3>
      {this.props.cards
        .filter( card => card.Status === 'Queue')
        .map( ({Title, Priority, CreatedBy, AssignedTo, Status}) =>
          <Card
                Title={ Title }
                Priority={ Priority }
                CreatedBy={ CreatedBy }
                AssignedTo={ AssignedTo }
                Status={ Status }
          />
        )
      }
    </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    cards: state.cards
  }
};
//actions live here
const mapDispatchToProps = (dispatch) => {
  return {
    onAddCard: (id, Title, Priority, CreatedBy, AssignedTo, Status) => {
      dispatch(addCard(id, Title, Priority, CreatedBy, AssignedTo, Status));
    }
  }
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Queue);