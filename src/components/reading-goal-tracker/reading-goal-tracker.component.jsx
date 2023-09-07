import "./reading-goal-tracker.styles.scss";
import { BooksContext } from "../../contexts/books.context";
import { useContext } from "react";
import Button from "../button/button.component";

function ReadingGoalTracker ( { readingGoal, setReadingGoal }) {
	const { completedBooks } = useContext(BooksContext);
	console.log('in reading goal tracker')
	const percentCompleted = completedBooks/readingGoal * 100;

	function handleClick () {
		setReadingGoal(0);
	}
	
	return (
		<div className="reading-goal-tracker-container">
			<div className="reading-goal">
				<div className="books-completed" 
					style={{
						width: `${percentCompleted}%`
					}}
				/>
			
				<div className="stats">
					<p> { completedBooks } / { readingGoal }</p> 
					<p>{ percentCompleted }%</p>
				</div>
			</div>
			<Button onClick = { handleClick } buttonType="default"> X </Button>
		</div>
		
	)
}

export default ReadingGoalTracker;