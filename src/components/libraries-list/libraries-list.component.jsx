import "./libraries-list.styles.scss";
import CreateLibraryButton from "../create-library-button/create-library-button.component";
import LibraryListItem from "../library-list-item/library-list-item.component";
import { Link } from "react-router-dom";
import { useContext } from "react";
import { LibrariesContext } from "../../contexts/libraries.context";

function LibrariesList () {
	const { libraries, setLibraries } = useContext(LibrariesContext);

	function addLibrary (newLibrary) {
		const { id } = newLibrary;
		setLibraries([...libraries, id]);
		//can move into context
		localStorage.setItem(id, JSON.stringify(newLibrary));
	};

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
									<Link to={`/library/${library}`}>
										{thumbnail && <img src={ thumbnail } alt="name" />}
									</Link>
									<span>{ name }</span>
							</LibraryListItem>
						)
					})
				}
				<CreateLibraryButton addLibrary= { addLibrary }/>
			</ul>
		</section>
	)
}

export default LibrariesList;