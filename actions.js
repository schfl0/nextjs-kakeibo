"use server";
import clientPromise from "@/utils/mongoClientPromise";
import { revalidatePath } from "next/cache";
import { ObjectId } from "mongodb";

export async function addIncome(userId, name, amount) {
  const newIncome = {
    userId,
    name,
    amount: parseFloat(amount).toFixed(2),
  };

  const connection = await clientPromise;
  const result = await connection
    .db("kakeibo")
    .collection("income")
    .insertOne(newIncome);
  console.log(result);
  revalidatePath("/income");
}

export async function deleteIncome(incomeId) {
  const objectId = new ObjectId(incomeId);
  const connection = await clientPromise;
  const result = await connection
    .db("kakeibo")
    .collection("income")
    .deleteOne({ _id: objectId });
  console.log(result);
  revalidatePath("/income");
}

export async function editIncome(incomeId, updatedIncome) {
  const objectId = new ObjectId(incomeId);
  const connection = await clientPromise;
  const result = await connection.db("kakeibo").collection("income").replaceOne(
    { _id: objectId },
    {
      name: updatedIncome.name,
      amount: updatedIncome.amount,
      userId: updatedIncome.userId,
    },
  );
  console.log(result);
  revalidatePath("/income");
}

export async function addCost(userId, name, amount) {
  const newCost = {
    userId,
    name,
    amount: parseFloat(amount).toFixed(2),
  };

  const connection = await clientPromise;
  const result = await connection
    .db("kakeibo")
    .collection("costs")
    .insertOne(newCost);
  console.log(result);
  revalidatePath("/fixed-costs");
}

export async function deleteCost(costId) {
  const objectId = new ObjectId(costId);
  const connection = await clientPromise;
  const result = await connection
    .db("kakeibo")
    .collection("costs")
    .deleteOne({ _id: objectId });
  console.log(result);
  revalidatePath("/fixed-costs");
}

export async function editCost(costId, updatedCost) {
  const objectId = new ObjectId(costId);
  const connection = await clientPromise;
  const result = await connection.db("kakeibo").collection("costs").replaceOne(
    { _id: objectId },
    {
      name: updatedCost.name,
      amount: updatedCost.amount,

      userId: updatedCost.userId,
    },
  );
  console.log(result);
  revalidatePath("/fixed-costs");
}

export async function addExpense(userId, name, amount, type) {
  const newExpense = {
    name,
    amount: parseFloat(amount).toFixed(2),
    type,
    userId,
  };

  const connection = await clientPromise;
  const result = await connection
    .db("kakeibo")
    .collection("expenses")
    .insertOne(newExpense);
  console.log(result);
  revalidatePath("/expenses");
}

export async function deleteExpense(expenseId) {
  const objectId = new ObjectId(expenseId);
  const connection = await clientPromise;
  const result = await connection
    .db("kakeibo")
    .collection("expenses")
    .deleteOne({ _id: objectId });
  console.log(result);
  revalidatePath("/expenses");
}

export async function editExpense(expenseId, updatedExpense) {
  const objectId = new ObjectId(expenseId);
  const connection = await clientPromise;
  const result = await connection
    .db("kakeibo")
    .collection("expenses")
    .replaceOne(
      { _id: objectId },
      {
        name: updatedExpense.name,
        amount: updatedExpense.amount,
        type: updatedExpense.type,
        userId: updatedExpense.userId,
      },
    );
  console.log(result);
  revalidatePath("/expenses");
}
