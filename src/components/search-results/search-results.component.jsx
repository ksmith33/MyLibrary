import { useEffect, useState } from "react";
import { useSearchParams, Link } from "react-router-dom";
import { fetchBooks } from "../../services/books";
import "./search-results.styles.scss";
import SearchBookListing from "../search-book-listing/search-book-listing.component";

function SearchResults () {
	const [searchParams] = useSearchParams();
	const [searchResults, setSearchResults ] = useState([]);
	
	useEffect (() => {
		const search = async () => {
			try {
				const q = searchParams.get('q');
				setSearchResults(await fetchBooks(q));
			} catch (error) {
				console.log(error)
			}
		}
		search();
	}, [searchParams]);

	return (
		<section>
			<ul className="search-results-container">
				{
					searchResults.map(searchResult => {
						return (
							<SearchBookListing book={ searchResult } />
						)
					})
				}
			</ul>
		</section>
	)


}

export default SearchResults;