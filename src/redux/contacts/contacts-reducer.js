import { ADD_CONTACT, DELETE_CONTACT } from './contacts-constants';

const initialState = [];

const booksReducer = (state = initialState, { type, payload }) => {
	switch (type) {
		case ADD_CONTACT:
			return [...state, payload];

		case DELETE_CONTACT:
			return state.filter(contact => contact.id === payload.id);
		default:
			return state;
	}
};

export default booksReducer;
