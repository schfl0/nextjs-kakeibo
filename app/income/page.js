import { getServerSession } from "next-auth";
import { authOptions } from "@/utils/authOptions";
import { redirect } from "next/navigation";
import AddIncomeForm from "@/components/addIncomeForm";
import IncomeItem from "@/components/incomeItem";
import { getIncome } from "@/utils/income";
import IncomeList from "@/components/incomeList";

export default async function Income() {
  const session = await getServerSession(authOptions);
  console.log(session);
  if (!session) {
    redirect("/");
  }

  const incomeData = await getIncome(session.user.id);
  const income = incomeData.income.map((income) => {
    return { ...income, _id: income._id.toString() };
  });

  return (
    <main className="mt-12 text-stone-800">
      <h1 className="text-2xl">Income</h1>
      <div className="mt-4 rounded-lg bg-green-100 p-4 shadow-md">
        <h2 className="text-lg">Add income</h2>
        <AddIncomeForm userId={session.user.id} />
      </div>

      <IncomeList income={income} />
      {incomeData.income.length > 0 && (
        <div className="mt-4 flex items-center justify-between rounded-lg p-4 shadow-md">
          <h3 className="font-bold">Total</h3>
          <p className="text-right font-bold">{incomeData.totalIncome}</p>
        </div>
      )}
    </main>
  );
}
