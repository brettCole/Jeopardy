export default function fetchedCategoriesWithClues(state = [], action) {
  // debugger;
  switch(action.type) {
    case 'FETCHED_CATEGORIES_WITH_CLUES':
      return {
        loading: false,
        categoriesWithClues: action.payload
      }
    default:
      return state;
  }
}