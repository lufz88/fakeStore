import { useContext } from 'react';
import PropTypes from 'prop-types';

import { PlusIcon } from '@heroicons/react/24/outline';
import { Context } from '../../Context/Context';

export const Card = ({ product }) => {
	Card.propTypes = {
		product: PropTypes.object.isRequired,
	};

	const { onAdd, showDetail } = useContext(Context);

	return (
		<div
			onClick={() => showDetail(product)}
			className=' bg-white cursor-pointer w-56 h-60 rounded-lg m-5 '>
			<figure className=' relative mb-4 w-full h-4/5'>
				<span className='absolute bottom-0 left-0 bg-slate-400 rounded-lg text-black text-xs px-2 py-0.5 mb-1 ml-1'>
					{product.category}
				</span>
				<img
					className='w-full h-full object-cover rounded-lg'
					src={product.images[0]}
					alt={product.title}
				/>
				<div
					className='absolute top-0 right-0 flex justify-center items-center bg-slate-400 w-6 h-6 rounded-full text-xs mt-1 mr-1'
					onClick={event => {
						event.stopPropagation();
						onAdd(product);
					}}>
					<PlusIcon />
				</div>
			</figure>
			<p className='flex justify-between'>
				<span className=' text-sm font-light'>{product.title}</span>
				<span className=' text-lg font-medium'>${product.price}</span>
			</p>
		</div>
	);
};
