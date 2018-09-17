export default function fetchedCategoriesWithClues(state = [], action) {
  switch(action.type) {
    case 'FETCHED_CATEGORIES_WITH_CLUES':
      return {
        categoriesWithClues: action.payload.slice(0, 6)
      }
    case 'FETCHED_DOUBLE_BIBLE_CATEGORIES_WITH_CLUES':
      return {
        categoriesWithClues: action.payload.slice(6, 13)
      }
    case 'FETCHED_FINAL_BIBLE_CATEGORY_WITH_CLUE':
      return {
        categoriesWithClues: action.payload.slice(action.payload.length - 1)
      }
    case 'ZERO_POINT_VALUE':
      return {
        ...state,
        ...state.categoriesWithClues.map(each => {
          (action.payload.bible_category_id === each.id) 
            ? {
              ...each,
              ...each.bible_clues.map(obj => {
                (action.payload.description === obj.description)
                  ? {
                    ...obj,
                    ...obj.point_value = null
                  }
                  : {...obj}
              })
            }
            : {...each}
        })
      }
    default:
      return state;
  }
}
