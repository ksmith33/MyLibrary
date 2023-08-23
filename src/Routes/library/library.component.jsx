import { useParams } from "react-router-dom";
import "./library.styles.scss";

function Library () {
	const { libraryId } = useParams();

	return (
		<div>
			Library { libraryId }
		</div>
	)
}

export default Library;