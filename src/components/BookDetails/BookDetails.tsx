import React from 'react';
import styles from './styles/BookDetails.module.css';
export interface BookDetailsInterface {}

const BookDetails : React.FC<BookDetailsInterface> = () => {
	return (
		<div className={styles.bookdetails}>
			BookDetails
		</div >
	)
};

export default BookDetails;
