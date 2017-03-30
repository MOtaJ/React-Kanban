import React, { Component } from 'react';
import Card from './Card';
import { addCard, updateCards } from '../actions';
import { connect } from 'react-redux';

class InProgress extends Component {
  constructor(props) {
    super(props);

    this.state = {
      cards : []
    }
  }

  getInProgressCards(card){
    return new Promise(function(resolve, reject){
      function reqListener(){
        console.log("This is the reponse text",this.responseText)
        resolve(this.responseText)
      }

      const oReq = new XMLHttpRequest();
      oReq.addEventListener('load', reqListener)
      oReq.open("GET", "/cards/InProgressCards", true);
      oReq.setRequestHeader("Content-type", "application/json")
      oReq.send();
    })
  }

  componentWillMount(){
    this.getInProgressCards()
    .then((data) => {
      JSON.parse(data).forEach(card => {
        this.props.onAddCard(card.Title, card.Priority, card.CreatedBy, card.AssignedTo, card.Status)
      })
    })
    .catch(function(err){
      console.log(err);
    })
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

const mapStateToProps = (state) => {
  return {
    InProgressCards: state.InProgressCards
  }
};

const mapDispatchToProps = (dispatch) => {
  return {
    onAddCard: (Title, Priority, CreatedBy, AssignedTo, Status) => {
      dispatch(addCard(Title, Priority, CreatedBy, AssignedTo, Status));
    }
  }
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(InProgress);