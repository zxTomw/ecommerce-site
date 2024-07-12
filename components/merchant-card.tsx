import { Merchant } from "@/lib/merchants";
import {
  Card,
  CardHeader,
  CardTitle,
  CardContent,
  CardFooter,
} from "@/components/ui/card";
import { Skeleton } from "@/components/ui/skeleton";
import { StarFilledIcon } from "@radix-ui/react-icons";
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
        "w-full hover:shadow-xl transition-all ease-in-out",
        className
      )}
      {...props}
    >
      <Link href={`/products/${merchant.id}`}>
        <CardHeader>
          <Skeleton className="h-32 w-full" />
        </CardHeader>
        <CardContent>
          <CardTitle>{merchant.name}</CardTitle>
          <p className="flex flex-row gap-1 items-center">
            <StarFilledIcon className="h-4 w-4" />{" "}
            {`${merchant.rating} (${merchant.n_reviews})`}
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
