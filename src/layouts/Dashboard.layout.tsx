import { useState } from 'react';
import { AppShell, Burger, Header, MediaQuery, Navbar, Text, useMantineTheme } from '@mantine/core';
import {DashboardRoutes} from "../components/modules/dashboard/Dashboard.routes";
import {HeaderPartial} from "../components/partials/Header.partial";
import {NavPartial} from "../components/partials/Nav.partial";

export const DashboardLayout = ()=>{
    const [opened, setOpened] = useState(false);
    const theme = useMantineTheme();

    return (
        <AppShell
            navbarOffsetBreakpoint="sm"
            fixed
            navbar={
               <NavPartial/>
            }
            header={
                <HeaderPartial opened={opened} setOpened={setOpened} theme={theme}/>
            }
        >
           <DashboardRoutes/>
        </AppShell>
    );
}
