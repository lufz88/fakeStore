import { useContext } from 'react';
import { Layout } from '../../Components/Layout/Layout';
import { Context } from '../../Context/Context';
import { OrderCard } from '../../Components/OrderCard/OrderCard';
import { Link } from 'react-router-dom';

export const MyOrders = () => {
	const { orders } = useContext(Context);

	return (
		<Layout>
			<div className='w-80 flex flex-col'>
				<div className='flex justify-center items-center w-full'>
					<h2 className='text-xl font-medium'>My orders</h2>
				</div>
				{orders?.map((order, index) => {
					return (
						<Link key={index} to={`/my-orders/${index}`}>
							<OrderCard
								totalPrice={order.totalPrice}
								totalProducts={order.totalProducts}
							/>
						</Link>
					);
				})}
			</div>
		</Layout>
	);
};
