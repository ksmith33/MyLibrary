import { useEffect, useState } from "react";
import "./search.styles.scss";
import { useSearchParams } from "react-router-dom";
import { fetchBooks } from "../../services/books";

function Search () {
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
	}, [searchParams])

	return (
		<main>
			{
				//component
				searchResults.map(searchResult => {
					return <div>
						<img src={`https://covers.openlibrary.org/b/id/${searchResult.cover_i}-M.jpg`} alt={searchResult.title} />
						<p>{searchResult.title}</p>
					</div>;
				})
			}
		</main>
	)
}

export default Search;