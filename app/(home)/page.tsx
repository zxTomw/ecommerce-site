import { MerchantCard } from "@/components/merchant-card";
import { sampleMerchants } from "@/lib/sample-merchants";
const featuredProducts = sampleMerchants.slice(5, 10);
const allProducts = sampleMerchants;
const latestProducts = sampleMerchants.slice(0, 5);
import { ComponentNoneIcon } from "@radix-ui/react-icons";

const selections = [
  {
    title: "Featured",
    products: featuredProducts,
  },
  {
    title: "Latest",
    products: latestProducts,
  },
];

export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center max-w-full gap-5">
      <div className="flex flex-row items-center gap-2">
        <ComponentNoneIcon className="h-32 w-32 font-light" />
        <h1 className="text-8xl">NOLL</h1>
      </div>
      {selections.map(
        (selection) =>
          selection.products.length > 0 && (
            <>
              <h2 className="text-2xl font-semibold w-full pl-5">
                {selection.title}
              </h2>
              <div className="w-full grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 px-5">
                {selection.products.map((product) => (
                  <MerchantCard key={product.name} merchant={product} />
                ))}
              </div>
            </>
          )
      )}
    </div>
  );
}
