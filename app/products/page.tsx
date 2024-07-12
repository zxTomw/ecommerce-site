import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { sampleMerchants } from "@/lib/sample-merchants";
import { StarIcon } from "@radix-ui/react-icons";

export default function Page() {
  const allProducts = sampleMerchants;
  return (
    <div className="flex flex-col items-center justify-center max-w-full gap-5">
      <h1 className="text-2xl font-semibold">All Products</h1>
      <div className="w-full grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 px-5">
        {allProducts.map((product) => (
          <Card key={product.name} className="w-full">
            <CardHeader>
              <CardTitle>{product.name}</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="h-32 w-full bg-gray-700"></div>
            </CardContent>
            <CardFooter className="flex gap-2">
              <Button>${product.price_cad}</Button>
              <Button variant="secondary" size="icon">
                <StarIcon className="h-4 w-4" />
              </Button>
            </CardFooter>
          </Card>
        ))}
      </div>
    </div>
  );
}
