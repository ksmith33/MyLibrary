import { useParams } from "react-router-dom";
import "./library.styles.scss";

function Library () {
	const { libraryId } = useParams();

	return (
		<main>
			Library { libraryId }
		</main>
	)
}

export default Library;