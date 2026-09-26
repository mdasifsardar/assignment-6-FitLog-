"use client";

import React from "react";
import { Bookmark, CalendarPlus2 } from "lucide-react";
import { IWorkout } from "@/types/types";
import { useWorkout } from "@/context/WorkoutContext";

export default function ActionButtons({ workout }: { workout: IWorkout }) {
  const { addToPlan, addToSaved } = useWorkout();

  return (
    <div className="flex flex-wrap items-center gap-4 ">
      <button
        onClick={() => addToPlan(workout)}
        className="flex items-center gap-2 rounded-xl bg-[#CCFF00] px-[24px] py-3 text-xs font-semibold text-[#0F1115] transition hover:bg-[#b8e600] cursor-pointer"
      >
        <CalendarPlus2 width={16} height={16} />
        Add to today's plan
      </button>

      <button
        onClick={() => addToSaved(workout)}
        className="flex items-center gap-2 rounded-xl border border-[#374151] bg-transparent px-[24px] py-[12px] text-[14px] font-medium text-[#E5E7EB] transition hover:bg-slate-800 cursor-pointer"
      >
        <Bookmark width={16} height={16} />
        Save for later
      </button>
    </div>
  );
}
