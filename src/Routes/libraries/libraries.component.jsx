import LibrariesList from '../../components/libraries-list/libraries-list.component';
import ReadingGoal from '../../components/reading-goal/reading-goal.component';
import './libraries.styles.scss';

function Libraries () {
	return (
		<main className='libraries-container'>
			<ReadingGoal />
			<LibrariesList />
		</main>
	)
}

export default Libraries;