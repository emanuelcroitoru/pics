import {useState} from "react";
import './SearchBar.css'
function SearchBar({onSearch}) {
	const [term, setTerm] = useState('');
	const handleChange = (event) => {
		setTerm(event.target.value);
	}
	const handleSubmit = (event) => {
		event.preventDefault();
		onSearch(term)
	}
	return (
		<div className='search-bar'>
			<form onSubmit={handleSubmit}>
				<input value={term} onChange={handleChange} />
			</form>
		</div>
	);
}

export default SearchBar;
