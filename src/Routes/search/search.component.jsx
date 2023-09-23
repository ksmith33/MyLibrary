import SearchResults from "../../components/search-results/search-results.component";
import "./search.styles.scss";

function Search () {
	return (
		<main className="search-container">
			<h2>Search</h2>
			<SearchResults />
		</main>
	)
}

export default Search;