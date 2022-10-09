import React, { useEffect, useState } from 'react';
import styles from './styles/BookSection.module.css';
import axios from 'axios'
import { ServerResponseBooks, ServerDataBooks } from '../../models';
import { Link } from 'react-router-dom';
export interface BookSectionInterface { }

const BookSection: React.FC<BookSectionInterface> = () => {

	const [books, setBooks] = useState<any>([]);


	async function getBooksDefault() {
		try {
			// 👇️ const data: getBooksDefaultResponse
			const { data, status } = await axios.get<ServerResponseBooks>(
				'https://api.itbook.store/1.0/search/mongodb',
				{
					headers: {
						Accept: 'application/json',
					},
				},
			);

			// 👇️ "response status is: 200"
			console.log('response status is: ', status);
			setBooks(data)
		} catch (error) {
			if (axios.isAxiosError(error)) {
				console.log('error message: ', error.message);
				return error.message;
			} else {
				console.log('unexpected error: ', error);
				return 'An unexpected error occurred';
			}
		}
	}

	useEffect(() => {
		getBooksDefault();
	}, [])


	console.log(books)
	return (
		<div className={styles.booksection}>
			{
				books["books"] && books["books"].map((item: any) => {
					return (
						<Link className={styles.link_Book_View} to={`/BookView/${item.isbn13}`}>
						<div className={styles.card_book}>
							<img src={item.image} alt="" />
							<div className={styles.info_book_container}>
								<h1>{item.title}</h1>
								{item.subtitle ? <span>{item.subtitle}</span> : <span>No Description</span>}
								<span className={styles.price_book}>{item.price}</span>
							</div>
						</div>
						</Link>
					)
				})
			}
		</div >
	)
};

export default BookSection;
