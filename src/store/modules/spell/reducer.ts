import {getToken} from "../../../utils/helpers/tokenStorage.helper";
import {isAuthenticated} from "../../../utils/helpers/checkIfAuthenticated";
import {SET_FAVORITES, SET_SPELL, SET_SPELLS} from "./actionTypes";

interface ISpellState {
    spells:any;
    spell:any;
    favorites:any;
}

const initialState: ISpellState = {
    spells:[],
    spell:null,
    favorites:[]
}

export const spellReducer = (state = initialState, action: any) => {
    switch (action.type) {
        case SET_SPELLS:
            return {
                ...state,
                spells: action.payload
            }
        case SET_SPELL:
            return {
                ...state,
                spell: action.payload

            }
        case SET_FAVORITES:
            return {
                ...state,
                favorites: action.payload

            }
        default:
            return state;
    }
}
