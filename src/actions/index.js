export const ADD_CARD = 'ADD_CARD';

export function addCard(Title, Priority, CreatedBy, AssignedTo) {
  return {
      type: ADD_CARD,
      Title, //shorthand way of saying title: title
      Priority,
      CreatedBy,
      AssignedTo
  }
}