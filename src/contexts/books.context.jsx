import { useState, createContext } from "react";

export const BooksContext = createContext({
	completedBooks: 0,
	setCompletedBooks: () => {},
});

export function BooksProvider ({ children }){
	const [completedBooks, setCompletedBooks] = useState(() => {
		const completedBooks = JSON.parse(localStorage.getItem('completedBooks'));
		return completedBooks ?? 0;
	});

	function updateCompletedBooks () {
		const newCompleted = completedBooks + 1;
		setCompletedBooks(newCompleted);
		localStorage.setItem('completedBooks', newCompleted);
	}
    
	const value = { completedBooks, updateCompletedBooks };
	return <BooksContext.Provider value={ value }> { children }</BooksContext.Provider>
}