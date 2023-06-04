import { useContext } from 'react';
import { Layout } from '../../Components/Layout/Layout';
import { ChevronLeftIcon } from '@heroicons/react/24/outline';
import { Context } from '../../Context/Context';
import { CheckoutCard } from '../../Components/CheckoutCard/CheckoutCard';
import { Link, useParams } from 'react-router-dom';

export const MyOrder = () => {
	const { orders } = useContext(Context);
	const { index } = useParams();
	let order;

	if (index) {
		order = orders[index];
	} else {
		order = orders?.slice(-1)[0];
	}

	const products = order?.products;
	const total = order?.totalPrice;

	return (
		<Layout>
			<div className='flex justify-center items-center relative w-80 mb-4'>
				<Link to='/my-orders' className='absolute left-0'>
					<ChevronLeftIcon className='h-6 w-6 ' />
				</Link>

				<h2 className='font-medium text-xl'>My order</h2>
			</div>
			<div className='flex flex-col w-80'>
				<div className='flex-1 scrollable-cards'>
					{products.map(el => {
						return <CheckoutCard key={el.id} product={el} />;
					})}
				</div>
				<p className='px-4 pb-4 flex justify-between text-lg w-full'>
					<span>Total:</span> <span className='font-medium '>${total}</span>
				</p>
			</div>
		</Layout>
	);
};
