import '../styles/App.scss';
import { useEffect, useState } from 'react';
import { Route, Switch, useRouteMatch } from 'react-router-dom';
import callToApi from '../services/api';
import Filters from './Filters';
import CharacterList from './CharacterList';
import CharacterDetail from './CharacterDetail';
import Header from './Header';
import Hero from './Hero';
import Footer from './Footer';
import NotFound from './NotFound';

function App() {
	const [characters, setCharacters] = useState([]);
	const [searchName, setSearchName] = useState('');
	const [searchSpecies, setSearchSpecies] = useState('All');
	const [searchGender, setSearchGender] = useState('All');
	const [searchStatus, setSearchStatus] = useState('All');

	useEffect(() => {
		callToApi().then((response) => {
			setCharacters(response);
		});
	}, []);

	const handleSearchName = (event) => {
		setSearchName(event.currentTarget.value);
	};

	const handleSearchSpecies = (event) => {
		setSearchSpecies(event.currentTarget.value);
	};

	const handleSearchGender = (event) => {
		setSearchGender(event.currentTarget.value);
	};

	const handleSearchStatus = (event) => {
		setSearchStatus(event.currentTarget.value);
	};

	const handleResetName = () => {
		setSearchName('');
	};

	const filteredCharacters = characters
		.filter((each) =>
			each.name.toLocaleLowerCase().includes(searchName.toLocaleLowerCase())
		)
		.filter((each) => searchSpecies === 'All' || searchSpecies === each.species)
		.filter((each) => searchGender === 'All' || searchGender === each.gender)
		.filter((each) => searchStatus === 'All' || searchStatus === each.status);

	const routeData = useRouteMatch('/characters/:id');
	const characterId = routeData !== null ? routeData.params.id : '';

	const selectedCharacter = characters.find((item) => item.id === characterId);

	return (
		<>
			<section className="container">
				<Switch>
					<Route exact path="/characters/:id">
						<Header />
						<CharacterDetail selectedCharacter={selectedCharacter} />
						<Footer />
					</Route>

					<Route exact path="/characters">
						<Header />
						<Filters
							searchName={searchName}
							handleSearchName={handleSearchName}
							searchSpecies={searchSpecies}
							handleSearchSpecies={handleSearchSpecies}
							handleResetName={handleResetName}
							searchGender={searchGender}
							handleSearchGender={handleSearchGender}
							searchStatus={searchStatus}
							handleSearchStatus={handleSearchStatus}
						/>
						<CharacterList
							handleResetName={handleResetName}
							characters={filteredCharacters}
							searchName={searchName}
						/>
						<Footer />
					</Route>

					<Route exact path="/">
						<Hero />
					</Route>

					<Route>
						<NotFound
							titleText="This page does not exist!"
							link="/"
							btnText="Home"
						/>
					</Route>
				</Switch>
			</section>
		</>
	);
}

export default App;
