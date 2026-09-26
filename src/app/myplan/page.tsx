"use client";

import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { Clock, Flame, Star, X, Check } from "lucide-react";
import { useWorkout } from "@/context/WorkoutContext";

export default function MyPlanPage() {
  const { planList, savedList, removeFromPlan, removeFromSaved } = useWorkout();

  // Tab state: 'today' or 'saved'
  const [activeTab, setActiveTab] = useState<"today" | "saved">("today");

  // Sort state
  const [sortBy, setSortBy] = useState<"duration" | "calories" | "rating">(
    "duration",
  );

  // Current active list Selection
  const currentList = activeTab === "today" ? planList : savedList;

  // Calculate stats dynamically
  const totalExercises = currentList.length;
  const totalMinutes = currentList.reduce(
    (acc, item) => acc + (Number(item.duration) || 0),
    0,
  );
  const totalCalories = currentList.reduce(
    (acc, item) => acc + (Number(item.caloriesBurned) || 0),
    0,
  );

  // Sorting logic
  const sortedList = [...currentList].sort((a, b) => {
    if (sortBy === "duration") return (b.duration || 0) - (a.duration || 0);
    if (sortBy === "calories")
      return (b.caloriesBurned || 0) - (a.caloriesBurned || 0);
    if (sortBy === "rating") return (b.rating || 0) - (a.rating || 0);
    return 0;
  });

  return (
    <main className="min-h-screen bg-[#0C0D10] text-white px-4 py-8 md:px-12">
      <div className="container mx-auto space-y-6">
        {/* Header */}
        <div>
          <h1 className="text-3xl font-extrabold uppercase tracking-wide">
            MY PLAN
          </h1>
          <p className="text-sm text-[#9CA3AF] mt-1">
            Cap of five lifts for today. Finish them, then load more.
          </p>
        </div>

        {/* Top Summary Stats Cards */}
        <div className="grid grid-cols-3 gap-4 bg-[#14171F] p-6 rounded-2xl border border-[#1E232F]">
          <div>
            <p className="text-xs text-[#9CA3AF] mb-1">Exercises</p>
            <p className="text-3xl font-bold text-[#C2F800]">
              {totalExercises}
            </p>
          </div>
          <div className="border-l border-[#252A37] pl-6">
            <p className="text-xs text-[#9CA3AF] mb-1">Minutes</p>
            <p className="text-3xl font-bold text-white">{totalMinutes}</p>
          </div>
          <div className="border-l border-[#252A37] pl-6">
            <p className="text-xs text-[#9CA3AF] mb-1">Calories</p>
            <p className="text-3xl font-bold text-white">{totalCalories}</p>
          </div>
        </div>

        {/* Tabs & Filter */}
        <div className="flex items-center justify-between pt-2">
          {/* Tab Switcher */}
          <div className="flex bg-[#14171F] p-1 rounded-xl border border-[#1E232F]">
            <button
              onClick={() => setActiveTab("today")}
              className={`px-5 py-2 text-xs font-semibold rounded-lg transition ${
                activeTab === "today"
                  ? "bg-[#1F2633] text-white shadow"
                  : "text-[#9CA3AF] hover:text-white"
              }`}
            >
              Today's Plan
            </button>
            <button
              onClick={() => setActiveTab("saved")}
              className={`px-5 py-2 text-xs font-semibold rounded-lg transition ${
                activeTab === "saved"
                  ? "bg-[#1F2633] text-white shadow"
                  : "text-[#9CA3AF] hover:text-white"
              }`}
            >
              Saved
            </button>
          </div>

          {/* Sort Dropdown */}
          <div className="flex items-center gap-2">
            <span className="text-xs text-[#9CA3AF]">Sort By</span>
            <select
              value={sortBy}
              onChange={(e) => setSortBy(e.target.value as any)}
              className="bg-[#14171F] border border-[#1E232F] text-xs text-white rounded-xl px-3 py-2 outline-none cursor-pointer"
            >
              <option value="duration">Duration</option>
              <option value="calories">Calories</option>
              <option value="rating">Rating</option>
            </select>
          </div>
        </div>

        {/* Workout List / Empty State */}
        {sortedList.length === 0 ? (
          /* Empty State Design */
          <div className="flex flex-col items-center justify-center border border-dashed border-[#1E232F] bg-[#101217] rounded-2xl p-16 text-center">
            <h2 className="text-xl font-bold uppercase tracking-wider text-white">
              NOTHING HERE YET
            </h2>
            <p className="text-xs text-[#9CA3AF] mt-2 mb-6">
              Browse the library and add a lift to get today moving.
            </p>
            <Link
              href="/"
              className="bg-[#C2F800] text-[#0C0D10] px-6 py-2.5 text-xs font-bold rounded-full transition hover:bg-[#b0e200]"
            >
              Go to workouts
            </Link>
          </div>
        ) : (
          /* Card Items List */
          <div className="space-y-4">
            {sortedList.map((item) => (
              <div
                key={item.id}
                className="flex flex-col sm:flex-row items-center justify-between bg-[#14171F] border border-[#1E232F] rounded-2xl p-4 gap-4"
              >
                {/* Left Info Section */}
                <div className="flex items-center gap-4 w-full sm:w-auto">
                  <div className="relative w-20 h-16 rounded-xl overflow-hidden shrink-0">
                    <Image
                      src={item.image}
                      alt={item.name}
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div>
                    <h3 className="text-sm font-bold uppercase text-white tracking-wide">
                      {item.name}
                    </h3>
                    <p className="text-xs text-[#9CA3AF] mt-0.5">
                      {item.equipment}
                    </p>

                    {/* Metrics */}
                    <div className="flex items-center gap-4 text-xs text-[#C2F800] mt-2 font-medium">
                      <span className="flex items-center gap-1 text-[#9CA3AF]">
                        <Clock size={12} className="text-[#C2F800]" />{" "}
                        {item.duration} min
                      </span>
                      <span className="flex items-center gap-1 text-[#9CA3AF]">
                        <Flame size={12} className="text-[#C2F800]" />{" "}
                        {item.caloriesBurned} kcal
                      </span>
                      <span className="flex items-center gap-1 text-[#9CA3AF]">
                        <Star size={12} className="text-[#C2F800]" />{" "}
                        {item.rating}
                      </span>
                    </div>
                  </div>
                </div>

                {/* Right Action Buttons */}
                <div className="flex items-center gap-3 w-full sm:w-auto justify-end">
                  <Link
                    href={`/workouts/${item.id}`}
                    className="border border-[#2D3444] text-white px-4 py-2 text-xs font-semibold rounded-full hover:bg-[#1F2633] transition"
                  >
                    View Details
                  </Link>

                  {activeTab === "today" && (
                    <button className="flex items-center gap-1 bg-[#C2F800] text-[#0C0D10] px-4 py-2 text-xs font-bold rounded-full hover:bg-[#b0e200] transition">
                      <Check size={14} /> Mark as Done
                    </button>
                  )}

                  <button
                    onClick={() =>
                      activeTab === "today"
                        ? removeFromPlan(String(item.id))
                        : removeFromSaved(String(item.id))
                    }
                    className="text-[#9CA3AF] hover:text-white p-2 transition"
                  >
                    <X size={18} />
                  </button>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </main>
  );
}
