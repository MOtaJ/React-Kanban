import React, {Component} from 'react'
import { connect } from 'react-redux';
import App from '../containers/app';
import { addCard, updateCards, deleteCard } from '../actions';

class Card extends Component {
  constructor(props) {
    super(props);

    this.statusHandler=this.statusHandler.bind(this)
    this.delete=this.delete.bind(this)
  }

  statusHandler(event) {
    event.preventDefault();

  }

  deleteCard(card){
    return new Promise(function(resolve, reject){
      function reqListener(){
        resolve(card)
      }

      let oReq = new XMLHttpRequest();
      oReq.open("DELETE", `http://localhost:9000/cards/deleteCards/{id}`, true);
      oReq.addEventListener("load", reqListener)
      oReq.setRequestHeader("Content-type", "application/x-www-form-urlencoded")
      oReq.send()
    })
  }

  delete(e){
    e.preventDefault();
    console.log(this)
    this.deleteCard()
    .then((data)=>{
      JSON.parse(data => {
        this.props.onDeleteCard(Card.Title, Card.Priority, Card.CreatedBy, Card.AssignedTo, Card.Status)
      })
    })
    .catch(function(err){
      console.log(err)
    })
  }

  render(){
    return(
      <div className="Card-Box">
        <p> id={ this.props.id } </p>
        <p> Title = { this.props.Title } </p>
        <p> Priority = { this.props.Priority } </p>
        <p> AssignedTo = { this.props.AssignedTo } </p>
        <p> CreatedBy = { this.props.CreatedBy } </p>
        <div>
          <select onChange={this.statusHandler} value={ this.props.Status }>
            <option value="Queue">Queue</option>
            <option value="InProgress">In Progress</option>
            <option value="Done">Completed</option>
          </select>
        </div>
          <form onSubmit={ this.delete }>
            <input type="submit" value="DELETE"/>
          </form>
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
    },
    updateCards : cards => {
      dispatch( updateCards(cards))
    },
    onDeleteCard : cards => {
      dispatch( deleteCard(cards))
    }
  }
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Card);