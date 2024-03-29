import shortid from "shortid";
const ADD_LIST = 'app/lists/ADD_LIST';

// selectors
export const getListById = ({lists}, listId) =>lists.find(list=>list.id===listId);
export const getAllLists = (state) => state.lists;
//action creators
export const addList = (payload) =>({type: ADD_LIST, payload});

const listsReducer = (statePart = [], action) => {

  switch(action.type) {
    case ADD_LIST:
      return [...statePart, { ...action.payload, id: shortid() }];
    default:
      return statePart;
  }
}

export default listsReducer;