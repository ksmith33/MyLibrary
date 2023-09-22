import BookListing from "../book-listing/book-listing.component";
import Button from "../button/button.component";
import { useContext, useState } from "react";
import "./library-book-listing.styles.scss"
import { BooksContext } from "../../contexts/books.context";

function LibraryBookListing ({ bookId, onClick }){
	const [bookDetails, setBookDetails] = useState(JSON.parse(localStorage.getItem(bookId)));
	const { completed, cover_i } = bookDetails;
	const { setCompletedBooks } = useContext(BooksContext);

	function handledCompletedClick() {
		setBookDetails({...bookDetails, completed: !bookDetails.completed});
		localStorage.setItem(cover_i, JSON.stringify({...bookDetails, completed: !bookDetails.completed}));
		setCompletedBooks(completed ? n => n -1 : n => n + 1);
	}
	
	return (
		<BookListing book={ bookDetails } >
			<div className="options">
				<Button type="button" buttonType="default" onClick ={() => onClick(bookDetails.cover_i)}>Remove From Library</Button>
				<Button type="button" buttonType="default" onClick={ handledCompletedClick }>{completed ? 'Mark as Uncomplete' : 'Mark as Complete'}</Button>
			</div>

		</BookListing>
	)
}

export default LibraryBookListing;