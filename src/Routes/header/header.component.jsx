import { Link, Outlet } from "react-router-dom";
import "./header.styles.scss";
import SearchBar from "../../components/search-bar/search-bar.component";

function Header () {
	return (
		<>
			<header>
				<h1>
					<Link to="/">
						Placeholder
					</Link>
				</h1>
				<SearchBar />
			</header>
			<Outlet />
		</>
		
	)
}

export default Header;