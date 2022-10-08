import React from 'react';
import styles from './styles/Navbar.module.css';
export interface NavbarInterface {}

const Navbar : React.FC<NavbarInterface> = () => {
	return (
		<nav className={styles.navbar}>
				<h1>Test IT Globers</h1>
		</nav>
	)
};

export default Navbar;
