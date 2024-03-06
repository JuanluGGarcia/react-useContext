// import { useState } from 'react';
import Buttons from './components/buttons/Buttons';
import Title from './components/title/Title';
import CounterProvider from './providers/CounterProvider';

const App = () => {
	// Este estado me lo llevo al proveedor de datos
	// const [counter, setCounter] = useState(0);
	return (
		<>
			<header>COUNTER</header>
			<CounterProvider>
				<Title />
				<Buttons />
			</CounterProvider>
		</>
	);
};

export default App;
