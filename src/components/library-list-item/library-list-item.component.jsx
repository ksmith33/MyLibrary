import "./library-list-item.styles.scss";

function LibraryListItem ({ children }){
	return (
		<li className="library-list-item-container">
			{ children }
		</li>
	)
}

export default LibraryListItem;