import { Link } from "react-router-dom";
import AddToLibraryButton from "../add-to-library-button/add-to-library-button.component";
import BookListing from "../book-listing/book-listing.component";

function SearchBookListing ({ book }) {
	const { cover_edition_key } = book;

	return (
		<BookListing book={ book } >
			<div className="options">
				<AddToLibraryButton book={ book }/>
				<Link to={ `https://openlibrary.org/works/${cover_edition_key}` } target="_blank">View on OpenLibrary</Link>
			</div>
		</BookListing>
	)
}

export default SearchBookListing;