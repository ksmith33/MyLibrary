import "./add-to-library-button.styles.scss";
import { LibrariesContext } from "../../contexts/libraries.context";
import { useContext, useState } from "react";
import Button from "../button/button.component";

function AddToLibraryButton ({ bookId }) {
	const { libraries, setLibraries } = useContext(LibrariesContext);
	const [choicesHidden, setChoicesHidden] = useState(true);

	function handleAddToLibraryClick () {
		setChoicesHidden(!choicesHidden);
	}

	function handleLibraryClick (id) {
		//clean up
		const newLibraries = libraries.map(library => {
			if(library.id === id) {
				return !library.books.includes(bookId) ? {...library, thumbnail: `https://covers.openlibrary.org/b/id/${bookId}-M.jpg`, books: [...library.books, bookId]} : library;
			}

			return library;
		})

		setLibraries(newLibraries);
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
								const { name, id } = library;
								return (
									<li key={id}>
										<Button buttonType="listItem" onClick={() => handleLibraryClick(id)}>{ name }</Button>
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