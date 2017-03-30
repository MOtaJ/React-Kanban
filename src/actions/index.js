export const ADD_CARD = 'ADD_CARD';
export const DELETE_CARD = 'DELETE_CARD';
export const UPDATE_CARD = 'UPDATE_CARD';

export function addCard(Title, Priority, CreatedBy, AssignedTo, Status) {
  return {
      type: ADD_CARD,
      Title, //shorthand way of saying title: title
      Priority,
      CreatedBy,
      AssignedTo,
      Status
  }
}

export function updateCards(Title, Priority, CreatedBy, AssignedTo, Status) {
  return {
    type: UPDATE_CARD,
    Title, //shorthand way of saying title: title
    Priority,
    CreatedBy,
    AssignedTo,
    Status
  }
}

export function deleteCard(Title, Priority, CreatedBy, AssignedTo, Status){
  return {
    type: DELETE_CARD,
    Title,
    Priority,
    CreatedBy,
    AssignedTo,
    Status
  }
}