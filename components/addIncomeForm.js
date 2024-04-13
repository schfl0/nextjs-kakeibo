"use client";
import { useState } from "react";
import { addIncome } from "@/actions";
import { TbPigMoney } from "react-icons/tb";

export default function AddIncomeForm({ userId }) {
  const [nameInput, setNameInput] = useState("");
  const [amountInput, setAmountInput] = useState("");
  return (
    <form onSubmit={() => addIncome(userId, nameInput, amountInput)}>
      <div className="flex items-center justify-start gap-4">
        <div className="mt-4 flex-1">
          <label htmlFor="name" className="block text-sm  text-stone-800 ">
            Name
          </label>
          <input
            type="text"
            id="name"
            name="name"
            value={nameInput}
            onChange={(e) => setNameInput(e.target.value)}
            className="block w-full rounded-lg border border-stone-200 bg-stone-50 p-2.5 text-sm text-stone-800 outline-none focus:border-stone-300 focus:ring-stone-300"
          />
        </div>
        <div className="mt-4 flex-1">
          <label htmlFor="amount" className="block text-sm text-stone-800 ">
            Amount
          </label>
          <input
            type="number"
            id="amount"
            name="amount"
            step="0.05"
            min="0.05"
            value={amountInput}
            onChange={(e) => setAmountInput(e.target.value)}
            className="block w-full self-end rounded-lg border border-stone-200 bg-gray-50 p-2.5 text-sm text-stone-800 outline-none focus:border-stone-300 focus:ring-stone-300"
          />
        </div>

        <button
          type="submit"
          className="self-end rounded-lg bg-stone-800  p-3 text-lg text-stone-50 hover:bg-stone-700"
        >
          <TbPigMoney />
        </button>
      </div>
    </form>
  );
}
