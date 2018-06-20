export default function modalOpenClick(state = { modalOpen: false }, action) {
  switch(action.type) {
    case 'MODAL_OPEN_AND_CLOSE':
      return {
        modalOpen: true
      }
    default:
      return state;
  }
}