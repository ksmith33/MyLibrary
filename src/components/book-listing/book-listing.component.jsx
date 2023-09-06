import "./book-listing.styles.scss";

function BookListing ({ book, children }) {
	const { title, first_publish_year, author_name, cover_i } = book;
	return (
		<li className="book-listing-container">
			<img src={`https://covers.openlibrary.org/b/id/${cover_i}-M.jpg`} alt={title} />
			<div className="book-details">
				<p><b>{ title }</b></p>
				<p>by { author_name }</p>
				<p>published { first_publish_year }</p>
				{ children }
			</div>
		</li>
	)
}

export default BookListing;