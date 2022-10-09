import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import styles from './styles/BookView.module.css';
export interface BookViewInterface {}

const BookView : React.FC<BookViewInterface> = () => {
	type ListParams = {
		id: string;
	};
	const {id} = useParams<ListParams>();
	const [bookView, setBookView] = useState<[]>([])

	async function getBooksDefault(idBook: string) {
		try {
			// 👇️ const data: getBooksDefaultResponse
			const { data, status } = await axios.get<any>(
				`https://api.itbook.store/1.0/books/${idBook}`,
				{
					headers: {
						Accept: 'application/json',
					},
				},
			);

			// 👇️ "response status is: 200"
			console.log('response status is: ', status);
			setBookView(data)
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
		getBooksDefault(id);
	}, [id])
	
	console.log(bookView)
	return <div className={styles.bookview}>BookView</div >;
};

export default BookView;
