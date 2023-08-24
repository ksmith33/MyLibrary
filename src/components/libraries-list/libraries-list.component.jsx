import { useEffect, useState } from "react";
import "./libraries-list.styles.scss";
import CreateLibrary from "../create-library/create-library.component";
import LibraryListItem from "../library-list-item/library-list-item.component";
import { Link } from "react-router-dom";

function LibrariesList () {
	const [libraries, setLibraries] = useState(() => {
		const libraries = JSON.parse(localStorage.getItem('libraries'));
		return libraries ?? [];
	});

	useEffect(() => {
    localStorage.setItem('libraries', JSON.stringify(libraries));
  }, [libraries]);

	function addLibrary (library) {
		setLibraries([...libraries, library]);
	};

	return (
		<section className="libraries-list-container">
			<h2>Libraries</h2>
			<ul>
				{
					libraries.map((library) => {
						const { name, thumbnail, id } = library;
						return (
							<LibraryListItem key={id}>
									<Link to={`/library/${id}`}>
										{thumbnail && <img src={ thumbnail } alt="name" />}
										{ name }
									</Link>
							</LibraryListItem>
						)
					})
				}
				<CreateLibrary addLibrary= { addLibrary }/>
			</ul>
		</section>
	)
}

export default LibrariesList;