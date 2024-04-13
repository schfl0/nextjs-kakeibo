"use client";
import CostItem from "./costItem";
import { useState } from "react";

export default function CostsList({ costs }) {
  const [pressable, setPressable] = useState(true);

  return (
    <div className="mt-6 rounded-lg p-4 shadow-md">
      <h3 className="font-bold">Fixed costs</h3>
      {costs.map((cost) => (
        <CostItem
          costName={cost.name}
          costAmount={cost.amount}
          costId={cost._id}
          costUserId={cost.userId}
          key={cost._id}
          pressable={pressable}
          setPressable={setPressable}
        />
      ))}
    </div>
  );
}
