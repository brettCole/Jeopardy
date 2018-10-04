export default function makeWagers(state = [
  {'Am-haarets': 0},
  {'Gadites': 0},
  {'Beroeans': 0}
],
  action
) {
  switch(action.type) {
    case "MAKE_YOUR_WAGER":
      const addWager = state.map((each, i) => {
        if (Object.keys(each).toString() === Object.keys(action.player).toString()) {
          return {[Object.keys(action.player).toString()] : action.wager}
        }
          return each
      })
      return addWager
      // return [
      //   ...state, 
      //   {[Object.keys(action.player).toString()] : action.wager}
      // ]
    default:
      return state;
  }
}