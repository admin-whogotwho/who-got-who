"use client";

import { useTransition } from "react";
import { toast } from "sonner"; 
import { contactAdminAboutBuying } from "../actions"; 
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { BadgeCheck, Handshake, ShieldCheck, DollarSign } from "lucide-react";

export default function AssistedBuyingPage() {

  const [isPending, startTransition] = useTransition();

  const handleContactClick = () => {
    startTransition(async () => {
      const res = await contactAdminAboutBuying();
      if (res.status === "error") {
        toast.error("Please login or register first.");
      } else {
        toast.success("We'll reach out to you shortly!");
      }
    });
  };
  return (
    <div className="max-w-4xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
      <div className="text-center mb-10">
        <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl">
          Assisted Buying Service
        </h1>
        <p className="mt-4 text-lg text-muted-foreground max-w-xl mx-auto">
          Let us handle the complex stuff. We verify revenue, handle transfers, and act as a trusted middleman — all for a small fee.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <Card className="shadow-md">
          <CardContent className="p-6">
            <div className="flex items-center gap-4 mb-4">
              <ShieldCheck className="w-6 h-6 text-green-600" />
              <h2 className="text-xl font-semibold">Verified Revenue</h2>
            </div>
            <p className="text-muted-foreground">
              Our team will verify the revenue and performance metrics shared by the seller so that you can invest with confidence.
            </p>
          </CardContent>
        </Card>

        <Card className="shadow-md">
          <CardContent className="p-6">
            <div className="flex items-center gap-4 mb-4">
              <Handshake className="w-6 h-6 text-blue-600" />
              <h2 className="text-xl font-semibold">Secure Handover</h2>
            </div>
            <p className="text-muted-foreground">
              We manage the handover process, ensuring all credentials, assets, and materials are securely transferred.
            </p>
          </CardContent>
        </Card>

        <Card className="shadow-md">
          <CardContent className="p-6">
            <div className="flex items-center gap-4 mb-4">
              <BadgeCheck className="w-6 h-6 text-yellow-600" />
              <h2 className="text-xl font-semibold">Middleman Guarantee</h2>
            </div>
            <p className="text-muted-foreground">
              We act as a neutral middleman to protect both the buyer and seller, reducing risks on both sides.
            </p>
          </CardContent>
        </Card>

        <Card className="shadow-md">
          <CardContent className="p-6">
            <div className="flex items-center gap-4 mb-4">
              <DollarSign className="w-6 h-6 text-purple-600" />
              <h2 className="text-xl font-semibold">Only 2% Fee</h2>
            </div>
            <p className="text-muted-foreground">
              This premium service is available at just 2% of the product price — transparency and safety at minimal cost.
            </p>
          </CardContent>
        </Card>
      </div>

      <div className="mt-10 flex justify-center">
        <Button
          onClick={handleContactClick}
          disabled={isPending}
          className="px-8 py-4 text-lg cursor-pointer"
        >
          {isPending ? "Sending..." : "Contact Us"}
        </Button>
      </div>

    </div>
  );
}
