import { Burger, Header, MediaQuery } from '@mantine/core';
import { Logo } from '../common/Logo';

export function HeaderPartial({ opened, setOpened, theme }: any) {
	return (
		<Header height={70} className="p-md">
			{/* Handle other responsive styles with MediaQuery component or createStyles function */}
			<div style={{ display: 'flex', alignItems: 'center', height: '100%' }}>
				<MediaQuery largerThan="sm" styles={{ display: 'none' }}>
					<Burger
						opened={opened}
						onClick={() => setOpened((o: boolean) => !o)}
						size="sm"
						color={theme.colors.gray[6]}
						mr="xl"
					/>
				</MediaQuery>

				<Logo size="60" />
			</div>
		</Header>
	);
}
