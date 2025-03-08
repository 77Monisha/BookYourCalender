import Link from "next/link";
import logo from "@/public/icons/tick.png";
import Image from "next/image";
import { Button } from "./ui/button";
import { PenBox } from "lucide-react";

export const Header = () => {
  return (
    <nav className="container mx-auto px-8 py-2 flex justify-between items-center shadow-md border-b-2">
      <Link href="/">
        <Image src={logo} alt="Logo" width={40} height={40} />
      </Link>

      <div className="flex flex-row items-center gap-2 cursor-pointer">
        <Link href="/events?create=true">
          <Button>
            <PenBox />
            Create an Event
          </Button>
        </Link>
        <Link href="/login">
          <Button variant="outline">Login</Button>
        </Link>
      </div>
    </nav>
  );
};
