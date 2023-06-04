import { useParams } from 'react-router-dom';
import { productsApi } from '../../Assets/ApiUrls';
import { Card } from '../../Components/Card/Card';
import { CheckoutSideMenu } from '../../Components/CheckoutSideMenu/CheckoutSideMenu';
import { Layout } from '../../Components/Layout/Layout';
import { ProductDetail } from '../../Components/ProductDetail/ProductDetail';
import { useFetch } from '../../Hooks/UseFetch';
import { MagnifyingGlassCircleIcon } from '@heroicons/react/24/outline';
import { useContext, useEffect, useState } from 'react';
import { Context } from '../../Context/Context';

export const Home = () => {
	const { setSearchByTitle, searchByTitle } = useContext(Context);
	const data = useFetch(`${productsApi}?limit=0`);
	const { categoryName } = useParams();
	let products;

	if (categoryName) {
		products = data?.products.filter(product => product.category === categoryName);
	} else {
		products = data?.products;
	}

	const [productsByTitle, setProductsByTitle] = useState();
	useEffect(() => {
		if (searchByTitle) {
			setProductsByTitle(
				products.filter(product =>
					product.title.toLowerCase().includes(searchByTitle.toLowerCase())
				)
			);
		}
	}, [searchByTitle, products]);

	return (
		<Layout>
			<div className='flex w-full justify-center'>
				<div className='flex relative w-1/2 justify-center items-center'>
					<input
						type='text'
						placeholder='Search any product'
						className='px-3 py-1 border border-slate-500 rounded-lg w-full'
						onChange={event => setSearchByTitle(event.target.value)}
					/>
					<MagnifyingGlassCircleIcon className='w-6 h-6 absolute right-1' />
				</div>
			</div>

			{searchByTitle ? (
				<div className='grid gap-x-8 gap-y-4 grid-cols-4 w-full max-w-screen-lg'>
					{productsByTitle?.length > 0 ? (
						productsByTitle?.map(product => <Card key={product.id} product={product} />)
					) : (
						<p className='text-center col-span-full mt-4'>
							We don&apos;t have anything
						</p>
					)}
				</div>
			) : (
				<div className='grid gap-x-8 gap-y-4 grid-cols-4 w-full max-w-screen-lg'>
					{products?.map(product => (
						<Card key={product.id} product={product} />
					))}
				</div>
			)}

			<ProductDetail />
			<CheckoutSideMenu />
		</Layout>
	);
};
