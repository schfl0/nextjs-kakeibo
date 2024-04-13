"use client";
import IncomeItem from "./incomeItem";
import { useState } from "react";

export default function IncomeList({ income }) {
  const [pressable, setPressable] = useState(true);

  return (
    <div className="mt-6 rounded-lg p-4 shadow-md">
      <h3 className="font-bold">Income</h3>
      {income.map((income) => (
        <IncomeItem
          incomeName={income.name}
          incomeAmount={income.amount}
          incomeId={income._id}
          incomeUserId={income.userId}
          key={income._id}
          pressable={pressable}
          setPressable={setPressable}
        />
      ))}
    </div>
  );
}
