import { MerchantCard } from "@/components/merchant-card";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Skeleton } from "@/components/ui/skeleton";
import { sampleMerchants } from "@/lib/sample-merchants";
import { StarIcon, StarFilledIcon } from "@radix-ui/react-icons";

export default function Page() {
  const allProducts = sampleMerchants;
  return (
    <div className="flex flex-col items-center justify-center max-w-full gap-5">
      <h1 className="text-2xl font-semibold">All Products</h1>
      <div className="w-full grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 px-5">
        {allProducts.map((product) => (
          <MerchantCard key={product.name} merchant={product} />
        ))}
      </div>
    </div>
  );
}
