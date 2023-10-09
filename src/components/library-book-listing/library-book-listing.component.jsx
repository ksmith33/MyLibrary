import { useContext, useState, useEffect } from "react";
import { BooksContext } from "../../contexts/books.context";
import BookListing from "../book-listing/book-listing.component";
import Button from "../button/button.component";

function LibraryBookListing ({ bookId, onClick }){
	const [bookDetails, setBookDetails] = useState(JSON.parse(localStorage.getItem(bookId)));
	const { completed } = bookDetails;
	const { setCompletedBooks } = useContext(BooksContext);

	useEffect(() => {
		localStorage.setItem(bookId, JSON.stringify(bookDetails));
	}, [bookDetails]);

	function handleCompletedClick() {
		setBookDetails({ ...bookDetails, completed: !bookDetails.completed });
		setCompletedBooks(completed ? n => n -1 : n => n + 1);
	}
	
	return (
		<BookListing book={ bookDetails } >
			<div className="options">
				<Button type="button" buttonType="default" onClick ={ () => onClick(bookId) }>Remove From Library</Button>
				<Button type="button" buttonType="default" onClick={ handleCompletedClick }>{completed ? 'Mark as Incomplete' : 'Mark as Complete'}</Button>
			</div>
		</BookListing>
	)
}

export default LibraryBookListing;