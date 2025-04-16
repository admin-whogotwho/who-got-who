import { notFound } from "next/navigation";
import prisma from "../lib/db";
import { LoadingProductCard, ProductCard } from "./ProductCard";
import Link from "next/link";
import { Suspense } from "react";
import { Skeleton } from "@/components/ui/skeleton";

interface iAppProps {
  category: "newest" |"saas" | "amazon" | "youtube" | "instagram" | "mobileapps" | "domains" | "others";
}

async function getData({ category }: iAppProps) {
    switch (category) {
      case "newest": {
        const data = await prisma.product.findMany({
          select: {
            price: true,
            name: true,
            smallDescription: true,
            id: true,
            images: true,
          },
          orderBy: {
            createdAt: "desc",
          },
          take: 3,
        });
  
        return {
          data: data,
          title: "Newest Products",
          link: "/products",
        };
      }
      case "saas": {
        const data = await prisma.product.findMany({
          where: {
            category: "saas",
          },
          select: {
            price: true,
            name: true,
            smallDescription: true,
            id: true,
            images: true,
          },
          take: 3,
        });
  
        return {
          data: data,
          title: "SAAS Products",
          link: "/products",
        };
      }
      case "amazon": {
        const data = await prisma.product.findMany({
          where: {
            category: "amazon",
          },
          select: {
            id: true,
            name: true,
            price: true,
            smallDescription: true,
            images: true,
          },
          take: 3,
        });
  
        return {
          title: "Amazon Accounts",
          data: data,
          link: "/products",
        };
      }
      case "youtube": {
        const data = await prisma.product.findMany({
          where: {
            category: "youtube",
          },
          select: {
            id: true,
            name: true,
            price: true,
            smallDescription: true,
            images: true,
          },
          take: 3,
        });
  
        return {
          title: "Youtube Channels",
          data: data,
          link: "/products",
        };
      }
      case "instagram": {
        const data = await prisma.product.findMany({
          where: {
            category: "instagram",
          },
          select: {
            id: true,
            name: true,
            price: true,
            smallDescription: true,
            images: true,
          },
          take: 3,
        });
  
        return {
          title: "Instagram Accounts",
          data: data,
          link: "/products",
        };
      }
      case "mobileapps": {
        const data = await prisma.product.findMany({
          where: {
            category: "mobileapps",
          },
          select: {
            id: true,
            name: true,
            price: true,
            smallDescription: true,
            images: true,
          },
          take: 3,
        });
  
        return {
          title: "Mobile Apps",
          data: data,
          link: "/products",
        };
      }
      case "domains": {
        const data = await prisma.product.findMany({
          where: {
            category: "domains",
          },
          select: {
            id: true,
            name: true,
            price: true,
            smallDescription: true,
            images: true,
          },
          take: 3,
        });
  
        return {
          title: "Domains",
          data: data,
          link: "/products",
        };
      }
      case "others": {
        const data = await prisma.product.findMany({
          where: {
            category: "others",
          },
          select: {
            id: true,
            name: true,
            price: true,
            smallDescription: true,
            images: true,
          },
          take: 3,
        });
  
        return {
          title: "Others",
          data: data,
          link: "/products",
        };
      }
      default: {
        return notFound();
      }
    }
  }

export function ProductRow({ category }: iAppProps) {
  return (
    <section className="mt-12">
      <Suspense fallback={<LoadingState />}>
        <LoadRows category={category} />
      </Suspense>
    </section>
  );
}

async function LoadRows({ category }: iAppProps) {
  const data = await getData({ category: category });
   
  return (
    <>
      <div className="md:flex md:items-center md:justify-between">
        <h2 className="text-2xl font-extrabold tracking-tighter ">
          {data.title}
        </h2>
        <Link
          href={data.link}
          className="text-sm hidden font-medium text-primary hover:text-primary/90 md:block"
        >
          All Products <span>&rarr;</span>
        </Link>
      </div>

      <div className="grid gird-cols-1 lg:grid-cols-3 sm:grid-cols-2 mt-4 gap-10">
        {data.data?.map((product) => (
          <ProductCard
            images={product.images}
            key={product.id}
            id={product.id}
            name={product.name}
            price={product.price}
            smallDescription={product.smallDescription}
          />
        ))}
      </div>
    </>
  );
}

function LoadingState() {
  return (
    <div>
      <Skeleton className="h-8 w-56" />
      <div className="grid grid-cols-1 sm:grid-cols-2 mt-4 gap-10 lg:grid-cols-3">
        <LoadingProductCard />
        <LoadingProductCard />
        <LoadingProductCard />
      </div>
    </div>
  );
}
