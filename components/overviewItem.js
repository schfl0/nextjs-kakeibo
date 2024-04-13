export default function OverviewItem({ item }) {
  return (
    <div className="mt-2 flex items-center justify-between text-stone-800">
      <p>{item.name}</p>
      <p>{item.amount}</p>
    </div>
  );
}
