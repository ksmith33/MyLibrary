import "./add-to-library-button.styles.scss";
import { useContext, useState } from "react";
import Button from "../button/button.component";
import { LibrariesContext } from "../../contexts/libraries.context";

function AddToLibraryButton ({ book }) {
	const [choicesHidden, setChoicesHidden] = useState(true);
	const { libraries } = useContext(LibrariesContext);

	function handleAddToLibraryClick () {
		setChoicesHidden(!choicesHidden);
	}

	function handleLibraryClick (libraryDetails) {
		const { cover_i } = book;
		const { id } = libraryDetails;
		//clean up 
		const newLibrary = !libraryDetails.books.includes(cover_i) ? {...libraryDetails, thumbnail: `https://covers.openlibrary.org/b/id/${cover_i}-M.jpg`, books: [...libraryDetails.books, cover_i]} : libraryDetails;
		localStorage.setItem(cover_i, JSON.stringify({ ...book, completed: false }));
		localStorage.setItem(id, JSON.stringify(newLibrary));

		setChoicesHidden(true);
	}
 
	return (
		<>
			<Button type="button" onClick={ handleAddToLibraryClick } buttonType="default">Add to Library</Button>
			{
					//component?
				!choicesHidden &&
				(
					<ul className="libraries-list">
						{
							libraries.map((library) => {
								const libraryDetails = JSON.parse(localStorage.getItem(library));
								const { name, id } = libraryDetails;
								return (
									<li key={id}>
										<Button buttonType="listItem" onClick={() => handleLibraryClick(libraryDetails)}>{ name }</Button>
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