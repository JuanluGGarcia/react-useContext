import { useContext } from 'react';
import { CounterContext } from '../../contexts/counterContext';

const Buttons = () => {
	const { counter, setCounter } = useContext(CounterContext);
	return (
		<div>
			<button onClick={() => setCounter(counter + 1)}>+1</button>
			<button onClick={() => setCounter(0)}>Reset</button>
			<button onClick={() => setCounter(counter - 1)}>-1</button>
		</div>
	);
};

export default Buttons;
