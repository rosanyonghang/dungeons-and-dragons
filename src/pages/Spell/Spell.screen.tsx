import {useNavigate} from "react-router-dom";
import {useDispatch, useSelector} from "react-redux";
import {loadSpells} from "../../store/modules/spell/actions";
import {useEffect, useState} from "react";
import {Dispatch} from "redux";
import {ISpell} from "../../components/modules/Spell/Spell.dto";
import {Grid, TextInput} from "@mantine/core";
import {SpellCard} from "../../components/modules/Spell/Spell.card";

export const SpellScreen = ()=>{
    const navigate= useNavigate();
    const dispatch: any = useDispatch();
    const spells = useSelector((state:any)=> state.spellReducer.spells);
    const [filteredSpells, setFilteredSpells] = useState([]);
    const [keyword, setKeyword] = useState('');
    useEffect(()=>{
       loadSpellData();
       return;
    },[]);

    useEffect(()=>{
        setFilteredSpells(spells);
    },[spells]);

    useEffect(()=>{
        setFilteredSpells(spells.filter((v:ISpell)=> v.name.toLowerCase().includes(keyword.toLowerCase())));
    },[keyword]);

    const loadSpellData=async ()=>{
        await dispatch(loadSpells());
    }
    return <div className="spell-section">
        <div className="flex justify-between">
            <div className="text-3xl font-bold">Spells</div>
            <TextInput
                placeholder="Search Spells"
                label="Search Spells"
                onChange={(e)=>setKeyword(e.target.value)}
            />
        </div>
        <Grid className={"text-xl mt-lg"} onClick={()=>navigate('/spell/asd')}>
            {filteredSpells.map((v:ISpell,key:number)=>(
                <Grid.Col md={3} sm={2} xs={1}  key={key}>
                    <SpellCard spell={v}/>
                </Grid.Col>
        ))}
        </Grid>
    </div>
}