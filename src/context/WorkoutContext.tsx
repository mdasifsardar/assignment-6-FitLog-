"use client";

import React, { createContext, useContext, useState } from "react";
import { IWorkout } from "@/types/types";

interface WorkoutContextType {
  planList: IWorkout[];
  savedList: IWorkout[];
  addToPlan: (workout: IWorkout) => void;
  addToSaved: (workout: IWorkout) => void;
  removeFromPlan: (id: string) => void;
  removeFromSaved: (id: string) => void;
}

const WorkoutContext = createContext<WorkoutContextType | undefined>(undefined);

export const WorkoutProvider = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  const [planList, setPlanList] = useState<IWorkout[]>([]);
  const [savedList, setSavedList] = useState<IWorkout[]>([]);

  const addToPlan = (workout: IWorkout) => {
    setPlanList((prev) => {
      if (prev.some((item) => item.id === workout.id)) return prev;
      return [...prev, workout];
    });
  };

  const addToSaved = (workout: IWorkout) => {
    setSavedList((prev) => {
      if (prev.some((item) => item.id === workout.id)) return prev;
      return [...prev, workout];
    });
  };

  const removeFromPlan = (id: string) => {
    setPlanList((prev) =>
      prev.filter((item) => String(item.id) !== String(id)),
    );
  };

  const removeFromSaved = (id: string) => {
    setSavedList((prev) =>
      prev.filter((item) => String(item.id) !== String(id)),
    );
  };

  return (
    <WorkoutContext.Provider
      value={{
        planList,
        savedList,
        addToPlan,
        addToSaved,
        removeFromPlan,
        removeFromSaved,
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
