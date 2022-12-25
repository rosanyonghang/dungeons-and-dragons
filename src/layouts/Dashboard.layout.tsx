import { useState } from 'react';
import { AppShell, Burger, Header, MediaQuery, Navbar, Text, useMantineTheme } from '@mantine/core';
import {DashboardRoutes} from "../components/modules/dashboard/Dashboard.routes";
import {HeaderPartial} from "../components/partials/Header.partial";

export const DashboardLayout = ()=>{
    const [opened, setOpened] = useState(false);
    const theme = useMantineTheme();

    return (
        <AppShell
            // navbarOffsetBreakpoint controls when navbar should no longer be offset with padding-left
            navbarOffsetBreakpoint="sm"
            // fixed prop on AppShell will be automatically added to Header and Navbar
            fixed
            navbar={
                <Navbar
                    className={"p-md"}
                    hiddenBreakpoint="sm"
                    hidden={!opened}
                    width={{ sm: 300, lg: 400 }}
                >
                    <Text>Application navbar</Text>
                </Navbar>
            }
            header={
                <HeaderPartial opened={opened} setOpened={setOpened} theme={theme}/>
            }
        >
           <DashboardRoutes/>
        </AppShell>
    );
}
