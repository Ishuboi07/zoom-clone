import { SignIn } from "@clerk/nextjs";
import { ChevronLeft } from "lucide-react";
import Link from "next/link";

export default function SignInPage() {
  return (
    <main className="flex flex-col h-screen w-full items-center justify-center">
      <div className="text-white w-[400px] flex bg-[#1B1E2C] mb-[-15px] py-4 rounded-xl">
        <Link
          href="https://hangout.ishaanagarwal.xyz/"
          className="flex mx-4 text-[#0B7AF9] text-xs items-center"
        >
          <ChevronLeft /> Open Chat
        </Link>
      </div>
      <div className="">
        <SignIn />
      </div>
    </main>
  );
}
