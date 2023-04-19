import { legacy_createStore as createStore} from 'redux'
import initialState from './initialState';
import shortid from 'shortid';

const reducer = (state, action) => {
  switch(action.type) {
    case 'ADD_COLUMN':
      return { ...state, columns: [...state.columns, { id: shortid(), ...action.payload }]};
    case 'ADD_CARD':
      return { ...state, cards: [...state.cards, {...action.payload}]};
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