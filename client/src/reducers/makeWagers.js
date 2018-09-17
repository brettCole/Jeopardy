export default function makeWagers(
  state = [],
  action
) {
  switch(action.type) {
    case "MAKE_YOUR_WAGER":
      return {
        ...state, 
        [Object.keys(action.player).toString()] : action.wager
      }
    default:
      return state;
  }
}