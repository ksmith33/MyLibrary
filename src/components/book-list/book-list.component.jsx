import LibraryBookListing from "../library-book-listing/library-book-listing.component";

function BookList ({ books, onClick }) {
	return (
		<ul>
			{
				books && books.map(book => {
					return(
						<LibraryBookListing bookId={ book } onClick={ onClick } key={book}/>
					)
				})
			}
		</ul>
	)
}
export default BookList;