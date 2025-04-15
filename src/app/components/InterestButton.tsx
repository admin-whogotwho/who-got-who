'use client';

import { sendInterestEmail } from "../actions";
import { Button } from "@/components/ui/button";
import { useTransition } from "react";
import { toast } from "sonner"; // or your own toast

export function InterestButton({ sellerEmail, productName }: { sellerEmail: string; productName: string }) {
  const [isPending, startTransition] = useTransition();

  const handleClick = () => {
    startTransition(async () => {
      try {
        await sendInterestEmail({ sellerEmail, productName });
        toast.success("Email sent to seller and you!");
      } catch (err) {
        toast.error("Could not send interest email. Are you logged in?");
        console.log(err);
      }
    });
  };

  return (
    <Button
      variant="outline"
      onClick={handleClick}
      disabled={isPending}
      className="mt-3 w-full cursor-pointer"
    >
      {isPending ? "Sending..." : "I am interested in Buying"}
    </Button>
  );
}
