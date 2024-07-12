import { PersonIcon } from "@radix-ui/react-icons";
import { Button } from "./ui/button";

export function UserNav() {
  return (
    <div>
      <PersonIcon className="h-4 w-4 sm:hidden" />
      <div className="sm:flex flex-row gap-5 hidden">
        <Button>Sign up</Button>
        <Button variant="outline">Log in</Button>
      </div>
    </div>
  );
}
