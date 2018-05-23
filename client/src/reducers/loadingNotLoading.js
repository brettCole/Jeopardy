export default function loadingNotLoading(state = { loading: false }, action) {
  switch(action.type) {
    case 'CATEGORIES_WITH_CLUES_FETCH_LOADING':
      return {
        loading: true
      }
    case 'CATEGORIES_WITH_CLUES_FINISHED_FETCH':
      return {
        loading: false
      }
    default:
      return state; 
  }
}