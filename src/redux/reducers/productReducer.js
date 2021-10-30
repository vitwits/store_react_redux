import { ActionTypes } from '../constants/action-types';

const initialState = {
	products: [
		{
			id: 1,
			title: 'Lakewood',
			category: 'guitar'
		}
	]
};

export const productReducer = (state, { type, payload }) => {
	switch (type) {
		case ActionTypes.SET_PRODUCTS:
			return state;
		default:
			break;
	}
};