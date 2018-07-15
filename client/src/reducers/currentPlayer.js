export default function currentPlayer(state = [], action) {
  switch(action.type) {
    case 'CURRENT_PLAYER':
      return {
        currentPlayer: action.payload
      }
    default:
      return state;
  }
}