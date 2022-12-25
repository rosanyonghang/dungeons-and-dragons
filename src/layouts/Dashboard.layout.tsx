import { useState } from 'react';
import { AppShell, useMantineTheme } from '@mantine/core';
import { DashboardRoutes } from '../components/modules/dashboard/Dashboard.routes';
import { HeaderPartial } from '../components/partials/Header.partial';
import { NavPartial } from '../components/partials/Nav.partial';

export function DashboardLayout() {
	const [opened, setOpened] = useState(false);
	const theme = useMantineTheme();

	return (
		<AppShell
			navbarOffsetBreakpoint="sm"
			fixed
			navbar={(
				<NavPartial
					hiddenBreakpoint="sm"
					hidden={!opened}
					width={{ sm: 300, lg: 300 }}
				/>
			)}
			header={
				<HeaderPartial opened={opened} setOpened={setOpened} theme={theme} />
			}
		>
			<DashboardRoutes />
		</AppShell>
	);
}
