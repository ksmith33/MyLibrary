import { useContext } from "react";
import "./libraries-list.styles.scss";
import CreateLibraryButton from "../create-library-button/create-library-button.component";
import LibraryListItem from "../library-list-item/library-list-item.component";
import { Link } from "react-router-dom";
import { LibrariesContext } from "../../contexts/libraries.context";

function LibrariesList () {
	const { libraries, setLibraries } = useContext(LibrariesContext);

	function addLibrary (library) {
		setLibraries([...libraries, library]);
	};

	return (
		<section className="libraries-list-container">
			<h2>Libraries</h2>
			<ul>
				{
					//fix so that text is outside of colored area
					libraries.map((library) => {
						const { name, thumbnail, id } = library;
						return (
							<LibraryListItem key={id}>
									<Link to={`/library/${id}`}>
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