import React from 'react';
import styles from './styles/Navbar.module.css';
import logoNav from '../../assets/books.png';
import { Link } from 'react-router-dom';
import {MdOutlineSearch} from 'react-icons/md';
export interface NavbarInterface {}

const Navbar : React.FC<NavbarInterface> = () => {
	return (
		<nav className={styles.navbar}>
				<Link to={"/"}><img src={logoNav} width="60%" alt="logoNavbar" /></Link>

				<div className={styles.search_container}>
						<input  className={styles.search_input} type="text" placeholder='Search Title, Author or ISBN' />
						<button><MdOutlineSearch style={{fontSize: "26px"}}/></button>
				</div>
		</nav>
	)
};

export default Navbar;
