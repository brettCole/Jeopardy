export default function whosPlayingFinal(
  state = [
      {"Am-haarets": true}, 
      {"Gadites": true}, 
      {"Boroeans": true}
    ],
  action
) {
  switch (action.type) {
    case "YOUR_NOT_PLAYING_IN_FINAL":
        const yourNotPlaying = state.map(each => {
          if (action.player === Object.keys(each).toString()) {
            return {[Object.keys(each).toString()] : false}
          }
          return each
        })
        return yourNotPlaying
    default:
      return state;
  }
}
