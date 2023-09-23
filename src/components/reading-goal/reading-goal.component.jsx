import { useEffect, useState } from "react";
import ReadingGoalForm from "../reading-goal-form/reading-goal-form.component";
import ReadingGoalTracker from "../reading-goal-tracker/reading-goal-tracker.component";
import "./reading-goal.styles.scss";

function ReadingGoal () {
	const [readingGoal, setReadingGoal] = useState (() => {
		const readingGoal = JSON.parse(localStorage.getItem('readingGoal'));
		return readingGoal ?? 0;
	});
	
	useEffect (() => {
		localStorage.setItem("readingGoal", readingGoal);
	}, [readingGoal]);

	return (
		<section className="reading-goal-container">
			{ readingGoal ? <ReadingGoalTracker readingGoal= { readingGoal } setReadingGoal={ setReadingGoal }/> : <ReadingGoalForm setReadingGoal={ setReadingGoal }/> }
		</section>
	)
}

export default ReadingGoal;