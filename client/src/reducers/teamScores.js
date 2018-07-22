export default function teamScores(state = [
  {'Team 1': 0},
  {'Team 2': 0},
  {'Team 3': 0}
], action) {
  switch(action.type) {
    case 'ADD_TO_TEAMS_SCORE':
      const updatedScore = state.map((each, i) => {
        if (action.playerGuessing === Object.keys(each).toString()) {
          return {[Object.keys(each).toString()]:parseInt(Object.values(each)) + action.point_value}
        }
          return each
        })
        return updatedScore
    default:
      return state;
  }
}