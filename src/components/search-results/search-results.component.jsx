import { useEffect, useState } from "react";
import { useSearchParams, Link } from "react-router-dom";
import { fetchBooks } from "../../services/books";
import BookListing from "../book-listing/book-listing.component";
import "./search-results.styles.scss";
import AddToLibraryButton from "../add-to-library-button/add-to-library-button.component";

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
						const { cover_edition_key, cover_i } = searchResult;
						return (
							<BookListing book={ searchResult }>
								<div className="options">
									<AddToLibraryButton bookId={ cover_i }/>
									<Link to={`https://openlibrary.org/works/${cover_edition_key}`} target="_blank">View on OpenLibrary</Link>
								</div>
							</BookListing>
						)

					})
				}
			</ul>
		</section>
	)


}

export default SearchResults;