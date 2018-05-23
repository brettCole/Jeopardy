export default function fetchedCategoriesWithClues(state = [], action) {
  switch(action.type) {
    case 'FETCHED_CATEGORIES_WITH_CLUES':
      return {
        categoriesWithClues: action.payload
      }
    default:
      return state;
  }
}