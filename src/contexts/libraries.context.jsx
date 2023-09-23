import { useState, useEffect, createContext } from "react";

export const LibrariesContext = createContext({
	libraries: [],
	setLibraries: () => {}
});

export function LibrariesProvider ({ children }){
	const [libraries, setLibraries] = useState(() => {
		const libraries = JSON.parse(localStorage.getItem('libraries'));
		return libraries ?? [];
	});
	
	useEffect(() => {
    localStorage.setItem('libraries', JSON.stringify(libraries));
  }, [libraries]);

	const value = { libraries, setLibraries };
	return <LibrariesContext.Provider value={ value }> { children }</LibrariesContext.Provider>
}