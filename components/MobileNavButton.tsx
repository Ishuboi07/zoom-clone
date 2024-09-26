import { cn } from "@/lib/utils";
import Image from "next/image";
import Link from "next/link";
import React from "react";

export default function MobileNavButton({
  route,
  label,
  imgUrl,
  isActive,
}: {
  route: string;
  label: string;
  imgUrl: string;
  isActive: boolean;
}) {
  return (
    <div>
      <Link
        href={route}
        key={label}
        className={cn(
          "flex gap-4 items-center p-4 rounded-lg w-full max-w-50",
          { "bg-blue-1": isActive }
        )}
      >
        <Image src={imgUrl} width={20} height={20} alt={label} />
        <p className="font-semibold ">{label}</p>
      </Link>
    </div>
  );
}
