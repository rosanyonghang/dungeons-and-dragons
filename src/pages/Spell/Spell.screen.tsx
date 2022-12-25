import {useNavigate} from "react-router-dom";

export const SpellScreen = ()=>{
    const navigate= useNavigate();
    return <div className={"text-xl"} onClick={()=>navigate('/spell/asd')}>Spell screen</div>
}