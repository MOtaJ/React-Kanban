import React, { Component } from 'react';
import Card from './Card';
import { addCard, updateCards } from '../actions';
import { connect } from 'react-redux';

class Done extends Component {
  constructor(props) {
    super(props);

    this.state = {
      cards: []
    }
  }

  getDoneCards(card){
    return new Promise(function(resolve, reject){
      function reqListener(){
        console.log(this.responseText)
        resolve(this.responseText)
      }

      const oReq = new XMLHttpRequest();
      oReq.addEventListener('load', reqListener)
      oReq.open("GET", "/cards/DoneCards", true);
      oReq.setRequestHeader("Content-Type", "application/json")
      oReq.send();
    })
  }

 componentWillMount(){
    this.getDoneCards()
    .then((data)=>{
      JSON.parse(data).forEach( card => {
        this.props.onAddCard(card.Title, card.Priority, card.CreatedBy, card.AssignedTo, card.Status)
      })
    })
    .catch(function(err){
      console.log(err)
    })
  }

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
)(Done);