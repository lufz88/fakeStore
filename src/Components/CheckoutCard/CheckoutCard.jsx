import { XMarkIcon } from '@heroicons/react/24/outline';
import PropTypes from 'prop-types';

export const CheckoutCard = ({ product, onDelete }) => {
	CheckoutCard.propTypes = {
		product: PropTypes.object.isRequired,
		onDelete: PropTypes.func,
	};

	let renderXMarkIcon;
	if (onDelete) {
		renderXMarkIcon = (
			<XMarkIcon className='h-5 w-5 cursor-pointer' onClick={() => onDelete(product)} />
		);
	}

	return (
		<div className='border-y flex w-full p-2 h-20 items-center gap-x-2'>
			<span className='text-sm w-4'>{product.quantity}</span>
			<figure className='w-1/4 h-full gap-3  flex justify-start'>
				<img
					className='w-full h-full object-contain rounded-lg'
					src={product.images && product.images[0]}
					alt={product.title}
				/>
			</figure>
			<span className='text-sm w-1/2'>{product.title}</span>
			<span className='font-medium text-sm'>${product.price * product.quantity}</span>
			{renderXMarkIcon}
		</div>
	);
};
