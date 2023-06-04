import { ChevronDoubleRightIcon, ShoppingBagIcon } from '@heroicons/react/24/outline';
import PropTypes from 'prop-types';

export const OrderCard = ({ totalPrice, totalProducts }) => {
	OrderCard.propTypes = {
		totalPrice: PropTypes.number.isRequired,
		totalProducts: PropTypes.number.isRequired,
	};

	return (
		<div className='border-y flex w-full mt-2 p-2 items-center gap-x-2'>
			<div className='flex w-full justify-between items-center'>
				<div className='flex items-center gap-4'>
					<ShoppingBagIcon className='w-8 h-8' />
					<div className='flex flex-col'>
						<span className='font-semibold'>01.02.23</span>
						<span>{totalProducts} articles</span>
					</div>
				</div>
				<div className='flex items-center gap-2'>
					<span className='font-semibold'>${totalPrice}</span>
					<ChevronDoubleRightIcon className='w-5 h-5 ' />
				</div>
			</div>
		</div>
	);
};
