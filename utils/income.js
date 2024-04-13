import clientPromise from "./mongoClientPromise";

export async function getIncome(userId) {
  const connection = await clientPromise;
  const income = await connection
    .db("kakeibo")
    .collection("income")
    .find({ userId: userId })
    .toArray();

  const totalIncome = income
    .reduce((total, income) => total + parseFloat(income.amount), 0)
    .toFixed(2);

  const result = {
    income,
    totalIncome,
  };
  return result;
}
