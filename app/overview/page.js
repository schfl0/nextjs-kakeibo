import { getServerSession } from "next-auth";
import { authOptions } from "@/utils/authOptions";
import { redirect } from "next/navigation";
import OverviewItem from "@/components/overviewItem";
import { getIncome } from "@/utils/income";
import { getCosts } from "@/utils/fixedCosts";
import { getExpenses } from "@/utils/expenses";

export default async function Overview() {
  const session = await getServerSession(authOptions);
  if (!session) {
    redirect("/");
  }

  const incomeData = await getIncome(session.user.id);
  const costsData = await getCosts(session.user.id);
  const expensesData = await getExpenses(session.user.id);
  console.log(expensesData);

  return (
    <main className="mt-12 text-stone-800">
      <h1 className="text-2xl">Overview</h1>
      <h2 className="mt-4 font-bold">Income</h2>
      <div className="mt-2 rounded-lg p-4 shadow-md">
        {incomeData.income.map((income) => (
          <OverviewItem key={income._id} item={income} />
        ))}

        <p className="mt-2 border-t-2 pt-2 text-right font-bold">
          + {incomeData.totalIncome}
        </p>
      </div>
      <h2 className="mt-4 font-bold">Fixed costs</h2>
      <div className="mt-2 rounded-lg p-4 shadow-md">
        {costsData.costs.map((cost) => (
          <OverviewItem key={cost._id} item={cost} />
        ))}
        <p className="mt-2 border-t-2 pt-2 text-right font-bold">
          - {costsData.totalCosts}
        </p>
      </div>
      <h2 className="mb-2 mt-4 font-bold">Expenses</h2>

      <div className="md:grid md:grid-cols-2 md:gap-4">
        {expensesData.essentials.length > 0 && (
          <div className="rounded-lg p-4 shadow-md">
            <h3 className="mt-2 font-bold italic">Essentials</h3>
            {expensesData.essentials.map((expense) => (
              <OverviewItem key={expense._id} item={expense} />
            ))}
            <p className="mt-2 border-t pt-2 text-right font-bold italic">
              - {expensesData.totalEssentials}
            </p>
          </div>
        )}
        {expensesData.culture.length > 0 && (
          <div className="rounded-lg p-4 shadow-md">
            <h3 className="mt-2 font-bold italic">Culture</h3>
            {expensesData.culture.map((expense) => (
              <OverviewItem key={expense._id} item={expense} />
            ))}
            <p className="mt-2 border-t pt-2 text-right font-bold italic">
              - {expensesData.totalCulture}
            </p>
          </div>
        )}
        {expensesData.optional.length > 0 && (
          <div className="rounded-lg p-4 shadow-md">
            <h3 className="mt-2 font-bold italic">Optional</h3>
            {expensesData.optional.map((expense) => (
              <OverviewItem key={expense._id} item={expense} />
            ))}
            <p className="mt-2 border-t pt-2 text-right font-bold italic">
              - {expensesData.totalOptional}
            </p>
          </div>
        )}
        {expensesData.unexpected.length > 0 && (
          <div className="rounde-lg p-4 shadow-md">
            <h3 className="mt-2 font-bold italic">Unexpected</h3>
            {expensesData.unexpected.map((expense) => (
              <OverviewItem key={expense._id} item={expense} />
            ))}
            <p className="mt-2 border-t pt-2 text-right font-bold italic">
              - {expensesData.totalUnexpected}
            </p>
          </div>
        )}
      </div>
    </main>
  );
}
