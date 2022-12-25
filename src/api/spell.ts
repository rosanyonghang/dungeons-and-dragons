import {GetRequest} from "../plugins/https";

export const APIGetSpells =()=>{
    return GetRequest('spells');
}

export const APIGetSpell =(id:string)=>{
    return GetRequest('spells/'+id);
}