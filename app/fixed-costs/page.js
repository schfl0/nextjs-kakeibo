import { getServerSession } from "next-auth";
import { authOptions } from "@/utils/authOptions";
import { redirect } from "next/navigation";
import AddCostsForm from "@/components/addCostsForm";
import CostsList from "@/components/costsList";
import { getCosts } from "@/utils/fixedCosts";

export default async function FixedCosts() {
  const session = await getServerSession(authOptions);
  if (!session) {
    redirect("/");
  }

  const costsData = await getCosts(session.user.id);
  const costs = costsData.costs.map((cost) => {
    return { ...cost, _id: cost._id.toString() };
  });

  return (
    <main className="mt-12 text-stone-800">
      <h1 className="text-2xl">Fixed costs</h1>
      <div className="mt-4 rounded-lg bg-red-100 p-4 shadow-md">
        <h2 className="text-lg">Add costs</h2>
        <AddCostsForm userId={session.user.id} />
      </div>

      <CostsList costs={costs} />
      {costsData.costs.length > 0 && (
        <div className="mt-4 flex items-center justify-between rounded-lg p-4 shadow-md">
          <h3 className="font-bold">Total</h3>
          <p className="text-right font-bold">{costsData.totalCosts}</p>
        </div>
      )}
    </main>
  );
}
