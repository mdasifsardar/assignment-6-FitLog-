import ActionButtons from "@/components/ActionButtons";
import { IWorkout } from "@/types/types";
import { Bookmark, CalendarPlus2 } from "lucide-react";
import Image from "next/image";

interface IWorkoutDetailPageProps {
  params: Promise<{ slug: string }>;
}

const WorkoutDetailPage = async ({ params }: IWorkoutDetailPageProps) => {
  const { slug } = await params;
  const res = await fetch(`https://api.abcz.workers.dev/api/fitlog/${slug}`);
  const workout = (await res.json()) as IWorkout;
  console.log(workout);

  const {
    name,
    image,
    muscleGroups,
    equipment,
    difficulty,
    duration,
    caloriesBurned,
    sets,
    reps,
    rating,
    description,
    instructions,
  } = workout;

  return (
    <section className="mx-auto w-full max-w-6xl flex-1 px-4 py-8">
      <article className="grid gap-10 lg:grid-cols-2 items-start">
        {/* Left Side: Image */}
        <div className="relative aspect-square w-full h-[735px] overflow-hidden rounded-3xl border border-slate-800">
          <Image
            src={image}
            alt={name}
            fill
            className="object-cover"
            priority
          />
        </div>

        {/* Right Side: Details */}
        <div className="space-y-6 text-white">
          {/* Header & Badges */}
          <div className="space-y-3">
            <h1 className="text-[36px] font-bold uppercase tracking-wide md:text-4xl">
              {name}
            </h1>
            <p className="text-[16px] text-[#9CA3AF] mb-[20px]">
              {description}
            </p>

            <div className="flex flex-wrap gap-2 pt-1 mb-[28px]">
              {muscleGroups?.map((muscleGroup) => (
                <span
                  key={muscleGroup}
                  className="rounded-full bg-[#CCFF00] px-3 py-1 text-xs font-bold text-[#0F1115]"
                >
                  {muscleGroup}
                </span>
              ))}
            </div>
          </div>

          {/* Stats List Card */}
          <div className="divide-y divide-slate-800 rounded-2xl bg-[#151922] py-2 text-xs font-medium border border-slate-800/80">
            <div className="flex justify-between py-[14px] px-[24px]">
              <span className="uppercase text-[#9CA3AF] text-[12px] font-bold">
                Equipment
              </span>
              <span className="text-[#E5E7EB] text-[14px] ">{equipment}</span>
            </div>
            <div className="flex justify-between py-[14px] px-[24px]">
              <span className="uppercase text-[#9CA3AF] text-[12px] font-bold">
                Difficulty
              </span>
              <span className="text-[#E5E7EB] text-[14px]  capitalize">
                {difficulty}
              </span>
            </div>
            <div className="flex justify-between py-[14px] px-[24px]">
              <span className="uppercase text-[#9CA3AF] text-[12px] font-bold">
                Sets
              </span>
              <span className="text-[#E5E7EB] text-[14px] ">{sets}</span>
            </div>
            <div className="flex justify-between py-[14px] px-[24px]">
              <span className="uppercase text-[#9CA3AF] text-[12px] font-bold">
                Reps
              </span>
              <span className="ttext-[#E5E7EB] text-[14px] ">{reps}</span>
            </div>
            <div className="flex justify-between py-[14px] px-[24px]">
              <span className="uppercase text-[#9CA3AF] text-[12px] font-bold">
                Duration
              </span>
              <span className="text-[#E5E7EB] text-[14px] ">
                {duration} min
              </span>
            </div>
            <div className="flex justify-between py-[14px] px-[24px]">
              <span className="uppercase text-[#9CA3AF] text-[12px] font-bold">
                Calories
              </span>
              <span className="text-[#E5E7EB] text-[14px] ">
                {caloriesBurned} kcal
              </span>
            </div>
            <div className="flex justify-between py-[14px] px-[24px]">
              <span className="uppercase text-[#9CA3AF] text-[12px] font-bold">
                Rating
              </span>
              <span className="text-[#E5E7EB] text-[14px] ">{rating}</span>
            </div>
          </div>

          {/* Instructions */}

          <div className="space-y-3 pt-2">
            <h3 className="text-[16px] font-bold uppercase tracking-wider text-[#FFFFFF] font-extrabold">
              Instructions
            </h3>
            <ol className="list-decimal space-y-2 pl-4 text-[14px] text-[#D1D5DB]">
              {instructions.map((step, idx) => (
                <li key={idx} className="leading-relaxed ">
                  {step}
                </li>
              ))}
            </ol>
          </div>

          {/* Action Buttons */}

          <ActionButtons workout={workout} />
        </div>
      </article>
    </section>
  );
};

export default WorkoutDetailPage;
