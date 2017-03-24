import React, { Component } from 'react';
import KanbanTitle from '../../components/KanbanTitle.js'
import CardForm from '../../components/form.js'
import Queue from '../../components/Queue.js'
import './styles.css';

import { connect } from 'react-redux';
import { addCard } from '../../actions';

class App extends Component {
  constructor(props) {
    super(props);
    this.title="Kanban!"
    this.state = {
      cards: []
    }
  }

  getCard(card){
    return new Promise(function(resolve, reject){
      console.log(card)
      function reqListener(){
        resolve(this.responseText)
      }

      let oReq = new XMLHttpRequest();
      oReq.open("GET", "/cards/getCard", true);
      oReq.setRequestHeader("Content-type", "application/json")
    })
  }

  newCard(card){
    return new Promise(function(resolve, reject){
      console.log(card)
      function reqListener(){
        resolve(this.responseText)
      }

      let oReq = new XMLHttpRequest();
      oReq.open("POST", "/cards/newCard", true);
      oReq.setRequestHeader("Content-type", "application/x-www-form-urlencoded")
      oReq.send(`Title=${card.Title}&Priority=${card.Priority}&CreatedBy=${card.CreatedBy}&AssignedTo=${card.AssignedTo}`);
    })
  }

  render() {
    return (
      <div className="App">
        <div className="App-header">
          <KanbanTitle
            title={this.title}
            />
        </div>
        <div className="Kanban">
          <Queue
            cards={this.state.cards}
          />
          <CardForm
            newCard={this.newCard}
            />
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    cards: state.cards
  }
};

const mapDispatchToProps = (dispatch) => {
  return {
    onAddCard: (Title, Priority, CreatedBy, AssignedTo) => {
      dispatch(addCard(Title, Priority, CreatedBy, AssignedTo));
    }
  }
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App);
