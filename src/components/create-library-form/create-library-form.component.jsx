import { useState } from "react";
import { v4 } from "uuid";
import Button from "../button/button.component";
import LibraryListItem from "../library-list-item/library-list-item.component";

function CreateLibraryForm ({ addLibrary }) {
	const [formIsVisible, setFormIsVisible] = useState(false);
	const [name, setName] = useState("");

	function handleClick () {
		setFormIsVisible(!formIsVisible);
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
		setFormIsVisible(false);
		setName("");
	}

	return (
		<LibraryListItem>
			<button className='list-item' onClick={ handleClick } type="button" aria-label="add library"> + </button>
			{
				formIsVisible &&
				<form onSubmit={ handleSubmit }>
					<input 
						type="text"
						value={ name }
						onChange={ handleNameChange }
						required
					/>
					<Button type="submit" buttonType="default">Submit</Button>
				</form>
			}
		</LibraryListItem>
	)
}

export default CreateLibraryForm;