import { useState } from "react";
import "./search-bar.styles.scss";
import Button from "../button/button.component";
import { useNavigate } from "react-router-dom";

function SearchBar () {
	const [searchTerm, setSearchTerm] = useState("");
	const navigate = useNavigate();

	function handleSearchChange (event) {
		setSearchTerm(event.target.value);
	}

	function handleSubmit (event) {
		event.preventDefault();
		navigate(`/search?q=${searchTerm}`);
	}

	return (
		<form onSubmit={ handleSubmit }>
			<input 
				type="search"
				value={searchTerm}
				onChange={handleSearchChange}
				placeholder="Search"
			/>
			<Button type="submit"> Search </Button>
		</form>
	)
}

export default SearchBar;