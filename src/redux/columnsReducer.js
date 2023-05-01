import shortid from "shortid";
import { strContains } from "../utils/strContains";
const ADD_COLUMN = 'app/lists/ADD_COLUMN'

//selectors
export const getFilteredCards = ({cards, searchString},  columnId) => 
cards.filter(card => card.columnId === columnId && strContains(card.title, searchString));
export const getAllColumns = (state) => state.columns;
export const getColumnsByList = ({columns}, listId ) => columns.filter(column => column.listId === listId);

//actions
export const addCollumn = (payload) => ({type: ADD_COLUMN, payload});


const columnsReducer = (statePart = [], action) => {
  switch(action.type) {
    case ADD_COLUMN:
      return [...statePart, { ...action.payload, id: shortid() }];
    default:
      return statePart;
  }
};

export default columnsReducer;