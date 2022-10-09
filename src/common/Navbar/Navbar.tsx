import React from 'react';
import styles from './styles/Navbar.module.css';
import logoNav from '../../assets/books.png';
import { Link } from 'react-router-dom';
import { InputSearch } from '../InputSearch';
export interface NavbarInterface {}

const Navbar : React.FC<NavbarInterface> = () => {
	return (
		<nav className={styles.navbar}>
				<Link to={"/"}><img src={logoNav} width="60%" alt="logoNavbar" /></Link>

				<InputSearch/>
		</nav>
	)
};

export default Navbar;
