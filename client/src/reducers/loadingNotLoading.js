export default function loadingNotLoading(state = { loading: false }, action) {
  switch(action.type) {
    case 'CATEGORIES_WITH_CLUES_FETCH_STARTED':
      return {
        loading: true
      }
    default:
      return state; 
  }
}