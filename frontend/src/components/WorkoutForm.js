import { useState } from "react";
import { useWorkoutContext } from "../hooks/useWorkoutContext";
import Server from '../path';
const WorkoutForm = () => {
  const { dispatch } = useWorkoutContext();

  const [title, setTitle] = useState("");
  const [load, setLoad] = useState("");
  const [reps, setReps] = useState("");
  const [error, setError] = useState(null);
  const [emptyFields, setEmptyFields] = useState([])

  const handleSubmit = async (e) => {
    e.preventDefault();

    const workout = { title, load, reps };

    const response = await fetch(`${Server}workouts`, {
      method: "POST",
      body: JSON.stringify(workout),
      headers: {
        "content-Type": "application/json",
      },
    });
    console.log(response);
    const json = await response.json();

    if (!response.ok) {
      // setError(json.error);
      setEmptyFields(json.emptyFields)
    }

    if (response.ok) {
      setError(null);
      setTitle("");
      setLoad("");
      setReps("");
      setEmptyFields([])
      // console.log("new workout added:", json);
      dispatch({ type: "CREATE_WORKOUT", payload: json });
    }
  };

  return (
    <form className="create" onSubmit={handleSubmit}>
      <h4>ADD WORKOUT</h4>
      <label> Excersize Title:</label>
      <input
        type="text"
        onChange={(e) => setTitle(e.target.value)}
        value={title}
        // if emptyfield hold title show error otherwise true for input
        className={emptyFields.includes('title') ? 'error' : ''}
      />

      <label> Load (in Kg):</label>
      <input
        type="number"
        onChange={(e) => setLoad(e.target.value)}
        value={load}
        className={emptyFields.includes('load') ? 'error' : ''}
      />
      <label> Reps :</label>
      <input
        type="number"
        onChange={(e) => setReps(e.target.value)}
        value={reps}
        className={emptyFields.includes('reps') ? 'error' : ''}
      />
      <button>Add Workout</button>
      {error && <div className="error">{error}</div>}
      <p>{title}</p>
    </form>
  );
};

export default WorkoutForm;
