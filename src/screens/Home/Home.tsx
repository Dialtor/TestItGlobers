import React from 'react';
import { Navbar } from '../../common';
import { BookSection } from '../../components';
export interface HomeInterface {}

const Home : React.FC<HomeInterface> = () => {
	return (
		<>
			<Navbar/>
			<BookSection/>
		</>
	)
};

export default Home;
