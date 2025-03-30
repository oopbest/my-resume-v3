import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

export function AvatarDemo() {
  return (
    <Avatar>
      <AvatarImage
        src="https://avatars.githubusercontent.com/u/21325913?v=4"
        alt="@oopbest"
      />
      <AvatarFallback>SP</AvatarFallback>
    </Avatar>
  );
}
