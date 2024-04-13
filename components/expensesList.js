"use client";
import ExpenseItem from "./expenseItem";
import { useState } from "react";

export default function ExpensesList({ expenses }) {
  const [pressable, setPressable] = useState(true);

  return (
    <div className="mt-6 rounded-lg p-4 shadow-md">
      <h3 className="font-bold">Expenses</h3>
      {expenses.map((expense) => (
        <ExpenseItem
          expenseName={expense.name}
          expenseAmount={expense.amount}
          expenseId={expense._id}
          expenseUserId={expense.userId}
          expenseType={expense.type}
          key={expense._id}
          pressable={pressable}
          setPressable={setPressable}
        />
      ))}
    </div>
  );
}
