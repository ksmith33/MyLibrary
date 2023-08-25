import React from 'react';
import ReactDOM from 'react-dom/client';
import {
	createBrowserRouter,
	RouterProvider
} from "react-router-dom";
import Libraries from './Routes/Libraries/libraries.component';
import Search from './Routes/search/search.component';
import Library from './Routes/library/library.component';
import Header from './Routes/header/header.component';
import './index.css';
import { LibrariesProvider } from './contexts/libraries.context';

const router = createBrowserRouter([
	{
		path: "/",
		element: <Header />,
		children: [
			{
				path: "/",
				element: <Libraries />
			},
			{
				path: "/search",
				element: <Search />
			},
			{
				path: "/library/:libraryId",
				element: <Library />
			}
		]
	}
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
		<LibrariesProvider>
			<RouterProvider router={router}/>
		</LibrariesProvider>
  </React.StrictMode>,
)
