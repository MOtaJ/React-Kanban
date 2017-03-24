import React, { Component } from 'react';

class CardForm extends Component {
  constructor(props){
    super(props)

    this.state={
      Title: '',
      Priority: '',
      CreatedBy: '',
      AssignedTo: ''
    };



    this.handleSubmit=this.handleSubmit.bind(this)
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

  handleSubmit(event){
    console.log('handling submit')
    event.preventDefault();

    this.props.newCard({
      Title : this.state.Title,
      Priority : this.state.Priority,
      CreatedBy : this.state.CreatedBy,
      AssignedTo : this.state.AssignedTo
    })

    this.setState({
      Title : '',
      Priority : '',
      CreatedBy : '',
      AssignedTo : ''
    })
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <div>
          <input type="text" placeholder="Title" value={this.state.Title} onChange={this.handleChangeTitle.bind(this)} />
        </div>
        <div>
          <input type="text" placeholder="Priority" value={this.state.Priority} onChange={this.handleChangePriority.bind(this)} />
        </div>
        <div>
          <input type="text" placeholder="CreatedBy" value={this.state.CreatedBy} onChange={this.handleChangeCreatedBy.bind(this)} />
        </div>
        <div>
          <input type="text" placeholder="AssignedTo" value={this.state.AssignedTo} onChange={this.handleChangeAssignedTo.bind(this)} />
        </div>
          <button type = "submit">Add Book</button>
      </form>
    )
  }
}

export default CardForm