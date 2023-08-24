import axios from "axios";

export async function fetchBooks (searchTerm) {
	const results = await axios.get(`https://openlibrary.org/search.json?q=${searchTerm}&mode=ebooks&has_fulltext=true`);
	const information = results.data.docs;

	const resultsArray = information.map((book) => {
		const {title, first_publish_year, author_name, cover_i} = book;
		return {title, first_publish_year, author_name, cover_i};
	});
	
	console.log(resultsArray)
	return resultsArray;
}