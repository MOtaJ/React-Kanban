import React, { Component } from 'react';
import KanbanTitle from '../../components/KanbanTitle.js'
import CardForm from '../../components/form.js'
import Queue from '../../components/Queue.js'
import InProgress from '../../components/InProgress.js'
import Done from '../../components/Done.js'
import './styles.css';

import { connect } from 'react-redux';
import { addCard, updateCards, deleteCard } from '../../actions';

class App extends Component {
  constructor(props) {
    super(props);
    this.title="Kanban!"
    this.state = {
      cards: []
    }
  }

/*  getAllCards(){
    return new Promise(function(resolve, reject){
      function reqListener(){
        resolve(this.responseText)//resolves the data
      }

      const oReq = new XMLHttpRequest();
      oReq.addEventListener('load', reqListener) //without this, data isnt resolved
      oReq.open("GET", "/cards/getCard", true);
      oReq.setRequestHeader("Content-type", "application/json")
      oReq.send();
    })
  }*/

/*  this.addCard({
    Title : this.state.Title,
    Priority : this.state.Priority,
    CreatedBy : this.state.CreatedBy,
    AssignedTo : this.state.AssignedTo,
    Status : this.state.Status
  })*/

/*
  addCard(card) {
    this.props.addCard({card})
  }*/
/*
    componentWillMount(){
      this.getAllCards()
      .then( data => {
        JSON.parse(data).forEach(card => {
          this.props.onAddCard(card.Title, card.Priority, card.CreatedBy, card.AssignedTo, card.Status)
        })
      })
    }*/

  render() {
    console.log(this.props)
    return (
      <div className="App">
        <div className="App-header">
          <KanbanTitle
            title={this.title}
            />
        </div>
        <div className="Kanban">
          <Queue
            cards={this.props.cards}
          />
          <InProgress
            cards={this.props.cards}
          />
          <Done
            cards={this.props.cards}
          />
          <CardForm
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
//actions live here
const mapDispatchToProps = (dispatch) => {
  return {
    onAddCard: (id, Title, Priority, CreatedBy, AssignedTo, Status) => {
      dispatch(addCard(id, Title, Priority, CreatedBy, AssignedTo, Status));
    },
    updateCards : cards => {
      dispatch( updateCards(cards))
    },
    onDeleteCard: (id, Title, Priority, CreatedBy, AssignedTo, Status) => {
      dispatch(deleteCard(id, Title, Priority, CreatedBy, AssignedTo, Status))
    }
  }
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App);
