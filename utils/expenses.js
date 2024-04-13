import clientPromise from "@/utils/mongoClientPromise";

export async function getExpenses(userId) {
  const connection = await clientPromise;
  const expenses = await connection
    .db("kakeibo")
    .collection("expenses")
    .find({ userId: userId })
    .toArray();

  const totalExpenses = expenses
    .reduce((total, expense) => total + parseFloat(expense.amount), 0)
    .toFixed(2);

  const essentials = expenses.filter(
    (expense) => expense.type === "essentials",
  );
  const totalEssentials = essentials
    .reduce((total, expense) => total + parseFloat(expense.amount), 0)
    .toFixed(2);

  const culture = expenses.filter((expense) => expense.type === "culture");
  const totalCulture = culture
    .reduce((total, expense) => total + parseFloat(expense.amount), 0)
    .toFixed(2);

  const optional = expenses.filter((expense) => expense.type === "optional");
  const totalOptional = optional
    .reduce((total, expense) => total + parseFloat(expense.amount), 0)
    .toFixed(2);

  const unexpected = expenses.filter(
    (expense) => expense.type === "unexpected",
  );
  const totalUnexpected = unexpected
    .reduce((total, expense) => total + parseFloat(expense.amount), 0)
    .toFixed(2);

  const result = {
    expenses,
    totalExpenses,
    essentials,
    totalEssentials,
    culture,
    totalCulture,
    optional,
    totalOptional,
    unexpected,
    totalUnexpected,
  };
  return result;
}
