import React, { Component } from 'react';
import { connect } from 'react-redux';
import App from '../containers/app';
import { addCard, updateCards } from '../actions';

class CardForm extends Component {
  constructor(props){
    super(props)

    this.state={
      Title: '',
      Priority: 'low',
      CreatedBy: '',
      AssignedTo: '',
      Status: 'Queue'
    };

    this.handleSubmit=this.handleSubmit.bind(this);
    this.addCard=this.addCard.bind(this)
  }

  handleChangeTitle(event) {
    this.setState({Title : event.target.value})
  }
  handleChangePriority(event) {
    this.setState({Priority : event.target.value})
  }
  handleChangeCreatedBy(event) {
    this.setState({CreatedBy : event.target.value})
  }
  handleChangeAssignedTo(event) {
    this.setState({AssignedTo : event.target.value})
  }

  handleChangeStatus(event) {
    this.setState({Status : event.target.value})
  }


  handleSubmit(event){
    console.log('handling submit')
    event.preventDefault();

    this.addCard({
      Title : this.state.Title,
      Priority : this.state.Priority,
      CreatedBy : this.state.CreatedBy,
      AssignedTo : this.state.AssignedTo,
      Status : this.state.Status
    })
    .then((card) => {
      this.props.onAddCard(card.id, card.Title, card.Priority, card.CreatedBy, card.AssignedTo, card.Status,)
    })

    this.setState({
      Title : '',
      Priority : '',
      CreatedBy : '',
      AssignedTo : '',
      Status : ''
    })
  }

  addCard(card){
    return new Promise(function(resolve, reject){
      console.log(card)
      function reqListener(){
        resolve(this.responseText)
      }

      let oReq = new XMLHttpRequest();
      oReq.addEventListener('load', reqListener)
      oReq.open("POST", "/Cards/newCard", true);
      oReq.setRequestHeader("Content-type", "application/x-www-form-urlencoded")
      oReq.send(`Title=${card.Title}&Priority=${card.Priority}&CreatedBy=${card.CreatedBy}&AssignedTo=${card.AssignedTo}&Status=${card.Status}`);
    })
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <div>
          <input type="text" placeholder="Title" value={this.state.Title} onChange={this.handleChangeTitle.bind(this)} />
        </div>
        <div>
          Priority:<select name="Priority" onChange={this.handleChangePriority.bind(this)}>
            <option value="low">Low</option>
            <option value="medium">Medium</option>
            <option value="high">High</option>
          </select>
        </div>
        <div>
          <input type="text" placeholder="CreatedBy" value={this.state.CreatedBy} onChange={this.handleChangeCreatedBy.bind(this)} />
        </div>
        <div>
          <input type="text" placeholder="AssignedTo" value={this.state.AssignedTo} onChange={this.handleChangeAssignedTo.bind(this)} />
        </div>
        <div>
            <select onChange={this.handleChangeStatus.bind(this)} value={ this.props.Status }>
              <option value="Queue">Queue</option>
              <option value="InProgress">In Progress</option>
              <option value="Completed">Completed</option>
            </select>
        </div>
          <button type = "submit" value = "new card ">Add Card</button>
      </form>
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
    onAddCard: (Title, Priority, CreatedBy, AssignedTo, Status) => {
      dispatch(addCard(Title, Priority, CreatedBy, AssignedTo, Status));
    },
    updateCards : cards => {
      dispatch( updateCards(cards))
    }
  }
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(CardForm);