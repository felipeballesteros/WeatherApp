
import { FETCH_WEATHER } from '../actions/index';

export default function(state = [], action){

	switch(action.type){

		case FETCH_WEATHER:

			// never change the existing array, remember, state has to remain the same,
			// you can add to it, but you cannot modify it

			// These two are the same, the second one is ES6 syntax
			//return state.concat([action.payload.data]);
			return [ action.payload.data, ...state ]; // [ city, city, city ]


	}

	return action;
}