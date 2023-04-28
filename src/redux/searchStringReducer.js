

const searchStringReducer = (statePart = '', action) => {
  switch(action.type) {
    case 'SEARCHSTRING':
      return action.payload
    default:
      return statePart;
  }
};

export default searchStringReducer;