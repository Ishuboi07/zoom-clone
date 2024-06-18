"use client";
import { Button } from "@/components/ui/button";
import { useToast } from "@/components/ui/use-toast";
import { useGetCallById } from "@/hooks/useGetCallById";
import { useUser } from "@clerk/nextjs";
import { useStreamVideoClient } from "@stream-io/video-react-sdk";
import { useRouter } from "next/navigation";

const Table = ({
  title,
  description,
}: {
  title: string;
  description: string;
}) => (
  <div className="flex flex-col gap-2 xl:flex-row">
    <h2 className="text-base font-medium text-sky-1 lg:text-xl xl:min-w-32">
      {title}
    </h2>
    <p className="truncate text-sm font-bold max-sm:max-w-[320px] lg:text-xl">
      {description}
    </p>
  </div>
);

export default function Room() {
  const { toast } = useToast();
  const { user } = useUser();
  const client = useStreamVideoClient();
  const router = useRouter();
  const meetingId = user?.id;
  const meetingLink = `${process.env.NEXT_PUBLIC_BASE_URL}/meeting/${meetingId}?personal=true`;
  const { call } = useGetCallById(meetingId!);
  const startRoom = async () => {
    if (!client || !user) {
      return;
    }

    if (!call) {
      const newCall = client.call("default", meetingId!);
      await newCall.getOrCreate({
        data: {
          starts_at: new Date().toISOString(),
        },
      });
    }
    router.push(`/meeting/${meetingId}?personal=true`);
  };
  return (
    <section className="flex size-full flex-col gap-10 text-white">
      <h1 className="text-3xl font-bold">Personal room</h1>
      <div className="flex w-full flex-col gap-8 xl:max-w-[900px]">
        <Table title="Topic" description={`${user?.username}'s meeting room`} />
        <Table title="Meeting ID" description={meetingId!} />
        <Table title="Meeting Link" description={meetingLink} />
      </div>
      <div className="flex gap-5">
        <Button className="bg-blue-1" onClick={startRoom}>
          Start Meeting
        </Button>
        <Button
          className="bg-dark-3"
          onClick={() => {
            navigator.clipboard.writeText(meetingLink);
            toast({
              title: "Link Copied",
            });
          }}
        >
          Copy Meeting Link
        </Button>
      </div>
    </section>
  );
}
