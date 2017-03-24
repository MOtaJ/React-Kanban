import { ADD_CARD } from '../actions'

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
            AssignedTo: action.AssignedTo
          }
        ]
      })
    default:
      return state;
  }
}

export default cards;