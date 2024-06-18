import StreamVideoProvider from "@/providers/StreamClientProvider";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Yoom",
  description: "Video conferencing made easy",
  icons: {
    icon: "/icons/logo.svg",
  },
};

export default function layout({ children }: { children: React.ReactNode }) {
  return (
    <main>
      <StreamVideoProvider>
        {children}
      </StreamVideoProvider>
    </main>
  );
}
