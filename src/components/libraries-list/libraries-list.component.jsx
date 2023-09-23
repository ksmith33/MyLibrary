import { useContext } from "react";
import { Link } from "react-router-dom";
import { MdOutlineClear } from 'react-icons/md';
import { LibrariesContext } from "../../contexts/libraries.context";
import Button from "../button/button.component";
import CreateLibraryForm from "../create-library-form/create-library-form.component";
import LibraryListItem from "../library-list-item/library-list-item.component";
import "./libraries-list.styles.scss";

function LibrariesList () {
	const { libraries, setLibraries } = useContext(LibrariesContext);

	function addLibrary (newLibrary) {
		const { id } = newLibrary;
		setLibraries([...libraries, id]);
		localStorage.setItem(id, JSON.stringify(newLibrary));
	};

	function onXClick (toRemove) {
		const newLibraries = libraries.filter(library => {return library !== toRemove});
		setLibraries(newLibraries);
		localStorage.removeItem(toRemove);
	} 

	return (
		<section className="libraries-list-container">
			<h2>Libraries</h2>
			<ul>
				{ 
					libraries.map((library) => {
						const libraryDetails = JSON.parse(localStorage.getItem(library));
						const { name, thumbnail } = libraryDetails;
						return (
							<LibraryListItem key={library}>
								<Button type='button' buttonType='delete' onClick={ () => onXClick(library) }><MdOutlineClear /></Button>
								<Link to={ `/library/${library}` } className="list-item">
									{ thumbnail && <img src={ thumbnail } alt={ name } /> }
								</Link>
								<span>{ name }</span>
							</LibraryListItem>
						)
					})
				}
				<CreateLibraryForm addLibrary= { addLibrary }/>
			</ul>
		</section>
	)
}

export default LibrariesList;