import { Button } from "./ui/button";

export function UserNav() {
  return (
    <div className="flex flex-row gap-5">
      <Button>Sign up</Button>
      <Button variant="outline">Log in</Button>
    </div>
  );
}
