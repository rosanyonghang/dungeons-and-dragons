import baseAxios from "../../../plugins/axios";
import {SET_SPELLS, SET_SPELL, SET_FAVORITES} from "./actionTypes";
import {clearStorage, getToken, saveToken, saveUser} from "../../../utils/helpers/tokenStorage.helper";
import {ILoginUser, IRegisterUser, IUpdatePassword, IUserEmail} from "../../../utils/interfaces/LoginUser.interface";
import {APIGetSpell, APIGetSpells} from "../../../api/spell";
import {AxiosInstance, AxiosResponse} from "axios";
import {ISpell, SpellDto} from "../../../components/modules/Spell/Spell.dto";


export const setSpells = (data: any) => {
    console.log(data);
    return {
        type: SET_SPELLS,
        payload: data
    }
}

export const setSpell = (data: any) => {
    return {
        type: SET_SPELL,
        payload: data
    }
}

export const setFavorites = (data: any) => {
    return {
        type: SET_FAVORITES,
        payload: data
    }
}

export const loadSpells = () => async (dispatch: any) => {
    const res: any = await APIGetSpells();
    dispatch(setSpells(SpellDto(res.results)));
}

export const loadSpell = (id: string) => async (dispatch: any) => {
    const res: AxiosResponse<any> = await APIGetSpell(id);
    dispatch(setSpell(res.data));
}
