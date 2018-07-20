export default function currentPlayer(state = '', action) {
  switch(action.type) {
    case 'CURRENT_PLAYER':
      return {
        currentPlayer: action.payload
      }
    case 'REMOVE_CURRENT_PLAYER':
      return Object.assign(state = '')
    default:
      return state;
  }
}