"use client";
import { useState } from "react";
import { addExpense } from "@/actions";
import { BsCreditCard2Back } from "react-icons/bs";

export default function AddExpensesForm({ userId }) {
  const [nameInput, setNameInput] = useState("");
  const [amountInput, setAmountInput] = useState("");
  const [typeInput, setTypeInput] = useState("essentials");
  return (
    <form
      onSubmit={() => addExpense(userId, nameInput, amountInput, typeInput)}
    >
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
        <div className="mt-4">
          <label htmlFor="type" className="block text-sm text-stone-800">
            Type
          </label>
          <select
            id="type"
            name="type"
            value={typeInput}
            onChange={(e) => setTypeInput(e.target.value)}
            className="block w-full rounded-lg border border-stone-200 bg-stone-50 p-2.5 text-sm text-stone-800 outline-none focus:border-stone-300 focus:ring-stone-300"
          >
            <option value="essentials">Essentials</option>
            <option value="culture">Culture</option>
            <option value="optional">Optional</option>
            <option value="unexpected">Unexpected</option>
          </select>
        </div>

        <button
          type="submit"
          className="self-end rounded-lg bg-stone-800  p-3 text-lg text-stone-50 hover:bg-stone-700"
        >
          <BsCreditCard2Back />
        </button>
      </div>
    </form>
  );
}
