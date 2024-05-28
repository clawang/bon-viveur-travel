import React, { useEffect, useState } from 'react';
import { ListMode } from './ListMode';
import loadData from './loadData';
import './style.scss';
import sf from './assets/sanfrancisco.json';

const cityData = [
	{
		name: 'New York City',
	},
	{
		name: 'San Francisco',
	}
];

function App() {
	const [loaded, setLoaded] = useState(false);
	const [appState, setAppState] = useState({
		open: false,
		loading: false,
		error: false,
		data: {},
		rest: {}
	});
	const [city, setCity] = useState(1); //0 is nyc, 1 is sf
	const [data, setData] = useState([]);

	useEffect(() => {
		// if(city >= 0) csvJSON();
		switch (city) {
			case 1:
				setData(sf.recommendations);
				break;
			default:
				setData([]);
				break;
		}

	}, [city]);

	const fetchData = (rest) => {
		loadData(rest, appState, setAppState);
	}

	return (
		<div className="App">
			{city < 0 ?
				<div className="city-selection-wrapper">
					<div className="city-selection">
						<h1>Which city would you like to see?</h1>
						<p onClick={() => setCity(0)}>New York City</p>
						<p onClick={() => setCity(1)}>San Francisco</p>
					</div>
				</div>
				:
				<>
					<header className="App-header">
						<h1 onClick={() => setCity(-1)}>BON VIVEUR</h1>
						<h2>{cityData[city].name}</h2>
					</header>
					<ListMode data={data} fetchData={fetchData} loaded={loaded} />
				</>
			}
		</div>
	);
}

export default App;
