import { Route, Routes } from 'react-router-dom';
import { SpellScreen } from '../../../pages/Spell/Spell.screen';
import { SpellDetailScreen } from '../../../pages/Spell/Spell-Detail.screen';
import { FavoritesScreen } from '../../../pages/Spell/Favorites.screen';

export function DashboardRoutes() {
	return (
		<section className="dashboard-routes">
			<Routes>
				<Route element={<SpellScreen />} path="" index />
				<Route element={<SpellDetailScreen />} path="/spell/:id" />
				<Route element={<FavoritesScreen />} path="/favorites" />
			</Routes>
		</section>
	);
}
