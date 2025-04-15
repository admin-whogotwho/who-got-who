'use client'
import { Button } from "@/components/ui/button";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { Skeleton } from "@/components/ui/skeleton";
import Image from "next/image";

import { incrementProductView , isUserAuthenticated } from "../actions";
import { useRouter } from "next/navigation";

import { toast } from "sonner";

interface iAppProps {
  images: string[];
  name: string;
  price: number;
  smallDescription: string;
  id: string;
}

export function ProductCard({
  images,
  id,
  price,
  smallDescription,
  name,
}: iAppProps) {

  const router = useRouter()
  const bgColor = `https://avatar.vercel.sh/${encodeURIComponent(id)}`


  const handleLearnMore = async () => {
    await incrementProductView(id); 
    const isAuth = await isUserAuthenticated();

    if(isAuth){
      router.push(`/product/${id}`);
      
    }
    else{
      toast.error("You must be logged in to view this page");
    }
  };
  return (
    <div className="rounded-lg">
      <Carousel className="w-full mx-auto">
        <CarouselContent>
          {images.map((item, index) => (
            <CarouselItem key={index}>
              <div className="relative h-[280px] rounded-lg "
               style={{
                backgroundImage: `url(${bgColor})`,
                backgroundSize: 'cover',
                backgroundPosition: 'center'
              }}
               >
               <div className="w-full h-full flex items-center justify-center">
               <Image
                  alt="Product image"
                  src={item}
                  width={400}
                  height={600}
                  className=" static h-full w-full  max-h-[80%] max-w-[80%] rounded-lg"
                  priority
                />
                </div>
               
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious className="ml-16 cursor-pointer" />
        <CarouselNext className="mr-16 cursor-pointer" />
      </Carousel>

      <div className="flex justify-between items-center mt-2">
        <h1 className="font-semibold text-xl">{name}</h1>
        <h3 className="inline-flex items-center rounded-md bg-primary/10 px-2 py-1 text-xs font-medium text-primary ring-1 ring-inset  ring-primary/10">
        ₹{price}
        </h3>
      </div>

      <p className="text-gray-600 line-clamp-2 text-sm mt-2">
        {smallDescription}
      </p>

      <Button  onClick={handleLearnMore} className="w-full mt-5 cursor-pointer">
        Learn More!
      </Button>
    </div>
  );
}

export function LoadingProductCard() {
  return (
    <div className="flex flex-col">
      <Skeleton className="w-full h-[230px]" />
      <div className="flex flex-col mt-2 gap-y-2">
        <Skeleton className="h-4 w-full" />
        <Skeleton className="w-full h-6" />
      </div>

      <Skeleton className="w-full h-10 mt-5" />
    </div>
  );
}
