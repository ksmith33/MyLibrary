import { useState } from "react";
import "./reading-goal-form.styles.scss";
import Button from "../button/button.component";

function ReadingGoalForm ( { setReadingGoal }) {
	const [formIsHidden, setFormIsHidden] = useState(true);
	const [newReadingGoal, setNewReadingGoal] = useState("");

	function handleClick () {
		setFormIsHidden(!formIsHidden);
	}

	function handleSubmit () {
		event.preventDefault();
		setReadingGoal(newReadingGoal);
	}

	function handleChange (event) {
		setNewReadingGoal(event.target.value);
	}
 
	return (
		<div className="reading-goal-form-container">
			<Button onClick = {handleClick} buttonType="default"> Add Reading Goal</Button>
			{ !formIsHidden &&
				<form onSubmit = { handleSubmit }>
					<input 
						type="text"
						name="readingGoal"
						value={newReadingGoal}
						onChange={handleChange}
					/>
					<Button type="submit" buttonType="default">Confirm</Button>
				</form>
			}
			
		</div>
	)
}

export default ReadingGoalForm;