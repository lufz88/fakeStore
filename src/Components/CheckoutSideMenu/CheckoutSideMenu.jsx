import { XCircleIcon } from '@heroicons/react/24/outline';
import './styles.css';
import { useContext } from 'react';
import { Context } from '../../Context/Context';
import { CheckoutCard } from '../CheckoutCard/CheckoutCard';
import { Link } from 'react-router-dom';

export const CheckoutSideMenu = () => {
	const {
		isSideMenuOpen,
		closeSideMenu,
		cartProducts,
		onDelete,
		getTotalPrice,
		setOrders,
		clearCart,
		orders,
		setSearchByTitle,
	} = useContext(Context);

	const total = getTotalPrice();

	const handleCheckout = () => {
		const orderToAdd = {
			date: '01.02.23',
			products: cartProducts,
			totalProducts: cartProducts.length,
			totalPrice: total,
		};

		setOrders([...orders, orderToAdd]);
		closeSideMenu();
		setSearchByTitle('');
		clearCart();
	};

	return (
		<aside
			className={` ${
				isSideMenuOpen ? 'flex' : 'hidden'
			} checkout-side-menu  flex-col fixed right-0 border border-black rounded-lg bg-white `}>
			<div className='flex justify-between items-center p-4 '>
				<h2 className='font-medium text-xl'>My Cart</h2>
				<div>
					<XCircleIcon onClick={closeSideMenu} className='w-8 h-8 cursor-pointer' />
				</div>
			</div>
			{cartProducts.length > 0 ? (
				<div className='flex-1 scrollable-cards'>
					{cartProducts.map(el => {
						return <CheckoutCard key={el.id} product={el} onDelete={onDelete} />;
					})}
				</div>
			) : (
				<p className='flex-1 text-center font-thin text-sm mt-4 border-y-2 pt-2'>
					Add some products
				</p>
			)}
			<div className='flex flex-col '>
				<p className='px-4 pb-4 flex justify-between text-lg w-full'>
					<span>Total:</span> <span className='font-medium '>${total}</span>
				</p>

				<Link
					to={'/my-orders/last'}
					className='text-xl py-1 mb-4 text-center font-light mx-auto'>
					<button
						className='py-1 bg-black text-white rounded-lg shadow-lg w-32'
						onClick={handleCheckout}>
						Checkout
					</button>
				</Link>
			</div>
		</aside>
	);
};
