"use client";

import React, { createContext, useContext, useState } from "react";
import toast from "react-hot-toast";
import { IWorkout } from "@/types/types";

interface WorkoutContextType {
  planList: IWorkout[];
  savedList: IWorkout[];
  completedList: string[]; // Completed workout IDs track করার জন্য
  addToPlan: (workout: IWorkout) => void;
  addToSaved: (workout: IWorkout) => void;
  removeFromPlan: (id: string) => void;
  removeFromSaved: (id: string) => void;
  toggleComplete: (id: string) => void;
}

const WorkoutContext = createContext<WorkoutContextType | undefined>(undefined);

export const WorkoutProvider = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  const [planList, setPlanList] = useState<IWorkout[]>([]);
  const [savedList, setSavedList] = useState<IWorkout[]>([]);
  const [completedList, setCompletedList] = useState<string[]>([]);

  const addToPlan = (workout: IWorkout) => {
    if (planList.some((item) => String(item.id) === String(workout.id))) {
      toast.error("Already added to Today's Plan!");
      return;
    }

    if (planList.length >= 5) {
      toast.error("You can only add up to 5 workouts to Today's Plan!");
      return;
    }

    setPlanList((prev) => [...prev, workout]);
    toast.success("Added to Today's Plan!");
  };

  const addToSaved = (workout: IWorkout) => {
    if (savedList.some((item) => String(item.id) === String(workout.id))) {
      toast.error("Already saved!");
      return;
    }

    setSavedList((prev) => [...prev, workout]);
    toast.success("Saved for later!");
  };

  const removeFromPlan = (id: string) => {
    setPlanList((prev) =>
      prev.filter((item) => String(item.id) !== String(id)),
    );
    toast.error("Removed from Today's Plan.");
  };

  const removeFromSaved = (id: string) => {
    setSavedList((prev) =>
      prev.filter((item) => String(item.id) !== String(id)),
    );
    toast.error("Removed from Saved List.");
  };

  const toggleComplete = (id: string) => {
    setCompletedList((prev) => {
      const isCompleted = prev.includes(id);
      if (isCompleted) {
        toast("Marked as incomplete");
        return prev.filter((item) => item !== id);
      } else {
        toast.success("Workout marked as Completed! 🎉");
        return [...prev, id];
      }
    });
  };

  return (
    <WorkoutContext.Provider
      value={{
        planList,
        savedList,
        completedList,
        addToPlan,
        addToSaved,
        removeFromPlan,
        removeFromSaved,
        toggleComplete,
      }}
    >
      {children}
    </WorkoutContext.Provider>
  );
};

export const useWorkout = () => {
  const context = useContext(WorkoutContext);
  if (!context) {
    throw new Error("useWorkout must be used within a WorkoutProvider");
  }
  return context;
};
