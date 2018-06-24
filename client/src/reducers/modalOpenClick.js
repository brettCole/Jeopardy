export default function modalOpenClick(state = { modalOpen: false }, action) {
  switch(action.type) {
    case 'MODAL_OPEN':
      return {
        modalOpen: true
      }
    case 'MODAL_CLOSE':
      return {
        modalOpen: false
      }
    default:
      return state;
  }
}