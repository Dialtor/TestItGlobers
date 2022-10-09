import React from 'react';
import styles from './styles/InputSearch.module.css';
import {MdOutlineSearch} from 'react-icons/md';
export interface InputSearchInterface { }

const InputSearch: React.FC<InputSearchInterface> = () => {
	return (
		<>
			<div className={styles.search_container}>
				<input className={styles.search_input} type="text" placeholder='Search Title, Author or ISBN' />
				<button><MdOutlineSearch style={{ fontSize: "26px" }} /></button>
			</div>
		</>
	)
};

export default InputSearch;