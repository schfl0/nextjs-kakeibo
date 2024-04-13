"use client";
import { useState } from "react";
import { deleteCost, editCost } from "@/actions";
import { FaRegTrashCan, FaRegPenToSquare } from "react-icons/fa6";
import { FaRegSave } from "react-icons/fa";

export default function CostItem({
  costName,
  costAmount,
  costId,
  costUserId,
  pressable,
  setPressable,
}) {
  const [showEdit, setShowEdit] = useState(false);
  const [nameInput, setNameInput] = useState(costName);
  const [amountInput, setAmountInput] = useState(costAmount);

  function toggleEdit() {
    if (pressable) {
      setPressable(false);
      setNameInput(costName);
      setAmountInput(costAmount);
      setShowEdit(true);
    }
    if (showEdit) {
      setPressable(true);
      setShowEdit(false);
    }
  }

  return (
    <>
      <div className="mt-2 flex items-center justify-start  text-stone-800">
        <p className="flex-1 ">{costName}</p>
        <p className="mr-4">{costAmount}</p>
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
            <button
              onClick={() => {
                editCost(costId, {
                  name: nameInput,
                  amount: amountInput,
                  userId: costUserId,
                });
                toggleEdit();
              }}
              className="text rounded-lg bg-stone-800 p-2 text-sm text-stone-50 hover:bg-stone-700"
            >
              <FaRegSave />
            </button>
            <button
              onClick={() => deleteCost(costId)}
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
