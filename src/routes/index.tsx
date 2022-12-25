import { Navigate, Route, Routes } from 'react-router-dom';
import { DashboardLayout } from '../layouts/Dashboard.layout';

function MainRoute() {
	const defaultPath = '/';
	return (
		<Routes>
			<Route element={<DashboardLayout />} path="/*" index />
			<Route path="*" element={<Navigate to={defaultPath} />} />
		</Routes>
	);
}

export default MainRoute;
