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
    default:
      return state;
  }
}