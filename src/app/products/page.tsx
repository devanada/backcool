import type { Metadata } from "next";

import Card from "@/components/card";
import { ProductType } from "@/utils/types/product";

async function getProducts() {
  const res = await fetch("https://fakestoreapi.com/products");

  if (!res.ok) {
    throw new Error("Failed to fetch data");
  }

  return res.json();
}

export const metadata: Metadata = {
  title: "Products - Bookcool",
  description: "Browse our products and find the best for you",
};

export default async function Page() {
  const products: ProductType[] = await getProducts();

  return (
    <div className="container">
      <div className="grid grid-cols-2 gap-5 py-4 lg:grid-cols-4">
        {products.map((product) => {
          return (
            <Card
              key={product.id}
              id={product.id}
              title={product.title}
              price={product.price}
              image={product.image}
              rating={product.rating}
            />
          );
        })}
      </div>
    </div>
  );
}
