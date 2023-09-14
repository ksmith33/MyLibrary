import { useEffect, useState } from "react";
import { useSearchParams, Link } from "react-router-dom";
import { fetchBooks } from "../../services/books";
import "./search-results.styles.scss";
import SearchBookListing from "../search-book-listing/search-book-listing.component";
import Button from "../button/button.component";

function SearchResults () {
	const [searchParams] = useSearchParams();
	const [searchResults, setSearchResults ] = useState([]);
	//hook?
	const [pageDetails, setPageDetails] = useState({
		currentPage: 0,
		pages: [],
	});
	const { currentPage, pages} = pageDetails;
	const itemsPerPage = 15;
	const startIndex = currentPage * itemsPerPage;
	const endIndex = startIndex + itemsPerPage;
	const page = searchResults.slice(startIndex, endIndex);
	
	useEffect (() => {
		const search = async () => {
			try {
				const q = searchParams.get('q');
				const results = await fetchBooks(q);
				setSearchResults(results);
				const totalPages = Math.ceil(results.length/itemsPerPage);
				const pageArray = Array.from({length: totalPages}, (x, i) => i + 1)
				setPageDetails({...pageDetails, pages: pageArray})
			} catch (error) {
				console.log(error)
			}
		}
		search();
	}, [searchParams]);

	function handlePageNumberClick (page) {
		setPageDetails({...pageDetails, currentPage: page - 1});
	}
	
	return (
		<section className="search-results-container">
			<ul>
				{
					page.map(searchResult => {
						return (
							<SearchBookListing book={ searchResult } />
						)
					})
				}
			</ul>
			<ul className="page-numbers-list">
				{
					pages.map(page => {
						return (
							<li><Button buttonType = 'default' pressed = {page === currentPage + 1} onClick= {() => handlePageNumberClick(page)}>{page}</Button></li>
						) 
					})
				}
			</ul>
		</section>
	)


}

export default SearchResults;