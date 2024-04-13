export default function ExpenseCategory({
  expenseCategory,
  totalCategory,
  expenseType,
}) {
  const bgColors = {
    essentials: "bg-red-100",
    culture: "bg-blue-100",
    optional: "bg-green-100",
    unexpected: "bg-orange-100",
  };

  return (
    <div className={`mt-4 rounded-lg p-4 shadow-md ${bgColors[expenseType]}`}>
      <h3 className="mb-2 font-bold">
        {expenseType.charAt(0).toUpperCase() + expenseType.slice(1)}
      </h3>
      {expenseCategory.map((expense, index) => (
        <div className="flex items-center justify-between" key={index}>
          <p>{expense.name}</p>
          <p>{expense.amount}</p>
        </div>
      ))}
      <div className="mt-2 flex items-center justify-between">
        <p className="font-bold">Total</p>
        <p className="font-bold">{totalCategory}</p>
      </div>
    </div>
  );
}
