"use client";

import { SellProduct, type State } from "@/app/actions";
import {
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { type JSONContent } from "@tiptap/react";
import { useEffect, useState } from "react";
import { useActionState } from "react";
import { toast } from "sonner";
import { SelectCategory } from "../SelectCategory";
import { Textarea } from "@/components/ui/textarea";
import dynamic from "next/dynamic";

const TipTapEditor = dynamic(() => import("../Editor").then(mod => mod.TipTapEditor), {
  ssr: false,
});


import { UploadDropzone } from "@/app/lib/uploadthing";
import { Submitbutton } from "../SubmitButton";

export function SellForm() {
  const initalState: State = { message: "", status: undefined };
  const [state, formAction] = useActionState(SellProduct, initalState);
  const [json, setJson] = useState<null | JSONContent>(null);
  const [images, setImages] = useState<null | string[]>(null);
  const [productFile, SetProductFile] = useState<null | string>(null);

  useEffect(() => {
    console.log(" the state is ", state);
    if (state.status === "success") {
      toast.success(state.message);
    } else if (state.status === "error") {

    
      console.log(" the state is ", state);
      toast.error(state.message);
    }
  }, [state]);


  return (
    <form action={formAction} >
      <CardHeader>
        <CardTitle className="text-xl">Sell your product with ease</CardTitle>
        <CardDescription >
          Please describe your product here in detail so that it can be sold
        </CardDescription>
      </CardHeader>
      <CardContent className="flex flex-col gap-y-10 mt-8">
        <div className="flex flex-col gap-y-2">
          <Label>Name</Label>
          <Input
            name="name"
            type="text"
            placeholder="Name of your Product"
            required
            minLength={3}
          />
          {state?.errors?.["name"]?.[0] && (
            <p className="text-destructive">{state?.errors?.["name"]?.[0]}</p>
          )}
        </div>
        <div className="flex flex-col gap-y-2">
          <Label>Category</Label>
          <SelectCategory />
          {state?.errors?.["category"]?.[0] && (
            <p className="text-destructive">
              {state?.errors?.["category"]?.[0]}
            </p>
          )}
        </div>

        <div className="flex flex-col gap-y-2">
          <Label>Price</Label>
          <Input
            placeholder="10000₹"
            type="number"
            name="price"
            required
            min={1}
          />
          {state?.errors?.["price"]?.[0] && (
            <p className="text-destructive">{state?.errors?.["price"]?.[0]}</p>
          )}
        </div>

        <div className="flex flex-col gap-y-2">
  <Label>Monetization</Label>
  <Select name="monetization" required>
    <SelectTrigger>
      <SelectValue placeholder="Select monetization method" />
    </SelectTrigger>
    <SelectContent>
      <SelectItem value="advertisement">Advertisement</SelectItem>
      <SelectItem value="sponsorship">Sponsorship</SelectItem>
      <SelectItem value="platform">Platform Share</SelectItem>
      <SelectItem value="none">None</SelectItem>
    </SelectContent>
  </Select>
  {state?.errors?.["monetization"]?.[0] && (
    <p className="text-destructive">
      {state?.errors?.["monetization"]?.[0]}
    </p>
  )}
</div>


{/* Revenue Fields in Same Line */}
<div className="flex gap-4">
  <div className="flex-1">
    <Label htmlFor="revenueValue" className="mb-2">Revenue Value</Label>
    <Input
      id="revenueValue"
      name="revenueValue"
      type="number"
      placeholder="Enter revenue value in INR"
      required
    />
  </div>

  <div className="flex-1">
    <Label htmlFor="revenueUnit"  className="mb-2">Revenue Unit</Label>
    <Select  name="revenueUnit" required>
      <SelectTrigger>
        <SelectValue placeholder="Select revenue unit" />
      </SelectTrigger>
      <SelectContent>
        <SelectItem value="monthly">Monthly</SelectItem>
        <SelectItem value="yearly">Yearly</SelectItem>
      </SelectContent>
    </Select>
  </div>
</div>



<div className="flex flex-col gap-y-2">
  <Label>Age of Product</Label>
  <div className="flex items-center gap-2">
    <Input
      type="number"
      name="productAgeValue"
      placeholder="e.g., 12"
      min={0}
      required
      className="w-2/3"
    />
    <Select name="productAgeUnit" required>
      <SelectTrigger className="w-full">
        <SelectValue placeholder="Unit" />
      </SelectTrigger>
      <SelectContent>
        <SelectItem value="months">Months</SelectItem>
        <SelectItem value="years">Years</SelectItem>
      </SelectContent>
    </Select>
  </div>
  {(state?.errors?.["productAgeValue"]?.[0] || state?.errors?.["productAgeUnit"]?.[0]) && (
    <p className="text-destructive">
      {state?.errors?.["productAgeValue"]?.[0] || state?.errors?.["productAgeUnit"]?.[0]}
    </p>
  )}
</div>



        <div className="flex flex-col gap-y-2">
          <Label>Small Summary</Label>
          <Textarea
            name="smallDescription"
            placeholder="Pleae describe your product shortly right here..."
            required
            minLength={10}
          />
          {state?.errors?.["smallDescription"]?.[0] && (
            <p className="text-destructive">
              {state?.errors?.["smallDescription"]?.[0]}
            </p>
          )}
        </div>

        <div className="flex flex-col gap-y-2">
          <input
            type="hidden"
            name="description"
            value={JSON.stringify(json)}
          />
          <Label>Description</Label>
          <TipTapEditor json={json} setJson={setJson} />
          {state?.errors?.["description"]?.[0] && (
            <p className="text-destructive">
              {state?.errors?.["description"]?.[0]}
            </p>
          )}
        </div>

        <div className="flex flex-col gap-y-2">
          <input type="hidden" name="images" value={JSON.stringify(images)} />
          <Label>Product Images</Label>
          <UploadDropzone
            endpoint="imageUploader"
            onClientUploadComplete={(res) => {
              setImages(res.map((item) => item.url));
              toast.success("Your images have been uploaded");
            }}
            onUploadError={(error: Error) => {
              toast.error("Something went wrong, try again");
              console.log(" the error is ", error);
            }}
            className="cursor-pointer"
          />
          {state?.errors?.["images"]?.[0] && (
            <p className="text-destructive">{state?.errors?.["images"]?.[0]}</p>
          )}
        </div>

        <div className="flex flex-col gap-y-2">
          <input type="hidden" name="productFile" value={productFile ?? ""} />
          <Label>Product File</Label>
          <UploadDropzone
            onClientUploadComplete={(res) => {
              SetProductFile(res[0].url);
              toast.success("Your Product file has been uplaoded!");
            }}
            endpoint="productFileUpload"
            onUploadError={(error: Error) => {
              toast.error("Something went wrong, try again");
              console.log(" the error is ", error);
            }}
            className="cursor-pointer"
          />
          {/* {state?.errors?.["productFile"]?.[0] && (
            <p className="text-destructive">
              {state?.errors?.["productFile"]?.[0]}
            </p>
          )} */}
        </div>
      </CardContent>
      <CardFooter className="mt-5">
        <Submitbutton title="Create your Product" />
      </CardFooter>
    </form>
  );
}
