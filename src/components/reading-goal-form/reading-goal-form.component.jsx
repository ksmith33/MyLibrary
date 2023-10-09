import { useState } from "react";
import Button from "../button/button.component";
import "./reading-goal-form.styles.scss";

function ReadingGoalForm ( { setReadingGoal }) {
	const [formIsVisible, setFormIsVisible] = useState(false);
	const [newReadingGoal, setNewReadingGoal] = useState();

	function handleClick () {
		setFormIsVisible(!formIsVisible);
	}

	function handleSubmit (event) {
		event.preventDefault();
		setReadingGoal(newReadingGoal);
		setFormIsVisible(false);
	}

	function handleChange (event) {
		setNewReadingGoal(event.target.value);
	}
 
	return (
		<div className="reading-goal-form-container">
			<Button onClick = { handleClick } buttonType="default">Add Reading Goal</Button>
			{ formIsVisible &&
				<form onSubmit = { handleSubmit }>
					<input 
						type="text"
						value={ newReadingGoal }
						onChange={ handleChange }
					/>
					<Button type="submit" buttonType="default">Confirm</Button>
				</form>
			}
		</div>
	)
}

export default ReadingGoalForm;