"use client";
import { useState } from "react";
import { deleteExpense, editExpense } from "@/actions";
import { FaRegTrashCan, FaRegPenToSquare } from "react-icons/fa6";
import { FaRegSave } from "react-icons/fa";

export default function ExpenseItem({
  expenseName,
  expenseAmount,
  expenseId,
  expenseType,
  expenseUserId,
  pressable,
  setPressable,
}) {
  const [showEdit, setShowEdit] = useState(false);
  const [nameInput, setNameInput] = useState(expenseName);
  const [amountInput, setAmountInput] = useState(expenseAmount);
  const [typeInput, setTypeInput] = useState(expenseType);

  function toggleEdit() {
    if (pressable) {
      setPressable(false);
      setNameInput(expenseName);
      setAmountInput(expenseAmount);
      setTypeInput(expenseType);
      setShowEdit(true);
    }
    if (showEdit) {
      setPressable(true);
      setShowEdit(false);
    }
  }

  const bgColors = {
    essentials: "bg-red-100",
    culture: "bg-blue-100",
    optional: "bg-green-100",
    unexpected: "bg-orange-100",
  };

  return (
    <>
      <div className="mt-2 flex items-center justify-start text-stone-800">
        <div className="flex flex-1 items-center justify-between">
          <p>{expenseName}</p>

          <p
            className={`mr-6 rounded-full px-3 py-1 text-sm ${bgColors[expenseType]}`}
          >
            {expenseType?.charAt(0).toUpperCase() + expenseType?.slice(1)}
          </p>
        </div>

        <p className="mr-4">{expenseAmount}</p>

        <button
          onClick={toggleEdit}
          className="text self-end rounded-lg bg-stone-800 p-2 text-sm text-stone-50 hover:bg-stone-700"
        >
          <FaRegPenToSquare />
        </button>
      </div>
      {showEdit && (
        <div className="mb-4 mt-2 flex items-center justify-center gap-4 rounded-lg ">
          <div className="flex-1">
            <input
              type="text"
              id="name"
              name="name"
              value={nameInput}
              onChange={(e) => setNameInput(e.target.value)}
              className="block w-full rounded-lg border border-stone-200 bg-stone-50 p-2 text-xs text-stone-800 outline-none focus:border-stone-300 focus:ring-stone-300"
            />
          </div>
          <div className="flex-1">
            <input
              type="number"
              id="amount"
              name="amount"
              step="0.05"
              min="0.05"
              className="block w-full self-end rounded-lg border border-stone-200 bg-gray-50 p-2 text-xs text-stone-800 outline-none focus:border-stone-300 focus:ring-stone-300"
              value={amountInput}
              onChange={(e) => setAmountInput(e.target.value)}
            />
          </div>
          <div>
            <select
              id="type"
              name="type"
              value={typeInput}
              onChange={(e) => setTypeInput(e.target.value)}
              className="block w-full self-end rounded-lg border border-stone-200 bg-gray-50 p-2 text-xs text-stone-800 outline-none focus:border-stone-300 focus:ring-stone-300"
            >
              <option value="essentials">Essentials</option>
              <option value="culture">Culture</option>
              <option value="optional">Optional</option>
              <option value="unexpected">Unexpected</option>
            </select>
          </div>

          <div>
            <button
              onClick={() => {
                editExpense(expenseId, {
                  name: nameInput,
                  amount: amountInput,
                  userId: expenseUserId,
                  type: typeInput,
                });
                toggleEdit();
              }}
              className="text rounded-lg bg-stone-800 p-2 text-sm text-stone-50 hover:bg-stone-700"
            >
              <FaRegSave />
            </button>
            <button
              onClick={() => deleteExpense(expenseId)}
              className="text ml-1 rounded-lg bg-stone-800 p-2 text-sm text-stone-50 hover:bg-stone-700"
            >
              <FaRegTrashCan />
            </button>
          </div>
        </div>
      )}
    </>
  );
}
