import { useState, useEffect, createContext } from "react";

export const BooksContext = createContext({
	completedBooks: 0,
	setCompletedBooks: () => {},
});

export function BooksProvider ({ children }){
	const [completedBooks, setCompletedBooks] = useState(() => {
		const completedBooks = JSON.parse(localStorage.getItem('completed'));
		return completedBooks ?? 0;
	});

	useEffect(() => {
    localStorage.setItem('completed', JSON.stringify(completedBooks));
  }, [completedBooks]);
    
	const value = { completedBooks, setCompletedBooks };
	return <BooksContext.Provider value={ value }> { children }</BooksContext.Provider>
}