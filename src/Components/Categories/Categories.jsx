import PropTypes from 'prop-types';
import { useContext } from 'react';

import { NavLink } from 'react-router-dom';
import { Context } from '../../Context/Context';

export const Categories = ({ category, activeStyle }) => {
	Categories.propTypes = {
		category: PropTypes.string.isRequired,
		activeStyle: PropTypes.string,
	};

	const { setSearchByTitle } = useContext(Context);

	return (
		<li>
			<NavLink
				className={({ isActive }) => (isActive ? activeStyle : undefined)}
				to={`/${category}`}
				onClick={() => setSearchByTitle('')}>
				{category}
			</NavLink>
		</li>
	);
};
