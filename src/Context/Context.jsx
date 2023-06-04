import { createContext, useState } from 'react';
import PropTypes from 'prop-types';

export const Context = createContext();

export const ContextProvider = ({ children }) => {
	ContextProvider.propTypes = {
		children: PropTypes.node.isRequired,
	};

	// Counter
	const [count, setCount] = useState(0);

	// Open/Close itemDetail
	const [isDetailOpen, setIsDetailOpen] = useState(false);

	const openDetail = () => {
		setIsDetailOpen(true);
		isSideMenuOpen && closeSideMenu();
	};

	const closeDetail = () => {
		setIsDetailOpen(false);
	};

	// Show Product Detail

	const [cardInfo, setCardInfo] = useState({});
	const showDetail = product => {
		openDetail();
		setCardInfo(product);
	};

	// Cart

	const [cartProducts, setCartProducts] = useState([]);
	const onAdd = product => {
		const productExists = cartProducts.some(el => el.id === product.id); // dará true si el producto ya se encuentra en el carrito

		if (productExists) {
			// valida la existencia
			const productCart = cartProducts.find(el => el.id === product.id); // busca el producto
			productCart.quantity += 1; // aumenta la cantidad en 1
		} else {
			product.quantity = 1; // si el producto no está, le agrega la propiedad quantity con valor uno, y luego setea el carrito agregando ese producto
			setCartProducts([...cartProducts, product]);
		}
		setCount(count + 1);
	};

	const onDelete = product => {
		const newCart = cartProducts.filter(element => element.id !== product.id);
		setCartProducts(newCart);
		setCount(count - product.quantity);
	};

	const clearCart = () => {
		setCartProducts([]);
		setCount(0);
	};

	const getTotalPrice = () => {
		return cartProducts.reduce((sum, product) => sum + product.price * product.quantity, 0);
	};

	// Show ChekoutSideMenu

	const [isSideMenuOpen, setIsSideMenuOpen] = useState(false);

	const openSideMenu = () => {
		setIsSideMenuOpen(true);
		isDetailOpen && closeDetail();
	};

	const closeSideMenu = () => {
		setIsSideMenuOpen(false);
	};

	// Order

	const [orders, setOrders] = useState([]);

	// Search by title

	const [searchByTitle, setSearchByTitle] = useState('');

	const data = {
		onAdd,
		count,
		showDetail,
		closeDetail,
		isDetailOpen,
		cardInfo,
		cartProducts,
		openSideMenu,
		closeSideMenu,
		isSideMenuOpen,
		onDelete,
		getTotalPrice,
		clearCart,
		setOrders,
		orders,
		setSearchByTitle,
		searchByTitle,
	};

	return <Context.Provider value={data}>{children}</Context.Provider>;
};
