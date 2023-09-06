import BookListing from "../book-listing/book-listing.component";
import Button from "../button/button.component";
import "./book-list.styles.scss";

function BookList ({ books, onClick }) {
	function handledCompletedClick(bookDetails, completed) {
		const { cover_i } = bookDetails;
		localStorage.setItem(cover_i, JSON.stringify({...bookDetails, completed: !completed}));
	}


	return (
		<ul>
			{
				books && books.map(book => {
					const bookDetails = JSON.parse(localStorage.getItem(book));
					const { completed } = bookDetails;
					return(
						<BookListing book={bookDetails}>
							<Button type="button" buttonType="default" onClick ={() => onClick(bookDetails.cover_i)}>Remove From Library</Button>
							<Button type="button" buttonType="default" onClick={ () => handledCompletedClick(bookDetails, completed) }>{completed ? 'Mark as Uncomplete' : 'Mark as Complete'}</Button>
						</BookListing>
					)
				})
			}
		</ul>
	)
}
export default BookList;