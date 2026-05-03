import Image from "next/image";
import Link from "next/link";
import { cn } from "@/lib/utils";
import { ROUTES } from "@/lib/constants";
import logoImg from "@/components/Images/pasuvanamlogo.png";

export const Logo = ({ className }) => {
  return (
    <Link href={ROUTES.HOME} className={cn("flex items-center", className)}>
      <div className="relative h-12 w-32 md:h-16 md:w-40 overflow-visible">
        
        <Image
          src={logoImg}
          alt="Pasuvanam Ghee"
          fill
          priority
          className="object-contain scale-125 md:scale-150 origin-left"
        />

      </div>
    </Link>
  );
};