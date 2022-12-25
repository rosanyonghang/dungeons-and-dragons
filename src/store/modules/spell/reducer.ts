import {
	ADD_TO_FAVORITES, REMOVE_FROM_FAVORITES, SET_SPELL, SET_SPELLS,
} from './actionTypes';
import { IBase } from '../../../components/modules/Spell/Spell.dto';

interface ISpellState {
    spells: IBase[];
    spell: any;
    favorites: IBase[];
}

const initialState: ISpellState = {
	spells: [],
	spell: null,
	favorites: [],
};

// eslint-disable-next-line default-param-last
export const spellReducer = (state = initialState, action: any) => {
	switch (action.type) {
		case SET_SPELLS:
			return {
				...state,
				spells: action.payload,
			};
		case SET_SPELL:
			return {
				...state,
				spell: action.payload,

			};
		case ADD_TO_FAVORITES:
			return {
				...state,
				favorites: [...state.favorites, action.payload],
			};
		case REMOVE_FROM_FAVORITES:
			console.log(action.payload);
			return {
				...state,
				favorites: state.favorites.filter((v:IBase) => !v.index.includes(action.payload)),
			};
		default:
			return state;
	}
};
