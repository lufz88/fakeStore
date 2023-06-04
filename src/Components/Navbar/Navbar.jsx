import { useContext } from 'react';
import { Link, NavLink } from 'react-router-dom';

import { ShoppingCartIcon } from '@heroicons/react/24/outline';

import { useFetch } from '../../Hooks/UseFetch';
import { categoriesApi } from '../../Assets/ApiUrls';
import { Categories } from '../Categories/Categories';
import { Context } from '../../Context/Context';

export const Navbar = () => {
	const activeStyle = 'underline underline-offset-4';

	const categories = useFetch(categoriesApi);
	const { count, openSideMenu } = useContext(Context);

	return (
		<nav className='flex justify-between items-center fixed z-10 top-0 w-full py-5 px-8 text-sm text-zinc-100 font-light font-sans bg-slate-500 '>
			<ul className='flex items-center gap-3'>
				<li className=' font-semibold text-xl mr-4'>
					<NavLink to='/'>Shopi</NavLink>
				</li>
				<div className=' grid grid-cols-7 gap-x-4'>
					{categories?.map(category => {
						return (
							<Categories
								key={category}
								category={category}
								activeStyle={activeStyle}
							/>
						);
					})}
					<Link to='/all'>all</Link>
				</div>
			</ul>
			<ul className='flex items-center gap-3'>
				<li className=' text-sky-400 font-normal '>lucas@lucas.com</li>

				<li>
					<NavLink
						to='/my-orders'
						className={({ isActive }) => (isActive ? activeStyle : undefined)}>
						My Orders
					</NavLink>
				</li>

				<li onClick={openSideMenu} className='cursor-pointer'>
					<ShoppingCartIcon className='w-6 h-6' />
					<div className='fixed top-8 right-6'>{count}</div>
				</li>
			</ul>
		</nav>
	);
};
