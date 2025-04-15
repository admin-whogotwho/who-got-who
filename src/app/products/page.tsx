
import prisma from "@/app/lib/db";
import { unstable_noStore as noStore } from "next/cache";
import { ProductSearchBar } from "../components/ProductSearchBar";

async function getData() {
  const data = await prisma.product.findMany({
    select: {
      id: true,
      images: true,
      smallDescription: true,
      name: true,
      price: true,
      category: true,
    },
  });

  return data;
}

export default async function ProductsPage() {
  noStore();
  const data = await getData();
  return (
    <section className="max-w-7xl mx-auto px-4 md:px-8 ">
       <ProductSearchBar  products={data} />
      {/* <div className="grid grid-cols-1 lg:grid-cols-3 sm:grid-cols-2 gap-10 mt-4">
        {data.map((product) => (
          <ProductCard
            key={product.id}
            images={product.images}
            price={product.price}
            name={product.name}
            id={product.id}
            smallDescription={product.smallDescription}
          />
        ))}
      </div> */}
    </section>
  );
}
