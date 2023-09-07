import "./search-book-listing.styles.scss";
import BookListing from "../book-listing/book-listing.component";
import AddToLibraryButton from "../add-to-library-button/add-to-library-button.component";
import { Link } from "react-router-dom";

function SearchBookListing ({ book }) {
	const { cover_edition_key } = book;

	return (
		<li className="search-book-listing-container">
			<BookListing book={ book } >
				<div className="options">
					<AddToLibraryButton book={ book }/>
					<Link to={`https://openlibrary.org/works/${cover_edition_key}`} target="_blank">View on OpenLibrary</Link>
				</div>
			</BookListing>
		</li>
	)
}

export default SearchBookListing;