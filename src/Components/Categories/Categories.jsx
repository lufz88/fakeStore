import PropTypes from 'prop-types';
import { useContext } from 'react';

import { Link } from 'react-router-dom';
import { Context } from '../../Context/Context';

export const Categories = ({ category, activeStyle }) => {
	Categories.propTypes = {
		category: PropTypes.string.isRequired,
		activeStyle: PropTypes.string.isRequired,
	};

	const { setSearchByTitle } = useContext(Context);

	return (
		<li>
			<Link
				to={`/${category}`}
				className={({ isActive }) => (isActive ? activeStyle : undefined)}
				onClick={() => setSearchByTitle('')}>
				{category}
			</Link>
		</li>
	);
};
