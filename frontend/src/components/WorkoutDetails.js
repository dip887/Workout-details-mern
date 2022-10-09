import { useWorkoutContext } from '../hooks/useWorkoutContext'
import Server from '../path';

// date fns
import formatDistanceToNow from 'date-fns/formatDistanceToNow'

const WorkoutDetails = ({ workout }) => {
  const { dispatch } = useWorkoutContext()

  const handleClick = async () => {
    const response = await fetch(`${Server}workouts/` + workout._id, {
      method: 'DELETE'
    })

    const json = await response.json()

    if (response.ok) {
      dispatch({ type: 'DELETE_WORKOUT', payload: json })
    }

  }


  return (
    <div className="workout-details">
      <h4>{workout.title}</h4>
      <p>
        <strong>Loads in (kg):</strong>
        {workout.load}
      </p>
      <p>
        <strong>Reps : </strong>
        {workout.reps}
      </p>
      <p>{formatDistanceToNow(new Date(workout.createdAt), { addSuffix: true })}</p>

      {/* using goggle fonts class material-symbols-outlined , convert text to icons */}
      <span className="material-symbols-outlined" onClick={handleClick}>delete</span>
    </div>
  );
};

export default WorkoutDetails;
