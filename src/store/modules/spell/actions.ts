import {
	ADD_TO_FAVORITES, REMOVE_FROM_FAVORITES, SET_FAVORITES, SET_SPELL, SET_SPELLS,
} from './actionTypes';
import { APIGetSpell, APIGetSpells } from '../../../api/spell';
import { SpellDto } from '../../../components/modules/Spell/Spell.dto';

export const setSpells = (data: any) => ({
	type: SET_SPELLS,
	payload: data,
});

export const setSpell = (data: any) => ({
	type: SET_SPELL,
	payload: data,
});

export const setFavorites = (data: any) => ({
	type: SET_FAVORITES,
	payload: data,
});

export const loadSpells = () => async (dispatch: any) => {
	const res: any = await APIGetSpells();
	dispatch(setSpells(SpellDto(res.results)));
};

export const loadSpell = (id = '') => async (dispatch: any) => {
	const res: any = await APIGetSpell(id);
	dispatch(setSpell(res));
};

export const addToFavorites = (data:any) => ({
	type: ADD_TO_FAVORITES,
	payload: data,
});

export const removeFromFavorites = (data:any) => ({
	type: REMOVE_FROM_FAVORITES,
	payload: data,
});
