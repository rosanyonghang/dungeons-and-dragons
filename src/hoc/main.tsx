import { BrowserRouter } from 'react-router-dom';
import { BaseTheme } from './theme';

export function MainContainer(props: any) {
	return (
		<BrowserRouter>
			<BaseTheme>
				{ props.children}
			</BaseTheme>
		</BrowserRouter>
	);
}
