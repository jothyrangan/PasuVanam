import Image from "next/image";
import Link from "next/link";
import { cn } from "@/lib/utils";
import { ROUTES } from "@/lib/constants";
import logoImg from "@/components/Images/logo.jpeg";

export const Logo = ({ className, white = false }) => {
    return (
        <Link href={ROUTES.HOME} className={cn("flex items-center", className)}>
            <div className="relative h-12 w-32 md:h-16 md:w-40">
                <Image
                    src={logoImg}
                    alt="Maayad A2 Gir Milk"
                    fill
                    className="object-contain"
                    priority
                />
            </div>
        </Link>
    );
};
