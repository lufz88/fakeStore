import { useContext } from 'react';
import { ShoppingCartIcon, XCircleIcon } from '@heroicons/react/24/outline';
import { Context } from '../../Context/Context';

import './styles.css';

export const ProductDetail = () => {
	const { closeDetail, isDetailOpen, cardInfo, onAdd } = useContext(Context);

	return (
		<aside
			className={` ${
				isDetailOpen ? 'flex' : 'hidden'
			} product-detail  flex-col fixed right-0 border border-black rounded-lg bg-white `}>
			<div className='flex justify-between items-center p-4 '>
				<h2 className='font-medium text-xl'>Detail</h2>
				<div>
					<XCircleIcon onClick={closeDetail} className='w-8 h-8 cursor-pointer' />
				</div>
			</div>
			<div>
				<figure className='w-full'>
					<img
						className='w-full h-full max-h-60 object-contain rounded-lg'
						src={cardInfo.images && cardInfo.images[0]}
						alt={cardInfo.title}
					/>
				</figure>
				<p className='flex justify-between p-4'>
					<span className='text-xl'>{cardInfo.title}</span>
					<span className='font-medium text-xl'>${cardInfo.price}</span>
				</p>
				<p className='px-4 text-m'>{cardInfo.description} </p>
			</div>

			<button
				onClick={() => onAdd(cardInfo)}
				className='w-32 flex m-4 py-1 justify-center items-center gap-2 border bg-teal-500 rounded-lg shadow-lg'>
				<span>Add to cart</span>
				<ShoppingCartIcon className='h-5 w-5' />
			</button>
		</aside>
	);
};
