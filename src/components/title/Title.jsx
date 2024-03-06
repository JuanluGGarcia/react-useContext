import { useContext } from 'react';
import { CounterContext } from '../../contexts/counterContext';

const Title = () => {
	// CONSUMER -> useContext(context)
	const { counter } = useContext(CounterContext);

	return <h1>{counter}</h1>;
};

export default Title;
