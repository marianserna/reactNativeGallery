export default function reducer(state = {}, action) {
  switch (action.type) {
    case 'FETCH_IMAGES':
      return {
        ...state,
        images: action.images
      };
    case 'ON_CHANGE_TEXT':
      return {
        ...state,
        term: action.value
      };
    default:
      return state;
  }
}
