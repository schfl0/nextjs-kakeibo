import { getServerSession } from "next-auth";
import { authOptions } from "@/utils/authOptions";
import { redirect } from "next/navigation";
import ExpensesList from "@/components/expensesList";
import AddExpensesForm from "@/components/addExpensesForm";
import ExpenseCategory from "@/components/expenseCategory";
import { getExpenses } from "@/utils/expenses";

export default async function Expenses() {
  const session = await getServerSession(authOptions);
  if (!session) {
    redirect("/");
  }

  const expensesData = await getExpenses(session.user.id);
  const expenses = expensesData.expenses.map((expense) => {
    return { ...expense, _id: expense._id.toString() };
  });

  return (
    <main className="mt-12 text-stone-800">
      <h1 className="text-2xl">Expenses</h1>
      <div className="mt-4 rounded-lg bg-yellow-100 p-4 shadow-md">
        <h2 className="text-lg">Add expenses</h2>
        <AddExpensesForm userId={session.user.id} />
      </div>

      <ExpensesList expenses={expenses} />
      {expensesData.expenses.length > 0 && (
        <>
          <div className="mt-4 flex items-center justify-between rounded-lg p-4 shadow-md">
            <h3 className="font-bold">Total</h3>
            <p className="text-right font-bold">{expensesData.totalExpenses}</p>
          </div>
          <div className="mt-4 md:grid md:grid-cols-2 md:gap-4">
            {expensesData.essentials.length > 0 && (
              <ExpenseCategory
                expenseCategory={expensesData.essentials}
                totalCategory={expensesData.totalEssentials}
                expenseType="essentials"
              />
            )}
            {expensesData.culture.length > 0 && (
              <ExpenseCategory
                expenseCategory={expensesData.culture}
                totalCategory={expensesData.totalCulture}
                expenseType="culture"
              />
            )}
            {expensesData.optional.length > 0 && (
              <ExpenseCategory
                expenseCategory={expensesData.optional}
                totalCategory={expensesData.totalOptional}
                expenseType="optional"
              />
            )}
            {expensesData.unexpected.length > 0 && (
              <ExpenseCategory
                expenseCategory={expensesData.unexpected}
                totalCategory={expensesData.totalUnexpected}
                expenseType="unexpected"
              />
            )}
          </div>
        </>
      )}
    </main>
  );
}
