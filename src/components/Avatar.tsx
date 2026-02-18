import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { PERSONAL } from "@/data/constants";

export function AvatarDemo() {
  return (
    <Avatar>
      <AvatarImage
        src={PERSONAL.avatarUrl}
        alt={PERSONAL.name}
      />
      <AvatarFallback>{PERSONAL.initials}</AvatarFallback>
    </Avatar>
  );
}
