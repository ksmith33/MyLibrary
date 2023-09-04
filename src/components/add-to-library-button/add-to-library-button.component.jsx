import "./add-to-library-button.styles.scss";
import { LibrariesContext } from "../../contexts/libraries.context";
import { useContext, useState } from "react";
import Button from "../button/button.component";

function AddToLibraryButton ({ book }) {
	const [choicesHidden, setChoicesHidden] = useState(true);
	const { libraries, setLibraries } = useContext(LibrariesContext);

	function handleAddToLibraryClick () {
		setChoicesHidden(!choicesHidden);
	}

	function handleLibraryClick (id) {
		const { cover_i } = book;
		//clean up
		const newLibraries = libraries.map(library => {
			if(library.id === id) {
				return !library.books.includes(cover_i) ? {...library, thumbnail: `https://covers.openlibrary.org/b/id/${cover_i}-M.jpg`, books: [...library.books, cover_i]} : library;
			}

			return library;
		})

		localStorage.setItem(cover_i, JSON.stringify({ ...book, completed: false }));
		setLibraries(newLibraries);
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