import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { createMerchant } from "@/lib/merchants";
import { Form } from "@/components/ui/form";
import { MerchantForm } from "@/components/developer/merchantForm";

const formfields = [
  {
    props: {
      placeholder: "name",
      name: "name",
    },
    type: "input",
  },
  {
    props: {
      placeholder: "category",
      name: "category",
    },
    type: "input",
  },
  {
    props: {
      placeholder: "price_cad",
      name: "price_cad",
    },
    type: "input",
  },
  {
    props: {
      placeholder: "description",
      name: "description",
    },
    type: "input",
  },
  {
    props: {
      placeholder: "brand",
      name: "brand",
    },
    type: "input",
  },
  {
    props: {
      placeholder: "stock",
      name: "stock",
    },
    type: "input",
  },
];

export default async function Page() {
  return (
    <div className="flex items-center justify-center h-full">
      <MerchantForm title="Add Merchant" action={createMerchant} />
    </div>
  );
}
