import { useEffect } from "react";
import { useWorkoutContext } from "../hooks/useWorkoutContext";

//components
import WorkoutDetails from "../components/WorkoutDetails";
import WorkoutForm from "../components/WorkoutForm";
import Server from '../path';
const Home = () => {
    // dispatch contain my updated state
    const { workouts, dispatch } = useWorkoutContext();

    useEffect(() => {
        fetchWorkouts();
        // if we use external function then we have to declare that in dependency
    }, [dispatch]);

    const fetchWorkouts = async () => {
        const response = await fetch(`${Server}workouts`);
        const json = await response.json();

        if (response.ok) {
            // console.log(json);
            dispatch({ type: "SET_WORKOUTS", payload: json });
        }
    };

    return (
        <div className="home">
            <div className="workouts">
                {workouts ?
                    workouts.map(workout => <WorkoutDetails key={workout._id} workout={workout} />) :
                    <div>Loading...</div>}
            </div>
            <WorkoutForm />
        </div>
    );
};

export default Home;
