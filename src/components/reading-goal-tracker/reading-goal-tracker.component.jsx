import { useContext } from "react";
import { BooksContext } from "../../contexts/books.context";
import { MdOutlineCancel } from "react-icons/md";
import Button from "../button/button.component";
import "./reading-goal-tracker.styles.scss";

function ReadingGoalTracker ( { readingGoal, setReadingGoal }) {
	const { completedBooks } = useContext(BooksContext);
	const percentCompleted = Math.floor(completedBooks/readingGoal * 100);

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
			<Button onClick = { handleClick } buttonType="icon" aria-label='remove reading goal'> <MdOutlineCancel /> </Button>
		</div>
		
	)
}

export default ReadingGoalTracker;