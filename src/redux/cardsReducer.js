import shortid from "shortid";
const ADD_CARD = 'app/lists/ADD_CARD';
const TOGGLE_CARD_FAVORITE = 'app/lists/TOGGLE_CARD_FAVORITE'

// selectors
export const getFavoriteCards = (state) =>state.cards.filter(card=>card.isFavorite === true);

//actions
export const addCard = (payload) => ({type: ADD_CARD, payload})
export const toggleCardFavorite = (payload) => ({type: TOGGLE_CARD_FAVORITE, payload});

const cardsReducer = (statePart = [], action) => {
  switch(action.type) {
    case ADD_CARD:
      return [...statePart, { ...action.payload, id: shortid() }];
    case TOGGLE_CARD_FAVORITE:
      return statePart.map(card => (card.id === action.payload) ? { ...card, isFavorite: !card.isFavorite } : card);
    default:
      return statePart;
  }
};

export default cardsReducer;