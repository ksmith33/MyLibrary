import { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";
import { fetchBooks } from "../../services/books";
import Button from "../button/button.component";
import SearchBookListing from "../search-book-listing/search-book-listing.component";
import "./search-results.styles.scss";

function SearchResults () {
	const [searchParams] = useSearchParams();
	const [searchResults, setSearchResults ] = useState([]);
	const [pageDetails, setPageDetails] = useState({
		currentPage: 0,
		pages: [],
	});
	const { currentPage, pages } = pageDetails;
	const itemsPerPage = 15;
	const startIndex = currentPage * itemsPerPage;
	const endIndex = startIndex + itemsPerPage;
	const pageItems = searchResults.slice(startIndex, endIndex);
	
	useEffect (() => {
		const search = async () => {
			try {
				const q = searchParams.get('q');
				const results = await fetchBooks(q);
				setSearchResults(results);
				const totalPages = Math.ceil(results.length/itemsPerPage);
				const pageArray = Array.from({ length: totalPages }, (x, i) => i + 1)
				setPageDetails({...pageDetails, pages: pageArray})
			} catch (error) {
				console.log(error)
			}
		}
		search();
	}, [searchParams]);

	function handlePageNumberClick (page) {
		setPageDetails({ ...pageDetails, currentPage: page - 1 });
	}
	
	return (
		<>
			<ul>
				{
					pageItems.map((searchResult) => {
						const { cover_i } = searchResult
						return (
							<SearchBookListing book={ searchResult } key={ cover_i }/>
						)
					})
				}
			</ul>
			<ul className="page-numbers-list">
				{
					pages.map((page) => {
						return (
							<li key={ page }><Button buttonType='default' pressed={ page === currentPage + 1 } onClick={ () => handlePageNumberClick(page) }>{ page }</Button></li>
						) 
					})
				}
			</ul>
		</>
	)


}

export default SearchResults;