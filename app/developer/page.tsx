import Link from "next/link";

export default function Page() {
  return (
    <div className="h-full w-full flex items-center justify-center">
      <Link href={"/developer/merchants"} className="hover:underline">
        Merchants
      </Link>
    </div>
  );
}
