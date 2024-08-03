import { Merchant } from "@/lib/zod-schemas";
import {
  Card,
  CardHeader,
  CardTitle,
  CardContent,
  CardFooter,
} from "@/components/ui/card";
import { Skeleton } from "@/components/ui/skeleton";
import { StarFilledIcon, StarIcon } from "@radix-ui/react-icons";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import Link from "next/link";

interface MerchantCardProps extends React.HTMLAttributes<HTMLDivElement> {
  merchant: Merchant;
}

export function MerchantCard({
  merchant,
  className,
  ...props
}: MerchantCardProps) {
  return (
    <Card
      className={cn(
        "w-full hover:shadow-xl transition-all ease-in-out overflow-hidden",
        className
      )}
      {...props}
    >
      <Link href={`/products/${merchant.id}`}>
        <Skeleton className="h-32 w-full  rounded-b-none mb-7" />
        <CardContent>
          <CardTitle>{merchant.name}</CardTitle>
          <p className="flex flex-row gap-1 items-center">
            {merchant.rating !== undefined ? (
              <>
                <StarFilledIcon className="h-4 w-4" />{" "}
                {`${merchant.rating} (${merchant.n_reviews})`}
              </>
            ) : (
              <>
                <StarIcon className="h-4 w-4" />
                No reviews
              </>
            )}
          </p>
        </CardContent>
      </Link>
      <CardFooter className="flex gap-2">
        <Button>${merchant.price_cad}</Button>
        <Button variant="secondary">Add to cart</Button>
      </CardFooter>
    </Card>
  );
}
