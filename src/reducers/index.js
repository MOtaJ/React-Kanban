import { ADD_CARD, UPDATE_CARD } from '../actions'

const initialState = {

  cards: []
};

function cards(state = initialState, action) {
  switch(action.type) {
    case ADD_CARD:
      return Object.assign({}, state, {
        cards: [
          ...state.cards, // '...' is a spread-operator
          {
            Title: action.Title,
            Priority: action.Priority,
            CreatedBy: action.CreatedBy,
            AssignedTo: action.AssignedTo,
            Status: action.Status
          }
        ]
      })
    case UPDATE_CARD:
      //immutable - dont replace state, give a new one
      return Object.assign({}, state, {
        cards: [
          ...state.cards,
          {
            Title: action.Title,
            Priority: action.Priority,
            CreatedBy: action.CreatedBy,
            AssignedTo: action.AssignedTo,
            Status: action.Status
          }
        ]
      })
    default:
      return state;
  }
}

export default cards;