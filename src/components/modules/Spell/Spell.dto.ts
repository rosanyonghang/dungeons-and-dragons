export interface    ISpell{
    index: string;
    name: string;
    url: string;
}

export const SpellDto = (data:ISpell[]) =>{
    return data.map((val:any)=>({
        index: val.index,
        name: val.name,
        url: val.url,
    })) as ISpell[];
}