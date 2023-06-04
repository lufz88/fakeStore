import { useRoutes, BrowserRouter } from 'react-router-dom';

import { Home } from '../Home/Home';
import { MyOrder } from '../MyOrder/MyOrder';
import { MyOrders } from '../MyOrders/MyOrders';
import { SignIn } from '../SignIn/SignIn';
import { MyAccount } from '../MyAccount/MyAccount';
import { NotFound } from '../NotFound/NotFound';
import { Navbar } from '../../Components/Navbar/Navbar';
import { ContextProvider } from '../../Context/Context';

import './App.css';

const AppRoutes = () => {
	let routes = useRoutes([
		{ path: '/', element: <Home /> },
		{ path: '/all', element: <Home /> },
		{ path: '/:categoryName', element: <Home /> },
		{ path: '/my-orders/last', element: <MyOrder /> },
		{ path: '/my-orders/:index', element: <MyOrder /> },
		{ path: '/my-orders', element: <MyOrders /> },
		{ path: '/sign-in', element: <SignIn /> },
		{ path: '/my-account', element: <MyAccount /> },
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