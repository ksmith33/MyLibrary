import axios from "axios";

export async function fetchBooks (searchTerm) {
	const results = await axios.get(`https://openlibrary.org/search.json?q=${searchTerm}&mode=ebooks&has_fulltext=true&fields=title,first_publish_year, author_name, cover_i, cover_edition_key`);
	const information = results.data.docs;
	return information;
}