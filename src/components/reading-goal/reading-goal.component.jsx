import { useEffect, useState } from "react";
import "./reading-goal.styles.scss";
import ReadingGoalForm from "../reading-goal-form/reading-goal-form.component";
import ReadingGoalTracker from "../reading-goal-tracker/reading-goal-tracker.component";

function ReadingGoal () {
	const [readingGoal, setReadingGoal] = useState (() => {
		const readingGoal = JSON.parse(localStorage.getItem('readingGoal'));
		return readingGoal ?? 0;
	});
	
	useEffect (() => {
		localStorage.setItem("readingGoal", readingGoal);
	}, [readingGoal]);

	return (
		readingGoal ? <ReadingGoalTracker readingGoal= { readingGoal } setReadingGoal={ setReadingGoal }/> : <ReadingGoalForm setReadingGoal={ setReadingGoal }/>
	)
}

export default ReadingGoal;