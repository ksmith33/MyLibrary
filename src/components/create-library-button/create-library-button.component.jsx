import { useState } from "react";
import { v4 } from "uuid";
import Button from "../button/button.component";
import LibraryListItem from "../library-list-item/library-list-item.component";

function CreateLibraryButton ({ addLibrary }) {
	const [formIsHidden, setFormIsHidden] = useState(true);
	const [name, setName] = useState("");

	function handleClick () {
		setFormIsHidden(!formIsHidden);
	}

	function handleNameChange (event) {
		setName(event.target.value);
	}

	function handleSubmit (event) {
		event.preventDefault();
		const libraryId = v4();
		const newLibrary = {
			id: libraryId,
			name: name,
			thumbnail: "",
			books: []
		}

		addLibrary(newLibrary);
		setFormIsHidden(true);
	}

	return (
		<LibraryListItem>
			<button className='new-library-button' onClick={ handleClick } type="button"> + </button>
			{
				!formIsHidden &&
				<form onSubmit={ handleSubmit }>
					<input 
						type="text"
						placeholder={ name }
						onChange={ handleNameChange }
						required
					/>
					<Button type="submit" buttonType="default">Submit</Button>
				</form>
			}
		</LibraryListItem>
	)
}

export default CreateLibraryButton;