export interface IBase {
    index: string;
    name: string;
    url: string;
}

export const SpellDto = (data: IBase[]) => data.map((val: any) => ({
	index: val.index,
	name: val.name,
	url: val.url,
})) as IBase[];

export interface ISpellDetail {
    index: string;
    name: string;
    desc: string[],
    higher_level: string[],
    range: string;
    components: string[],
    material: string,
    ritual: boolean,
    duration: string;
    concentration: boolean,
    casting_time: string;
    level: number,
    attack_type: string;
    damage: {
        damage_type: IBase,
        damage_at_slot_level: {
            2?: string;
            3?: string;
            4?: string;
            5?: string;
            6?: string;
            7?: string;
            8?: string;
            9?: string;
        },
    },
    school: IBase,
    classes: IBase[],
    subclasses: IBase[],
    url: string;
}
