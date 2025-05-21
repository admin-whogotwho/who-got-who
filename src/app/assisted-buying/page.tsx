"use client";
import { Button } from '@/components/ui/button';
import { useTransition } from "react";
import { toast } from "sonner";
import { contactAdminAboutBuying } from "../actions";

import { Card, CardContent } from "@/components/ui/card";
import { BadgeCheck, Handshake, ShieldCheck, DollarSign, LifeBuoy, Mail } from "lucide-react"; // Added LifeBuoy and Mail icons

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
      {/* Enhanced Hero Section */}
      <div className="text-center mb-10 pt-8 pb-6 bg-gradient-to-b from-blue-50 to-white rounded-lg shadow-sm"> {/* Added subtle gradient background and shadow */}
        <LifeBuoy className="w-14 h-14 mx-auto mb-5 text-indigo-600 animate-bounce-slow" /> {/* Example icon with a very subtle bounce animation */}
        <h1 className="text-4xl font-extrabold tracking-tight text-gray-900 sm:text-5xl lg:text-6xl">
          Assisted Buying Service
        </h1>
        <p className="mt-4 text-xl text-gray-700 max-w-2xl mx-auto leading-relaxed">
          Let us handle the complex stuff. We **verify revenue**, handle **secure transfers**, and act as a **trusted middleman** — all for a <strong className="text-green-600">minimal fee</strong>.
        </p>
      </div>

      {/* Dynamic Card Presentation */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <Card className="shadow-md transition-all duration-300 hover:shadow-lg hover:-translate-y-1"> {/* Added hover effects */}
          <CardContent className="p-6">
            <div className="flex items-center gap-4 mb-4">
              <ShieldCheck className="w-7 h-7 text-green-600 transition-transform duration-200 group-hover:scale-110" /> {/* Larger icon with hover effect */}
              <h2 className="text-xl font-semibold">Verified Revenue</h2>
            </div>
            <p className="text-gray-600">
              Our team will verify the revenue and performance metrics shared by the seller so that you can invest with confidence.
            </p>
          </CardContent>
        </Card>

        <Card className="shadow-md transition-all duration-300 hover:shadow-lg hover:-translate-y-1"> {/* Added hover effects */}
          <CardContent className="p-6">
            <div className="flex items-center gap-4 mb-4">
              <Handshake className="w-7 h-7 text-blue-600 transition-transform duration-200 group-hover:scale-110" /> {/* Larger icon with hover effect */}
              <h2 className="text-xl font-semibold">Secure Handover</h2>
            </div>
            <p className="text-gray-600">
              We manage the handover process, ensuring all credentials, assets, and materials are securely transferred.
            </p>
          </CardContent>
        </Card>

        <Card className="shadow-md transition-all duration-300 hover:shadow-lg hover:-translate-y-1"> {/* Added hover effects */}
          <CardContent className="p-6">
            <div className="flex items-center gap-4 mb-4">
              <BadgeCheck className="w-7 h-7 text-yellow-600 transition-transform duration-200 group-hover:scale-110" /> {/* Larger icon with hover effect */}
              <h2 className="text-xl font-semibold">Middleman Guarantee</h2>
            </div>
            <p className="text-gray-600">
              We act as a neutral middleman to protect both the buyer and seller, reducing risks on both sides.
            </p>
          </CardContent>
        </Card>

        <Card className="shadow-md transition-all duration-300 hover:shadow-lg hover:-translate-y-1"> {/* Added hover effects */}
          <CardContent className="p-6">
            <div className="flex items-center gap-4 mb-4">
              <DollarSign className="w-7 h-7 text-purple-600 transition-transform duration-200 group-hover:scale-110" /> {/* Larger icon with hover effect */}
              <h2 className="text-xl font-semibold">Only 2% Fee</h2>
            </div>
            <p className="text-gray-600">
              This premium service is available at just 2% of the product price — transparency and safety at minimal cost.
            </p>
          </CardContent>
        </Card>
      </div>

      {/* Distinct Call-to-Action (CTA) Button */}
      <div className="mt-12 flex justify-center">
        <Button
          onClick={handleContactClick}
          disabled={isPending}
          className="px-10 py-5 text-xl font-semibold bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-full shadow-xl hover:from-blue-700 hover:to-purple-700 transition-all duration-300 focus:outline-none focus:ring-4 focus:ring-blue-300 relative group" // Enhanced styling with rounded-full and group class for icon animation
        >
          {isPending ? (
            <span className="flex items-center">
              <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
              </svg>
              Sending...
            </span>
          ) : (
            <span className="flex items-center">
              <Mail className="mr-2 h-5 w-5 transition-transform duration-200 group-hover:scale-110" /> {/* Icon with hover effect */}
              Contact Us
            </span>
          )}
        </Button>
      </div>
    </div>
  );
}
