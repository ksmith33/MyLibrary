import React from 'react';
import ReactDOM from 'react-dom/client';
import {
	createBrowserRouter,
	RouterProvider
} from "react-router-dom";
import Libraries from './Routes/Libraries/libraries.component';
import Search from './Routes/search/search.component';
import Library from './Routes/library/library.component';
import './index.css';

const router = createBrowserRouter([
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
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router}/>
  </React.StrictMode>,
)
