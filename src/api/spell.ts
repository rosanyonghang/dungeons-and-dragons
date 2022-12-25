import { GetRequest } from '../plugins/https';

export const APIGetSpells = () => GetRequest('spells');

export const APIGetSpell = (id: string) => GetRequest(`spells/${id}`);
