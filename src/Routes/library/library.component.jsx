import { useParams } from "react-router-dom";
import "./library.styles.scss";
import { useEffect, useState } from "react";
import BookList from "../../components/book-list/book-list.component";

function Library () {
	const { libraryId } = useParams();
	const [library, setLibrary] = useState(() => {
		const library = JSON.parse(localStorage.getItem(libraryId));
		return library ?? {};
	});
	const { books } = library;

	useEffect(() => {
		window.addEventListener('storage', (e) => {
			if(e.key === libraryId){
				const newLibrary = JSON.parse(localStorage.getItem(libraryId));
				setLibrary(newLibrary);
			}
		});
	}, []);

	useEffect(() => {
			localStorage.setItem(libraryId, JSON.stringify(library));
	}, [library]);
	
	function removeBook (bookId) {
		const newBooks = books.filter((book) => {
			return book != bookId;
		});

		setLibrary({...library, books: newBooks});
	}
//rename
	return (
		<main>
			<BookList books={books} onClick = {removeBook}/>
		</main>
	)
}

export default Library;