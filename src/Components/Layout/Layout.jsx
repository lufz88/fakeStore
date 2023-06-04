import PropTypes from 'prop-types';

export const Layout = ({ children }) => {
	Layout.propTypes = {
		children: PropTypes.node.isRequired,
	};

	return <div className=' flex flex-col mt-28 items-center '>{children}</div>;
};
