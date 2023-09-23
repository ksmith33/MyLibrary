import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { MdOutlineSearch } from 'react-icons/md';
import Button from "../button/button.component";
import "./search-bar.styles.scss";

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
		<form onSubmit={ handleSubmit } className="search-bar-container">
			<input 
				type="input"
				value={ searchTerm }
				onChange={ handleSearchChange }
				placeholder="Search"
			/>
			<Button type="submit" buttonType="icon"><MdOutlineSearch /></Button>
		</form>
	)
}

export default SearchBar;