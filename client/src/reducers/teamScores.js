export default function teamScores(state = [
  {'Am-haarets': 0},
  {'Gadites': 0},
  {'Beroeans': 0}
], action) {
  switch(action.type) {
    case 'ADD_TO_TEAMS_SCORE':
      const addedToScore = state.map((each, i) => {
        if (action.playerGuessing === Object.keys(each).toString()) {
          return {[Object.keys(each).toString()] : parseInt(Object.values(each), 10) + action.point_value}
        }
          return each
        })
        return addedToScore
    case 'SUBTRACT_FROM_TEAM_SCORE':
      const subtractedFromScore = state.map((each, i) => {
        if (action.playerGuessing === Object.keys(each).toString()) {
          return {[Object.keys(each).toString()] : parseInt(Object.values(each), 10) - action.point_value}
        }
          return each
      })
      return subtractedFromScore
    case 'ADD_FINAL_WAGER_TO_TEAM_SCORE':
      const finalToScore = state.map((each, i) => {
        if (Object.keys(each).toString() === Object.keys(state[parseInt(action.playerGuessing, 10)]).toString()) {
          return {[Object.keys(state[parseInt(action.playerGuessing, 10)]).toString()] : parseInt(Object.values(each), 10) + parseInt(Object.values(action.point_value[0], 10))}
        }
          return each
      })
      return finalToScore
    case 'SUBTRACT_FINAL_WAGER_FROM_TEAM_SCORE':
      const finalFromScore = state.map((each, i) => {
        if (Object.keys(each).toString() === Object.keys(state[parseInt(action.playerGuessing, 10)]).toString()) {
          return {[Object.keys(state[parseInt(action.playerGuessing, 10)]).toString()] : parseInt(Object.values(each), 10) - parseInt(Object.values(action.point_value[0], 10))}
        }
          return each
      })
      return finalFromScore
    default:
      return state;
  }
}