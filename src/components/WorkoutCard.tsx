import { IWorkout } from "@/types/types";
import { Clock, Flame, Star } from "lucide-react";
import Image from "next/image";
import React from "react";
interface IWorkoutCardProps {
  workout: IWorkout;
}

const WorkoutCard = ({ workout }: IWorkoutCardProps) => {
  const {
    name,
    image,
    muscleGroups,
    equipment,
    duration,
    caloriesBurned,
    rating,
  } = workout;

  return (
    <section>
      <div className="card w-full overflow-hidden  bg-[#15171D] shadow-sm rounded-2xl">
        <figure className="w-full overflow-hidden">
          <Image
            src={image}
            alt="workout"
            width={392}
            height={192}
            className="h-48 w-full object-cover"
          />
        </figure>

        {/* card group */}
        <div className="card-body ">
          <div className="space-x-2">
            {muscleGroups.map((muscleGroup) => (
              <span
                className="px-[10px] py-[2px] rounded-2xl text-[#000000] text-[11px] font-bold bg-[#C2F800] "
                key={muscleGroup}
              >
                {muscleGroup}
              </span>
            ))}
          </div>
          <h2 className="card-title text-[18px] text-[#FFFFFF] mt-[8px] ">
            {name}
          </h2>
          <p className="text-[#9CA3AF] text-[12px]">{equipment}</p>
          <div className="border border-[#20242E] mt-[16px]" />
          <div className="card-actions text-[#9CA3AF] text-[12px] mt-[12px] space-x-[16px]">
            <span className="flex items-center gap-1">
              <Clock size={14} />
              {duration} min
            </span>
            <span className="flex items-center gap-1">
              <Flame size={14} />
              {caloriesBurned}
              kcal
            </span>
            <span className="flex items-center gap-1">
              <Star size={14} />
              {rating}
            </span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WorkoutCard;
