import clientPromise from "./mongoClientPromise";

export async function getCosts(userId) {
  const connection = await clientPromise;
  const costs = await connection
    .db("kakeibo")
    .collection("costs")
    .find({ userId: userId })
    .toArray();

  const totalCosts = costs
    .reduce((total, cost) => total + parseFloat(cost.amount), 0)
    .toFixed(2);

  const result = {
    costs,
    totalCosts,
  };
  return result;
}
