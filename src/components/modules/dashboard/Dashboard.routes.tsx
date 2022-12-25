import {Route, Routes} from "react-router-dom";
import {SpellScreen} from "../../../pages/Spell/Spell.screen";
import {SpellDetailScreen} from "../../../pages/Spell/Spell-Detail.screen";

export const DashboardRoutes = ()=>(
    <section className="dashboard-routes">
        <Routes>
            <Route element={<SpellScreen/>} path={""} index/>
            <Route element={<SpellDetailScreen/>} path={"/spell/:id"}/>
        </Routes>
    </section>
)