import React from "react";
import WorkoutCard from "./WorkoutCard";
import { IWorkout } from "@/types/types";

const workoutsPromise = async () => {
  const res = await fetch("https://api.abcz.workers.dev/api/fitlog");
  const data = await res.json();
  return data;
};

const Workout = async () => {
  const workouts = await workoutsPromise();

  return (
    <section className="container mx-auto mt-[64px] mb-[4px] p-4 lg:p-0 sm:p-0 md:p0 ">
      {/* library main heading */}
      <h2 className="text-[#FFFFFF] text-[30px] font-bold">THE LIBRARY</h2>
      <p className="text-[#9CA3AF] text-[12px]">
        Twelve lifts covering every major muscle group.
      </p>

      {/* map for workut card */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-[32px]">
        {workouts.map((workout: IWorkout) => (
          <WorkoutCard key={workout.id} workout={workout} />
        ))}
      </div>
    </section>
  );
};

export default Workout;
