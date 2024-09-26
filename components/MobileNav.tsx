"use client";
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetTrigger,
} from "@/components/ui/sheet";
import { sidebarLinks } from "@/constants";
import { cn } from "@/lib/utils";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import MobileNavButton from "./MobileNavButton";

export default function MobileNav() {
  const pathname = usePathname();
  return (
    <section className="w-full max-w-[264px]">
      <Sheet>
        <SheetTrigger asChild>
          <Image
            src="/icons/hamburger.svg"
            width={36}
            height={36}
            alt="Menu"
            className="cursor-pointer sm:hidden"
          />
        </SheetTrigger>
        <SheetContent className="border-none bg-dark-1" side="left">
          <Link href="/" className="flex-center gap-1">
            <Image
              src="/icons/logo.svg"
              width={32}
              height={32}
              alt="Yoom logo"
              className="max-sm:size-10"
            />
            <p className="text-[26px] font-extrabold text-white">Yoom</p>
          </Link>
          <div className="flex h-[calc(100vh-72px)] flex-col justify-between overflow-y-auto">
            <SheetClose asChild>
              <section className="flex h-full flex-col gap-6 pt-16 text-white">
                {sidebarLinks.map((link) => {
                  const isActive =
                    pathname === link.route || pathname === link.route + "/";
                  return (
                    <SheetClose asChild key={link.label}>
                      <MobileNavButton {...link} isActive={isActive} />
                    </SheetClose>
                  );
                })}
                <MobileNavButton
                  route={process.env.NEXT_PUBLIC_HANGOUT_URL!}
                  label="Hangout"
                  imgUrl="/icons/message-square.svg"
                  isActive={pathname === "/hangout"}
                />
              </section>
            </SheetClose>
          </div>
        </SheetContent>
      </Sheet>
    </section>
  );
}
