import {Badge, Card } from "@mantine/core";
import {ISpell} from "./Spell.dto";
import {Heart} from "tabler-icons-react";

export const SpellCard = ({spell}: {spell:ISpell})=>{
    return <Card withBorder className={"hover:bg-gray-200 cursor-pointer flex justify-between items-center"}>
       <div>
           <div className="font-bold text-xl">{spell.name}</div>
           <Badge className="font-bold text-sm">{spell.index}</Badge>
       </div>
        <div>
            <Heart />
        </div>
    </Card>
}