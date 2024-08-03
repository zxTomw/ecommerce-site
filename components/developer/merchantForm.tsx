"use client";

import { useForm } from "react-hook-form";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "../ui/form";
import { z } from "zod";
import { MerchantInputSchema } from "@/lib/zod-schemas";
import { zodResolver } from "@hookform/resolvers/zod";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "../ui/card";
import { Button } from "../ui/button";
import { Input } from "../ui/input";

const formfields: {
  props: {
    placeholder: string;
    name: "name" | "category" | "price_cad" | "description" | "brand" | "stock";
  };
  type: string;
}[] = [
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

const formSchema = z.object({
  name: z.string().min(1),
  category: z.string().min(1),
  price_cad: z.coerce.number().min(0),
  description: z.string().optional(),
  brand: z.string().optional(),
  stock: z.coerce.number().min(0),
});

type InputType = z.infer<typeof formSchema>;

interface MerchantFormProps {
  action: (merchantInput: InputType) => void | any;
  title: string;
}

export function MerchantForm({ action, title }: MerchantFormProps) {
  const form = useForm<InputType>({
    resolver: zodResolver(MerchantInputSchema.partial()),
    defaultValues: {
      name: "",
      category: "",
      price_cad: 0,
      description: "",
      brand: "",
      stock: 0,
    },
  });

  async function onSubmit(data: InputType) {
    await action(data);
    console.log(data);
  }

  return (
    <Card>
      <CardHeader>
        <CardTitle>{title}</CardTitle>
        <pre className="max-w-80 text-wrap">
          {JSON.stringify(form.getValues())}
        </pre>
        {form.formState.isValid ? "valid" : "invalid"}
      </CardHeader>
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)}>
          <CardContent>
            <FormField
              control={form.control}
              name="name"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Name</FormLabel>
                  <FormControl>
                    <Input {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="category"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Category</FormLabel>
                  <FormControl>
                    <Input {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="price_cad"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Price</FormLabel>
                  <FormControl>
                    <Input {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="description"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Description</FormLabel>
                  <FormControl>
                    <Input {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="brand"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Brand</FormLabel>
                  <FormControl>
                    <Input {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="stock"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Stock</FormLabel>
                  <FormControl>
                    <Input {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
          </CardContent>
          <CardFooter>
            <Button type="submit">Submit</Button>
          </CardFooter>
        </form>
      </Form>
    </Card>
  );
}
