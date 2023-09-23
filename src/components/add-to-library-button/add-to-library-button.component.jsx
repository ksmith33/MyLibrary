import { useContext, useState } from "react";
import Button from "../button/button.component";
import { LibrariesContext } from "../../contexts/libraries.context";
import "./add-to-library-button.styles.scss";

function AddToLibraryButton ({ book }) {
	const [choicesVisible, setChoicesVisible] = useState(false);
	const { libraries } = useContext(LibrariesContext);

	function handleAddToLibraryClick () {
		setChoicesVisible(!choicesVisible);
	}

	function handleLibraryClick (libraryDetails) {
		const { cover_i } = book;
		const { id } = libraryDetails;

		const newLibrary = !libraryDetails.books.includes(cover_i) ? { ...libraryDetails, thumbnail: `https://covers.openlibrary.org/b/id/${cover_i}-M.jpg`, books: [...libraryDetails.books, cover_i] } : libraryDetails;
		if(!localStorage.getItem(cover_i)){
			localStorage.setItem(cover_i, JSON.stringify({ ...book, completed: false }));
		} 
		
		localStorage.setItem(id, JSON.stringify(newLibrary));
		setChoicesVisible(false);
	}
 
	return (
		<>
			<Button type="button" onClick={ handleAddToLibraryClick } buttonType="default">Add to Library</Button>
			{
				choicesVisible &&
				(
					<ul className="libraries-list">
						{
							libraries.map((library) => {
								const libraryDetails = JSON.parse(localStorage.getItem(library));
								const { name, id } = libraryDetails;
								return (
									<li key={id}>
										<Button buttonType="listItem" onClick={ () => handleLibraryClick(libraryDetails) } key={ id }>{ name }</Button>
									</li>
								)
							})
						}
					</ul>	
				)
			}
		</>
		
	)
}

export default AddToLibraryButton;