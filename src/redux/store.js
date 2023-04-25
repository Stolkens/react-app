import { legacy_createStore as createStore} from 'redux'
import initialState from './initialState';
import shortid from 'shortid';
import { strContains } from '../utils/strContains';


export const getFilteredCards = ({cards, searchString},  columnId) => 
cards.filter(card => card.columnId === columnId && strContains(card.title, searchString));

export const getAllColumns = (state) => state.columns;

export const addCollumn = (payload) => ({type: 'ADD_COLUMN', payload});

export const addCard = (payload) => ({type: 'ADD_CARD', payload})

export const searchString = (payload) => ({type: 'SEARCHSTRING', payload})

export const getListById = ({lists}, listId) =>lists.find(list=>list.id===listId);

export const getColumnsByList = ({columns}, listId ) => columns.filter(column => column.listId === listId);

const reducer = (state, action) => {
  switch(action.type) {
    case 'ADD_COLUMN':
      return { ...state, columns: [...state.columns, { id: shortid(), ...action.payload }]};
    case 'ADD_CARD':
      return { ...state, cards: [...state.cards, {id: shortid(),...action.payload}]};
    case 'SEARCHSTRING':
      return { ...state, searchString: action.payload};
    default:
      return state;
  }
};

const store = createStore(
  reducer,
  initialState,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

export default store;