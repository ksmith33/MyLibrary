import "./book-listing.styles.scss";

function BookListing ({ book, children }) {
	const { title, first_publish_year, author_name, cover_i } = book;
	return (
		<li className="book-listing-container">
			<img src={ `https://covers.openlibrary.org/b/id/${cover_i}-M.jpg` } alt={ title } />
			<section className="book-details">
				<p><b>{ title }</b></p>
				<p>By { author_name }</p>
				<p>Published { first_publish_year }</p>
				{ children }
			</section>
		</li>
	)
}

export default BookListing;