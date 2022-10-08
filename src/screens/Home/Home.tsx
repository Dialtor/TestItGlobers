import React from 'react';
import { Navbar } from '../../common';
export interface HomeInterface {}

const Home : React.FC<HomeInterface> = () => {
	return (
		<>
			<Navbar/>
		</>
	)
};

export default Home;
