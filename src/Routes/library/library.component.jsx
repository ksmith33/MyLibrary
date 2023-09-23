import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import BookList from "../../components/book-list/book-list.component";
import "./library.styles.scss";

function Library () {
	const { libraryId } = useParams();
	const [library, setLibrary] = useState(() => {
		const library = JSON.parse(localStorage.getItem(libraryId));
		return library ?? {};
	});
	const { books, name } = library;

	useEffect(() => {
		localStorage.setItem(libraryId, JSON.stringify(library));
	}, [library]);
	
	function removeBook (bookId) {
		const newBooks = books.filter((book) => {
			return book !== bookId;
		});

		setLibrary({...library, books: newBooks, thumbnail: `https://covers.openlibrary.org/b/id/${newBooks[newBooks.length - 1]}-M.jpg`});
	}

	return (
		
		<main className="library-container">
			<h2>{ name }</h2>
			<BookList books={ books } onClick = { removeBook }/>
		</main>
	)
}

export default Library;