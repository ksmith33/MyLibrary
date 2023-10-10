import { Link, Outlet } from "react-router-dom";
import { GiBookshelf } from 'react-icons/gi'
import SearchBar from "../../components/search-bar/search-bar.component";
import "./header.styles.scss";

function Header () {
	return (
		<>
			<header>
				<h1>
					<Link to="/">
						<GiBookshelf />
						MyLibrary
					</Link>
				</h1>
				<SearchBar />
			</header>
			<Outlet />
		</>
	)
}

export default Header;