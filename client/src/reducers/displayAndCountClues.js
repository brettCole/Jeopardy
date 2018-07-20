export default function displayAndCountClues(state = [], action) {
  switch(action.type) {
    case 'DISPLAY_CLUE':
      return {
        displayedClue: action.payload
      }
    case 'CLEAR_CLUE':
      return Object.assign(state = [])
    default:
      return state;
  }
}