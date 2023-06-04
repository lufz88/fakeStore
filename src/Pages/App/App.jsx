import { useRoutes, BrowserRouter } from 'react-router-dom';

import { Home } from '../Home/Home';
import { MyOrder } from '../MyOrder/MyOrder';
import { MyOrders } from '../MyOrders/MyOrders';
import { NotFound } from '../NotFound/NotFound';
import { Navbar } from '../../Components/Navbar/Navbar';
import { ContextProvider } from '../../Context/Context';

import './App.css';

const AppRoutes = () => {
	let routes = useRoutes([
		{ path: '/', element: <Home /> },
		{ path: '/all', element: <Home /> },
		{ path: '/categories/:categoryName', element: <Home /> },
		{ path: '/my-orders/last', element: <MyOrder /> },
		{ path: '/my-orders/:index', element: <MyOrder /> },
		{ path: '/my-orders', element: <MyOrders /> },
		{ path: '/*', element: <NotFound /> },
	]);

	return routes;
};

function App() {
	return (
		<ContextProvider>
			<BrowserRouter>
				<Navbar />
				<AppRoutes />
			</BrowserRouter>
		</ContextProvider>
	);
}

export default App;
